import React from 'react'
import './Navbarpg.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarpg() {
  return (


    // <Navbar bg="dark" data-bs-theme="dark">
    //   <Container className='mr-dafoe-regular'>
    //     <Navbar.Brand style={{ color: " #ffcc00", fontSize: "45px", }} href="/">Tone Trend</Navbar.Brand>
    //     <Nav className="me-left">
    //       <Nav.Link style={{ color: "White", fontSize: "25px", gap: "40px", marginLeft: "40px" }} href="/">Home</Nav.Link>
    //       <NavDropdown style={{ fontSize: "25px", marginLeft: "40px" }} title="Services"  >
    //         <NavDropdown.Item style={{ fontSize: "25px" }} href='Men' >Men</NavDropdown.Item>
    //         <NavDropdown.Item style={{ fontSize: "25px" }} href='Women'  >Women</NavDropdown.Item>
    //       </NavDropdown>
    //       <Nav.Link style={{ color: "White", fontSize: "25px", marginLeft: "40px" }} href="Blog1">Blog</Nav.Link>
    //       <Nav.Link style={{ color: "White", fontSize: "25px", marginLeft: "40px" }} href="Salon">Salon</Nav.Link>
    //       <NavDropdown style={{ fontSize: "25px", marginLeft: "40px" }} title="City"  >
    //         <NavDropdown.Item style={{ fontSize: "25px" }} href='' >Coimbatore</NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //   </Container>
    // </Navbar>

<Navbar bg="dark" expand="lg" variant="dark">
<Container className='mr-dafoe-regular'>
  <Navbar.Brand style={{ color: "#ffcc00", fontSize: "45px" }} href="/">Tone Trend</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-left">
      <Nav.Link style={{ color: "White", fontSize: "25px", marginLeft: "25px" }} href="/">Home</Nav.Link>
      <NavDropdown style={{ fontSize: "25px", marginLeft: "25px" }} title="Services">
        <NavDropdown.Item style={{ fontSize: "25px" }} href='Men'>Men</NavDropdown.Item>
        <NavDropdown.Item style={{ fontSize: "25px" }} href='Women'>Women</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link style={{ color: "White", fontSize: "25px", marginLeft: "40px" }} href="Blog1">Blog</Nav.Link>
      <Nav.Link style={{ color: "White", fontSize: "25px", marginLeft: "40px" }} href="Salon">Salon</Nav.Link>
      <NavDropdown style={{ fontSize: "25px", marginLeft: "40px" }} title="City">
        <NavDropdown.Item style={{ fontSize: "25px" }} href=''>Coimbatore</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>



  )
}

export default Navbarpg
