import React from 'react'
import PortItem from './PortItem'
import './index.css'

const Portfolio = () => {

  const projects = [
    {
      name: 'Vibbe - Agência de Social Media',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae cupiditate dignissimos assumenda vitae excepturi nisi! Quo, quis. Sequi sed dolorem explicabo, optio aspernatur debitis!",
      urlImg: 'vibbe-img.JPG',
      urlSite: 'https://vibbe-co.vercel.app/',
      urlRepo: 'https://github.com/edusantsouza/vibbe.co',
      stackIcons: [
        'React',
        'Vite'
      ],
    },
    {
      name: 'Menerfa Store - E-commerce',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae cupiditate dignissimos assumenda vitae excepturi nisi! Quo, quis. Sequi sed dolorem explicabo, optio aspernatur debitis!",
      urlImg: 'mnf4.JPG',
      urlSite: 'https://menerfa.com.br',
      urlRepo: 'https://github.com/edusantsouza/menerfa-project',
      stackIcons: [
        "WordPress",
        "WooCommerce",
        "PHP",
        "SQL" ],
    },
    {
      name: 'Touch Prime - Loja de Informática',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae cupiditate dignissimos assumenda vitae excepturi nisi! Quo, quis. Sequi sed dolorem explicabo, optio aspernatur debitis!",
      urlImg: 'touch.png',
      urlSite: 'https://touch-prime.vercel.app/',
      stackIcons: [
       "WordPress" ],
    },
    // {
    //   name: 'Notifications Page',
    //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae cupiditate dignissimos assumenda vitae excepturi nisi! Quo, quis. Sequi sed dolorem explicabo, optio aspernatur debitis!",
    //   urlImg: 'notifications-img.JPG',
    //   urlSite: 'https://notifications-page-iota.vercel.app/',
    //   urlRepo: 'https://github.com/edusantsouza/notifications-page',
    //   stackIcons: [
    //     "uil uil-html5",
    //     "uil uil-html3",
    //     "bx bxl-javascript",],
    // },
    // {
    //   name: 'Interactive Card Details',
    //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae cupiditate dignissimos assumenda vitae excepturi nisi! Quo, quis. Sequi sed dolorem explicabo, optio aspernatur debitis!",
    //   urlImg: 'cardDetails-img.JPG',
    //   urlSite: 'https://interactive-card-details-form-plum.vercel.app/',
    //   urlRepo: 'https://github.com/edusantsouza/-Interactive-card-details-form',
    //   stackIcons: [
    //     "uil uil-html5",
    //     "uil uil-html3",
    //     "bx bxl-javascript",],
    // },
    // {
    //   name: 'Formulário Multi Step',
    //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae cupiditate dignissimos assumenda vitae excepturi nisi! Quo, quis. Sequi sed dolorem explicabo, optio aspernatur debitis!",
    //   urlImg: 'multi-step.JPG',
    //   urlSite: 'https://multi-step-form-opal-ten.vercel.app/',
    //   urlRepo: 'https://github.com/edusantsouza/multiStep-Form',
    //   stackIcons: [
    //     "uil uil-html5",
    //     "uil uil-html3",
    //     "bx bxl-javascript",
    //   ],
    // },
    // {
    //   name: 'Game List',
    //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae cupiditate dignissimos assumenda vitae excepturi nisi! Quo, quis. Sequi sed dolorem explicabo, optio aspernatur debitis!",
    //   urlImg: 'multi-step.JPG',
    //   urlSite: 'https://list-games.vercel.app/',
    //   urlRepo: 'https://github.com/edusantsouza/list-games',
    //   stackIcons: [
    //     'uil uil-react',
    //   ],
    // },
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
            description={item.description}
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