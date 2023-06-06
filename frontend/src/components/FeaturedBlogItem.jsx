import React from 'react'
import { Container } from 'react-bootstrap'

function FeaturedBlogItem (props) {
  const { post } = props
  return (
    <Container fluid className='featured-blog-item'>
      <h1>{post.title}</h1>
      <p>{post.content.split(' ').slice(0,10).join(' ')} ...</p>
    </Container>
  )
}

export default FeaturedBlogItem