import React from 'react'
import './Men.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import one from '../Images/one.avif'
import two from '../Images/two.avif'
import three from '../Images/three.avif'
import {Row,Col,Container,Image} from 'react-bootstrap'
import Banner1 from '../Images/men/Banner1.jpg'
import Serhaircut from '../Images/men/Serhaircut.jpg'
import Serhaircolor from '../Images/men/SerhairColor.jpg'
import Serht from '../Images/men/Serht.jpg'
import MANICURE from '../Images/men/MANICURE.jpg'
import facial from '../Images/men/facial.jpg'
import makeover from '../Images/men/makeover.jpg'
import skinLightening from '../Images/men/skinLightening.jpg'
import skintreatment from '../Images/men/skintreatment.jpg'
function Men() {
  return (
    <>
    <div className="swirl-cursor">
    <Image style={{width:'100%',height:'100%' }} src={Banner1} thumbnail/>
     
     <h1 className='title'><span className='FirstL'>S</span>ervices</h1>
    <Container>
        <Row className='Service fade-in'>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={Serhaircut} roundedCircle/><br/>
            </Col>
            <Col xs={12} md={8} lg={8}>
              <h3 className='Sub' style={{fontFamily:"-moz-initial"}}>Hair Cut</h3>
              <p style={{fontFamily:"-moz-initial"}}>A new hair cut never goes out of style! You hair is not just hair but a crown you wear, Make heads whirl with our new customizable haircuts from the finest stylist in town. A classic faded look can never go wrong. Why look boring when you can make it interesting.</p>
          </Col>
            </Row>
        
        
        
        
        <Row className='Service fade-in'>
            <Col xs={12} md={8} lg={8}>
              <h3 className='Sub' style={{fontFamily:"-moz-initial"}}>Hair Color</h3>
              <p style={{fontFamily:"-moz-initial"}}>Tired of the same old black hair? No worries we got you! Confused with what colour to choose? No problem you can consult our hairstylist to help you find your edge with exquisite and vibrant hair colours to Flair up your style, and make you look hip.</p>
            </Col>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={Serhaircolor} roundedCircle/><br/>
            </Col>
        </Row>

        <Row className='Service fade-in'>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={Serht} roundedCircle/><br/>
            </Col>
            <Col xs={12} md={8} lg={8}>
              <h3 className='Sub' style={{fontFamily:"-moz-initial"}}>Hair Treatment</h3>
              <p style={{fontFamily:"-moz-initial"}}>Come and get the best hair treatments from our professionals at Lara. We use premium products and are equally equipped and all set to help you obtain the hair you desire, and help you bring out the best of your hair at our care, say bye bye to dry and scanty hair .</p>
          </Col>
        </Row>

        <Row className='Service fade-in'>
        <Col xs={12} md={8} lg={8}>
              <h3 className='Sub' style={{fontFamily:"-moz-initial"}}>Pedicure / Manicure</h3>
              <p style={{fontFamily:"-moz-initial"}}>Your hands and feet never get a day off and nothing feels better than a fresh set of nails to help you get on track, with our spacious cribs to help you feel relaxed and pampered. We aim to take the stress off your hands and give you the best salon experience.</p>
          </Col>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={MANICURE} roundedCircle/><br/>
            </Col>
            
        </Row>


        <Row className='Service fade-in'>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={makeover} roundedCircle/><br/>
            </Col>
            <Col xs={12} md={8} lg={8}>
              <h3 className='Sub' style={{fontFamily:"-moz-initial"}}>Make-Over</h3>
              <p style={{fontFamily:"-moz-initial"}}>Want a complete make-over? We got you covered, we can turn your dream into reality with the most elite products and stylist to work on you while you just sit back and enjoy your new make-over in process step out looking the best version of you.</p>
          </Col>
        </Row>

        <Row className='Service fade-in'>
        <Col xs={12} md={8} lg={8}>
              <h3 className='Sub' style={{fontFamily:"-moz-initial"}}>Facial</h3>
              <p style={{fontFamily:"-moz-initial"}}>A facial can help clear pores and quench parched skin and a small massage to help your skin feel light and radiant, with complete care for your skin. You can now select facials according to the type of glow or skin you desire to obtain with the help of our expertise.</p>
          </Col>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={facial} roundedCircle/><br/>
            </Col>
           
        </Row>

        <Row className='Service fade-in'>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={skinLightening} roundedCircle/><br/>
            </Col>
            <Col xs={12} md={8} lg={8}>
              <h3 className='Sub' style={{fontFamily:"-moz-initial"}}>Skin Lightening</h3>
              <p style={{fontFamily:"-moz-initial"}}>Our aim is to reduce the excessive melanin content in your skin and give your skin the radiance it deserves with intense care and products from our salon to help you preserve the glow you know you skin is healthy when it blossoms.</p>
          </Col>
        </Row>

        <Row className='Service fade-in'>
        <Col xs={12} md={8} lg={8}>
              <h3 className='Sub' style={{fontFamily:"-moz-initial"}}>Skin Treatments</h3>
              <p style={{fontFamily:"-moz-initial"}}>We bring to you only the experts for our skin treatments to turn your skin around and give you that wow factor look everyone craves! With a wide range of treatments just for you specially to feel confident and seamless in your own skin.</p>
          </Col>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={skintreatment} roundedCircle/><br/>
            </Col>
            
        </Row>
        </Container> 
        </div>  
          








      
    </>
  )
}

export default Men
