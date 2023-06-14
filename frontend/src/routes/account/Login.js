import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row, Stack } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Login (props) {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [validated, setValidated] = React.useState(false)

  function handleSubmit (e) {
    e.preventDefault()
    if (e.currentTarget.checkValidity()) {
      fetch('/api/blog/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'email': email, 'password': password})
      }).then(res => {
        if (res.ok) res.json().then(user => navigate('/blog/account', {'state': {'user': user}}))
        else res.json().then(console.log)
      }).catch(err => {
        console.log(err)
      })
    } else if (!validated) setValidated(true)
  }

  return (
    <Form noValidate validated={validated} className='account-form' onSubmit={handleSubmit}> 
      <Stack gap={2}>
        <FloatingLabel label='E-mail'>
          <Form.Control
            name='email'
            placeholder=' '
            required
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel label='Password'>
          <Form.Control
            name='password'
            placeholder=' '
            required
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </FloatingLabel>
        <Container className='p-0'>
          <Row>
            <Col />
            <Col xs={6} md={4} style={{textAlign: 'center'}}>
              <Button type='submit' style={{width: '100%'}}>Login</Button>
            </Col>
            <Col style={{textAlign: 'right'}} />
          </Row>
        </Container>
        <Container className='p-0' style={{textAlign: 'center'}}>
          <p>New user? <Link to='../signup'>Sign up here</Link>.</p>
        </Container>
      </Stack>
    </Form>
  )
}

export default Login