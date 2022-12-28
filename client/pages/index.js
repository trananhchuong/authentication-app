import { useContext } from "react";
import styled from "styled-components";
import HomeComponent from "../components/home/HomeComponent";
import IconLoading from "../components/iconLoading/IconLoading.js";
import { AppContext } from "../Context/AppProvider";

const LayoutLoadingStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const { userInfo, auth, handleLogout, isLoadingGlobal } =
    useContext(AppContext);

  if (isLoadingGlobal) {
    return (
      <LayoutLoadingStyled>
        <IconLoading />
      </LayoutLoadingStyled>
    );
  }

  return auth && <HomeComponent logout={handleLogout} userInfo={userInfo} />;
}
