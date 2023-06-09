import React from 'react'
import fitness from "../assets/fitness.jpeg"
import filmore from "../assets/flimore.jpeg"
import ai from "../assets/projectai.jpeg"
import pot from "../assets/africanpot.jpeg"

const Projects = () => {
  return (
    <section className='w-4/5  h-screen m-auto ' id='projects'>

      
      <div className="project-container justify-center items-center ">
        <h1 className='text-xl flex items-center justify-center text-2xl font-bold'> MY RECENT PROJECTS</h1>
        <div className="project-items grid md:grid-cols-4 gap-4 sm:grid-cols-2 gap-4 mt-10 ">
            <div className='project '>
         <div className="project-img">
            <img className='w-44' src={fitness} alt="" />
         </div>
         <div className="buttons">
          <button> <a href="https://github.com/Kelly-kells/fit-fam"></a></button>
         </div>
            </div>
            
            <div className='project '>
         <div className="project-img">
            <img className='w-40 ' src={filmore} alt="" />
         </div>
         <div className="buttons">
          <button> <a href="https://github.com/Kelly-kells/movies"></a></button>
         </div>
            </div>

            <div className='project '>
         <div className="project-img">
            <img className='w-40 h-1/3' src={ai} alt="" />
         </div>
         <div className="buttons">
          <button> <a href="https://github.com/Kelly-kells/Ai-project"></a></button>
         </div>
            </div>

            <div className='project '>
         <div className="project-img">
            <img className='w-40  h-1/2' src={pot} alt="" />
         </div>
         <div className="buttons">
          <button> <a href="https://github.com/Kelly-kells/African-spot"></a></button>
         </div>
            </div>


        </div>

      </div>
    
    
    </section >
  )
}

export default Projects