import "../styles/PackageEdit.scss"
import React, { useState } from "react";
import { Card, CardEdit, PkgEditForm } from "../components";
import { Col, Input, InputGroup, Row } from 'reactstrap';
import { useParams, Link } from "react-router-dom";

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
  const [editingPkg, setEditingPkg] = useState(false);
  const togglePkg = () => setEditingPkg((e) => !e);
  const [editingCard, setEditingCard] = useState(false);
  const toggleCard = () => setEditingCard((e) => !e);
  const [edCard, setEdCard] = useState({});

  // cardData = ...

  return (
    <div className="package-edit">
      <PkgEditForm show={editingPkg} toggle={togglePkg}
        style={editingPkg ? {display: "block"} : {display: "none"}} />
      
      <div className="page-head">
      <h1>Editor: output</h1>
        <Link className="text-button" to="/output.apkg" target="_blank" download>Export .APKG</Link>
      </div>
      <div className="page-head">
        <button className="text-button" onClick={() => console.log("add card")}>+ Add card</button>
        <InputGroup>
          <Input placeholder="Search questions..." />
          <button className={"text-button"}>Search</button>
        </InputGroup>
      </div>
      <section>
        <div className={"card-grid"}>
          <Row className="gy-4" md="1" lg="2" xl="3" xxl="4">
            {tempCardData.map((p, i) => <Col key={i}>
              <button onClick={() => {
                setEditingCard(true);
                setEdCard(p);
                }}>
                <Card isFront>{p.front}</Card>
                <Card>{p.back}</Card>
              </button>
            </Col>)}
          </Row>
        </div>
        <div className={"card-page"}>{"<< < 1 of 1 > >>"}</div>
      </section>
      <CardEdit show={editingCard} toggle={toggleCard}
        card={edCard} clearCard={() => setEdCard({})}
        style={editingCard ? {display: "block"} : {display: "none"}} />
    </div>
  );
}

export default PackageEdit;