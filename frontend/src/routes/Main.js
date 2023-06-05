import React from 'react'
import { Stack } from 'react-bootstrap'

import PortfolioContainer from '../components/PortfolioContainer'
import SectionTemplate from '../templates/SectionTemplate'

function Main () {
  return (
    <Stack gap={0}>
      <SectionTemplate content={Home} hash={'home'} />
      <SectionTemplate content={About} hash={'about'} />
      <SectionTemplate content={Portfolio} hash={'portfolio'} />
      <SectionTemplate content={'media'} hash={'media'} />
      <SectionTemplate content={'resume'} hash={'resume'} />
      <SectionTemplate content={'contact'} hash={'contact'} />
    </Stack>
  )
}

const Home = (
  <React.Fragment>
    <h1>Hello! I am a full-stack developer.</h1>
  </React.Fragment>
)

const About = (
  <React.Fragment>
    <h1>A little bit about me:</h1>
    <p>
      I am driven by a passion for technology and a desire to make a difference.
      I found myself increasingly drawn towards the development of technology while defending clients in patent cases.
      My legal background gives me a unique perspective in my software development work,
      allowing me to approach complex problems with a strategic and analytical mindset.
      I am interested in and open to opportunities in full stack development and data engineering.
    </p>
  </React.Fragment>
)

const Portfolio = (
  <React.Fragment>
    <h1>Portfolio</h1>
    <PortfolioContainer />
  </React.Fragment>
)

export default Main