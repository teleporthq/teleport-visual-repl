import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import UIDLParser from "../utils/UIDLParser";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

export default function onChange(newValue): any {
  console.log("change", newValue);
}

// Render editor
render(
  <AceEditor
    mode="javascript"
    theme="github"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />,
  document.getElementById("example")
);
