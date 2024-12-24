import React from 'react'
import AboutMe from '../components/AboutMe'
import Features from '../components/Features'
import Gallery from '../components/Gallery'
import Blank from '../components/Blank'
import Banner from '../components/Banner'

const About = () => {
  return (
    <div>
      <div className='pt-52 h-screen'>
        About
      </div>

      <Blank/>
      <AboutMe/>
      <Blank/>
      <Features/>
      <Banner/>
      <Gallery/>
    </div>
  )
}

export default About
