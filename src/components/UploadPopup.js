import React from "react";
import "../styles/UploadPopup.scss";
 
function UploadPopup(props) {
    // Adapted from https://www.cluemediator.com/create-simple-popup-in-reactjs
    return (
        <div className="popup-box">
             <div className="box">
                 <div className="close-container">
                     <span className="close-icon" onClick={props.handleClose}>&#215;</span>
                 </div>
                {props.content}
            </div>
         </div>
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