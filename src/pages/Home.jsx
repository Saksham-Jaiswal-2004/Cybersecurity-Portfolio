import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../index.css"
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Hiw from '../components/Hiw';
import Blank from '../components/Blank';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const container = useRef();

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to(".hero", {
              scrollTrigger: {
                trigger: ".hero",
                scrub: true,
                pin: true,
                start: "center center",
                end: "bottom -20%",
                toggleClass: "active",
                ease: "power2"
              }
            });
            
            gsap.to(".hero__image", {
              scrollTrigger: {
                trigger: ".hero",
                scrub: 0.5,
                start: "top bottom",
                end: "bottom -100%",
                ease: "power2"
              },
              y: "-30%"
            });

            gsap.fromTo(".hero__image",
              { opacity: 0 },
              {
                opacity: 1,
                delay: 0,
                duration: 1.2,
              }
            );
        },
    );

  return (
    <div>
      <div className='h-screen w-full container hero z-1'>
        <div className="hero__inner">
          <div className="hero__images">
            <img src="https://cdn.pixabay.com/photo/2017/12/26/21/19/circle-3041437_1280.jpg" alt="" className="hero__image opacity-90" />
            <div className="overlay"></div>
          </div>
  
          <div className="hero__content flex flex-col">
            <div className="hero__headline">
              <span className='md:text-7xl text-3xl'>Mohan Ganesh Babu Pothala</span>
            </div>
            <div className="hero__sub">
              <span className='md:text-2xl text-sm'>Cybersecurity Expert | Protecting Digital Frontiers</span>
            </div>
          </div>
        </div>
      </div>

      <Blank/>
      <Features/>
      <Blank/>
      <Benefits/>
      <Blank/>
      <Hiw/>
      <Banner/>
      <Gallery/>
    </div>
  )
}

export default Home