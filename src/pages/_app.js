import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dashboard Keylogger</title>
        <meta name="viewport" content="Dashboard Keylogger" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
