import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Account () {
  const navigate = useNavigate()
  const [user, setUser] = React.useState(null)
  const clearUser = () => setUser(null)

  React.useEffect(() => {
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
  }, [])

  function goToLogin () {
    clearUser()
    navigate('login')
  }

  return (
    <Outlet context={[user, setUser]} />
  )
}

export default Account