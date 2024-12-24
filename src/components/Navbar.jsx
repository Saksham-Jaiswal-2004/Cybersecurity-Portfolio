import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

const Navbar = () => {
  return (
    <div className='fixed h-fit bg-transparent w-screen p-3 z-50'>
      <nav className="flex justify-between mx-6">
        <div>
          <Link href="/" className="logo text-2xl">Mohan</Link>
        </div>

        <div className="flex">
          <ul className="flex gap-8 mx-8">
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/certifications" className="link">Certifications</Link></li>
            <li><Link to="/experience" className="link">Experience</Link></li>
            <li><Link to="/gallery" className="link">Gallery</Link></li>
            <li><Link to="/blog" className="link">Blog</Link></li>
          </ul>
  
          <div className="flex mx-6 gap-8">
            <Link to="https://github.com" target="_blank" className="button text-base border px-2 py-1 rounded-lg">Resume</Link>
            <Link to="https://github.com" target="_blank" className="button text-base border px-2 py-1 rounded-lg">Github</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
