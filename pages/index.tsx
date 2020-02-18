import { NextPage } from "next";
import "../utils/UIDLToHtml";
import { useState, useEffect } from "react";
import SplitEditor from "../components/SplitEditor";
import UIDLtoHTMLComponent from "../components/UIDLtoHTMLComponent";
import NavBar from "../components/NavBar";

const Home = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [uidl, setUidl] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  const handleChange = newValue => {
    setUidl(newValue);
  };
  useEffect(() => {
    if (localStorage.getItem("access-token")) {
      setIsLoggedIn(true);
    }
  }, []);
  console.log("LoggedIn ? :", isLoggedIn);
  return (
    <div className="main">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="mainContainer">
        <SplitEditor
          onChange={handleChange}
          uidl={uidl}
          isHidden={isHidden}
          setUidl={setUidl}
        />
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

// Home.getInitialProps = async ctx => {
//   const res = await fetch("http://localhost:8080/authentication/login", {
//     method: "GET",
//     headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
//   });

//   const result = await res.json();
//   console.log(result);
// };

export default Home;
