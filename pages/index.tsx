import { NextPage } from "next";
import "../utils/UIDLToHtml";
import UIDLToHtml from "../utils/UIDLToHtml";
import UIDLParser from "../utils/UIDLParser";
import { useEffect, useState } from "react";
const myimport = require("../utils/componentfile");


const Home: NextPage<{ userAgent: string }> = () => {
  console.log(UIDLParser(JSON.parse(JSON.stringify(myimport.node.content))));
  
  const [string, setString] = useState(UIDLToHtml(
    UIDLParser(JSON.parse(JSON.stringify(myimport)))
  ).style);


  useEffect(() => {
    if(document.getElementById("generatedElementStyle")){
      document.getElementById("generatedElementStyle").innerHTML = string;
      return;
    }
    // setTimeout(() => {
    //   setString("body{color:red}");
    // }, 1500)
    let sheet : HTMLStyleElement = document.createElement('style')
    sheet.innerHTML = string;
    sheet.id = "generatedElementStyle"
    document.body.appendChild(sheet)

  }, [string])

  return (
    <div       
      dangerouslySetInnerHTML={{
        __html: UIDLToHtml(
          UIDLParser(JSON.parse(JSON.stringify(myimport.node.content)))
        ).html
      }} style={{height: "100vh"}}>
    </div>
  );
};

export default Home;
