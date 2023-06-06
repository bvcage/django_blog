import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function BlogNav () {
  return (
    <Navbar sticky='top' expand='md'>
      <Container fluid>
        <Navbar.Brand href='/'>Bailey Cage</Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav className='me-auto' />
          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BlogNav