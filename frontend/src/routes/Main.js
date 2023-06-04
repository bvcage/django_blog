import React from 'react'
import { Stack } from 'react-bootstrap'
import SectionTemplate from '../templates/SectionTemplate'

function Main () {
  return (
    <Stack gap={0}>
      <SectionTemplate content={'home'} hash={'home'} />
      <SectionTemplate content={'about'} hash={'about'} />
      <SectionTemplate content={'portfolio'} hash={'portfolio'} />
      <SectionTemplate content={'media'} hash={'media'} />
      <SectionTemplate content={'resume'} hash={'resume'} />
      <SectionTemplate content={'contact'} hash={'contact'} />
    </Stack>
  )
}

export default Main