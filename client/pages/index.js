import { useEffect, useState } from "react";
import authenticationApi from "../api/authenticationApi.js";
import Layout from "../components/layouts/Layout.js";

export default function Home() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    getHasAuthentication();
  }, []);

  const getHasAuthentication = async () => {
    try {
      const response = await authenticationApi.getUserInfo();

      console.log(
        "🚀 ~ file: index.js:19 ~ getHasAuthentication ~ response",
        response
      );

      // const content = await response.json();

      // setMessage(`Hi ${content.name}`);
      // setAuth(true);

      // const userToken = getCookie("token");

      // const response = await fetch("http://localhost:8000/api/user");

      // const content = await response.json();
      // console.log("🚀 ~ file: index.js:36 ~ getHasAuthentication ~ content", content)

      if (false) {
        setMessage(`Hi Chuong`);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (e) {
      console.log("🚀 ~ file: index.js:40 ~ getHasAuthentication ~ e", e)
      setAuth(false);
    }
  };

  return <Layout auth={auth} />;
}
