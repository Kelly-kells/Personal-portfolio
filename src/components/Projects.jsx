import React from 'react'
import fitness from "../assets/fitness.jpeg"
import filmore from "../assets/flimore.jpeg"
import ai from "../assets/projectai.jpeg"
import pot from "../assets/africanpot.jpeg"
import "./style.css"

const Projects = () => {
  return (
   
      <div className="project-container  w-full mt-20 " id="projects">

        <h1 className='text-xl  text-center text-2xl font-bold'> MY RECENT PROJECTS</h1>
        <div className="  flex   justify-center p-10  gap-12 mt-10 ">
          <div className='project  rounded-md place-items-center '>
            <div className="project-img mt-auto mt-auto border-4 border-blue-600 rounded-md  hover:animate-pulse">
              <img className='w-44 ' src={fitness} alt="" />
            </div>
            <div className="buttons space-x-4 ">
              <button className='mt-8 bg-blue-600 text-gray-950 w-20 rounded-lg h-10'> <a href="https://github.com/Kelly-kells/fit-fam" target='_blank'></a>Github</button>
              <button className='mt-8 border-2 border-blue-600  w-20 rounded-lg h-10'> <a href="https://marchfitness.netlify.app" target='_blank'>Link </a></button>
            </div>
          </div>
          <div className='project justify-center '>
            <div className="project-img  mt-auto border-4 border-blue-600 rounded-md  hover:animate-pulse">
              <img className='w-40 ' src={filmore} alt="" />
            </div>
            <div className="buttons space-x-4">
              <button className='mt-8 bg-blue-600 text-gray-950 w-20 rounded-lg h-10'> <a href="https://github.com/Kelly-kells/movies"> Github</a></button>
              <button className='mt-8 border-4 border-blue-600  w-20 rounded-lg h-10'> <a href="https://github.com/Kelly-kells/African-spot">Github</a></button>
            </div>
          </div>
          <div className='project rounded-md'>
            <div className="project-img  mt-auto border-4 border-blue-600 rounded-md  hover:animate-pulse">
              <img className='w-40 ' src={ai} alt="" />
            </div>
            <div className="buttons text-center space-x-4">
                <button className='mt-8  bg-blue-600 text-gray-950 w-20 rounded-lg h-10 '> <a href="https://github.com/Kelly-kells/African-spot">Github</a></button>
                <button className='mt-8  border-2 border-blue-600  w-20 rounded-lg h-10'> <a href="https://github.com/Kelly-kells/African-spot">Github</a></button>
              </div>
          </div>

          <div className='project '>
            <div className="project-img mt-auto border-4 border-blue-600 rounded-md hover:animate-pulse">
              <img className='w-40    ' src={pot} alt="" />
              </div>
              <div className="buttons text-center space-x-4">
                <button className='mt-8  bg-blue-600 text-gray-950 w-20 rounded-lg h-10 '> <a href="https://github.com/Kelly-kells/African-spot">Github</a></button>
                <button className='mt-8  border-2 border-blue-600  w-20 rounded-lg h-10'> <a href="https://github.com/Kelly-kells/African-spot">Github</a></button>
              
            </div>

          </div>
        </div>
      </div>
    
  )
}

export default Projects