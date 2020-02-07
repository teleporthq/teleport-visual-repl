import { NextPage } from "next";
import "../utils/UIDLToHtml";
import { useState } from "react";
import SplitEditor from "../components/SplitEditor";
import UIDLtoHTMLComponent from "../components/UIDLtoHTMLComponent";


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
    <div className="mainContainer">
      <SplitEditor onChange={handleChange} uidl={uidl} isHidden={isHidden} />
      <button className="hideButton" id="hide" onClick = {() => handleClick()}>{isHidden ? <span>></span> : <span>&lt;</span>}</button>
      <UIDLtoHTMLComponent uidl={uidl} />
      <style jsx>{`
        .mainContainer {
          display: flex;
          height: 100vh;
          width: 100vw;
        }

        .hideButton {
          postion: relative;
          width: 2%;
        }
      `}</style>
    </div>
  );
};

export default Home;
