import React from 'react'
import { Col, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap'

import LogoutBtn from '../components/account/LogoutBtn'

function BlogNav () {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const closeMenu = () => setMenuOpen(false)
  const openMenu = () => setMenuOpen(true)

  return (
    <Container fluid className='p-0 m-0'>
      <Row className='pb-3'>

        {/* regular navbar */}
        <Col className='p-0 m-0'>
          <Navbar sticky='top' expand='md'>
            <Container fluid className='pe-0'>
              <Navbar.Brand href='/'>Bailey Cage</Navbar.Brand>
              <Navbar.Toggle aria-controls='main-navbar'>Navigate</Navbar.Toggle>
              <Navbar.Collapse id='main-navbar'>
                <Nav className='me-auto' />
                <Nav>
                  <Nav.Link href='/blog'>Home</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        
        {/* account navbar */}
        <Col xs='auto' className='p-0 m-0'>
          <Navbar expand={false}>
            <Container fluid>
              <Navbar.Toggle aria-controls='account-nav' onClick={openMenu}>Account</Navbar.Toggle>
              <Navbar.Offcanvas id='account-nav' aria-labelledby='account-nav' placement='end' show={menuOpen} onHide={closeMenu}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    Account
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Container className='p-0' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
                    <Nav>
                      <Nav.Link href='/blog/account'>My Profile</Nav.Link>
                      <Nav.Link href='/blog/account'>Settings</Nav.Link>
                    </Nav>
                    <LogoutBtn onLogout={closeMenu} />
                  </Container>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}

export default BlogNav