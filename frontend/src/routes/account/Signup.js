import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EMPTY_FORM = {
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: '',
  password2: '',
}

function Signup (props) {
  const { setCurrentUser, showLogin } = props
  const [signup, setSignup] = React.useState(EMPTY_FORM)
  const [validated, setValidated] = React.useState(false)

  const resetForm = () => {
    setSignup(EMPTY_FORM)
    setValidated(false)
  }

  function handleChange (e) {
    setSignup({...signup, [e.target.name]: e.target.value})
  }

  function handleSubmit (e) {
    e.preventDefault()
    if (e.currentTarget.checkValidity()) {
      const postObj = {...signup}
      delete postObj.password2
      fetch('/api/blog/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObj)
      }).then(res => {
        if (res.ok) res.json().then(user => {
          const loginObj = {'email': user.email, 'password': user.password}
          fetch('/api/blog/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginObj)
          }).then(res => {
            if (res.ok) res.json().then(user => setCurrentUser(user))
            else res.json().then(cErr => console.log(cErr.errors))
          }).catch(sErr => {
            console.log(sErr)
          })
        })
        else res.json().then(cErr => {
          console.log(cErr.errors)
        })
      }).catch(sErr => {
        console.log('error: ' + sErr)
      })
    }
    if (!validated) setValidated(true)
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='account-form'>
      <Stack gap={2}>
        <FloatingLabel label='First name'>
          <Form.Control
            name='first_name'
            placeholder=' '
            required
            type='text'
            value={signup.first_name}
            onChange={handleChange}
          />
        </FloatingLabel>
          <Form.Control.Feedback>hi</Form.Control.Feedback>
        <FloatingLabel label='Last name'>
          <Form.Control
            name='last_name'
            placeholder=' '
            required
            type='text'
            value={signup.last_name}
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel label='E-mail'>
          <Form.Control
            name='email'
            placeholder=' '
            required
            type='email'
            value={signup.email}
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel label='Username'>
          <Form.Control
            name='username'
            placeholder=' '
            required
            type='text'
            value={signup.username}
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel label='Password'>
          <Form.Control
            name='password'
            placeholder=' '
            required
            type='password'
            value={signup.password}
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel label='Confirm password'>
          <Form.Control
            name='password2'
            placeholder=' '
            required
            type='password'
            value={signup.password2}
            onChange={handleChange}
          />
        </FloatingLabel>
        <Container className='p-0'>
          <Row>
            <Col />
            <Col xs={6} md={4} style={{textAlign: 'center'}}>
              <Button type='submit' style={{width: '100%'}}>Sign up</Button>
            </Col>
            <Col style={{textAlign: 'right'}}>
              <Button variant='outline-secondary' className='ms-2' onClick={resetForm}>Clear</Button>
            </Col>
          </Row>
        </Container>
        <Container className='p-0' style={{textAlign: 'center'}}>
          <p>Have an account? <Link to='../login'>Login here</Link>.</p>
        </Container>
      </Stack>
    </Form>
  )
}

export default Signup