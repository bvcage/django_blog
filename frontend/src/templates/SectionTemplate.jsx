import React from 'react'
import { Container } from 'react-bootstrap'
import useMeasure from 'react-use-measure'

function SectionTemplate (props) {
  const [ref, dims] = useMeasure({scroll: true})
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (dims.top <= window.innerHeight/2 && dims.top > 0 - (window.innerHeight/2)) {
        window.location.replace('#' + props.hash)
      }
    }, 50)
    return () => clearTimeout(timer)
  }, [dims, props])

  return (
    <Container fluid id={props.hash} className='section' ref={ref}>
      <p>{props.content}</p>
    </Container>
  )
}

export default SectionTemplate