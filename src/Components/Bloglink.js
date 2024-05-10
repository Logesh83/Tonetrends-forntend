import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bloglink.css';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.webp';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.webp';
import img6 from '../Images/img6.jpg';

function Bloglink() {

  return (
    <div>
 <Container>     
<Row>
          <Col xs={12}>
            <div className="footer"><br/>
              <h2 style={{color:"white",textAlign:"center"}}>More Details</h2><br/>
              <Row>
                <Col md={2} className="footer-link" style={{textAlign:"center"}}><a href="/Greypg" style={{color:"white"}}>Premature Greying of Hair: Causes, Prevention</a><br/></Col>

                <Col md={2} className="footer-link"style={{textAlign:"center"}}><a href="/Skinpg" style={{color:"white"}}>Stress and Skin Conditions: Unveiling the Hidden Connection</a><br/></Col>
                <Col md={2} className="footer-link" style={{textAlign:"center"}}><a href="/Hairpg" style={{color:"white"}}>How to Increase Hair Density?</a><br/></Col>
                <Col md={2} className="footer-link" style={{textAlign:"center"}}><a href="/Bootspg" style={{color:"white"}}>Exercise boosts energy</a><br/></Col>
                <Col md={2} className="footer-link" style={{textAlign:"center"}}><a href="/Exebenefitpg" style={{color:"white"}}>Exercise combats health conditions and diseases</a><br/></Col>
                <Col md={2} className="footer-link" style={{textAlign:"center"}}><a href="/Weightpg" style={{color:"white"}}>Exercise controls weight</a></Col>
                </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Bloglink;
