import React from "react";
import ModalForm from "./Modal";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <a href="https://teleporthq.io/">
        {" "}
        <img alt="logo" src="static/teleporthq-logo.png" />{" "}
      </a>

      <ModalForm />
      
      <div className="menu-items">
        <a href="https://docs.teleporthq.io/">Official Docs</a>
        <a href="https://github.com/teleporthq/teleport-code-generators">
          Contribute <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
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
            font-size: 16px;
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;
