import "../styles/globals.css";
import { AppProvider } from "../Context/AppProvider.js";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </CookiesProvider>
  );
}

export default MyApp;
