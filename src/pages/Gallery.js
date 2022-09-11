import { Card, Filter } from "../components";
import "../styles/Gallery.scss"
import { UploadPopup } from "../components";
import { Col, Input, InputGroup, Row } from 'reactstrap';
import React from "react";
import { FaSearch } from 'react-icons/fa';


const tempPkgCard = {
  topic: "Package",
  id: 1234
}

const tempPackageList = [
  tempPkgCard, tempPkgCard, tempPkgCard, tempPkgCard, tempPkgCard, tempPkgCard, tempPkgCard
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
  
const changePage = () => {
  window.location.href = "/card/1";
  return false;
}

  const popupContent = 
  <div>
      <form action="" method="" encType="multipart/form-data"  className="popup-content" onSubmit={changePage}>
        <div>
          <label for="avatar">Upload a slide (.ppt) file: </label>
        
          <input type="file"
            id="slide" name="slide"
            accept=".pptx, .pdf">
          </input>
        </div>

        <button
            type="reset"
            value="Submit"
            className={"text-button"}
            onClick={changePage}
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
          <Input />
            
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
          <Row className="gy-4" xs="1" sm="2" md="3" lg="4" xl="5" xxl="6">
            {tempPackageList.map((p, i) => <Col key={i}>
              <a href={`/package/${p.id}`}>
                <Card isFront>{p.topic}</Card>
              </a>
            </Col>)}
          </Row>
        </div>
        <div className={"card-page"}>{"<< < 1 of 1 > >>"}</div>
      </section>
    </div>
  )
}

export default Gallery;