import glob from "fast-glob";
import matter from "gray-matter";
import path from "path";
import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import components from "../components/mdx-components";
import Layout from "../components/Layout";

const contentPath = "mdx/pages";
const contentGlob = `${contentPath}/**/*.mdx`;

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
  const files = glob.sync(contentGlob);

  const paths = files.map((file) => {
    const filename = file.replace(`${contentPath}/`, "");
    const slug = filename.replace(new RegExp(path.extname(file) + "$"), "");

    return {
      params: {
        slug: slug.split("/"),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
