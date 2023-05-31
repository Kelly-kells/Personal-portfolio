import React from 'react'
import "./style.css"
import blupbg from "../assets/blupbg.jpg"

import {TypeAnimation} from "react-type-animation"
import {FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa"


const Home = () => {
  return (
    <div className='homeContainer' id='home'>

      <img className='w-full h-screen object-cover object-left' src={blupbg} alt="" />
      
  <div className="  absolute inset-0 flex items-center justify-center w-full">
    <div className=" text-white w-1/2  h-2/3   homeText  ">
      <div className='text-center  mt-10 '>
        <h1 className=' home-text  font-medium  sm:text-2xl text-xl '>HELLO! I'M FAVOUR KELECHI,</h1>
        <h2 className='sm:text-xl text-lg pt-5'> I'm a <br/>

        <TypeAnimation
      sequence={[
        'Frontend developer', // Types 'One'
        2000, // Waits 1s
        'Tech enthusiast', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', fontWeight: "700" }}
    />

        </h2>
        <h4 className='mt-8 md:text-xl'>Favour is a renowned developer, <br/>with years of experince in developing and <br/>implementing interactive web interfaces. </h4>

      
    {/**<FaTwitter className='cursor:pointer' />
    <FaInstagram className='cursor:pointer'/>
    <FaLinkedinIn className='cursor:pointer'/> */}
      <div className='flex justify-center  p-8 ma'>
    <button className='rounded-md bg-[#067bc2] p-4'>
    <a href="/pdf/Cv.pdf" download="Resume.pdf" className='font-medium text-lg'> Resume</a>
    </button>
    </div>

      </div>
    
    </div>
    
  </div>

    </div>
  )
}

export default Home