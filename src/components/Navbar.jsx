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
        <div>
            <GiHamburgerMenu />
        </div>
    )
}

export default Navbar