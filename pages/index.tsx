import { NextPage } from "next";
import "../utils/UIDLToHtml";
import { useState } from "react";
import SplitEditor from "../components/SplitEditor";
import UIDLtoHTMLComponent from "../components/UIDLtoHTMLComponent";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home: NextPage<{ userAgent: string }> = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [uidl, setUidl] = useState("");

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  const handleChange = newValue => {
    setUidl(newValue);
  };
  return (
    <div className="main">
      <div className="nav-bar">
        <a href="https://teleporthq.io/"> <img  alt="logo" src='static/teleporthq-logo.png' /> </a>
        <div className="menu-items">
          <a href="https://docs.teleporthq.io/"> Official Docs</a>
          <a href="https://github.com/teleporthq/teleport-code-generators"> Contribute on GitHub! 
          </a>
        </div>
      </div>

    <div className="mainContainer" >
        <SplitEditor onChange={handleChange} uidl={uidl} isHidden={isHidden} />
        <button className="hideButton" id="hide" onClick={() => handleClick()}>
          {isHidden ? <span>></span> : <span>&lt;</span>}
        </button>
        <UIDLtoHTMLComponent uidl={uidl} />
    </div>

      <style jsx>{`
        .main {
          display: block;
          height: 100%;
          width: 100%;
          overflow: hidden;
          margin: 0;
        }
        .nav-bar {
          display:flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0.9rem 1.5rem;
          box-sizing: border-box;
          border-bottom: 1px solid #00000010;
        }
        .meniu-items{
          display: flex;
          align-items: center;
          font-size: 15px;
        }
        img{
          height: 2.2rem;
          vertical-align: middle;
        }
        a{
          padding: 0 10px;
          text-decoration: none;
          transition: color 0.2s;
          color: #2c3e50;
          font-size: 15px;
        }
        .mainContainer {
          display: flex;
          height: 90vh;
          width: 100%;
          padding-top: 10px;
          padding-left: 3px;
          box-sizing: border-box;
          justify-content: space-around;
        }
        .hideButton {
          postion: relative;
          height: 30%;
          margin-top: 16%;
          margin-left: 5px;
          width: 2%;
          padding: 0;
          background: #404040;
          color: #ffffff !important;
          border: none;
          border-radius: 6px;
          display: inline-block;
          transition: all 0.3s ease 0s;
        }
        .hideButton:hover{
          color: #404040 !important;
          font-weight: 700 !important;
          letter-spacing: 3px;
          background: none;
          -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
          -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
          transition: all 0.3s ease 0s;
        }
      `}</style>
    </div>
  );
};

export default Home;
