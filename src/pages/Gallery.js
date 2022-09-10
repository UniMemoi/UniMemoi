import { Card, Filter } from "../components";
import "../styles/Gallery.scss"
import { Col, Input, InputGroup, Row } from 'reactstrap';


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
  return (
    <div className="gallery">
    <div className="topics">
      <button className={"text-button"}>+ Add Topic</button>
      <InputGroup>
        <Input />
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