import React from 'react';
import './Home.css';
import Logo from '../Images/salon/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Row, Col, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router';

function Home() {
    // let navigate = useNavigate();
    
  


    // const click1 =() =>{
    //     navigate ('/Home')
    //   }
    //   const click2 =() =>{
    //     navigate ('/Men')
    //   }
    //   const click3 = () =>{
    //     navigate ('/Women')
    //   }
    //   const click4 = () =>{
    //     navigate ('/Salon')
    //   }
    //   const click5 =() =>{
    //     navigate ('/Men')
    //   }
    //   const click6 =() =>{
    //     navigate ('/Blog1')
    //   }
    
    return (
        <div className='banner-area'>
            <Row >
            <Col md={6} xs={12} ><img src={Logo} alt="Tone Trend Logo" className="logo"/></Col>
            <Col md={6} xs={12}>
    <p  className="banner-text">Welcome to Tone Trend, where beauty meets convenience! We're thrilled to invite you to explore our innovative platform dedicated to enhancing your salon experience. Whether you're in search of the perfect hairstyling salon, a rejuvenating spa retreat, or expert grooming services tailored to your needs, you've come to the right place.
    At Tone Trend, we understand the importance of feeling confident and empowered in your personal grooming choices. That's why we've curated a comprehensive directory of salons offering services for both men and women, all designed to cater to your unique preferences and requirements.
    </p>
               
            </Col>
            </Row>
        </div>
    );
}
export default Home