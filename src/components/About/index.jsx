import React from 'react'
import './index.css'
import AboutImg from "../../assets/about.jpg"
import CV from "../../assets/CV - CARLOS EDUARDO DE SANTANA DE SOUZA.pdf"
import Info from "./Info"


const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre</h2>
      <span className='section__subtitle'>Uma breve introdução</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="Minha foto de perfil." className='about__img' />

        <div className="about__data">
          <Info/>

          <p className="about__description">Sou um desenvolvedor frontend júnior e graduando em Engenharia da Computação. Solucionar problemas através de códigos é o que eu amo fazer. Sou um desenvolvedor frontend júnior e graduando em Engenharia da Computação. Solucionar problemas através de códigos é o que eu amo fazer.</p>

          <a download="" href={CV} className="button button--flex">Currículo 
          <i class="uil uil-file-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About