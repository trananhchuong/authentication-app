import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import HomeComponent from "../components/home/HomeComponent";
import { AppContext } from "../Context/AppProvider";
import { LayoutLoadingStyled } from ".";
import IconLoading from "../components/iconLoading/IconLoading";
import { useRouter } from "next/router";

HomePage.propTypes = {};

function HomePage(props) {
  const { userInfo, auth, handleLogout, isLoadingGlobal } =
    useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLoadingGlobal && !auth) {
      router.push("/login");
    }
  }, [isLoadingGlobal, auth]);

  if (isLoadingGlobal) {
    return (
      <LayoutLoadingStyled>
        <IconLoading />
      </LayoutLoadingStyled>
    );
  }

  return <HomeComponent logout={handleLogout} userInfo={userInfo} />;
}

export default HomePage;
