import React from 'react'
import codeBg from "../assets/codeBg.jpg"
import {RiMedalFill} from "react-icons/ri"
import {BsPeopleFill, BsFillFolderFill} from "react-icons/bs"

import "./style.css"

const About = () => {
  return (
    <div className='w-full h-screen ' id='about'>
      <div className='mt-10'>
        <h1 className='text-xl flex items-center justify-center text-2xl font-bold'> ABOUT ME</h1>
      </div>
      <div className='flex flex-row justify-around mt-20'>
        <div className='aboutImg w-[18rem] h-[22rem]'>
          <img className=' absolute w-[18rem] h-[22rem] about-img' src={codeBg} alt="" />
        </div>
        <div className='about-cards '>
        <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-2 gap-4 '>
         <div className="card-contents flex flex-col justify-center p-8 gap-2 ">
          <RiMedalFill />
          <p>Experience</p>
          <small>2+ years working</small>
         </div>

         <div className="card-contents flex flex-col justify-center p-8 gap-2" >
          < BsPeopleFill/>
          <p>Clients</p>
          <small>on-site/remote</small>
         </div>

         <div className="card-contents flex flex-col justify-center p-8 gap-2">
          < BsFillFolderFill/>
          <p>Projects</p>
          <small>various projects</small>
         </div>
        </div>
        <article className='mt-6'> Favour is an experienced frontend developer, Proficient in Javascript,<br/> it's 
        liberaries and frameworks.<br/> With adequate understanding of cross-browser compatibility<br/> and web performance optimization,
        <br/> and the ability to translate design mockups into functional user interfaces. </article>
        </div>
      </div>


    </div>
  )
}

export default About