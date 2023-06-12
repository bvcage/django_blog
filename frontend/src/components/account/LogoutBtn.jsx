import React from 'react'
import { Button } from 'react-bootstrap'

function LogoutBtn () {
  
  function logout () {
    fetch('/api/blog/logout')
  }

  return (
    <Button onClick={logout}>logout</Button>
  )
}

export default LogoutBtn