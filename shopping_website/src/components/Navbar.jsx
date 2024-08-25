import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Navi() {
  return (
    <div >
        <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand className='text-white' href="#">E-shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white' to="/" as={Link} >Products</Nav.Link>
          </Nav>
          <Nav
            className="flex justify-content-end pe-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white' to="/cart" as={Link} >Cart  0</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navi;