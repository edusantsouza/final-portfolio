import React from 'react'
import './index.css'

const Qualification = () => {
  return (
    <section className="qualification section container" id="qualification">
      <h2 className="section__title">Qualificação</h2>
      <span className="section__subtitle">Minha jornada pessoal</span>

      <div className="qualification__container">
        <h3 className="qualification__head">
          <i class="uil uil-graduation-cap qualification__icon"></i>
          Educação
        </h3>

        <div className="qualification__sections">

          <div className="qualification__content">
            <div className="qualification__data">
                <h3 className="qualification__title">Rocketseat - Discover</h3>
                <span className="qualification__subtitle">at Rocketseat</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>
                  DEZ2021 - FEV2022
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
                  <h3 className="qualification__title">Rocketseat - Discover</h3>
                  <span className="qualification__subtitle">at Rocketseat</span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>
                    DEZ2021 - FEV2022
               </div>
              </div>
          </div>

          <div className="qualification__content">
            <div className="qualification__data">
                <h3 className="qualification__title">Rocketseat - Discover</h3>
                <span className="qualification__subtitle">at Rocketseat</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>
                  DEZ2021 - FEV2022
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