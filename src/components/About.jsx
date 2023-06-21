import React from 'react'
import codeBg from "../assets/codeBg.jpg"
import { RiMedalFill } from "react-icons/ri"
import { BsPeopleFill, BsFillFolderFill } from "react-icons/bs"

import "./style.css"

const About = () => {
  return (
    <div className='w-full' id='about'>
      <div className='mt-10'>
        <h1 className='text-xl flex items-center justify-center text-2xl font-bold'> ABOUT ME</h1>
      </div>
      <div className='flex flex-row justify-around mt-20'>
        <div className='aboutImg w-[18rem] h-[22rem]  hidden md:block'>
          <img className=' absolute w-[18rem] h-[22rem] about-img' src={codeBg} alt="" />
        </div>
        <div className='about-cards '>
          <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-2 gap-4 '>
            <div className="card-contents flex flex-col justify-center text-center p-8 gap-2 ">
              <RiMedalFill style={{ color: '#067bc2', fontSize: '24px', marginLeft: '30px' }} />
              <p className='mt-4'>Experience</p>
              <small className='text-gray-500'>2+ years working</small>
            </div>

            <div className="card-contents flex flex-col justify-center  text-center p-8 gap-2" >
              < BsPeopleFill style={{ color: '#067bc2', fontSize: '24px', marginLeft: '30px' }} />
              <p className='mt-4'>Clients</p>
              <small className='text-gray-500'>on-site/remote</small>
            </div>

            <div className="card-contents flex flex-col justify-center text-center  p-8 gap-2">
              < BsFillFolderFill style={{ color: '#067bc2', fontSize: '24px', marginLeft: '30px' }} />
              <p className='mt-4'>Projects</p>
              <small className='text-gray-500'>various projects</small>
            </div>
          </div>
          <article className='mt-6 m-6'> Favour is an experienced frontend developer, Proficient in Javascript,<br /> it's
            liberaries and frameworks.<br /> With adequate understanding of cross-browser compatibility<br /> and web performance optimization,
            <br /> and the ability to translate design mockups into functional user interfaces. </article>

          <button className='mt-8 text-center bg-blue-600 text-gray-950 w-40 rounded-lg h-10 m-6'><a href="contact">Lets Talk</a></button>
        </div>
      </div>


    </div>
  )
}

export default About