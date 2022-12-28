import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">

          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill />

                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                   <h4>Bootstrap</h4>
                   <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>  
            </div>
          </div>
          {/* END OF FRONTEND */}
          <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>Django</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>  
            </div>
          </div>


          <div className="experience__design">
          <h3>Graphic Design</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>UI/UX Web</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>Android</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>Wireframes</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>Prototyping</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>Posters</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience__contentcreator">
          <h3>Content Creation</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>DigiCreator</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>Blog </h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>Articles</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>Quora</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div>
                  <h4>Wix</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
                
        </div>
    </section>
  )
}

export default Experience
