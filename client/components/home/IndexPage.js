import { useRouter } from "next/router";
import React from "react";
import { HomeComponentStyled } from "./HomeStyled";

IndexPage.propTypes = {};

function IndexPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <HomeComponentStyled>
      <header>
        <nav>
          <ul>
            <li>
              <div onClick={handleLogin} className="logout-button">
                Login or Sign up
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div class="main-container">
          <h1 class="main-title">Design & development</h1>
          <p class="description">
            You are not logged in, please login to experience
          </p>
        </div>
      </main>
    </HomeComponentStyled>
  );
}

export default IndexPage;
