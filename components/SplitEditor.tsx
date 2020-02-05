import React from "react";
import dynamic from "next/dynamic";

const CodeEditor = dynamic(import("./AceEditor"), { ssr: false });

const SplitEditor = ({ isHidden, onChange, uidl }) => {
  return isHidden ? (
    <div></div>
  ) : (
    <div className="container">
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
          height: 100%;
          width: 100%;
          margin: auto;
        }
        .editorContainer {
          position: relative;
          height: 100%;
          width: 100%;
        }
        .container {
          position: relative;
          height: 100%;
          min-width: 48%;
        }
      `}</style>
    </div>
  );
};

export default SplitEditor;
