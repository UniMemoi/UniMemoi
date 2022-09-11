import "../styles/CardEdit.scss"
import React from "react";
import { Card, Filter } from "../components";
import { Col, InputGroup, Row } from 'reactstrap';
import { useParams } from "react-router-dom";

const tempCard = {
  front: "Question",
  back: "Answer"
}

const cardData = [
  // extract the card data here
  tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard
]

const CardEdit = () => {
  const cardId = useParams().id;

  // cardData = ...

  return (
    <div className="card-edit">
        <div className="card-container">
          <div className={"card-grid"}>
            <Row md="4">
              {cardData.map((c, i) =>
                <Col key={i}><Card front={c.front} back={c.back}/></Col>
              )}
            </Row>
          </div>
        </div>
    </div>
  );
}

export default CardEdit;