// import { promises as fs } from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import components from "../components/mdx-components";
import Layout from "../components/Layout";

import { createFilePath } from "../utils/mdxUtils";

const contentGlob = "mdx/index.mdx";

export async function getStaticProps() {
  const mdxSource = await createFilePath(contentGlob);
  const { content, data } = matter(mdxSource);
  const mdx = await serialize(content);
  return { props: { mdx, data } };
}

export default function Home({ mdx, data }) {
  return (
    <Layout layout={data.layout}>
      <MDXRemote {...mdx} components={components} />
    </Layout>
  );
}
