import React from 'react'
import PortItem from './PortItem'
import './index.css'

const Portfolio = () => {

  const projects = [
    {
      name: 'Vibbe',
      urlImg: 'vibbe-img.JPG',
      urlSite: 'https://vibbe-co.vercel.app/',
      urlRepo: 'https://github.com/edusantsouza/vibbe.co',
      stackIcons: [
        'uil uil-react',
        "uil uil-html5",
        "uil uil-html3",
        "bx bxl-javascript",
      ],
    },
    {
      name: 'Menerfa',
      urlImg: 'menerfa-img.JPG',
      urlSite: 'https://menerfa-project.vercel.app/',
      urlRepo: 'https://github.com/edusantsouza/menerfa-project',
      stackIcons: [
        "uil uil-html5",
        "uil uil-html3",
        "bx bxl-javascript",],
    },
    {
      name: 'Notifications Page',
      urlImg: 'notifications-img.JPG',
      urlSite: 'https://notifications-page-iota.vercel.app/',
      urlRepo: 'https://github.com/edusantsouza/notifications-page',
      stackIcons: [
        "uil uil-html5",
        "uil uil-html3",
        "bx bxl-javascript",],
    },
    {
      name: 'Interactive Card Details',
      urlImg: 'cardDetails-img.JPG',
      urlSite: 'https://interactive-card-details-form-plum.vercel.app/',
      urlRepo: 'https://github.com/edusantsouza/-Interactive-card-details-form',
      stackIcons: [
        "uil uil-html5",
        "uil uil-html3",
        "bx bxl-javascript",],
    },
    {
      name: 'Formulário Multi Step',
      urlImg: 'multi-step.JPG',
      urlSite: 'https://multi-step-form-opal-ten.vercel.app/',
      urlRepo: 'https://github.com/edusantsouza/multiStep-Form',
      stackIcons: [
        "uil uil-html5",
        "uil uil-html3",
        "bx bxl-javascript",
      ],
    },
  ]
  return (
    <section className="portfolio section container" id="portfolio">
      <h2 className="section__title">Portfólio</h2>
      <span className="section__subtitle">Trabalhos mais recentes</span>

      <div className="portfolio__container">
        {projects.map((item) => {
          return <PortItem
            key={item.name}
            name={item.name}
            urlImg={item.urlImg}
            urlSite={item.urlSite}
            urlRepo={item.urlRepo}
            stackIcons={item.stackIcons}
          />
        })}
      </div>
    </section>
  )
}

export default Portfolio