import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import './Blog1.css'

import axios from "axios";



function Blog1() {
  const [items, setItems] = useState([]);

  

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://nodejs.senidraids.site/api/allblogpost/blog"
        );
        setItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);
  const toggleDescription = (index) => {
    const newItems = [...items];
    newItems[index].showFullDescription = !newItems[index].showFullDescription;
    setItems(newItems);
};



  return (
    <div className="back">
      <Container className="btop"> 
        <h1 className='tit' ><span className='fir'>B</span>logs</h1>
        <Row className="mb-4">
          {items.map((item, index) => (
            <Col key={item.category_id} md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={item.image} alt={item.title} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{item.heading}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    {item.heading}
                    {item.showFullDescription ? item.description : `${item.description.slice(0, 150)}...`}
                  </Card.Text>
                  {!item.showFullDescription && (
                    <Button variant="outline-dark" onClick={() => toggleDescription(index)}>Read More</Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </Container>
        <Row className="footer">
          <Col xs={12}>
            <div className="footers"><br/>
              <h2 style={{color:"white",textAlign:"center", fontFamily:"-moz-initial", fontSize:"50px"}}>More Details...</h2><b><hr/></b><br/>
              <Row>
                <Col md={2} className="footer-link" style={{textAlign:"left",fontSize:"20px", fontFamily:"-moz-initial"}}><a href="/Greypg" style={{color:"white"}}>Premature Greying of Hair: Causes, Prevention</a><br/></Col>

                <Col md={2} className="footer-link"style={{textAlign:"left", fontSize:"20px", fontFamily:"-moz-initial"}}><a href="/Skinpg" style={{color:"white"}}>Stress and Skin Conditions: Unveiling the Hidden Connection</a><br/></Col>
                <Col md={2} className="footer-link" style={{textAlign:"left", fontSize:"20px", fontFamily:"-moz-initial"}}><a href="/Hairpg" style={{color:"white"}}>How to Increase Hair Density?</a><br/></Col>
                <Col md={2} className="footer-link" style={{textAlign:"left", fontSize:"20px", fontFamily:"-moz-initial"}}><a href="/Bootspg" style={{color:"white"}}>Exercise boosts energy</a><br/></Col>
                <Col md={2} className="footer-link" style={{textAlign:"left", fontSize:"20px", fontFamily:"-moz-initial"}}><a href="/Exebenefitpg" style={{color:"white"}}>Exercise combats health conditions and diseases</a><br/></Col>
                <Col md={2} className="footer-link" style={{textAlign:"left", fontSize:"20px", fontFamily:"-moz-initial"}}><a href="/Weightpg" style={{color:"white"}}>Exercise controls weight</a></Col>
                </Row>
            </div>
          </Col>
        </Row>
    </div>
  );
}

export default Blog1;

