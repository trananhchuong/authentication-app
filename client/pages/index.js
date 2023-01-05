import { useContext } from "react";
import styled from "styled-components";
import IndexPage from "../components/home/IndexPage";
import IconLoading from "../components/iconLoading/IconLoading.js";
import { AppContext } from "../Context/AppProvider";

export const LayoutLoadingStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const { isLoadingGlobal } = useContext(AppContext);

  if (isLoadingGlobal) {
    return (
      <LayoutLoadingStyled>
        <IconLoading />
      </LayoutLoadingStyled>
    );
  }

  return <IndexPage />;
}
