import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useOutletContext } from 'react-router-dom'

import EditModal from '../../components/account/EditModal'

function Profile (props) {
  const [ user, setUser ] = useOutletContext()
  const navigate = useNavigate()
  const [profile, setProfile] = React.useState({})

  React.useEffect(() => {
    fetch('/api/blog/user-profile')
      .then(res => {
        if (res.ok) res.json().then(setProfile)
        else navigate('login')
      })
      .catch(err => {
        console.log(err)
        navigate('login')
      })
  }, [])

  if (Object.keys(profile).length < 1) return <></>
  return (
    <Container>
      <Row>
        <Col>
          <h1>{user.first_name} {user.last_name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>@{user.username}</h2>
        </Col>
      </Row>
      <Row>
        <Col xs='auto'>
          <p>Location</p>
        </Col>
        <Col>
          <p>{profile.location ? profile.location : 'unknown'}</p>
        </Col>
      </Row>
      <Row>
        <Col xs='auto'>
          <p>About me</p>
        </Col>
        <Col>
          <p>{profile.bio}</p>
        </Col>
      </Row>
      <EditModal user={user} profile={profile} updateUser={setUser} updateProfile={setProfile} />
    </Container>
  )
}

export default Profile