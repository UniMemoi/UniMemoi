import { Card } from "../components";
import { UploadPopup } from "../components";
import "../styles/Gallery.scss"
import { Button, Col, Input, InputGroup, Row } from 'reactstrap';
import React from "react";


const tempCard = {
  front: "Topic",
  back: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

const tempCardList = [
  tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard
]



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
        <div className={"card-nav"}>something</div>
        <div className={"card-grid"}>
          <Row md="4">
            {tempCardList.map((c, i) =>
              <Col key={i}><Card front={c.front} back={c.back}/></Col>
            )}
          </Row>
        </div>
        <div>flip page</div>
      </section>
    </div>
  )
}

export default Gallery;