import "tailwindcss/tailwind.css";

import "./global.scss";
import Head from "next/head";
import favicon from "../public/favicon.ico";
import "prismjs/themes/prism-tomorrow.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href={favicon.src} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
