import { NextPage } from "next";
import "../utils/UIDLToHtml";
import UIDLToHtml from "../utils/UIDLToHtml";
import UIDLParser from "../utils/UIDLParser";
import { useEffect, useState } from "react";
const myimport = require("../utils/componentfile");

const Home: NextPage<{ userAgent: string }> = () => {
  console.log(UIDLParser(JSON.parse(JSON.stringify(myimport))));

  const [parsedUIDL, setParsedUIDL] = useState(
    UIDLToHtml(UIDLParser(JSON.parse(JSON.stringify(myimport))))
  );

  useEffect(() => {
    if (document.getElementById("generatedElementStyle")) {
      document.getElementById("generatedElementStyle").innerHTML =
        parsedUIDL.style;
      return;
    }
    let sheet: HTMLStyleElement = document.createElement("style");
    sheet.innerHTML = parsedUIDL.style;
    sheet.id = "generatedElementStyle";
    document.body.appendChild(sheet);
  }, [parsedUIDL]);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: parsedUIDL.html
      }}
      style={{ height: "100vh" }}
    ></div>
  );
};

export default Home;
