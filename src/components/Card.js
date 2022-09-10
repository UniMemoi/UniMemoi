import React, { useState } from "react";
import "../styles/Card.scss";

const Card = (props) => {
  const [isFront, setIsFront] = useState(true);
  
  if (isFront) return (
    <div className={"card card-front"}>text</div>
  )

  else return (
    <div className={"card card-back"}>insert text here</div>
  )
}

export default Card;