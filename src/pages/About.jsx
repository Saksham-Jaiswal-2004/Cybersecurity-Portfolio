import React from 'react'
import AboutMe from '../components/AboutMe'
import Features from '../components/Features'
import Gallery from '../components/Gallery'
import Blank from '../components/Blank'
import Banner from '../components/Banner'

const About = () => {
  return (
    <div>
      <div className='h-screen flex flex-col'>
        <div className='w-full bg1'>
          <div className='md:w-1/2 w-full h-screen flex flex-col justify-end items-start py-24 bg-[rgba(0,0,0,0.7)]'>
            <h1 className='text-4xl my-0'>Hi, I'm</h1>
            <h1 className='text-5xl my-3'>Mohan Ganesh Babu Pothala</h1>
            <p className='text-xl'>Welcome to my digital fortress.</p>
          </div>
        </div>

        <div></div>
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
