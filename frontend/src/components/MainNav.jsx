import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

function MainNav () {
  const location = useLocation()

  return (
    <Navbar sticky='top' expand='md'>
      <Container fluid>
        <Navbar.Brand>Bailey Cage</Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav className='me-auto' />
          <Nav>
            <Nav.Link href='#home' active={location.hash === '#home'}>Home</Nav.Link>
            <Nav.Link href='#about' active={location.hash === '#about'}>About</Nav.Link>
            <Nav.Link href='#portfolio' active={location.hash === '#portfolio'}>Portfolio</Nav.Link>
            <Nav.Link href='#media' active={location.hash === '#media'}>Media</Nav.Link>
            <Nav.Link href='#resume' active={location.hash === '#resume'}>Resume</Nav.Link>
            <Nav.Link href='#contact' active={location.hash === '#contact'}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNav