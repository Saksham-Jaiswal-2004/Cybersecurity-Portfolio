import React from 'react'
import { motion } from "motion/react"
import { Link } from "react-router-dom";
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { CONTACT } from '../constants'

const Footer = () => {
  return (
    <div className='h-fit p-8 pb-0 bg-[#161616] flex flex-col flex-wrap'>
      <div className='flex flex-wrap h-fit'>
        <div className='flex flex-wrap justify-start h-fit md:w-1/4 w-full my-1'>
          <div className=' flex flex-col mx-4 text-left h-fit w-full'>
              <motion.p whileInView={{opacity:100, y:0}} initial={{opacity:0, y:10}} transition={{duration:1}} className='logo my-3 md:text-4xl tracking-tight text-3xl'>Mohan Ganesh</motion.p>
  
              <motion.div whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='flex items-center justify-start'>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><FaPhoneSquareAlt className='text-xl rounded-xl'/></a>
                <p className="my-4 text-lg max-flex:text-base"><a href="https://wa.me/" target="_blank" rel="noopener noreferrer"> - 11111-11111</a></p>
              </motion.div>
  
              <motion.div whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.4}} className='flex items-center justify-start'>
                <a href="mailto:" target="_blank" rel="noopener noreferrer"><MdEmail className='text-xl'/></a>
                <p className="my-4 text-lg max-flex:text-base"><a href="mailto:" target="_blank" rel="noopener noreferrer"> - abcdexample@gmail.com</a></p>
              </motion.div>
          
            <div className='my-4 flex flex-wrap items-center justify-start gap-4 text-4xl max-flex:text-base: w-full'>
                <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.0}} href="" target="_blank" rel="noopener noreferrer"><FaGithub href='' className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1 hover:text-[#0d6e6e]'/></motion.a>
                <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.3}} href="" target="_blank" rel="noopener noreferrer"><FaLinkedin href='' className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1.5 hover:text-[#0d6e6e]'/></motion.a>
                <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.6}} href="" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1 hover:text-[#0d6e6e]'/></motion.a>
                <motion.a whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.9}} href="" target="_blank" rel="noopener noreferrer"><AiFillInstagram className='mx-2 transition-all ease-in-out duration-400 hover:-translate-y-1 hover:text-[#0d6e6e]'/></motion.a>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap justify-center gap-10 h-fit md:w-3/4 w-full md:p-10 p-4 footerLink'>
          <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.0, delay:0}}>
            <ul className='flex flex-col justify-center items-center w-[110px] h-fit'>
              <li className='font-bold text-lg'>Home</li>
              <li>Features</li>
              <li>Benefits</li>
              <li>How it Works</li>
              <li>Gallery</li>
              <li>CTA</li>
            </ul>
          </motion.div>

          <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.0, delay:0.2}}>
            <ul className='flex flex-col justify-center items-center w-[100px] h-fit'>
              <li>About</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </motion.div>

          <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.0, delay:0.4}}>
            <ul className='flex flex-col justify-center items-center w-[100px] h-fit'>
              <li>Certifications</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </motion.div>

          <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.0, delay:0.6}}>
            <ul className='flex flex-col justify-center items-center w-[100px] h-fit'>
              <li>Experience</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </motion.div>

          <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.0, delay:0.8}}>
            <ul className='flex flex-col justify-center items-center w-[100px] h-fit'>
              <li>Gallery</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </motion.div>

          <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1.0, delay:1}}>
            <ul className='flex flex-col justify-center items-center w-[100px] h-fit'>
              <li>Blog</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className='w-full flex flex-col justify-center items-center'>
        <p className='md:text-lg text-[8px] m-0'>© 2024 Mohan Ganesh | All Rights Reserved | Made with ♥ by <a href="https://www.sakshamjaiswal.netlify.app" target='__blank'>Saksham Jaiswal</a></p>
      </div>
    </div>
  )
}

export default Footer
