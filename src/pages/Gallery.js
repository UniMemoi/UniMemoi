import { Card, Filter } from "../components";
import "../styles/Gallery.scss"
import { UploadPopup } from "../components";
import { Col, InputGroup, Row } from 'reactstrap';
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

const filterSubj = () => {
  console.log("filter by subj");
}

const filterDate = () => {
  console.log("filter by date");
}

const filtOpts = {
  "Date": filterDate,
  "Subject": filterSubj
}

const Gallery = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const goToCardEdit = () => {
    setIsOpen(!isOpen);

  }

  const popupContent = 
  <div className="popup-content">
      <form action="/upload" method="POST" encType="multipart/form-data">
        <div>
          <label for="avatar">Upload a slide (.ppt) file: </label>
        
          <input type="file"
            id="slide" name="slide"
            accept=".pptx, .pdf">
          </input>
        </div>

        <button
            type="submit"
            value="Submit"
            className={"text-button"}
            onClick="location.href='https://google.com'"
        > Confirm </button>
      </form>
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
            {Object.entries(filtOpts).map((item) => {
              return <button className={"ndropdown-item"} onClick={item[1]}>
                {item[0]}
              </button>
            })}
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