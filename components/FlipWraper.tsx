import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import UIDLtoHTMLComponent from "../components/UIDLtoHTMLComponent";
import SplitEditor from "../components/SplitEditor";

export default function FlipWrapper() {
  
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setIsFlipped(!isFlipped);

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <SplitEditor flip={handleClick}>
          This is the front of the card.
          
        </SplitEditor>

        <UIDLtoHTMLComponent flip={handleClick}>
          This is the back of the card.
        </UIDLtoHTMLComponent>
      </ReactCardFlip>
    </div>
  );
}
