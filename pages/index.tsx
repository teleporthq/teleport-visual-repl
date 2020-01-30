import { NextPage } from "next";
import "../utils/UIDLToHtml";
import UIDLToHtml from "../utils/UIDLToHtml";
import UIDLParser from "../utils/UIDLParser";
const myimport = require("../utils/componentfile");

const Home: NextPage<{ userAgent: string }> = () => {
  console.log(UIDLParser(JSON.parse(JSON.stringify(myimport.node.content))));

  return (
    <div
      style={{ height: "100vh", padding: "20%" }}
      dangerouslySetInnerHTML={{
        __html: UIDLToHtml(
          UIDLParser(JSON.parse(JSON.stringify(myimport.node.content)))
        )
      }}
    ></div>
  );
};

export default Home;
