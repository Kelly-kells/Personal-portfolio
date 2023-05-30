import React from 'react'
import "./style.css"
import codeBg from "../assets/codebg.jpg"
import {TypeAnimation} from "react-type-animation"


const Home = () => {
  return (
    <div className='homeContainer' id='home'>

      <img className='w-full h-screen object-cover object-left' src={codeBg} alt="" />
      
  <div class="absolute inset-0 flex items-center justify-center ">
    <div class="bg-zinc-100 text-blac w-1/2  h-1/2 shadow  shadow-[#16db65] rounded-full  ">
      <div className='text-center mt-4 '>
        <h1 className='font-medium text-2xl '>HELLO! I'M FAVOUR KELECHI,</h1>
        <h2> A<br/>

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
        <h4 className='mt-5 font-lg'>Favour is a renowned developer, <br/>with years of experince in developing and <br/>implementing interactive web interfaces. </h4>

      </div>
    </div>
  </div>

    </div>
  )
}

export default Home