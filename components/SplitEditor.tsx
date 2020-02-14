import React from "react";
import dynamic from "next/dynamic";
import { Button } from "antd";

const CodeEditor = dynamic(import("./AceEditor"), { ssr: false });

const SplitEditor = ({ isHidden, onChange, uidl }) => {
  return isHidden ? (
    <div></div>
  ) : (
    <div className="container">
      <div className="editor-nav"></div>
      <div className="editorContainer">
        <div className="wrapper" id="TEST">
          <CodeEditor
            mode={"json"}
            value={uidl}
            onChange={newValue => onChange(newValue)}
          />
        </div>
      </div>

      <style jsx>{`
        .editor-nav {
          position: relative;
          height: 40px;
          display: flex;
          flex-direction: row;
          border-bottom: solid 1px #cccccc20;
          padding: 10px 10px;
          background: black;
        }
        .wrapper {
          position: relative;
          height: calc(100% - 0px);
          width: 100%;
          margin: auto;
        }
        .editorContainer {
          position: relative;
          height: 100%;
          width: 100%;
        }
        .container {
          border-radius: 10px;
          height: 100%;
          min-width: 48%;
          overflow: hidden;
          z-index: 3;
          padding: 0 0 30px 0;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default SplitEditor;
