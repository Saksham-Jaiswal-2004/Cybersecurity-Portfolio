import React from 'react'
import { motion } from "framer-motion";
import HIW from "../assets/Hiw.png"

const Hiw = () => {
  return (
    <div className='h-fit text-2xl w-screen overflow-hidden' id='projects'>
      <div className='relative md:text-6xl text-4xl my-12 flex'>
        <motion.h1 whileInView={{opacity:100, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}}>Tech Arsenal</motion.h1>
      </div>

      <div className='flex flex-wrap justify-center items-center'>
        <div className='flex flex-col justify-center items-center md:w-[30%] w-full'>
          <div className='m-2 p-2 flex flex-col justify-start items-center h-[400px] w-[350px]'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='md:text-2xl text-xl my-6'>Project 1</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1, delay:0.2}} className='md:text-lg text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime cum voluptatibus nam. Nulla delectus labore neque magnam ipsa minima temporibus excepturi! Vero sunt eaque nam culpa exercitationem expedita molestiae temporibus, ipsa maiores officia ducimus adipisci odit voluptatibus incidunt ab vel.</motion.p>
          </div>
          <div className='m-2 p-2 flex flex-col justify-start items-center h-[400px] w-[350px]'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='md:text-2xl text-xl my-6'>Project 2</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1, delay:0.2}} className='md:text-lg text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, cumque autem pariatur molestiae sit dolores ea, corrupti ducimus placeat delectus minus aspernatur tempore sint. Laborum, nulla sapiente amet repellat aut sequi eaque saepe facere nihil, dignissimos porro! Reprehenderit consequatur voluptatum quisquam, labore, sint aliquid quis quod, atque voluptate similique vero.</motion.p>
          </div>
        </div>

        <div className='m-2 p-2 md:w-[30%] w-full h-[800px] flex justify-center items-center'>
          <motion.img whileInView={{opacity:100, scale:1}} initial={{opacity:0, scale:0.5}} transition={{duration:1.2}} src={HIW} alt="HIW Image" className='h-[250px] rounded-xl'/>
        </div>

        <div className='flex flex-col justify-center items-center md:w-[30%] w-full'>
          <div className='m-2 p-2 flex flex-col justify-start items-center h-[400px] w-[350px]'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='md:text-2xl text-xl my-6'>Project 3</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:100}} transition={{duration:1, delay:0.2}} className='md:text-lg text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, molestiae. Non neque consectetur fuga impedit dolorum. Obcaecati animi aliquid maiores odio similique, cupiditate architecto veniam, placeat laboriosam quidem quo. Ipsum possimus aut quos expedita tempore natus ad assumenda consequuntur asperiores quam. Recusandae ipsam consectetur iure.</motion.p>
          </div>
          <div className='m-2 p-2 flex flex-col justify-start items-center h-[400px] w-[350px]'>
            <motion.h1 whileInView={{opacity:100, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='md:text-2xl text-xl my-6'>Project 4</motion.h1>
            <motion.p whileInView={{opacity:100, x:0}} initial={{opacity:0, x:100}} transition={{duration:1, delay:0.2}} className='md:text-lg text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quaerat nesciunt, facere dolore, voluptas quas temporibus optio mollitia rerum voluptatum molestias veniam illo. Vitae temporibus exercitationem ducimus velit perferendis voluptatum ab totam aut! Similique, culpa, praesentium dolore tempora numquam aliquam impedit labore dolorem delectus aspernatur minus excepturi quasi perspiciatis quis expedita earum.</motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hiw