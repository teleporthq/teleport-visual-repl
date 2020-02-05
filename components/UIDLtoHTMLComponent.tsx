import React, { useEffect, useState } from "react";
import UIDLToHtml from "../utils/UIDLToHtml";
import UIDLParser from "../utils/UIDLParser";
import Interweave from "interweave"
import { polyfillDOMImplementation } from 'interweave-ssr';

//for server-side rendering part, required by interweave library (lightweight)
polyfillDOMImplementation();

export default function UIDLtoHTMLComponent(props): any {
  
  const [html, setHtml] = useState("");

  useEffect(() => {
    let UIDLObject : unknown
    try{
      UIDLObject = JSON.parse(props.uidl)
    } catch (e) {
      UIDLObject = ""
    }
    
    const {html, style} = UIDLToHtml(UIDLParser(JSON.parse(JSON.stringify(UIDLObject))));
    
    setHtml(html)

    if (document.getElementById("generatedElementStyle")) {
      document.getElementById("generatedElementStyle").innerHTML = style;
      return;
    }

    let sheet: HTMLStyleElement = document.createElement("style");
    sheet.innerHTML = style;
    sheet.id = "generatedElementStyle";
    document.body.appendChild(sheet);

    //maybe refactor here to use refs to watch props instea (?)
  }, [props])

  return (
    <div className="container">

      <div className="htmlWrapper" >
        <div id="htmlContainer" className="htmlContainer"><Interweave content={html}/></div>
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
