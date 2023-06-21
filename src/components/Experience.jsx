import React from 'react'

const Experience = () => {
  return (
    <div  className='mt-20  w-full h-screen'>
      <section   >
        <h3 className='text-xl  text-center text-2xl font-bold '>
          My skills
        </h3>
        <h1 className='text-xl  text-center text-2xl font-bold text-blue-600'>My Experience</h1>
        <div className="flex mt-10 justify-center gap-4   ">
          <div className="frontend border-2 border-blue-600 m-5 w-96 h-80 rounded-lg">
        <h1 className='m-4 text-center text-blue-600'>
          FRONTEND SKILLS
        </h1>
  
          </div>

          <div className="backend border-2 border-blue-600 m-5  w-96 h-80 rounded-lg">

          <h1 className='text-center mt-4 text-blue-600'>
          BACKEND SKILLS
        </h1>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience