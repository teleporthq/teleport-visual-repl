import { NextPage } from "next";
import { useState, useEffect } from "react";
import flatten from "../utils/UIDLParser";
import input from "../utils/componentfile";
import { UIDLElementContent } from "../interfaces/UIDL";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  const [ourInput, setOurInput] = useState<UIDLElementContent[] | null>(null);
  console.log(ourInput);

  useEffect(() => {
    const ex = JSON.parse(JSON.stringify(input));
    setOurInput(flatten(ex.node.content));
  }, []);
  return (
    <div>
      <div>Landing</div>
      <div>Wraper</div>
    </div>
  );
};

export default Home;
