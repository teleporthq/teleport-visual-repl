import React from "react";
import UIDLToHtml from "../utils/UIDLToHtml";

export default function UIDLtoHTMLComponent(props): any {
  console.log("change", props.flip);
  return (
    <div>

      <div className="container">
        <p>UIDLToHtml</p>
        <div className="wraper">

        </div>
        <button className="buton" onClick={props.flip}>Click to flip - BACK</button>
      </div>

      
        <style jsx>{`
            .wraper {
            position: relative;
            height: 80%;
            width: 80%;
            margin: auto;
            background-color: red;
          }
          .container {
            position: relative;
            margin-top: 1%;
            left: 25%;
            height: 850px;
            width: 850px;
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
