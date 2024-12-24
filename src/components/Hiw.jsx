import React from 'react'
import { motion } from "framer-motion";
import HIW from "../assets/Hiw.png"

const Hiw = () => {
  return (
    <div className='h-fit text-2xl w-screen overflow-hidden'>
      <div className='relative md:text-6xl text-4xl my-12 flex'>
        <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}}>How We Protect What Matters Most</motion.h1>
      </div>

      <div className='flex flex-wrap justify-center items-center'>
        <div className='flex flex-col justify-center items-center md:w-[30%] w-full'>
          <div className='m-2 p-2 flex flex-col justify-start items-center h-[400px] w-[350px]'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='md:text-2xl text-xl my-6'>Comprehensive Assessment & Risk Evaluation</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1, delay:0.2}} className='md:text-lg text-base'>We begin by thoroughly assessing your current digital infrastructure. This includes identifying vulnerabilities, evaluating potential threats, and understanding your specific business needs. Our goal is to understand your cybersecurity landscape to develop a personalized protection plan that addresses all your risk areas.</motion.p>
          </div>
          <div className='m-2 p-2 flex flex-col justify-start items-center h-[400px] w-[350px]'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='md:text-2xl text-xl my-6'>Customized Cybersecurity Strategy</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1, delay:0.2}} className='md:text-lg text-base'>Based on our assessment, we design a cybersecurity strategy tailored to your business. This includes a combination of advanced firewalls, encryption, intrusion detection systems (IDS), endpoint security, and more. The strategy is customized to address your specific risks, ensuring robust protection without unnecessary complexity.</motion.p>
          </div>
        </div>

        <div className='m-2 p-2 md:w-[30%] w-full h-[800px] flex justify-center items-center'>
          <motion.img whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:0.5}} transition={{duration:1.2}} src={HIW} alt="HIW Image" className='h-[250px] rounded-xl'/>
        </div>

        <div className='flex flex-col justify-center items-center md:w-[30%] w-full'>
          <div className='m-2 p-2 flex flex-col justify-start items-center h-[400px] w-[350px]'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='md:text-2xl text-xl my-6'>Proactive Monitoring & Threat Detection</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:100}} transition={{duration:1, delay:0.2}} className='md:text-lg text-base'>Once your cybersecurity measures are in place, we provide continuous monitoring. Our team uses advanced tools to detect potential threats before they escalate, allowing us to address them quickly and prevent any damage. This proactive approach ensures that your systems stay secure 24/7.</motion.p>
          </div>
          <div className='m-2 p-2 flex flex-col justify-start items-center h-[400px] w-[350px]'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='md:text-2xl text-xl my-6'>Ongoing Updates & Incident Response</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:100}} transition={{duration:1, delay:0.2}} className='md:text-lg text-base'>Cyber threats evolve, and so should your security. We provide regular updates and patches to keep your systems resilient to new threats. Additionally, in the event of a cyberattack or breach, our incident response team is ready to act swiftly, minimizing damage and ensuring a quick recovery.</motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hiw