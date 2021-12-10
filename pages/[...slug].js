import matter from "gray-matter";

import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeToc from "rehype-toc";
import rehypeSlugger from "rehype-slug";
import rehypeWrap from "rehype-wrap";

import components from "../components/mdx-components";
import Layout from "../components/Layout";

import { pageFilePaths, PAGES_PATH } from "../utils/mdxUtils";
import React from "react";

// TODO need to pick layout based on frontmatter.
export default function Page({ source, frontMatter }) {
  return (
    <Layout layout={frontMatter.layout}>
      <MDXRemote {...source} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const postFilePath = path.join(PAGES_PATH, `${slug.join("/")}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  if (!postFilePath) {
    console.warn("No MDX file found for slug");
  }

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        [rehypeWrap, { wrapper: "div.page-content" }],
        rehypeSlugger,
        [
          rehypeToc,
          {
            cssClasses: {
              toc: "page-outline", // Change the CSS class for the TOC
              link: "page-link", // Change the CSS class for links in the TOC
            },
          },
        ],
        // () => (tree) => console.log(JSON.stringify(tree, undefined, 2)),
      ],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = pageFilePaths.map((slug) => ({
    params: { slug: slug.split("/") },
  }));

  return {
    paths,
    fallback: false,
  };
}
