import React from 'react'
import './Gallery.css'
import { Button,Row,Col,Card, Container} from 'react-bootstrap';
import zazzle from '../Images/salon/zazzle.jpg'
import lux from '../Images/salon/lux.jpg'
import green from '../Images/salon/green.jpg'
import tony from '../Images/salon/tony.jpg'
import pixels from '../Images/salon/pixels.jpg'
import ss from '../Images/salon/ss.jpg'
import BsC from '../Images/salon/BsC.jpg'
import f2 from '../Images/salon/f2.jpg'
import Sts from '../Images/salon/Sts.jpg'



function Gallery() {
  return (
    <div className='bg'>
      <h1 className='head'><span className='t10'>Top 10</span> Salons in Coimbotore</h1>
      <Container>
  <Row >
      <Col  md={4} xs={12} lg={4}>
      <Card className='card'>
      <Card.Img  className='image' variant="top" src={zazzle} />
      <Card.Body>
        <Card.Title>Zazzle Salon.</Card.Title>
        <Card.Text>
        Address: 49, Venkatasamy Rd W, near The Bellwether junior School, Near Green Trends, R.S. Puram, Coimbatore, Tamil Nadu 641002
        Phone: 0422 436 7770</Card.Text>
      </Card.Body>
    </Card> 
      </Col>
      <Col  md={4} xs={12} lg={4}>
    <Card className='card'>
      <Card.Img className='image' variant="top" src={lux} />
      <Card.Body>
        <Card.Title>Luxury Salon</Card.Title>
        <Card.Text>
        Address: 2nd floor, New, 56, Bharathi Park Rd, 7th Cross, Saibaba Colony, Coimbatore, Tamil Nadu 641011.
        <br/>Phone: 0422 437 4333
        </Card.Text>
      </Card.Body>
    </Card> 
      </Col>
      <Col  md={4} xs={12} lg={4}>
    <Card className='card'>
      <Card.Img className='image' variant="top" src={green} />
      <Card.Body>
        <Card.Title>Green Trends Unisex Hair & Style Salon</Card.Title>
        <Card.Text>
        Address: New, 109, Venkatasamy Rd W, R.S. Puram, Coimbatore, Tamil Nadu 641002
        <br/>
        Phone: 0422 254 4979
        </Card.Text>
       
      </Card.Body>
    </Card> 
      </Col>
  </Row>
  <Row >
      <Col  md={4} xs={12} lg={4}>
      <Card className='card'>
      <Card.Img className='image' variant="top" src={tony} />
      <Card.Body>
        <Card.Title>Toni & Guy Hopes</Card.Title>
        <Card.Text>
        Address: The Hub,1st floor,PKD Nagar,Avinashi Rd,Hope College,Coimbatore, Tamil Nadu 641004.
        Phone: 096555 71001</Card.Text>
       </Card.Body>
    </Card> 
      </Col>
      <Col  md={4} xs={12} lg={4}>
    <Card className='card'>
      <Card.Img className='image' variant="top" src={pixels} />
      <Card.Body>
        <Card.Title>Pixels Luxury Salon</Card.Title>
        <Card.Text>
        Address: 512, Shamims Towers 1st floor, 518, Thadagam Main Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002
        <br/>
        Phone: 072008 29955
        </Card.Text>
        
      </Card.Body>
    </Card> 
      </Col>
      <Col  md={4} xs={2} lg={4}>
    <Card className='card'>
      <Card.Img variant="top" src={ss} />
      <Card.Body>
        <Card.Title>Studio11 Family Salon&spa </Card.Title>
        <Card.Text>
        Address: 108 B, W Sambandam Rd,R.S. Puram, Coimbatore, Tamil Nadu 641002.<br/>
        Phone: 083441 94194
       </Card.Text>
       </Card.Body>
    </Card> 
      </Col>
  </Row>
  <Row>
      <Col  md={4} xs={2} lg={4}>
    <Card className='card'>
      <Card.Img variant="top" src={BsC} />
      <Card.Body>
        <Card.Title>Beaueteck Family Salon&Spa</Card.Title>
        <Card.Text>
        Address: No.117, West Sambandam Road, VOC St, Junctions, R.S. Puram, Coimbatore, Tamil Nadu 641002<br/>        
        Phone: 098945 34368
       </Card.Text>
       </Card.Body>
    </Card> 
      </Col>
      <Col  md={4} xs={2} lg={4}>
    <Card className='card'>
      <Card.Img variant="top" src={f2} />
      <Card.Body>
        <Card.Title>F2 Hairdressers Rs Puram</Card.Title>
        <Card.Text>
        Address: 28, Sambandam Rd E, R.S. Puram, Coimbatore, Tamil Nadu 641002.<br/>
        Phone: 0422 498 0003
       </Card.Text>
       </Card.Body>
    </Card> 
      </Col>
      <Col  md={4} xs={2} lg={4}>
    <Card className='card'>
      <Card.Img variant="top" src={ss} />
      <Card.Body>
        <Card.Title>Studio11 Family Salon&spa </Card.Title>
        <Card.Text>
        Address: 108 B, W Sambandam Rd,R.S. Puram, Coimbatore, Tamil Nadu 641002.<br/>
        Phone: 083441 94194
       </Card.Text>
       </Card.Body>
    </Card> 
      </Col>
    </Row>
  {/* <Row>
       <Col  md={4} xs={2} lg={4}>
    <Card className='card'>
      <Card.Img variant="top" src={Sts} />
      <Card.Body>
        <Card.Title>Styling & Such Unisex Salon</Card.Title>
        <Card.Text>
        Address: No 215, Alagesan Rd, Saibaba Colony, Coimbatore, Tamil Nadu 641011<br/>
        Phone: 0422 436 4676
       </Card.Text>
       </Card.Body>
    </Card> 
      </Col>
  </Row> */}
      
</Container> 
     







      
    </div>
  )
}

export default Gallery
