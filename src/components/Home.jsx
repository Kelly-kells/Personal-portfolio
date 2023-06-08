import React from 'react'
import "./style.css"
import blupbg from "../assets/blupbg.jpg"

import {TypeAnimation} from "react-type-animation"
import {FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa"


const Home = () => {
  return (
    <div className='homeContainer  h-1/2' id='home'>

      <img className='w-full h-screen object-cover object-left' src={blupbg} alt="" />
      
  <div className="  absolute inset-0 flex items-center justify-center w-full">
    <div className=" text-white w-9/12  sm:min-h-max h-1/2   homeText  ">
      <div className='text-center  mt-10 '>
        <h1 className=' home-text  font-medium  sm:text-3xl text-xl '>HELLO! I'M FAVOUR KELECHI,</h1>
        <h2 className='sm:text-xl text-2xl pt-5'> I'm a <br/>

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