<<<<<<< HEAD
import { Card, Filter } from "../components";
import "../styles/Gallery.scss"
import { Col, Input, InputGroup, Row } from 'reactstrap';
=======
import { Card } from "../components";
import { UploadPopup } from "../components";
import "../styles/Gallery.scss"
import { Button, Col, Input, InputGroup, Row } from 'reactstrap';
import React from "react";
>>>>>>> e86c5f90e7c64226b1ebd31f7e922255b06bdf0d


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
          <Filter action="Sort"
            fields={{"Date": sortDate, "Name": sortName}}
          />
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