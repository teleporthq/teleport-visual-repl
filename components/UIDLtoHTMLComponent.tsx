import React, { useEffect, useRef } from "react";
import UIDLToHtml from "../utils/UIDLToHtml";
import UIDLParser from "../utils/UIDLParser";
import StateAndPropsToValues from "../utils/StateAndPropsToValues";

export default function UIDLtoHTMLComponent({ uidl }): any {
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

    const UIDLObject = jsonValidity.value;

    const parsedUIDL = UIDLParser(JSON.parse(JSON.stringify(UIDLObject)));
    const stateAndPropsValues = StateAndPropsToValues(parsedUIDL);

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
      <div className="htmlWrapper">
        <div
          id="htmlContainer"
          className="htmlContainer"
          ref={htmlContainer}
        ></div>
      </div>

      <style jsx>{`
        .htmlContainer {
          height: 95%;
          width: 95%;
          border-radius: 10px;
          overflow: hidden;
          padding: 10px;
          position: relative;
          border: 1px solid #00000010;
          margin-left: 10px;
        }
        .htmlWrapper {
          position: relative;
          height: 100%;
          width: 100%;
        }
        .container {
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
