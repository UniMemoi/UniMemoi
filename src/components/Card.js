import React, { useState } from "react";
import "../styles/Card.scss";

const Card = (props) => {
  const [isFront, setIsFront] = useState(true);
  
  if (isFront) return (
    <button
      className={"mcard mcard-front"}
      onClick={() => setIsFront(false)}
    >
        Topic
    </button>
  )

  else return (
    <button
      className={"mcard mcard-back"}
      onClick={() => setIsFront(true)}
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </button>
  )
}

export default Card;