import React from 'react'
import './index.css'
import { FormContact } from './FormContact';
import FadeUp from '../FadeUp'



const Contact = () => {
  return (
    <section className="contact section container" id="contact">
      <FadeUp delay={0.1}>
        <h2 className="section__title">Contato</h2>
      </FadeUp>
      
      <FadeUp delay={0.2}>
        <span className='section__subtitle'>Deseja trabalhar comigo? Entre em contato!</span>
      </FadeUp>

      <div className="contact__container">
        <div className="contact__ways-container">

          <h3 className="contact__container-title">Fale comigo</h3>

          <div className="contact__way-item">
            <div className="contact__way-header">
              <i className="uil uil-envelope-edit"></i>
              <span className='contact__way-title'>E-mail</span>
            </div>
            <span className="contact__way">eduardo.santsouza@gmail.com</span>
            <a href="mailto:eduardo.santsouza@gmail.com"  rel='noreferrer' className="contact__link" target='_blank'>
              Entre em contato
              <i className="uil uil-arrow-right"></i>
            </a>
          </div>

          <div className="contact__way-item">
            <div className="contact__way-header">
              <i className="uil uil-whatsapp"></i>
              <span className='contact__way-title'>WhatsApp Link</span>
            </div>
            <span className="contact__way">Envie uma mensagem</span>
            <a href="https://wa.me/5521980467613" className="contact__link" target='_blank'>
              Entre em contato
              <i className="uil uil-arrow-right"></i>
            </a>
          </div>

        </div>
        <FormContact />
      </div>
    </section>
  )
}


export default Contact