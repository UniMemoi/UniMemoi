import React from "react";
import "../styles/Card.scss";

const Card = (props) => {
  
  if (props.isFront) return (
    <div className={"mcard mcard-front"}>
      {props.children}
    </div>
  )

  else return (
    <div className={"mcard mcard-back"}>
      {props.children}
    </div>
  )
}

export default Card;