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

            <nav className='bg-gray-200 p-5 mt-0 fixed w-full z-10 top-0 left-0 shadow-md bg-Gray-100 shadow-gray-400 '>
                <div className='items-center justify-between' >
                    <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                        <a href="#home" className='"block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0 md:dark:text-blue-500" aria-current="page'> Home</a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar