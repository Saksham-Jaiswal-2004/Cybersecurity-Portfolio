import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Features = () => {      

  return (
    <div className='h-fit text-2xl my-32 flex flex-col' id='experience'>
      <div className='p2 md:text-6xl text-4xl my-10 text-left flex'>
        <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='features-title'>What I’ve Been Building & Leading</motion.h1>
      </div>

      <div className='pSection flex flex-wrap justify-center items-center mt-10 mb-4'>
        <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:20}} transition={{duration:1, delay:0}} className="card1 p1 md:w-[22%] w-[80%] h-[420px] overflow-hidden rounded-2xl">
            <p className='text-xs my-2'>October 2025 - Present</p>
            <h1 className='md:text-2xl text-xl my-3'>GDG IIIT Kalyani - Extended Core Member</h1>
            <ul className='text-sm gap-3 flex flex-col'>
              <li>Contributing to community-driven events and initiatives focused on Google technologies and open innovation.</li>
              <li>Assisting in organizing tech sessions, hackathons, and security-focused workshops to engage students in modern development and cybersecurity practices.</li>
              <li>Collaborating with developers and mentors to foster a culture of learning and exploration within the GDG community.</li>
            </ul>
        </motion.div>

        <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:20}} transition={{duration:1, delay:0.2}} className="card1 p2 md:w-[22%] w-[80%] h-[420px] overflow-hidden rounded-2xl">
            <p className='text-xs my-2'>September 2025 - Present</p>
            <h1 className='md:text-2xl text-xl my-3'>FOSS Club IIIT Kalyani - Lead</h1>
            <ul className='text-sm gap-3 flex flex-col'>
              <li>Leading the open-source community at IIIT Kalyani with a focus on promoting open collaboration and secure coding practices.</li>
              <li>Mentoring students on contributing to open-source projects and integrating cybersecurity awareness in development workflows.</li>
              <li>Organizing sessions, hands-on events, and capture-the-flag (CTF) challenges to encourage participation in ethical hacking and FOSS contributions.</li>
            </ul>
        </motion.div>

        <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:20}} transition={{duration:1, delay:0.4}} className="card1 p3 md:w-[22%] w-[80%] h-[420px] overflow-hidden rounded-2xl">
            <p className='text-xs my-2'>October 2025 - Present</p>
            <h1 className='md:text-2xl text-xl my-3'>Dummy Experience</h1>
            <ul className='text-sm gap-3 flex flex-col'>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat adipisci porro laudantium, quas a animi cum dicta ut illum. Delectus.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quibusdam delectus tenetur.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt cum aliquid, voluptas assumenda saepe totam.</li>
            </ul>
        </motion.div>
      </div>

      {/* <motion.div whileInView={{opacity:100, y:0}} initial={{opacity:0, y:50}} transition={{duration:0.5, delay:0.8}} className='flex w-full justify-end'>
          <Link href="/" className='md:text-xl text-lg m-2 p-2 rounded-lg button'>Protect your Data Now</Link>
      </motion.div> */}
    </div>
  )
}

export default Features
