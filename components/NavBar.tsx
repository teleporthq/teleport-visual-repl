import React, { useState, useEffect } from "react";
import ModalForm from "./Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const NavBar = ({ isLoggedIn, setIsLoggedIn, setUidl, setComponentName }) => {
  const [showModal, setshowModal] = useState(false);
  const [welcomeMessage, setwelcomeMessage] = useState("");

  const logMeOut = () => {
    localStorage.removeItem("access-token");
    setIsLoggedIn(false);
    setwelcomeMessage("");
    setUidl("");
    setComponentName("");
  };

  return (
    <div className="nav-bar">
      <a href="https://teleporthq.io/">
        {" "}
        <img alt="logo" src="static/teleporthq-logo.png" />{" "}
      </a>

      <div className="items">
        {welcomeMessage ? (
          <div className="welcome">{welcomeMessage}!</div>
        ) : null}
        <a href="https://docs.teleporthq.io/">Official Docs</a>
        <a href="https://github.com/teleporthq/teleport-code-generators">
          Contribute <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        {isLoggedIn ? (
          <div>
            <a onClick={logMeOut} style={{ color: "#822cec" }}>
              Log out
            </a>
          </div>
        ) : (
          <a onClick={() => setshowModal(true)} style={{ color: "#822cec" }}>
            Sign in
          </a>
        )}
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
          .nav-bar img {
            height: 2.2rem;
            vertical-align: middle;
          }
          .nav-bar a {
            padding: 0 10px;
            text-decoration: none;
            transition: color 0.2s;
            color: #2c3e50;
            text-decoration: none;
            font-size: 17px;
            cursor: pointer;
            outline: none;
            background-color: transparent;
            line-height: 1.5;
            font-feature-settings: "tnum";
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
              "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
              "Helvetica Neue", Helvetica, Arial, sans-serif,
              "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          }
          .items {
            display: flex;
            font-size: 16px;
            color: black;
          }
          .welcome {
            color: #822cec;
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;
