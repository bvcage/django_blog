import React from 'react'
import { Button, Col, Container, Form, InputGroup, Modal, Row } from 'react-bootstrap'

const CSRF = getCookie('csrftoken')

function EditModal (props) {
  const { user, profile, updateUser, updateProfile } = props
  const [profileEdits, setProfileEdits] = React.useState(profile)
  const [userEdits, setUserEdits] = React.useState(user)
  const [validated, setValidated] = React.useState(false)
  const [show, setShow] = React.useState(false)
  const showModal = () => setShow(true)
  const hideModal = () => setShow(false)

  function handleProfileChange (e) {
    setProfileEdits({...profileEdits, [e.target.name]: e.target.value})
  }

  function handleUserChange (e) {
    setUserEdits({...userEdits, [e.target.name]: e.target.value})
  }

  function cancelChanges (e) {
    hideModal()
    setValidated(false)
    setProfileEdits(profile)
    setUserEdits(user)
  }

  function getChanges (original, edits) {
    const changes = {}
    Object.entries(edits).forEach(([key, val]) => {
      if (original[key] !== val) changes[key] = val
    })
    return changes
  }

  function saveChanges (e) {
    e.preventDefault()

    // update user profile
    if (e.currentTarget.checkValidity()) {
      const profileChanges = getChanges(profile, profileEdits)
      if (Object.keys(profileChanges).length > 0) {
        fetch('/api/blog/user-profile', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': CSRF
          },
          body: JSON.stringify(profileChanges)
        }).then(res => {
          if (res.ok) res.json().then(updateProfile)
          else res.json().then(console.log)
        }).catch(err => {
          console.log(err)
        })
      }

      // update user record
      const userChanges = getChanges(user, userEdits)
      if (Object.keys(userChanges).length > 0) {
        fetch('/api/blog/user', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': CSRF
          },
          body: JSON.stringify(userChanges)
        }).then(res => {
          if (res.ok) res.json().then(updateUser)
          else res.json().then(console.log)
        }).catch(err => {
          console.log(err)
        })
      }

      // close modal
      hideModal()

    } else if (!validated) setValidated(true)
  }

  return (
    <React.Fragment>
      <Button onClick={showModal}>Edit</Button>
      <Modal show={show} onHide={hideModal} size='lg'>
        <Form noValidate validated={validated} onSubmit={saveChanges}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label column sm={3} lg={2}>First name</Form.Label>
                <Col>
                  <Form.Control
                    name='first_name'
                    type='text'
                    required
                    value={userEdits.first_name}
                    onChange={handleUserChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label column sm={3} lg={2}>Last name</Form.Label>
                <Col>
                  <Form.Control
                    name='last_name'
                    type='text'
                    required
                    value={userEdits.last_name}
                    onChange={handleUserChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label column sm={3} lg={2}>Username</Form.Label>
                <Col>
                  <InputGroup>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control
                      name='username'
                      type='text'
                      required
                      value={userEdits.username}
                      onChange={handleUserChange}
                    />
                    <Button variant='outline-secondary'>Check availability</Button>
                  </InputGroup>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label column sm={3} lg={2}>Email</Form.Label>
                <Col>
                  <Form.Control
                    name='email'
                    type='email'
                    required
                    value={userEdits.email}
                    onChange={handleUserChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label column sm={3} lg={2}>Location</Form.Label>
                <Col>
                  <Form.Control
                    name='location'
                    type='text'
                    required
                    value={profileEdits.location}
                    onChange={handleProfileChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3} lg={2}>Description</Form.Label>
                <Col>
                  <Form.Control
                    as='textarea'
                    name='bio'
                    rows={4}
                    value={profileEdits.bio}
                    onChange={handleProfileChange}
                  />
                </Col>
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Container className='p-0 m-0'>
              <Row>
                <Col />
                <Col xs={3} className='pe-1'>
                  <Button variant='outline-secondary' style={{width: '100%'}} onClick={cancelChanges}>Cancel</Button>
                </Col>
                <Col xs={3} className='ps-1'>
                  <Button type='submit' variant='success' style={{width: '100%'}}>SAVE</Button>
                </Col>
              </Row>
            </Container>
          </Modal.Footer>
        </Form>
      </Modal>
    </React.Fragment>
  )
}

function getCookie (name) {
  let cookie = null
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';')
    cookie = cookies.find(cookie => cookie.trim().substring(0,name.length) === name)
    cookie = cookie.split('=')[1]
  }
  return cookie
}

export default EditModal