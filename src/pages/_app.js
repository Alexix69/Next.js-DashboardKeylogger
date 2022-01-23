import "../styles/globals.css";
import Head from "next/head";
import { AuthProvider } from "../contexts/auth";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/*<Head>*/}
      {/*  <title>Dashboard Keylogger</title>*/}
      {/*  <meta name="viewport" content="Dashboard Keylogger" />*/}
      {/*</Head>*/}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
