import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineMacCommand } from "react-icons/ai"
import { GrProjects } from "react-icons/gr"
import { BsPerson } from "react-icons/bs"

const Navbar = () => {

    const [nav, setNav] = useState(false);


    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div >
            <GiHamburgerMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
            {nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify center items-center z-20 md:hidden'>
                    <a href="#home" className='w-[75%] flex justify center items-center 
                        rounded-full shadow-lg bg-Gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>

                    <a href="#home" className='w-[75%] flex justify center items-center 
                        rounded-full shadow-lg bg-Gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
                        <GrProjects size={20} />
                        <span className='pl-4'>Work</span>
                    </a>

                    <a href="#home" className='w-[75%] flex justify center items-center 
                        rounded-full shadow-lg bg-Gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Projects</span>
                    </a>

                    <a href="#home" className='w-[75%] flex justify center items-center 
                        rounded-full shadow-lg bg-Gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
                        <BsPerson size={20} />
                        <span className='pl-4'>Resume</span>
                    </a>

                    <a href="#home" className='w-[75%] flex justify center items-center 
                        rounded-full shadow-lg bg-Gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            )
                : (
                    ""
                )
            }

           
<nav class="bg-gray-200 shadow-lg  shadow-gray-400 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
       
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    
    
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-base">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar