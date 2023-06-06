import React from 'react'
import { Carousel, Col, Container, Row, Stack } from 'react-bootstrap'
import FeaturedBlogItem from '../components/FeaturedBlogItem'

function Blog () {
  const [featured, setFeatured] = React.useState([])

  React.useEffect(() => {
    fetch('/api/blog/').then(res => res.json().then(setFeatured))
  }, [])

  const BlogCarouselItems = !!featured[0]
    ? featured.map(item => <Carousel.Item><FeaturedBlogItem post={item} /></Carousel.Item>)
    : null
  
  return (
    <Container>
      <Carousel className='blog-carousel'>
        {BlogCarouselItems}
      </Carousel>
      <Row>
        <Col>hello</Col>
        <Col xs={12} md={3}>
          <Stack>
            <Container className='blog-nav-well'>[tags to go here]</Container>
            <Container className='blog-nav-well'>[categories to go here]</Container>
            <Container className='blog-nav-well'>[dates to go here]</Container>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default Blog