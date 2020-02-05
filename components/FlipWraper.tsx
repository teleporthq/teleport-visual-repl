import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import UIDLtoHTMLComponent from "../components/UIDLtoHTMLComponent";
import SplitEditor from "../components/SplitEditor";

export default function FlipWrapper() {
  const [isHidden, setIsHidden] = useState(false);
  const [uidl, setUidl] = useState("");

  const handleClick = () => {
    setIsHidden(!isHidden);
    if (isHidden) {
      document.getElementById("hide").innerHTML = "<";
    } else {
      document.getElementById("hide").innerHTML = ">";
    }
  };

  const handleChange = newValue => {
    setUidl(newValue);
  };
  return (
    <div className="mainContainer">
      <SplitEditor onChange={handleChange} uidl={uidl} isHidden={isHidden} />
      <button className="hideButton" id="hide" onClick={() => handleClick()}>
        &lt;
      </button>
      <UIDLtoHTMLComponent uidl={uidl} />
      <style jsx>{`
        .mainContainer {
          display: flex;
          height: 100vh;
          width: 100vw;
          align-items: stretch;
        }

        .hideButton {
          width: 2%;
        }
      `}</style>
    </div>
  );
}
