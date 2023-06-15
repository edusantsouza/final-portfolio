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
          <Info />

          <p className="about__description">
            Graduando em Engenharia da Computação pela Faculdade Descomplica - 5º período, sou um solucionador de problemas. Muito atento aos detalhes, consistente e curioso. Possuo facilidade para aprender coisas novas, boa capacidade de raciocínio lógico e me dou muito bem com trabalho em equipe.
          </p>
          <a download="" href={CV} className="button button--flex">Currículo
            <i className="uil uil-file-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About