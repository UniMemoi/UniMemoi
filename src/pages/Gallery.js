import { Card, Filter } from "../components";
import "../styles/Gallery.scss"
import { UploadPopup } from "../components";
import { Col, InputGroup, Row } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import React from "react";


const tempCard = {
  front: "Topic",
  back: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

const tempCardList = [
  tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard
]

const sortDate = () => {
  console.log("sort by date");
}

const sortName = () => {
  console.log("sort by name");
}

const sortOpts = {
  "Date": sortDate,
  "Name": sortName
}

const filterSubj = (v) => {
  console.log(`filter by subj ${v}`);
}

const filterDateFrom = (v) => {
  console.log(`filter by date from ${v}`);
}

const filterDateTo = (v) => {
  console.log(`filter by date to ${v}`);
}

const filtOpts = [
  ["subject", filterSubj, "text"],
  ["date from", filterDateFrom, "date"],
  ["date to", filterDateTo, "date"],
]

const Gallery = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const confirmUpload = () => {
    setIsOpen(!isOpen);
  }

  const popupContent = 
  <div className="popup-content">
      <div>
        <label for="avatar">Upload a slide (.ppt) file: </label>
        
        <input type="file"
          id="slide" name="slide"
          accept=".pptx, .pdf">
        </input>
      </div>

      <button
          className={"text-button"}
          onClick={confirmUpload}
      > Confirm </button>
  </div>;

  return (
    <div className="gallery">
      <div className="topics">
          {isOpen && (
              <UploadPopup
                content={popupContent}
                handleClose={togglePopup}
              />
            )}

        <button 
            type="button"
            value="Login"
            onClick={togglePopup}
            className={"text-button"}>+ Add Topic</button>

        <InputGroup>
          <input />
          <button className={"text-button"}>Search</button>
        </InputGroup>

      </div>
      <section>
        <div className={"card-nav"}>
          <Filter action="Sort">
            {Object.entries(sortOpts).map((item) => {
              return <button className={"ndropdown-item"} onClick={item[1]}>
                {item[0]}
              </button>
            })}
          </Filter>
          <Filter action="Filter">
            {filtOpts.map((item) => {
              return <InputGroup className={"ndropdown-item nav-filt"} key={item[0]}>
                <input
                  type="text" id={`${item[0]}-input`} 
                  onFocusCapture={e => e.target.type=item[2]}
                  onBlurCapture={e => e.target.type="text"}
                  placeholder={`Enter ${item[0]}...`} />
                <button onClick={() => {
                  item[1](document.getElementById(`${item[0]}-input`).value)
                }}><FaSearch /></button>
              </InputGroup>
            })}
            <button className={"ndropdown-item"}>Clear</button>
          </Filter>
        </div>
        <div className={"card-grid"}>
          <Row md="4">
            {tempCardList.map((c, i) =>
              <Col key={i}><Card front={c.front} back={c.back}/></Col>
            )}
          </Row>
        </div>
        <div className={"card-page"}>flip page</div>
      </section>
    </div>
  )
}

export default Gallery;