import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Star, StarFill } from 'react-bootstrap-icons'

function FavBtn (props) {
  const {
    fill = false,
    onClick = console.log('click')
  } = props

  return (
    <Button onClick={onClick} style={{width: '8rem'}}>
      <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        { fill ? <StarFill className='me-2' /> : <Star className='me-2' /> }
        { fill ? 'saved' : 'save' }
      </Container>
    </Button>
  )
}

export default FavBtn