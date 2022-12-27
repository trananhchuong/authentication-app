import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout.js";

export default function Home() {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    getHasAuthentication();
  });

  const getHasAuthentication = async () => {
    try {
      // const response = await fetch("http://localhost:8000/api/user", {
      //   credentials: "include",
      // });

      // const content = await response.json();

      // setMessage(`Hi ${content.name}`);
      // setAuth(true);

      if (false) {
        setMessage(`Hi Chuong`);
        setAuth(true);
      } else {
        setMessage("You are not logged in");
        setAuth(false);
      }
    } catch (e) {
      setMessage("You are not logged in");
      setAuth(false);
    }
  };

  return <Layout auth={auth}>{message}</Layout>;
}
