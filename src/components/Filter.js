import React, { useState } from "react";
import "../styles/Filter.scss";

const Filter = (props) => {

  const [show, setShow] = useState(false);

  return (
    <div className={"ndropdown"}>
      <button className={"ndropdown-toggle"} style={{borderRadius: show ? "0.5rem 0.5rem 0 0" : "0.5rem"}}
        onClick={() => setShow(!show)}
      >{props.action} by {show ? "▲" : "▼"}</button>
      <div className={"ndropdown-menu"} style={{display: show ? "block" : "none"}}>
        {props.children}
      </div>
    </div>
  )
}

export default Filter;