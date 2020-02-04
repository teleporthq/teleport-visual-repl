import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import UIDLtoHTMLComponent from '../components/UIDLtoHTMLComponent';
import SplitEditor from "../components/SplitEditor";

export default function App () {
  const [isFlipped, setIsFlipped] = useState(false)

 const handleClick = () => setIsFlipped(!isFlipped)

 
  
    return (
      <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <SplitEditor>
          This is the front of the card.
          <button onClick={handleClick}>Click to flip</button>
        </SplitEditor>
 
        <UIDLtoHTMLComponent>
          This is the back of the card.
          <button onClick={handleClick}>Click to flip</button>
        </UIDLtoHTMLComponent>
      </ReactCardFlip>
      </div>
    )
  }
