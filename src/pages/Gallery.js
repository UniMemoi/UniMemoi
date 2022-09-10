import { Card } from "../components";
import "../styles/Gallery.scss"
import { Col, Row } from 'reactstrap';


const tempCard = {
  front: "Topic",
  back: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

const tempCardList = [
  tempCard, tempCard, tempCard, tempCard, tempCard, tempCard, tempCard
]

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="topics">
        <button className={"text-button"}>+ Add Topic</button>
      </div>
      <div className={"card-grid"}>
        <Row md="4">
          {tempCardList.map((c, i) =>
            <Col key={i}><Card front={c.front} back={c.back}/></Col>
          )}
        </Row>
      </div>
      <div>flip page</div>
    </section>
  )
}

export default Gallery;