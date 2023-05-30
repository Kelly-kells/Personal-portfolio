import React from 'react'
import "./style.css"
import codeBg from "../assets/codebg.jpg"


const Home = () => {
  return (
    <div className='homeContainer' id='home'>

      <img className='w-full h-screen object-cover object-left' src={codeBg} alt="" />
      
  <div class="absolute inset-0 flex items-center justify-center  ">
    <div class="bg-zinc-100 text-blac w-9/12  h-1/2 shadow-lg  shadow-gray-600 rounded-lg">
      <div>
        <h2>FRONTEND</h2>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Home