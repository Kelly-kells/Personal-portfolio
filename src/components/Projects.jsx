import React from 'react'
import fitness from "../assets/fitness.jpeg"
import filmore from "../assets/flimore.jpeg"
import ai from "../assets/projectai.jpeg"
import pot from "../assets/africanpot.jpeg"

const Projects = () => {
  return (
    <section className='w-full  h-screen ' id='projects'>
      <div className="project-container justify-center place-items-center  ">
        <h1 className='text-xl flex items-center justify-center text-2xl font-bold'> MY RECENT PROJECTS</h1>
        <div className="flex flex-row justify-center p-10  gap-8 mt-10 ">
          <div className='project border-2 border-blue-600 rounded-md place-items-center '>
            <div className="project-img mt-auto ">
              <img className='w-44 ml-10 mt-8' src={fitness} alt="" />
            </div>
            <div className="buttons">
              <button className='mt-8 text-center bg-blue-600 text-gray-950 w-20 rounded-lg h-10'> <a href="https://github.com/Kelly-kells/fit-fam" target='_blank'></a>Github</button>
            </div>
          </div>

          <div className='project border-2 border-blue-600 rounded-md '>
            <div className="project-img mt-auto ">
              <img className='w-40 ml-10 mt-8' src={filmore} alt="" />
            </div>
            <div className="buttons">
              <button className='mt-8 text-center bg-blue-600 text-gray-950 w-20 rounded-lg h-10'> <a href="https://github.com/Kelly-kells/movies"> Github</a></button>
            </div>
          </div>

          <div className='project border-2 border-blue-600 rounded-md'>
            <div className="project-img mt-auto ">
              <img className='w-40 h-1/3 ml-10 mt-8' src={ai} alt="" />
            </div>
            <div className="buttons">
              <button className='mt-8 text-center bg-blue-600 text-gray-950 w-20 rounded-lg h-10'> <a href="https://github.com/Kelly-kells/Ai-project">Github</a></button>
            </div>
          </div>

          <div className='project border-2 border-blue-600 rounded-md'>
            <div className="project-img mt-auto   ">
              <img className='w-40  h-1/2 ml-10 mt-8' src={pot} alt="" />
            </div>
            <div className="buttons text-center p-4 ">
              <button className='mt-8 text-center bg-blue-600 text-gray-950 w-20 rounded-lg h-10'> <a href="https://github.com/Kelly-kells/African-spot">Github</a></button>
              <button className='mt-8 text-center border-2 border-blue-600  w-20 rounded-lg h-10'> <a href="https://github.com/Kelly-kells/African-spot">Github</a></button>
            </div>
          </div>


        </div>

      </div>


    </section >
  )
}

export default Projects