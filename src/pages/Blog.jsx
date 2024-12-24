import React from 'react'
import Features from '../components/Features'
import Gallery from '../components/Gallery'
import Blank from '../components/Blank'
import Banner from '../components/Banner'

const Blog = () => {
  return (
    <div>
      <div className="pt-52 h-screen">
        Blog
      </div>

      <Blank/>
      <Features/>
      <Banner/>
      <Gallery/>
    </div>
  )
}

export default Blog
