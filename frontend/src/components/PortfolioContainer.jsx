import React from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'

import ProjectCard from './ProjectCard'
import CONTENT from '../content.json'

function PortfolioContainer (props) {
  const [page, setPage] = React.useState(0)
  const projects = CONTENT.projects
  const num_per_page = 3
  
  const pageItems = []
  for (let i=0; i<projects.length / num_per_page; ++i) {
    pageItems.push(
      <Pagination.Item
        key={i}
        active={page === i}
        onClick={()=>setPage(i)}
        >
          {i + 1}
      </Pagination.Item>
    )
  }

  const projectCardCols = projects.map((project, idx) => (
    <Col key={idx} xs={12} md={12 / num_per_page} style={{display: 'flex', justifyContent: 'center'}}>
      <ProjectCard key={project.slug} project={project} />
    </Col>
  ))

  return (
    <Container fluid>
      <Row style={{height: 'max-content'}}>
        {projectCardCols.filter(card => card.key >= page * 3 && card.key < (page + 1) * 3)}
      </Row>
      <Row style={{paddingTop: '1rem'}}>
        <Col xs={12} style={{display: 'flex', justifyContent: 'center'}}>
          <Pagination>{pageItems}</Pagination>
        </Col>
      </Row>
    </Container>
  )
}

export default PortfolioContainer