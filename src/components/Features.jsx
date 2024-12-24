import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Features = () => {      

  return (
    <div className='h-fit text-2xl my-32 flex flex-col'>
      <div className='p2 md:text-6xl text-4xl my-10 text-left flex'>
        <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='features-title'>Key Security Solutions Just for You</motion.h1>
      </div>

      <div className='pSection flex flex-wrap justify-center items-center mt-10 mb-4'>
        <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:20}} transition={{duration:1, delay:0}} className="card1 p1 md:w-[22%] w-[80%] h-[400px] overflow-hidden rounded-2xl">
            <h1 className='md:text-2xl text-xl my-3'>Comprehensive Security Assessment</h1>
            <p className='text-lg'>Every organization has unique vulnerabilities. I begin by conducting an in-depth evaluation of your systems to uncover weak spots and potential threats, using advanced tools and proven methodologies.</p>
        </motion.div>

        <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:20}} transition={{duration:1, delay:0.2}} className="card1 p2 md:w-[22%] w-[80%] h-[400px] overflow-hidden rounded-2xl">
            <h1 className='md:text-2xl text-xl my-3'>Proactive Threat Management</h1>
            <p className='text-lg'>Stay ahead of cyber threats with constant monitoring, intrusion detection systems, and incident response plans tailored to minimize damage in case of attacks.</p>
        </motion.div>

        <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:20}} transition={{duration:1, delay:0.4}} className="card1 p3 md:w-[22%] w-[80%] h-[400px] overflow-hidden rounded-2xl">
            <h1 className='md:text-2xl text-xl my-3'>Ethical Hacking and Penetration Testing</h1>
            <p className='text-lg'>Using real-world attack simulations, I identify vulnerabilities in your systems and provide actionable solutions to mitigate risks, ensuring you are one step ahead of malicious hackers.</p>
        </motion.div>

        <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:20}} transition={{duration:1, delay:0.6}} className="card1 p4 md:w-[22%] w-[80%] h-[400px] overflow-hidden rounded-2xl">
            <h1 className='md:text-2xl text-xl my-3'>Data Privacy and Compliance</h1>
            <p className='text-lg'>With expertise in global data protection regulations like GDPR and HIPAA, I ensure your business adheres to standards while safeguarding sensitive customer and organizational information.</p>
        </motion.div>
      </div>

      <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:0.5, delay:0.8}} className='flex w-full justify-end'>
          <Link href="/" className='md:text-xl text-lg m-2 p-2 rounded-lg button'>Protect your Data Now</Link>
      </motion.div>
    </div>
  )
}

export default Features
