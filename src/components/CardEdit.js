import React from "react";
import "../styles/Card.scss";
import UploadPopup from "./UploadPopup";


const CardEdit = (props) => {
  return (
    <UploadPopup style={props.style}>
      <form>
        <h2>Edit card</h2>
        <h3>{"Question (drag & drop image in box)"}</h3>
        <textarea placeholder="Enter question..." />
        <h3>{"Answer (drag & drop image in box)"}</h3>
        <textarea placeholder="Enter answer..." />
        <div className="button-list">
          <button>Cancel</button>
          <button>Confirm</button>
        </div>
      </form>
    </UploadPopup>
  );
}

export default CardEdit;