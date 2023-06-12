import React from 'react'
import { Container } from 'react-bootstrap'

import LoginForm from '../components/account/LoginForm'
import LogoutBtn from '../components/account/LogoutBtn'
import SignupForm from '../components/account/SignupForm'

function UserAccount () {
  return (
    <Container>
      <SignupForm />
      <LoginForm />
      <LogoutBtn />
    </Container>
  )
}

export default UserAccount