// import React from "react";
import "../index.css"
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='fixed h-fit bg-transparent backdrop-blur-md w-screen p-3 z-50'>
      <nav className="flex justify-between mx-6">
        <div>
          <Link href="/" className="logo text-2xl">Sahil</Link>
        </div>

        <div className="flex">
          <ul className="flex gap-8 mx-8">
            <li><Link to="home" smooth={true} duration={500} offset={-100} className="link">Home</Link></li>
            <li><Link to="experience" smooth={true} duration={500} offset={-100} className="link">Experience</Link></li>
            <li><Link to="about" smooth={true} duration={500} offset={-100} className="link">About</Link></li>
            <li><Link to="projects" smooth={true} duration={500} offset={-100} className="link">Projects</Link></li>
          </ul>
  
          <div className="flex mx-6 gap-8">
            {/* <Link to="projects" smooth={true} duration={500} offset={-100} className="button text-base border px-2 py-1 rounded-lg cursor-pointer">Say Hello</Link> */}
            <a href="https://github.com" target="_blank" className="button text-base border px-2 py-1 rounded-lg cursor-pointer">Github</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
