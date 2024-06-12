import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <section className="footer section ">
      <div className="container footer__container">
        <h2 className='footer__title'>EduSant</h2>

        <ul className="footer__navigation">
          <li className='footer__navigation-item'>
            <a href="#portfolio">Portfólio</a>
          </li>

          <li className='footer__navigation-item'>
            <a href="#contact">Contato</a>
          </li>

          <li className='footer__navigation-item'>
            <a href="#services">Serviços</a>
          </li>
        </ul>

        <nav className="footer__social">
          <a href="https://wa.me/5521980467613" target='blank'><i className="uil uil-whatsapp"></i></a>
          <a href="https://github.com/edusantsouza" target='blank'><i className="uil uil-github-alt"></i></a>
          <a href="https://www.99freelas.com.br/user/edu-sant" target='blank'><div className="footer__99__icon"></div></a>
        </nav>
      </div>

      <span className='footer__copy'>© EduardoSant. Todos os direitos reservados.</span>
    </section>
  )
}

export default Footer