import React from 'react'
import { Container } from 'react-bootstrap'

import LoginForm from '../components/account/LoginForm'
import SignupForm from '../components/account/SignupForm'
import UserProfile from '../components/account/UserProfile'

function UserAccount () {
  const [showSignup, setShowSignup] = React.useState(false)
  const [user, setUser] = React.useState({})
  const clearUser = () => setUser({})

  React.useEffect(() => {
    fetch('/api/blog/user')
      .then(res => {
        if (res.ok) res.json().then(data => {
          if (!!data.user) setUser(data.user)
          else setUser({})
        })
        else {
          console.log(res)
          setUser({})
          res.json().then(console.log)
        }
      })
      .catch(err => {
        console.log(err)
        setUser({})
      })
  }, [])

  return (
    <Container>
      { 
        Object.keys(user).length > 0
          ? <UserProfile user={user} onLogout={clearUser} />
          : showSignup
            ? <SignupForm setCurrentUser={setUser} showLogin={()=>setShowSignup(false)} />
            : <LoginForm setCurrentUser={setUser} showSignup={()=>setShowSignup(true)} />
      }
    </Container>
  )
}

export default UserAccount