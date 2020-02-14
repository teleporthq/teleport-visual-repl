import { NextPage } from "next";
import "../utils/UIDLToHtml";
import { useState } from "react";
import SplitEditor from "../components/SplitEditor";
import UIDLtoHTMLComponent from "../components/UIDLtoHTMLComponent";
import NavBar from "../components/NavBar";


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
      <NavBar /> 
      <div className="mainContainer">
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
        .mainContainer {
          display: flex;
          height: 90vh;
          width: 100%;
          padding-top: 10px;
          padding-left: 3px;
          box-sizing: border-box;
        }
        .hideButton {
          postion: relative;
          height: 100%;
          margin: auto 4px;
          border: none;
          border-radius: 5px;
          width: 40px;
          padding: 0;
          background: #6a6a6a;
          color: #ffffff !important;
          transition: all 0.3s ease 0s;
          outline: none;
        }
        .hideButton:hover {
          font-weight: 700 !important;
          letter-spacing: 3px;
          background: #333;
          -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
          -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
          transition: all 0.3s ease 0s;
        }
      `}</style>
    </div>
  );
};

export default Home;
