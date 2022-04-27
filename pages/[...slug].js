import matter from "gray-matter";

import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlugger from "rehype-slug";
import rehypePrism from "rehype-prism-plus";
import remarkMdxToc from "remark-mdx-toc";

import { pageFilePaths, PAGES_PATH } from "../utils/mdxUtils";

import Page from "../components/Page";

export default Page;

export async function getStaticProps({ params: { slug } }) {
  const postFilePath = path.join(PAGES_PATH, `${slug.join("/")}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  console.log(content);
  if (!postFilePath) {
    console.warn("No MDX file found for slug");
  }

  // I could read the frontmatter and use it to decide if
  // remarkMdxToc should be included. I should probably
  // do this at some point.
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkMdxToc],
      rehypePlugins: [
        rehypeSlugger,
        [
          rehypePrism,
          {
            showLineNumbers: false,
          },
        ],
      ],
    },
  });

  return {
    props: {
      mdx: mdxSource,
      frontmatter: data,
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
