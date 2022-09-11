import React from "react";
import { Modal, ModalBody } from "reactstrap";
import "../styles/UploadPopup.scss";
 
function UploadPopup(props) {

    // Adapted from https://www.cluemediator.com/create-simple-popup-in-reactjs
    return (
        <Modal isOpen={props.show} toggle={props.toggle}>
        <ModalBody>
            <button className="close-icon" onClick={e => {e.preventDefault(); props.toggle()}}>&#215;</button>
            {props.children}
        </ModalBody>
    </Modal>
    );
}

export default UploadPopup;
/*
how to use:
    const [isOpen, setIsOpen] = React.useState(true);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
         <input
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
            />
        {isOpen && <Popup
            content={YOUR_CONTENT_HERE}
            handleClose={togglePopup}
    )
*/