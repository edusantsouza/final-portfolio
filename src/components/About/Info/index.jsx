import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="uil uil-award about__icon"></i>
        <h3 className="about__title">Qualificação</h3>
        <span className='about__subtitle'>+200h em cursos</span>
      </div>

      <div className="about__box">
        <i className="uil uil-arrow about__icon"></i>
        <h3 className="about__title">Stack</h3>
        <span className='about__subtitle'>HTML | CSS | Javascript</span>
      </div>

      <div className="about__box">
        <i className="uil uil-briefcase-alt about__icon"></i>
        <h3 className="about__title">Projetos</h3>
        <span className='about__subtitle'>+5 projetos concluídos</span>
      </div>
    </div>
  )
}

export default Info