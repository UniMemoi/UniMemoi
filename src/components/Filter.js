import React, { useState } from "react";
import "../styles/Filter.scss";

const Filter = (props) => {

  const [show, setShow] = useState(false);

  return (
    <div className={"ndropdown"}>
      <button className={"ndropdown-toggle"}
        onClick={() => setShow(!show)}
      >{props.action} by</button>
      <div className={"ndropdown-menu"} style={{display: show ? "block" : "none"}}>
        {Object.entries(props.fields).map((item) => {
          return <button className={"ndropdown-item"} onClick={item[1]}>
            {item[0]}
          </button>
        })}
      </div>
    </div>
  )
}

export default Filter;