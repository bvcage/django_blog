import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

import LogoutBtn from '../../components/account/LogoutBtn'
import EditModal from '../../components/account/EditModal'

function Profile (props) {
  const location = useLocation()
  const navigate = useNavigate()
  const [profile, setProfile] = React.useState({})
  const [user, setUser] = React.useState({})
  const clearUser = () => setUser({})

  React.useEffect(() => {
    fetch('/api/blog/user-profile')
      .then(res => {
        if (res.ok) res.json().then(setProfile)
        else goToLogin()
      })
      .catch(err => {
        console.log(err)
        goToLogin()
      })
  }, [])

  React.useEffect(() => {
    if (!!location.state && !!location.state.user) {
      setUser(location.state.user)
    } else {
      fetch('/api/blog/user')
        .then(res => {
          if (res.ok) res.json().then(data => {
            if (!!data.user) setUser(data.user)
            else goToLogin()
          })
          else goToLogin()
        })
        .catch(err => {
          console.log(err)
          goToLogin()
        })
    }
  }, [location.state])

  function goToLogin () {
    clearUser()
    navigate('login')
  }

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
      <LogoutBtn onLogout={clearUser} />
    </Container>
  )
}

export default Profile