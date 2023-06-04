import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../components/MainNav'
import { Container } from 'react-bootstrap'

function RootTemplate () {
  return (
    <Container fluid>
      <MainNav />
      <Outlet />
    </Container>
  )
}

export default RootTemplate