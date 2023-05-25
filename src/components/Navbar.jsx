import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {

    const nav = () => {
        const [nav, setNav] = useState(false)
        const handleNav = () => {
            setNav(!nav);
        }
    }
    return (
        <div >
            <GiHamburgerMenu onClick={handleNav} className='absolute top-4 right-4 z-99 md:hidden'/>
            {
                nav ? (
                   <div>
                    <a href="#home"></a>
                   </div>
                )
                :(
                    <div></div>
                )
            }
        </div>
    )
}

export default Navbar