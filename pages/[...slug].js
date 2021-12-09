import glob from "fast-glob";
import matter from "gray-matter";
import path from "path";
import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import components from "../components/mdx-components";
import Layout from "../components/Layout";
import { pageFilePaths, posts } from "../utils/mdxUtils";

const contentPath = "mdx/pages";
const contentGlob = `${contentPath}/**/*.mdx`;

// TODO need to pick layout based on frontmatter.
export default function Page({ mdxSource, frontMatter }) {
  return (
    <Layout>
      <MDXRemote {...mdxSource} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const files = glob.sync(contentGlob);

  const pathRegex = new RegExp(`^${contentPath}/${path.join(...slug)}.mdx$`);
  const fullPath = files.find((file) => pathRegex.test(file));

  if (!fullPath) {
    console.warn("No MDX file found for slug");
  }
  debugger;
  console.log("wut", pageFilePaths);
  const mdxSource = await fs.readFile(fullPath);
  const { content, data } = matter(mdxSource);

  const mdx = await serialize(content);

  return {
    props: {
      mdxSource: mdx,
      frontMatter: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = pageFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug: slug.split("/") } }));

  return {
    paths,
    fallback: false,
  };
}
