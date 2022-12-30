import React from "react";
import { HomeComponentStyled } from "./HomeStyled";

HomeComponent.propTypes = {};

function HomeComponent({ logout, userInfo }) {
  return (
    <HomeComponentStyled>
      <header>
        <nav>
          <ul>
            <li>
              <div onClick={logout} className="logout-button">
                Logout
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div class="main-container">
          <h4 class="sub--main-title">Hello, {userInfo?.username}</h4>
          <h1 class="main-title">Design & development</h1>
          <p class="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </main>
    </HomeComponentStyled>
  );
}

export default HomeComponent;
