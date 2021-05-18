import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav>
            <NavLink to ='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="Yt logo" />
            </NavLink>
            <NavLink to='/about' className="About">About</NavLink>


        </nav>
    )
}

export default NavBar