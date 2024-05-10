
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";


import axios from "axios";

function Particulars() {
    const [items, setItems] = useState([]);
  
  
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await axios.get(
            "http://nodejs.senidraids.site/api/getallSalon"
          );
          setItems(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchItems();
    }, []);

  return (
    <div>
      <Container className="btop"> 
        <h1 className='tit' style={{color:"black"}}><span className='fir'>B</span>logs</h1>
        <Row className="mb-4">
          {items.map((item, index) => (
            <Col key={item.category_id} md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={item.image} alt={item.name} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{item.name}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    {item.heading}
                    {item.services}
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </Container>
    </div>
  )
}

export default Particulars
