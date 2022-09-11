import React from "react";
import "../styles/Card.scss";
import UploadPopup from "./UploadPopup";


const CardEdit = (props) => {
  return (
    <UploadPopup show={props.show} style={props.style} toggle={props.toggle}>
      <form>
        <h2>Edit card</h2>
        <h4>{"Question"}</h4>
        <textarea placeholder="Enter question..." />
        <h4>{"Answer"}</h4>
        <textarea placeholder="Enter answer..." />
        <div className="button-list">
          <button className="text-button alt" onClick={(e) => {
            e.preventDefault();
            props.toggle();
            props.clearCard();
          }}>Cancel</button>
          <button className="text-button" onClick={(e) => {
            console.log("card edited!")
          }}>Confirm</button>
        </div>
      </form>
    </UploadPopup>
  );
}

export default CardEdit;