import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import UIDLtoHTMLComponent from "../components/UIDLtoHTMLComponent";
import SplitEditor from "../components/SplitEditor";

export default function FlipWrapper() {
  
  const [isHidden, setIsHidden] = useState(false);
  const [uidl, setUidl] = useState("");

  const handleClick = () => {
    setIsHidden(!isHidden);
    if(isHidden){
      document.getElementById("hide").innerHTML = "<"
    } else {
      document.getElementById("hide").innerHTML = ">"
    }
  };
  const onChange = (newValue) => {
    setUidl(newValue);
  }

  return (
    <div style={{display:"flex", height: "100vh", width: "100vh"}}>
      <SplitEditor onChange={onChange} uidl={uidl}>
      </SplitEditor>
      <button id="hide" onClick = {() => handleClick()}>></button>
      <UIDLtoHTMLComponent uidl={uidl}>
      </UIDLtoHTMLComponent>
    </div>
  );
}
