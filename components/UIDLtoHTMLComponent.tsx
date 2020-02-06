import React, { useEffect } from "react";
import UIDLToHtml from "../utils/UIDLToHtml";
import UIDLParser from "../utils/UIDLParser";

export default function UIDLtoHTMLComponent(props): any {
  useEffect(() => {
    let UIDLObject: unknown;
    try {
      UIDLObject = JSON.parse(props.uidl);
    } catch (e) {
      UIDLObject = "";
    }
    console.log(UIDLParser(JSON.parse(JSON.stringify(UIDLObject))));
    const { html, style } = UIDLToHtml(
      UIDLParser(JSON.parse(JSON.stringify(UIDLObject)))
    );
    document.getElementById("htmlContainer").innerHTML = html;

    if (document.getElementById("generatedElementStyle")) {
      document.getElementById("generatedElementStyle").innerHTML = style;
      return;
    }

    let sheet: HTMLStyleElement = document.createElement("style");
    sheet.innerHTML = style;
    sheet.id = "generatedElementStyle";
    document.body.appendChild(sheet);
  }, [props]);

  return (
    <div className="container">
      <div className="htmlWrapper">
        <div id="htmlContainer" className="htmlContainer"></div>
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
