import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function AuthorInfo (props) {
  const { author } = props
  return (
    <Container className='author-info'>
      <Row>
        <Col xs={12} md={4}>
          <h4>
            {author.first_name} {author.last_name}
          </h4>
          <h6>
            @{author.username}
          </h6>
        </Col>
        <Col xs={12} md={8}>
          {author.profile.bio}
        </Col>
      </Row>
    </Container>
  )
}

export default AuthorInfo