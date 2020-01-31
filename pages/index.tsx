import { NextPage } from "next";
import { useState, useEffect } from "react";
import UIDLParser from "../utils/UIDLParser";
import input from "../utils/componentfile";
import Landing from "../components/Landing";
import FlipWraper from "../components/FlipWraper";
import Head from "next/head";

const Home: NextPage<{ userAgent: string; pageProps }> = ({ userAgent }) => {
  const [ourInput, setOurInput] = useState([]);
  const [showLanding, setShowLanding] = useState(true);
  useEffect(() => {
    setOurInput(UIDLParser(input.node.content));
    setTimeout(() => {
      setShowLanding(false);
    }, 1500);
  }, []);

  console.log(ourInput);

  return (
    <div>
      <Head>
        <title>My styles pages</title>
        <link href="/static/Landing.css" rel="stylesheet" />
      </Head>
      {showLanding?<Landing />:null}
      <FlipWraper />
    </div>
  );
};

export default Home;
