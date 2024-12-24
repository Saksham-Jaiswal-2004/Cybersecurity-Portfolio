import React from 'react'
import { motion } from "framer-motion";

const Benefits = () => {

  return (
    <div className='h-fit text-2xl'>
      <div className='md:text-6xl text-4xl my-12 flex'>
        <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}}>Why You’ll Love Working With Me</motion.h1>
      </div>

      <div className="content flex flex-col flex-wrap">
        <div className='h-[200vh] flex flex-wrap'>
          <div className='h-full py-10 px-14 md:w-1/2 w-full flex flex-col justify-center'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:0.5, delay:0}} className='md:text-3xl text-xl my-8'>Comprehensive Cybersecurity Protection</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:1, delay:0.3}} className='md:text-lg text-sm my-4'>By implementing advanced security measures tailored to your needs, I ensure that your systems are safeguarded against a wide range of cyber threats. From data breaches to ransomware attacks, I create a multi-layered defense strategy that reduces vulnerabilities and helps prevent both external and internal threats. This holistic protection gives you peace of mind knowing that your business is secure around the clock.</motion.p>
          </div>
          <div className='md:h-[100vh] h-fit md:p-14 p-4 md:w-1/2 w-full md:sticky md:top-0 z-10 flex justify-center items-center'>
            <motion.img whileInView={{opacity:100}} initial={{opacity:0}} transition={{duration:1}} src="https://cdn.pixabay.com/photo/2023/07/19/06/19/ai-generated-8136172_960_720.png" alt="Benefits Image" className='md:h-[400px] h-[300px] w-[95%] rounded-2xl' />
          </div>
        </div>

        <div className='h-[200vh] flex flex-wrap'>
          <div className=' h-full py-10 px-14 md:w-1/2 w-full flex flex-col justify-center'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:0.5, delay:0}} className='md:text-3xl text-xl my-8'>Reduced Financial Risk and Downtime</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:1, delay:0.3}} className='md:text-lg text-sm my-4'>Cyberattacks can lead to significant financial losses, operational disruptions, and legal consequences. By identifying and addressing security gaps proactively, I help you avoid the expensive costs of recovery and minimize downtime caused by cyber incidents. This reduces the impact on your business and ensures your operations run smoothly, even in the face of potential threats.</motion.p>
          </div>
          <div className='md:h-[100vh] h-fit md:p-14 p-4 md:w-1/2 w-full md:sticky md:top-0 z-10 flex justify-center items-center'>
            <motion.img whileInView={{opacity:100}} initial={{opacity:0}} transition={{duration:1}} src="https://cdn.pixabay.com/photo/2023/05/18/23/22/hacker-8003396_1280.png" alt="Benefits Image" className='md:h-[400px] h-[300px] w-[95%] rounded-2xl' />
          </div>
        </div>

        <div className='h-[200vh] flex flex-wrap'>
          <div className='h-full py-10 px-14 md:w-1/2 w-full flex flex-col justify-center'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:0.5, delay:0}} className='md:text-3xl text-xl my-8'>Enhanced Client Trust and Reputation</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:1, delay:0.3}} className='md:text-lg text-sm my-4'>In today’s digital world, clients and partners expect businesses to prioritize data privacy and security. By strengthening your cybersecurity, you not only protect your sensitive data but also build trust with your clients and stakeholders. A strong security posture demonstrates your commitment to safeguarding personal information, which can boost your reputation, increase customer loyalty, and help you attract new business.</motion.p>
          </div>
          <div className='md:h-[100vh] h-fit md:p-14 p-4 md:w-1/2 w-full md:sticky md:top-0 z-10 flex justify-center items-center'>
            <motion.img whileInView={{opacity:100}} initial={{opacity:0}} transition={{duration:1}} src="https://cdn.pixabay.com/photo/2016/11/07/12/08/cyber-security-1805632_960_720.png" alt="Benefits Image" className='md:h-[400px] h-[300px] w-[95%] rounded-2xl' />
          </div>
        </div>

        <div className='h-[200vh] flex flex-wrap'>
          <div className='h-full py-10 px-14 md:w-1/2 w-full flex flex-col justify-center'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:0.5, delay:0}} className='md:text-3xl text-xl my-8'>Ongoing Support and Proactive Monitoring</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-50}} transition={{duration:1, delay:0.3}} className='md:text-lg text-sm my-4'>Cybersecurity is an ongoing process, not a one-time fix. I provide continuous monitoring and proactive updates to ensure your systems are always up to date and resilient to new threats. With round-the-clock support and timely responses to potential issues, you can focus on growing your business while I handle the technical side of keeping your data and systems secure.</motion.p>
          </div>
          <div className='md:h-[100vh] h-fit md:p-14 p-4 md:w-1/2 w-full md:sticky md:top-0 z-10 flex justify-center items-center'>
            <motion.img whileInView={{opacity:100}} initial={{opacity:0}} transition={{duration:1}} src="https://cdn.pixabay.com/photo/2024/09/30/16/48/ai-generated-9086228_960_720.png" alt="Benefits Image" className='md:h-[400px] h-[300px] w-[95%] rounded-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
