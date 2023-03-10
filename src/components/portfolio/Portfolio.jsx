import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG6} alt=""/>
          </div>
          <h3>The Music Website Design</h3>
          <a href="https://github.com" className='btn'>Behance</a>
          <a href="https://www.behance.net/arpithaag" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG2} alt=""/>
          </div>
          <h3>The Ice-cream company</h3>
          <a href="https://github.com" className='btn'>Behance</a>
          <a href="https://www.behance.net/arpithaag" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG3} alt=""/>
          </div>
          <h3>Product-Design</h3>
          <a href="https://github.com" className='btn'>Behance</a>
          <a href="https://www.behance.net/arpithaag" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG4} alt=""/>
          </div>
          <h3>The Cash-Pay App</h3>
          <a href="https://github.com" className='btn'>Behance</a>
          <a href="https://www.behance.net/arpithaag" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG5} alt=""/>
          </div>
          <h3>The Meeting App</h3>
          <a href="https://github.com" className='btn'>Behance</a>
          <a href="https://www.behance.net/arpithaag" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG1} alt=""/>
          </div>
          <h3>The Weather Forecasting App</h3>
          <a href="https://github.com" className='btn'>Behance</a>
          <a href="https://www.behance.net/arpithaag" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG7} alt=""/>
          </div>
          <h3>My Article Blog -Mindrainbows</h3>
          <a href="https://github.com" className='btn'>Blog</a>
          
        </article>
        

      </div>
    </section>
  )
}

export default Portfolio
