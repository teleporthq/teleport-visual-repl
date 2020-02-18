import React from "react";
import dynamic from "next/dynamic";
import EditorNav from "./EditorNav";

const CodeEditor = dynamic(import("./AceEditor"), { ssr: false });

const SplitEditor = ({ isHidden, onChange, uidl }) => {
  return isHidden ? (
    <div></div>
  ) : (
    <div className="container">
      <EditorNav />
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
