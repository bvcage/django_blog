import React from 'react'
import { Button } from 'react-bootstrap'

function LogoutBtn (props) {
  const { onLogout } = props
  
  function logout () {
    fetch('/api/blog/logout').then(onLogout)
  }

  return (
    <Button onClick={logout}>logout</Button>
  )
}

export default LogoutBtn