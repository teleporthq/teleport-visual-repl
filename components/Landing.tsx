import React from "react";
import { useSpring, animated } from "react-spring";

import styles from "./styles";


export default function Landing() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  return (
    <div className="container">
      <animated.div style={props}>
          <h1></h1>
           <img src="/static/teleporthq-logo.png" alt="ceva" /> 
      </animated.div>
      <style jsx>{styles}</style>
    </div>
  );
}
