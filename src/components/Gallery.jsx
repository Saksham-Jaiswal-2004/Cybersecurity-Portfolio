import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div className='h-fit flex flex-col my-32'>
      <div className='md:text-6xl text-4xl my-12 flex'>
        <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}}>Behind the Firewall: Cyber Perspectives</motion.h1>
      </div> 

      <div className='flex flex-wrap h-fit p-4 my-14 w-full justify-center items-center'>
        <motion.img whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1, delay: 0.0}} src="https://i.pinimg.com/736x/b5/f9/bc/b5f9bc12e54ea7f5a37c3ca6697af891.jpg" alt="Gallery Image" className='rounded-xl mx-2 h-[350px] w-[340px]'/>
        <motion.img whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1, delay: 0.2}} src="https://i.pinimg.com/736x/b0/d3/80/b0d3800e35d7f8da8335b92689a1ba10.jpg" alt="Gallery Image" className='rounded-xl mx-2 h-[350px] w-[340px]'/>
        <motion.img whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1, delay: 0.4}} src="https://i.pinimg.com/736x/f7/37/cf/f737cf021428fc29d615a3690f2c274a.jpg" alt="Gallery Image" className='rounded-xl mx-2 h-[350px] w-[340px]'/>
        <motion.img whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:1, delay: 0.6}} src="https://i.pinimg.com/736x/77/19/c0/7719c0599187c1467f839f07da066a29.jpg" alt="Gallery Image" className='rounded-xl mx-2 h-[350px] w-[340px]'/>
      </div>

      <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:30}} transition={{duration:1, delay:0.7}} className='w-full flex justify-end px-8'>
        <Link href="/" className='md:text-lg text-base p-2 rounded-xl button'>Enter the Cyber Vault</Link>
      </motion.div>
    </div>
  )
}

export default Gallery