import { NextPage } from "next";
import "../utils/UIDLToHtml";
import UIDLToHtml from "../utils/UIDLToHtml";
import flatten from "../utils/UIDLParser";
const myimport = require("../utils/componentfile");

const Home: NextPage<{ userAgent: string }> = () => {
  console.log(flatten(JSON.parse(JSON.stringify(myimport.node.content))))

  return (
<div style={{height: "100vh"}} dangerouslySetInnerHTML={{__html : UIDLToHtml(flatten(JSON.parse(JSON.stringify(myimport.node.content))))}}></div>
)};

export default Home;
