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

  return (
    <div className="gallery">
      <div className="topics">

        <button 
            type="button"
            value="Login"
            onClick={togglePopup}
            className={"text-button"}>+ Add Topic</button>
          {isOpen && (
              <UploadPopup
                content={
                  <p>//////////// E ///////////////</p>
                }
                handleClose={togglePopup}
              />
            )}

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