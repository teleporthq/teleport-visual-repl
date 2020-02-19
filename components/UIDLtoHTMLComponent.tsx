import React, { useState, useEffect, useRef } from "react";
import UIDLToHtml from "../utils/UIDLToHtml";
import UIDLParser from "../utils/UIDLParser";
import StateAndPropsToValues from "../utils/StateAndPropsToValues";

export default function UIDLtoHTMLComponent({
  uidl,
  componentName,
  setComponentName
}): any {
  const htmlContainer = useRef(null);

  useEffect(() => {
    if (!uidl) {
      htmlContainer.current.innerText = " Waiting for UIDL input...";
      return;
    }

    const jsonValidity = checkIfJsonIsValid(uidl);
    if (!jsonValidity.isValid) {
      htmlContainer.current.innerText = jsonValidity.message;
      return;
    }
    try {
      const UIDLObject = jsonValidity.value;

      const parsedUIDL = UIDLParser(JSON.parse(JSON.stringify(UIDLObject)));
      console.log("RESULT: ", parsedUIDL);

      const stateAndPropsValues = StateAndPropsToValues(parsedUIDL);
      console.log("FILTERED RESULT: ", stateAndPropsValues);
      setComponentName(parsedUIDL[parsedUIDL.length - 1].elementInfo["name"]);
      const { html, style } = UIDLToHtml(stateAndPropsValues);
      htmlContainer.current.innerHTML = html;

      if (document.getElementById("generatedElementStyle")) {
        document.getElementById("generatedElementStyle").innerHTML = style;
        return;
      }

      let sheet: HTMLStyleElement = document.createElement("style");
      sheet.innerHTML = style;
      sheet.id = "generatedElementStyle";
      document.body.appendChild(sheet);
    } catch (e) {
      htmlContainer.current.innerHTML = e.message;
    }
  }, [uidl]);

  const checkIfJsonIsValid = (jsonAsString: string) => {
    try {
      const parsedValue = JSON.parse(jsonAsString);
      return { isValid: true, value: parsedValue };
    } catch (error) {
      return { isValid: false, message: error.message };
    }
  };

  return (
    <div className="container">
      <p className="componentName">{componentName}</p>
      <div className="htmlWrapper">
        <div
          id="htmlContainer"
          className="htmlContainer"
          ref={htmlContainer}
        ></div>
      </div>

      <style jsx>{`
        .htmlContainer {
          height: 90%;
          width: 95%;
          border-radius: 10px;
          padding: 10px;
          position: relative;
          border: 1px solid #00000010;
          margin-left: 2px;
        }
        .htmlWrapper {
          position: relative;
          height: 100%;
          width: 100%;
        }
        .componentName {
          text-align: center;
          font-weight: bold;
          font-size: 20px;
        }
        .container {
          height: 100%;
          width: 100%;
          overflow: auto;
        }
      `}</style>
    </div>
  );
}
