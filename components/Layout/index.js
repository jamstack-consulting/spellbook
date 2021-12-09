import Head from "next/head";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { links, ctas, logo } from "../../navigation";

const layouts = {
  "two-column": ({ children }) => (
    <div style={{ columnCount: 2 }} className="mx-2" children={children} />
  ),
};

const Layout = ({ children }) => (
  <div className="">
    <Head>
      <title>technomancy.dev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation links={links} ctas={ctas} logo={logo} />
    <div
      style={{ columnCount: 2, columnGap: "3rem" }}
      className="max-w-7xl mx-auto px-6"
    >
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
