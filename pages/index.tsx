import { NextPage } from "next";
import "../utils/UIDLParser";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <div>We have started !</div>
);

export default Home;
