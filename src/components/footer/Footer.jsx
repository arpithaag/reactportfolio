import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mindrainbows</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://facebook.com"><AiFillFacebook/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
        

      </div>

      <div className="footer__copyright">
        <small>&copy; Mindrainbows. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
