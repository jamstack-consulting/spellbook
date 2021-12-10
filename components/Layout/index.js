import Head from "next/head";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { links, ctas, logo } from "../../navigation";
// import "./index.css";
const layouts = {
  "centered-column": ({ children }) => (
    <div
      className="content prose prose-xl prose-blue mx-auto px-6 my-5"
      children={children}
    />
  ),
  "two-column": ({ children }) => (
    <div
      // style={{ columnCount: 2, columnGap: "2rem" }}
      className="content prose prose-xl max-w-7xl prose-blue mx-auto px-6 my-5"
      children={children}
    />
  ),
  default: (props) => <div {...props} />,
};

const Layout = ({ layout, children }) => {
  const layoutToDisplay = layouts[layout] || layouts.default;
  return (
    <div className="">
      <Head>
        <title>technomancy.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation links={links} ctas={ctas} logo={logo} />
      <div>{layoutToDisplay({ children })}</div>
      <Footer />
    </div>
  );
};

export default Layout;
