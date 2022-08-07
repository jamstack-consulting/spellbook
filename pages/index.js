import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkMdxToc from "remark-mdx-toc";
import rehypeSlugger from "rehype-slug";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import remarkEndWithCodeBlock from "remark-end-with-code-block";

import { createFilePath, pageFilePaths } from "../utils/mdxUtils";

import Page from "../components/Page";

const contentGlob = "mdx/index.mdx";

export default Page;

export async function getStaticProps() {
  const mdxSource = await createFilePath(contentGlob);
  const { content, data } = matter(mdxSource);

  // this code is to fetch the blog posts because they are
  // displayed on the home page.
  const postsRaw = await Promise.all(
    pageFilePaths
      .filter((path) => path.startsWith("posts/"))
      .map((path) =>
        createFilePath(`mdx/pages/${path}.mdx`).then((raw) => ({
          raw,
          slug: path,
        }))
      )
  );

  // this function adds the frontmatter and slug to an object to that some
  // component could like show the title and then link to it.
  const postsData = postsRaw.map((file) => {
    const { data } = matter(file.raw);
    return { ...data, slug: file.slug };
  });

  const mdx = await serialize(content, {
    // this allows mdx components to have access to the postsData.
    // so that a component can do what it wants.
    scope: { postsData },
    mdxOptions: {
      remarkPlugins: [
        () => remarkEndWithCodeBlock(mdxSource),
        remarkMdxToc,
        remarkGfm,
      ],
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
  return { props: { mdx, frontmatter: data } };
}

// test
