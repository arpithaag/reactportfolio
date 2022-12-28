import React from 'react'
import './About.css'
import ME from '../../assets/me_about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className='about__me-image'>
                 <img src={ME} alt="About Image"/>
            </div>
          </div>

            <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                      <small>a year</small>
                </article>

                <article className='about__card'>
                  <FaUsers className='about__icon'/>
                    <h5>Clients</h5>
                      <small>50+ clients</small>
                </article>

                <article className='about__card'>
                  <FaFolderOpen className='about__icon'/>
                    <h5>Projects</h5>
                      <small>15+</small>
                </article>
                </div>

                <p>
                  "Quality is not an act, its a habit", I am Software engineer, keenly interested in web development and 
                  Web Designing. I also love working on UI/UX and content creating. Working on all these aspects gave me the great experience over the years.

                 </p>
                 <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About
