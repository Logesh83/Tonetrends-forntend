import React from 'react'
import {Row,Col,Container,Image} from 'react-bootstrap'
import B3 from '../Images/Women/B3.jpg'
import hs1 from '../Images/Women/hs1.jpg'
import hc1 from '../Images/Women/hc1.jpg'
import HT1 from '../Images/Women/HT1.jpg'
import Hcl from '../Images/Women/Hcl.jpg'
import Th from '../Images/Women/Th.jpg'
import WAX from '../Images/Women/WAX.jpg'
import SL from '../Images/Women/SL.jpg'
import NP from '../Images/Women/NP.jpg'
import MNY from '../Images/Women/MNY.jpg'
import BT1 from '../Images/Women/BT1.jpg'
import F1 from '../Images/Women/F1.jpg'
import ST from '../Images/Women/ST.jpg'
import MKP from '../Images/Women/MKP.jpg'




function Women() {
  return (
<>

<Image style={{width:'100%',height:'100%' }} src={B3} thumbnail/>
     
     <h1 className='title'><span className='FirstL'>S</span>ervices</h1>
    <Container>
        <Row className='Service'>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={hs1} roundedCircle/><br/>
            </Col>
            <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Hair Styling</h3>
              <p style={{fontFamily:"-moz-initial"}}>With over millions of hair-dos our stylists here turn everything to perfection. Your hair is a statement that we want to make look bold and every detail matters with a close eye on every strand we make sure to never miss out on anything.</p>
          </Col>
            </Row>
            <Row className='Service'>
            <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Hair Cut</h3>
              <p style={{fontFamily:"-moz-initial"}}>Your hair is our care watch us change your entire look with a simple yet fashionable and elegant hair cut. You can also consult our stylist for an opinion to really bring out the structure of your face as they gently carve your hair into perfection to make your hair look its best.</p>
            </Col>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={hc1} roundedCircle/><br/>
            </Col>
        </Row>
        <Row className='Service'>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={HT1} roundedCircle/><br/>
            </Col>
            <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Hair Treatment</h3>
              <p style={{fontFamily:"-moz-initial"}}>Hair fall will never be a worry again with our special hair treatment we help your hair reach its most voluminous phase you have ever seen! with solution to all your hair problems it could never go wrong our consultants always make sure you walk away satisfied.</p>
          </Col>
        </Row>
        <Row className='Service'>
        <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Hair Colouring</h3>
              <p style={{fontFamily:"-moz-initial"}}>You know when a woman changes her hair it’s about to go down from the most vivid to subtle colours we have it all there is never a dull moment. with a little bit of colour to flaunt try out new and different colours and push out of your comfort zone and look dauntless.</p>
          </Col>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={Hcl} roundedCircle/><br/>
            </Col>
            
        </Row>
        <Row className='Service'>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={Th} roundedCircle/><br/>
            </Col>
            <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Threading</h3>
              <p style={{fontFamily:"-moz-initial"}}>Watch our stylist thread and sculpt your beautiful eyebrows and arch them just the way you want it with a little massage to help relax your eyes and avoid any discomfort. To give your face a natural lift and leaving your eyebrows look like goals.</p>
          </Col>
        </Row>
        <Row className='Service'>
            <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Waxing</h3>
              <p style={{fontFamily:"-moz-initial"}}>The best way for painless hair removal and avoid fast regrowth you can also try our different types of waxing that we offer to find the most suitable method for your skin helping it become more flush and plump allowing your skin to breath.</p>
          </Col>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={WAX} roundedCircle/><br/>
            </Col>
       </Row>
        <Row className='Service'>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={SL} roundedCircle/><br/>
            </Col>
            <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Skin Lightening </h3>
              <p style={{fontFamily:"-moz-initial"}}>Our aim is to reduce the excessive melanin content in your skin and give your skin the radiance it deserves with intense care and products from our salon to help you preserve the glow you know you skin is healthy when it blossoms.</p>
          </Col>
        </Row>
        <Row className='Service'>
        <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Nail Polish / Nail Art</h3>
              <p style={{fontFamily:"-moz-initial"}}>Try out some of the most trendiest sets we have and feel absolutely fabulous with a new set of nails ready to flex. You can even customise your own nails and watch our nail techs do their best with steady hands and a sharp wit to perform potentially.</p>
          </Col>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={NP} roundedCircle/><br/>
            </Col>
        </Row>
        <Row className='Service'>
        <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={MNY} roundedCircle/><br/>
            </Col>
        <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Pedicure / Manicure</h3>
              <p style={{fontFamily:"-moz-initial"}}>Your hands and feet never get a day off and nothing feels better than a fresh set of nails to help you get on track, with our spacious cribs to help you feel relaxed and pampered. We aim to take the stress off your hands and give you the best salon experience</p>
          </Col>
           
        </Row>
        <Row className='Service'>
        <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Body Treatments</h3>
              <p style={{fontFamily:"-moz-initial"}}>With the best in town we strive to help your body reach its total well-being with healthy skin to improve circulation and increase confidence. With therapeutic body treatments to help relax the mind and body.</p>
          </Col>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={BT1} roundedCircle/><br/>
            </Col>
        </Row>
        <Row className='Service'>
            <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={F1} roundedCircle/><br/>
            </Col>
        <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Facial</h3>
              <p style={{fontFamily:"-moz-initial"}}>A facial can help clear pores and quench parched skin and a small massage to help your skin feel light and radiant, with complete care for your skin. You can now select facials according to the type of glow or skin you desire to obtain with the help of our expertise.</p>
          </Col>
           
        </Row>
        <Row className='Service'>
        <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Skin Treatments</h3>
              <p style={{fontFamily:"-moz-initial"}}>We bring to you only the experts for our skin treatments to turn your skin around and give you that wow factor look everyone craves! With a wide range of treatments just for you specially to feel confident and seamless in your own skin.</p>
          </Col>
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={ST} roundedCircle/><br/>
            </Col>
        </Row>
        <Row className='Service'>
       
           <Col xs={12} md={4} lg={4}>
              <Image className='pics' src={MKP} roundedCircle/><br/>
            </Col>
            <Col xs={12} md={8} lg={8}>
              <h3 className='Sub'>Make-Over</h3>
              <p style={{fontFamily:"-moz-initial"}}>Come get the best make-over at our salon we use only premium products and find yourself being the best version of you step out feeling the most exotic you’ve ever felt and feel the power in every step you take.</p>
          </Col>
        </Row>
        </Container>   
</>
  )
}

export default Women
