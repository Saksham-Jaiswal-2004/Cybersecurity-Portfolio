import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className='h-fit my-14 flex flex-col'>
      <div className='relative md:text-6xl text-4xl my-12 flex'>
        <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:0.5}}>Let’s Protect What Matters to You</motion.h1>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col w-fit justify-center my-6 md:text-lg text-sm'>
          <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:0.5, delay:0.2}} className='my-1 md:text-2xl text:base'>Your security is personal to us. Together, we’ll safeguard your data, your dreams, and your peace of mind.</motion.p>
          <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:0.5, delay:0.2}} className='my-1'>✨ Ready to Secure Your World?</motion.p>
          <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:0.5, delay:0.4}} className='mt-5 mb-1'>• Book a Free Strategy Session to uncover hidden vulnerabilities and strengthen your defenses.</motion.p>
          <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:0.5, delay:0.4}} className='mt-1 mb-5'>• Chat with me Anytime for personalized solutions tailored to your needs.</motion.p>
          <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:0.5, delay:0.6}} className='my-1'>One click is all it takes to transform your cybersecurity strategy. Let’s make it happen!</motion.p>
        </div>
  
        <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:0.5, delay:0.8}} className='flex'>
          <Link href="/" className='md:text-xl text-lg m-2 p-2 rounded-xl button'>Reach Out</Link>
        </motion.div>
      </div>

      <div></div>
    </div>
  )
}

export default CTA
