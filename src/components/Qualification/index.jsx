import React from 'react'
import './index.css'

const Qualification = () => {
  return (
    <section className="qualification section container" id="qualification">
      <h2 className="section__title">Qualificação</h2>
      <span className="section__subtitle">Minha jornada pessoal</span>

      <div className="qualification__container">
        <h3 className="qualification__head">
          <i className="uil uil-graduation-cap qualification__icon"></i>
          Educação
        </h3>

        <div className="qualification__sections">

          <div className="qualification__content">
            <div className="qualification__data">
              <h3 className="qualification__title">Rocketseat - Discover</h3>
              <span className="qualification__subtitle">Rocketseat</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>
                SET2022 - DEZ2022
              </div>
            </div>
            <div className="qualification__line">
              <span className="qualification__rounder"></span>
            </div>
            <div></div>
          </div>

          <div className="qualification__content">
            <div></div>
            <div className="qualification__line">
              <span className="qualification__rounder"></span>
            </div>
            <div className="qualification__data">
              <h3 className="qualification__title">Curso de Web Design Completo</h3>
              <span className="qualification__subtitle">Origamid</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>
                JUL2022 - SET2022
              </div>
            </div>
          </div>

          <div className="qualification__content">
            <div className="qualification__data">
              <h3 className="qualification__title">The Complete Javascript Course</h3>
              <span className="qualification__subtitle">Udemy - Jonas Schmedtmann</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>
                DEZ2021 - JUN2022
              </div>
            </div>
            <div className="qualification__line">
              <span className="qualification__rounder"></span>
            </div>
            <div></div>
          </div>

        </div>
      </div>


    </section>
  )
}

export default Qualification