import "../styles/globals.css";
import { AppProvider } from "../Context/AppProvider.js";
import { CookiesProvider } from "react-cookie";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <CookiesProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
