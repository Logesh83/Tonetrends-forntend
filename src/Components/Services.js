import React, { useState, useEffect } from "react";
import { Row, Col,Card,Container,Image } from "react-bootstrap";
import './Services.css'
import Banner1 from '../Images/men/Banner1.jpg'
import axios from "axios";

function Services() {
    const [items, setItems] = useState([]);
  
  
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await axios.get(
            "http://nodejs.senidraids.site/api/getallService"
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
    
            <div className="swirl-cursor">
                <Image style={{width:'100%',height:'100%' }} src={Banner1} thumbnail/>
                 
                <h1 className='title'><span className='FirstL'>S</span>ervices</h1>
                
                <Container>
                {items.map((service, index) => (
                <Row className='Service fade-in' key={index}>
                    {/* First Row */}
                    {index % 2 === 0 ? (
                        <>
                            <Col xs={12} md={4} lg={4}>
                                <Image className='pics' src={service.image} roundedCircle/><br/>
                            </Col>
                            <Col xs={12} md={8} lg={8}>
                                <h3 className='Sub' style={{fontFamily:"-moz-initial"}}>{service.name}</h3>
                                <p style={{fontFamily:"-moz-initial"}}>{service.description}</p>
                            </Col>
                        </>
                    ) : (
                        <>
                            <Col xs={12} md={8} lg={8}>
                                <h3 className='Sub' style={{fontFamily:"-moz-initial"}}>{service.name}</h3>
                                <p style={{fontFamily:"-moz-initial"}}>{service.description}</p>
                            </Col>
                            <Col xs={12} md={4} lg={4}>
                                <Image className='pics' src={service.image} roundedCircle/><br/>
                            </Col>
                        </>
                    )}
                </Row>
            ))}
                </Container>
                
               
            </div>
        );
        
    
  
  }
  
  export default Services;
  
  