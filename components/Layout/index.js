import Head from "next/head";
import Navigation from "../Navigation";

const Layout = ({ children }) => (
  <div className="">
    <Head>
      <title>technomancy.dev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation />
    {/* <div className="hidden lg:block"> */}
    {/* <div><DesktopNav /></div> */}
    {/* </div> */}
    {/* <div className="md:hidden"> */}
    {/* <div><MobileNav /></div> */}
    {/* </div> */}
    <div className="">{children}</div>
    <footer>{/* <Footer /> */}</footer>
  </div>
);

export default Layout;
