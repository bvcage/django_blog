import React from 'react'
import { Button } from 'react-bootstrap'

function CheckUsernameBtn (props) {
  const {existing, requested} = props
  const [isAvailable, setIsAvailable] = React.useState(null)
  const input = document.getElementById('username-input')

  React.useEffect(() => {
    if (!!input) input.addEventListener('change', (e) => setIsAvailable(null))
  }, [input])

  function checkUsername (e) {
    if (!!existing && existing.username === requested.username) {
      document.getElementById('username-input').setCustomValidity('')
      setIsAvailable(true)
    } else {
      fetch('/api/blog/user/'+requested.username)
        .then(res => {
          if (res.status === 404) {
            document.getElementById('username-input').setCustomValidity('')
            setIsAvailable(true)
          }
          else {
            document.getElementById('username-input').setCustomValidity('Username already taken.')
            setIsAvailable(false)
          }
        })
    }
  }

  return (
    <Button
      variant={ isAvailable ? 'success' : isAvailable === false ? 'danger' : 'outline-secondary' }
      onClick={checkUsername}
      >
        { isAvailable ? 'Available' : isAvailable === false ? 'Not available' : 'Check availability' }
    </Button>
  )
}

export default CheckUsernameBtn