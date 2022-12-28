import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website templates</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wep App Screens</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Android Screens</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mobile App Designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Poster Thumbnails</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Prototype Designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>WireFrame Support</p>
            </li>
          </ul>
        </article>
      {/*END OF UI/UX */}
      <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Business Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Personal Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full stack website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Android Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend Support</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Templates</p>
            </li>
          </ul>
        </article>
      {/*END OF web development*/}
      <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Posters</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Media Thumbnails</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Flyers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Graphic Business Cards</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Promotions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Advertisements</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Magazine Covers</p>
            </li>
          </ul>
        </article>
      {/*END OF Content Creation */}
      </div>

    </section>
  )
}

export default Services
