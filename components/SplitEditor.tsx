import React from "react";
import dynamic from "next/dynamic";

const CodeEditor = dynamic(import("./AceEditor"), { ssr: false });

const SplitEditor = (props) => {
  return (
    <div>
      <div className="container">
        <div className="wraper" id="TEST">
          <CodeEditor
            mode={"json"}
            value=""
            onChange={() => props.onChange()}
          />
        </div>
      </div>

      <style jsx>{`
        .wraper {
          position: relative;
          height: 100%;
          width: 100%;
          margin: auto;
        }
        .container {
          position: relative;
          margin-top: 1%;
          height: 100%;
          width: 40%;
          min-width: 550px;
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
