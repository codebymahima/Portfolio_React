import React from 'react'
import './NavBar.css'
import { useState } from 'react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <h3 className='logo'>Mahima Lalwani</h3>
        
    <ul className={menuOpen ? "menu activeMenu" : "menu"}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    
    <button className='menuButton' onClick={()=>{setMenuOpen(!menuOpen)}}>&#9776;</button>
    
    </nav>
  )
}

export default NavBar