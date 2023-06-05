import React from 'react'
import { Stack } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function Socials (props) {
  return (
    <Stack gap={3} direction={window.innerWidth > 400 ? 'vertical' : 'horizontal'} className={window.innerWidth > 400 ? 'static-left' : 'static-footer'}>
      <Link to='https://www.linkedin.com/in/bvcage' target='_blank'>
        <Icon.Linkedin size={30} color='black' />
      </Link>
      <Link to='https://www.github.com/bvcage' target='_blank'>
        <Icon.Github size={30} color='black' />
      </Link>
      <Link to='https://www.medium.com/@bvcage' target='_blank'>
        <Icon.Medium size={30} color='black' />
      </Link>
    </Stack>
  )
}

export default Socials