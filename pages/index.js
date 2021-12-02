import { promises as fs } from "fs";
import glob from "fast-glob";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import components from "../components/mdx-components";
import Layout from "../components/Layout";

const contentGlob = "mdx/index.mdx";

export async function getStaticProps() {
  const [indexMdxFile] = glob.sync(contentGlob);
  const mdxSource = await fs.readFile(indexMdxFile);
  const mdx = await serialize(mdxSource);
  return { props: { mdx } };
}

export default function Home({ mdx }) {
  return (
    <Layout>
      <MDXRemote {...mdx} components={components} />
    </Layout>
  );
}
