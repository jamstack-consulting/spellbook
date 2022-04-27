import Head from "next/head";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { links, ctas, logo } from "../../navigation";
import config from "../../config";
import generateOpenGraphUrl from "../../utils/generate-open-graph-image-url";

const layouts = {
  "centered-column": ({ children }) => (
    <div
      className="content prose prose-xl prose-blue mx-auto my-5 px-6"
      children={children}
    />
  ),
  "two-column": ({ children }) => (
    <div
      className={
        "layout--two-column content prose prose-xl prose-blue mx-auto my-5 max-w-7xl px-6"
      }
      children={children}
    />
  ),
  default: (props) => (
    <div className={"no-page-outline m-auto max-w-7xl"} {...props} />
  ),
};

const Layout = ({ layout, children, frontmatter }) => {
  const layoutToDisplay = layouts[layout] || layouts.default;
  const imageURL = generateOpenGraphUrl({
    title: frontmatter.title,
  });

  return (
    <div>
      <Head>
        <title>
          {config.title} | {frontmatter.title}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={frontmatter.description} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imageURL} />
        <meta property="twitter:image" content={imageURL} />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Navigation links={links} ctas={ctas} logo={logo} />
      {layoutToDisplay({ children })}
      <Footer />
    </div>
  );
};

export default Layout;
