import React from 'react'
import { motion } from "framer-motion";

const Benefits = () => {

  return (
    <div className='h-fit text-2xl' id='about'>
      <div className='md:text-6xl text-4xl my-12 flex'>
        <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}}>Why You’ll Love Working With Me</motion.h1>
      </div>

      <div className="content flex flex-col flex-wrap">
        {/* <div className='h-[200vh] flex flex-wrap'>
          <div className='h-full py-10 px-14 md:w-1/2 w-full flex flex-col justify-center'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:0.5, delay:0}} className='md:text-3xl text-xl my-8'>Comprehensive Cybersecurity Protection</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:1, delay:0.3}} className='md:text-lg text-sm my-4'>By implementing advanced security measures tailored to your needs, I ensure that your systems are safeguarded against a wide range of cyber threats. From data breaches to ransomware attacks, I create a multi-layered defense strategy that reduces vulnerabilities and helps prevent both external and internal threats. This holistic protection gives you peace of mind knowing that your business is secure around the clock.</motion.p>
          </div>
          <div className='md:h-[100vh] h-fit md:p-14 p-4 md:w-1/2 w-full md:sticky md:top-0 z-10 flex justify-center items-center'>
            <motion.img whileInView={{opacity:100}} initial={{opacity:0}} transition={{duration:1}} src="https://cdn.pixabay.com/photo/2023/07/19/06/19/ai-generated-8136172_960_720.png" alt="Benefits Image" className='md:h-[400px] h-[300px] w-[95%] rounded-2xl' />
          </div>
        </div> */}

        <div className='h-[200vh] flex flex-wrap'>
          <div className=' h-full py-10 px-14 md:w-1/2 w-full flex flex-col justify-center'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:0.5, delay:0}} className='md:text-3xl text-xl my-8'>Who I Am</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:1, delay:0.3}} className='md:text-lg text-sm my-4'>I’m a cybersecurity enthusiast and developer dedicated to building secure, efficient, and scalable digital solutions. My journey into cybersecurity began with a deep curiosity about how systems work — and more importantly, how they can be broken. Over time, this curiosity evolved into a passion for protecting digital infrastructure, understanding vulnerabilities, and designing systems that are both innovative and resilient.</motion.p>
          </div>
          <div className='md:h-[100vh] h-fit md:p-14 p-4 md:w-1/2 w-full md:sticky md:top-0 z-10 flex justify-center items-center'>
            <motion.img whileInView={{opacity:100}} initial={{opacity:0}} transition={{duration:1}} src="https://cdn.pixabay.com/photo/2023/05/18/23/22/hacker-8003396_1280.png" alt="Benefits Image" className='md:h-[400px] h-[300px] w-[95%] rounded-2xl' />
          </div>
        </div>

        <div className='h-[200vh] flex flex-wrap'>
          <div className='h-full py-10 px-14 md:w-1/2 w-full flex flex-col justify-center'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:0.5, delay:0}} className='md:text-3xl text-xl my-8'>What I Do</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:1, delay:0.3}} className='md:text-lg text-sm my-4'>I work at the intersection of security and development, creating tools and applications that merge functionality with protection. As a Lead at FOSS Club IIIT Kalyani and an Extended Core Member at GDG IIIT Kalyani, I actively contribute to fostering open-source collaboration, cybersecurity awareness, and community-driven innovation. My goal is to make technology not just smarter, but safer — because I believe true progress happens when innovation meets security.</motion.p>
          </div>
          <div className='md:h-[100vh] h-fit md:p-14 p-4 md:w-1/2 w-full md:sticky md:top-0 z-10 flex justify-center items-center'>
            <motion.img whileInView={{opacity:100}} initial={{opacity:0}} transition={{duration:1}} src="https://cdn.pixabay.com/photo/2016/11/07/12/08/cyber-security-1805632_960_720.png" alt="Benefits Image" className='md:h-[400px] h-[300px] w-[95%] rounded-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
