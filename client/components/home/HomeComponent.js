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
          <h4 class="sub--main-title">Hi, {userInfo?.username}</h4>
          <h1 class="main-title">This is HOME PAGE</h1>
        </div>
      </main>
    </HomeComponentStyled>
  );
}

export default HomeComponent;
