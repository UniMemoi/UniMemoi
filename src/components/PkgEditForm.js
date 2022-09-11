import React from "react";
import { Input } from "reactstrap";
import "../styles/Card.scss";
import UploadPopup from "./UploadPopup";


const PkgEditForm = (props) => {
  return (
    <UploadPopup show={props.show} style={props.style} toggle={props.toggle}>
      <form>
        <h2>Edit properties</h2>
        <h4>Deck name</h4>
        <Input placeholder="Enter name..." />
        <h4>Subject</h4>
        <Input placeholder="Enter subject..." />
        <h4>Description</h4>
        <textarea placeholder="Enter description..." />
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

export default PkgEditForm;