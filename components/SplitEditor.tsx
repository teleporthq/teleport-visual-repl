import React from "react";
import UIDLParser from "../utils/UIDLParser";
import UIDLToHtml from "../utils/UIDLToHtml"
import dynamic from "next/dynamic";

const CodeEditor = dynamic(import("./AceEditor"), { ssr: false });

const SplitEditor = props => {
  return (
    <div>
      <div className="container">
        <p> SplitEditor </p>
        <div className="wraper" id="TEST">
          <CodeEditor
            mode={"json"}
            value=""
            onChange={() => console.log("ceva")}
          />
        </div>
        <button className="buton" onClick={props.flip}>
          Click to flip - FRONT
        </button>
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
        .buton {
          position: relative;
          display: block;
          margin: 5% auto 0;
          padding: 14px 15px;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          overflow: hidden;
          letter-spacing: 0.08em;
          border-radius: 0;
          text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
          transition: all 1s ease;
          border: 2px solid #d24d57;
        }

        .buton:hover {
          background: #d24d57;
          transform: translateX(-5%) translateY(-5%) rotate(-5deg);
        }

        .buton {
          color: #0b032d;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default SplitEditor;
