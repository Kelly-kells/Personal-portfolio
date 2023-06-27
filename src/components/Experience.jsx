import React from 'react'
import {MdOutlineVerified} from "react-icons/md"
import "./style.css"


const Experience = () => {
  return (
    <div className='mt-20  w-full h-screen'>
      <section   >
        <h3 className='text-xl  text-center text-2xl font-bold '>
          My skills
        </h3>
        <h1 className='text-xl  text-center text-2xl font-bold text-blue-600'>My Experience</h1>
        <div className="flex flex-col sm:flex-row  mt-10 justify-center gap-4   ">
          <div className="frontend border-2 border-blue-600 m-4 w-96 h-80 rounded-lg  ">
            <h1 className='m-4 text-center text-blue-600'>
              FRONTEND SKILLS
            </h1>
            <div className='experience flex justify-center'>
            <div className='m-5 p-4'>
              
            <h2>Javascript</h2>
              
              <h2> Tailwind css</h2><MdOutlineVerified/>
             
              <h2> Booststrap</h2>
           
              <h2>Material ui </h2>
           

              <h2>Commerce.js </h2>
             

            </div>
            <div className='m-5 p-4'>
              <h2>React </h2>
             <h2> Git/github</h2>
             <h2>Next.js</h2>
             <h2>CSS</h2>
             <h2>HTML</h2>
              </div>
            </div>

          </div>

          <div className="backend border-2 border-blue-600 m-5  w-96 h-80 rounded-lg">

            <h1 className='text-center mt-4 text-blue-600'>
              BACKEND SKILLS
            </h1>
            <div className='m-5 p-4'>
              
            <h2>Php <span className='text-gray-500 p-10'></span></h2>
              
              <h2> MySQL</h2>
             
              <h2> NODE-js</h2>
           
              <h2>  </h2>
           

              <h2>Commerce.js </h2>
             

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience