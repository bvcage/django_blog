import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

import MainNav from '../components/MainNav'
import Socials from '../components/Socials'

function RootTemplate () {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={1}>
          <Socials />
        </Col>
        <Col>
          <MainNav />
          <Outlet />
        </Col>
        <Col sm={1} />
      </Row>
    </Container>
  )
}

export default RootTemplate