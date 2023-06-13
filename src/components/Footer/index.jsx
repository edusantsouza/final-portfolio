import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <section className="footer section ">
      <div className="container footer__container">
        <h2 className='footer__title'>EduSant</h2>

        <ul className="footer__navigation">
          <li className='footer__navigation-item'>
            <a href="#about">Sobre</a>
          </li>

          <li className='footer__navigation-item'>
            <a href="#portfolio">Portfólio</a>
          </li>

          <li className='footer__navigation-item'>
            <a href="#skills">Skills</a>
          </li>
        </ul>

        <nav className="footer__social">
          <a href="https://wa.me/21980467613" target='blank'><i class="uil uil-whatsapp"></i></a>
          <a href="https://github.com/edusantsouza" target='blank'><i class="uil uil-github-alt"></i></a>
          <a href="https://www.linkedin.com/in/eduardo-sant-souza/" target='blank'><i class="uil uil-linkedin-alt"></i></a>
        </nav>
      </div>

      <span className='footer__copy'>© EduardoSant. Todos os direitos reservados.</span>
    </section>
  )
}

export default Footer