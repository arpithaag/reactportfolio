import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
              <MdEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>arpithaag78@gmail.com</h5>
              <a href="mailto: arpithaag78@gmail.com" target="_blank">Send A Message</a>
            </article>
            <article className='contact__option'>
              <FiInstagram className='contact__option-icon'/>
              <h4>Instagram</h4>
              <h5>Mindrainbows</h5>
              <a href="https://www.instagram.com/mindrainbows" target="_blank">Send A Message</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>9449621516</h5>
              <a href="https://api.whatsapp.com/send?phone=9449621516"target="_blank">Send A Message</a>
            </article>
          </div>
          {/*End of contact option */}
          <form action="">
            {/* END OF CONTACT OPTIONS */}
            <input type="text" name="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message'required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    
  )
}

export default Contact
