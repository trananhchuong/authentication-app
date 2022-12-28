import { useEffect, useState } from "react";
import authenticationApi from "../api/authenticationApi.js";
import Layout from "../components/layouts/Layout.js";
import { AppProvider } from "../Context/AppProvider.js";

export default function Home() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}
