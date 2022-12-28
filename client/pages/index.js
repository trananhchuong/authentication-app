import Layout from "../components/layouts/Layout.js";
import { AppProvider } from "../Context/AppProvider.js";
import { CookiesProvider } from "react-cookie";

export default function Home() {
  return (
    <CookiesProvider>
      <AppProvider>
        <Layout />
      </AppProvider>
    </CookiesProvider>
  );
}
