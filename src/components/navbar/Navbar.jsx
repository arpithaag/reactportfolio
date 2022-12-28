import React from 'react'
import './navbar.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {MdContacts} from 'react-icons/md'
import { useState } from 'react'


const Navbar = () => {
  const[activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#"onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about"onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser/></a>
      <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark/></a>
      <a href="#services"onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContacts/></a>
    </nav>
  )
}

export default Navbar
