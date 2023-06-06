import React from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

function BlogPost (props) {
  const location = useLocation()
  const slug = location.pathname.split('/').pop()
  const [post, setPost] = React.useState({})

  React.useEffect(() => {
    fetch('/api/blog/'+slug).then(res => res.json().then(setPost))
  }, [slug])

  return (
    <Container>
      <h1>{post.title}</h1>
      <h4>@{post.author.username}</h4>
      <h6>{new Date(post.created_TS).toLocaleString()}</h6>
      {post.content}
    </Container>
  )
}

export default BlogPost