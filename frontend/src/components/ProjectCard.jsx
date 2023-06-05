import React from 'react'
import { Card } from 'react-bootstrap'

function ProjectCard (props) {
  const { project } = props
  return (
    <Card style={{width: '18rem'}} onClick={() => window.open(project.github, '_blank')} className='project-card'>
      <Card.Img variant='top' src={project.image} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.summary}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard