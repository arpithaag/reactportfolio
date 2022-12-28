import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {ImBehance2} from 'react-icons/im'
import {GrInstagram} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://in.linkedin.com/in/iamarpitha" target="_blank"><GrLinkedin/></a>
        <a href="https://github.com/arpithaag" target="_blank"><BsGithub/></a>
        <a href="https://www.behance.net/arpithaag" target="_blank"><ImBehance2/></a>
        <a href="https://www.instagram.com/_.arpitha_._/" target="_blank"><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocials
