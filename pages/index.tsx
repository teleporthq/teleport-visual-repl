import { NextPage } from "next";
import "../utils/UIDLToHtml";
import FlipWrapper from "../components/FlipWraper";

const Home: NextPage<{ userAgent: string }> = () => {
  return (
    <div>
      <FlipWrapper />
    </div>
  );
};

export default Home;
