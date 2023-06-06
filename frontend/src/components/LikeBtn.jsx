import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { HandThumbsUp, HandThumbsUpFill } from 'react-bootstrap-icons'

function LikeBtn (props) {
  const {
    fill = false,
    onClick = console.log('click')
  } = props

  return (
    <Button onClick={onClick} style={{width: '8rem'}}>
      <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        { fill ? <HandThumbsUpFill className='me-2' /> : <HandThumbsUp className='me-2' /> }
        { fill ? 'liked' : 'like' }
      </Container>
    </Button>
  )
}

export default LikeBtn