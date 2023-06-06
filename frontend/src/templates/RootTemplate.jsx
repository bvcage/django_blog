import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet, useLocation } from 'react-router-dom'

import BlogNav from '../components/BlogNav'
import MainNav from '../components/MainNav'
import Socials from '../components/Socials'

function RootTemplate () {
  const location = useLocation()
  
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={1}>
          <Socials />
        </Col>
        <Col>
          {
            location.pathname === '/' ? <MainNav /> : <BlogNav />
          }
          <Outlet />
        </Col>
        <Col sm={1} />
      </Row>
    </Container>
  )
}

export default RootTemplate