import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";

const HomeComponentStyled = styled.div`
  nav {
    width: 100vw;
    margin-top: 0.7rem;
  }
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: flex-end;
  }
  li {
    display: inline-block;
    margin-right: 2rem;
  }

  .main-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 350px;
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .sub--main-title {
    font-family: "Lora", serif;
    font-weight: 400;
    font-size: 1.1rem;
    text-transform: uppercase;
    text-align: center;
  }
  .main-title {
    font-weight: 900;
    font-size: 3rem;
    text-align: center;
    line-height: 4rem;
  }
  .description {
    text-align: center;
    line-height: 1.5rem;
  }

  .logout-button {
    cursor: pointer;
  }

  /* Responsivness */

  @media only screen and (max-width: 552px) {
    .main-container {
      width: 80%;
    }
  }
  @media only screen and (max-width: 552px) {
    .main-container {
      width: 100%;
    }
  }
  @media only screen and (max-width: 320px) {
    html {
      font-size: 15px;
    }
    .main-container {
      width: 100%;
    }
  }
`;

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
