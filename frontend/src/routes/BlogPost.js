import React from 'react'
import { Col, Container, Placeholder, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import LikeBtn from '../components/LikeBtn'

function BlogPost (props) {
  const location = useLocation()
  const slug = location.pathname.split('/').pop()
  const [liked, setLiked] = React.useState(false)
  const [loaded, setLoaded] = React.useState(false)
  const [post, setPost] = React.useState({})

  React.useEffect(() => {
    fetch('/api/blog/'+slug).then(res => res.json().then(post => {
      setPost(post)
      setLoaded(true)
    })).catch(err => setLoaded(true))
  }, [slug])

  const toggleLike = () => {setLiked(!liked)}

  const Skeleton = (
    <Container>
      <Placeholder as='h1' xs={6} />
      <br />
      <Placeholder as='h4' xs={4} />
      <br />
      <Placeholder as='h6' xs={4} />
    </Container>
  )

  if (!loaded) return Skeleton
  if (Object.keys(post).length < 1) return <>error loading this page</>
  return (
    <Container>
      <h1>{post.title}</h1>
      <h4>@{post.author.username}</h4>
      <h6>{new Date(post.created_TS).toLocaleString()}</h6>
      {post.content}
      <Row className='mt-2'>
        <Col>
          <LikeBtn fill={liked} onClick={toggleLike} />
        </Col>
      </Row>
    </Container>
  )
}

export default BlogPost