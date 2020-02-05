import React, { useEffect } from "react";
import UIDLToHtml from "../utils/UIDLToHtml";
import UIDLParser from "../utils/UIDLParser";
export default function UIDLtoHTMLComponent(props): any {
  

  useEffect(() => {
    let UIDLObject : unknown
    try{
      UIDLObject = JSON.parse(props.uidl)
    } catch (e) {
      UIDLObject = ""
    }
    
    const {html, style} = UIDLToHtml(UIDLParser(JSON.parse(JSON.stringify(UIDLObject))));
    document.getElementById("htmlContainer").innerHTML = html

    if (document.getElementById("generatedElementStyle")) {
      document.getElementById("generatedElementStyle").innerHTML = style;
      return;
    }

    let sheet: HTMLStyleElement = document.createElement("style");
    sheet.innerHTML = style;
    sheet.id = "generatedElementStyle";
    document.body.appendChild(sheet);

  }, [props])

  return (
    <div>

      <div className="container" >
        <div id="htmlContainer" className="wraper"></div>
      </div>

      
        <style jsx>{`
          .wraper {
            position: relative;
            height: 100%;
            width: 100%;
            margin: auto;
            background-color: white;
          }
          .container {
            position: relative;
            margin-top: 1%;
            height: 100%;
            width: 100%;
            border-radius: 6px;
            background: #0b032d;
          }
          .buton{
            position: relative;
            display: block;
            margin: 5% auto 0;
            padding: 14px 15px;
            color: #fff;
            font-size:14px;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            overflow: hidden;
            letter-spacing: .08em;
            border-radius: 0;
            text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
            transition: all 1s ease;
            border: 2px solid #D24D57;
          }

          .buton:hover {
            background: #D24D57;
            transform: translateX(-50%) translateY(-50%) rotate(-25deg);
          }

          .buton{
            color: #0b032d;
            cursor: pointer;
          }
        `}</style>

    </div>
  );
}
