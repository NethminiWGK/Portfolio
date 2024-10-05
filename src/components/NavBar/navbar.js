import React from 'react';
import './navbar.css';
import logo from '../../assets/logo1.png';
import contact from '../../assets/contact.jpg';
import {Link} from 'react-scroll';
import menu from '../../assets/menu2.jpg';
import  { useState } from 'react';



const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo'/>
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='project' spy={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass='active' to='skill' spy={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
    </div>

    <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
    }}>
    <img src={contact} alt="" className='desktopMenuImg'/>Contact Me</button>


    <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
        <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='project' spy={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='skill' spy={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='contact' spy={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
    </div>

    </nav>
  )
}

export default Navbar;