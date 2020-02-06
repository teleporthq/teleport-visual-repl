import React, { useEffect, useRef } from "react";
import UIDLToHtml from "../utils/UIDLToHtml";
import UIDLParser from "../utils/UIDLParser";
import StateAndPropsToValues from "../utils/StateAndPropsToValues";

export default function UIDLtoHTMLComponent({ uidl }): any {
  const htmlContainer = useRef(null);
  console.log(htmlContainer);

  useEffect(() => {
    let UIDLObject: unknown;
    try {
      UIDLObject = JSON.parse(uidl);
    } catch (e) {
      UIDLObject = "";
    }
    console.log(UIDLParser(JSON.parse(JSON.stringify(UIDLObject))));
    console.log(
      StateAndPropsToValues(UIDLParser(JSON.parse(JSON.stringify(UIDLObject))))
    );
    const { html, style } = UIDLToHtml(
      StateAndPropsToValues(UIDLParser(JSON.parse(JSON.stringify(UIDLObject))))
    );
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
          position: relative;
          height: 100%;
          width: 100%;
          margin: auto;
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
