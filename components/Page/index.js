import { MDXRemote } from "next-mdx-remote";
import Layout from "../Layout";
import components from "../mdx-components";

export default function Page({ mdx, frontmatter }) {
  return (
    <Layout frontmatter={frontmatter} layout={frontmatter.layout}>
      <MDXRemote {...mdx} components={components} />
    </Layout>
  );
}
