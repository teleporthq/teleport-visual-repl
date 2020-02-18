import React, { useState, useEffect } from "react";
import ModalForm from "./Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [showModal, setshowModal] = useState(false);
  const [welcomeMessage, setwelcomeMessage] = useState("");

  const logMeOut = () => {
    localStorage.removeItem("access-token");
    setIsLoggedIn(false);
    setwelcomeMessage("");
  };

  return (
    <div className="nav-bar">
      <a href="https://teleporthq.io/">
        {" "}
        <img alt="logo" src="static/teleporthq-logo.png" />{" "}
      </a>

      <div className="items">
        {isLoggedIn ? (
          <a onClick={logMeOut}>Log out</a>
        ) : (
          <a onClick={() => setshowModal(true)}>Sign in</a>
        )}
        <a href="https://docs.teleporthq.io/">Official Docs</a>
        <a href="https://github.com/teleporthq/teleport-code-generators">
          Contribute <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        {welcomeMessage ? <div>{welcomeMessage}</div> : null}
        <ModalForm
          setwelcomeMessage={setwelcomeMessage}
          showModal={showModal}
          setshowModal={setshowModal}
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>

      <style jsx>
        {`
          .nav-bar {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0.9rem 1.5rem;
            box-sizing: border-box;
            border-bottom: 1px solid #00000010;
          }
          img {
            height: 2.2rem;
            vertical-align: middle;
          }
          a {
            padding: 0 10px;
            text-decoration: none;
            transition: color 0.2s;
            color: #2c3e50;
            text-decoration: none;
            font-size: 16px;
          }
          .items {
            display: flex;
            font-size: 16px;
            color: black;
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;
