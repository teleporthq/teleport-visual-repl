import { NextPage } from "next";
import "../utils/UIDLToHtml";
import UIDLToHtml from "../utils/UIDLToHtml";
import UIDLParser from "../utils/UIDLParser";
import myComponent from "../utils/componentfile";

const Home: NextPage<{ userAgent: string }> = () => {
  console.log(UIDLParser(JSON.parse(JSON.stringify(myComponent))));

  return (
    <div
      style={{ height: "100vh", padding: "20%" }}
      dangerouslySetInnerHTML={{
        __html: UIDLToHtml(UIDLParser(JSON.parse(JSON.stringify(myComponent))))
      }}
    ></div>
  );
};

export default Home;
