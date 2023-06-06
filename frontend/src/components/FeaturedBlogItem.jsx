import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'

function FeaturedBlogItem (props) {
  const { post } = props
  const navigate = useNavigate()
  return (
    <Container fluid className='featured-blog-item' onClick={()=>navigate(post.slug)}>
      <h1>{post.title}</h1>
      <p>{post.content.split(' ').slice(0,10).join(' ')} ...</p>
    </Container>
  )
}

export default FeaturedBlogItem