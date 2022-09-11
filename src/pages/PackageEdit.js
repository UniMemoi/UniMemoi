import "../styles/PackageEdit.scss"
import React from "react";
import { Card, CardEdit } from "../components";
import { Col, Input, InputGroup, Row } from 'reactstrap';
import { useParams } from "react-router-dom";

const tempCard = {
  front: "Question",
  back: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

const tempCardData = [
  // extract the card data here
  tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard
]

const PackageEdit = () => {
  const packageId = useParams().id;

  // cardData = ...

  return (
    <div className="package-edit">
      <div className="page-head">
        <h1>Slide card editor</h1>
        <InputGroup>
          <Input />
          <button className={"text-button"}>Search</button>
        </InputGroup>
      </div>
      <section>
        <div className={"card-grid"}>
          <Row className="gy-4" md="1" lg="2" xl="3" xxl="4">
            {tempCardData.map((p, i) => <Col key={i}>
              <button onClick={() => console.log(123131)}>
                <Card isFront>{p.front}</Card>
                <Card>{p.back}</Card>
              </button>
            </Col>)}
          </Row>
        </div>
        <div className={"card-page"}>{"<< < 1 of 1 > >>"}</div>
      </section>
      <CardEdit style={{display: "none"}} />
    </div>
  );
}

export default PackageEdit;