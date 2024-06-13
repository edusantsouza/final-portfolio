import React from 'react'
import PortItem from './PortItem'
import './index.css'
import FadeUp from '../FadeUp'

const Portfolio = () => {

  const projects = [
    {
      name: 'Vibbe - Agência de Social Media',
      description: "Criei o site institucional da Vibbe, uma agência de social media, utilizando React e Vite. O resultado é um site moderno e responsivo, com componentes reutilizáveis e carregamento rápido, perfeito para destacar os serviços de marketing digital da agência. A arquitetura SPA (Single Page Application) assegura uma navegação rápida e suave para os usuários",
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
      description: "Desenvolvi a Menerfa, um e-commerce de camisetas, utilizando WordPress, PHP e WooCommerce. O site é responsivo, garantindo uma experiência de compra fluida em dispositivos móveis. Além disso, implementei otimizações de desempenho para carregamentos rápidos e integração com gateways de pagamento para facilitar as transações.",
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
      description: "Desenvolvi o site da Touch Prime, uma loja de informática de bairro, como um tema personalizado no WordPress. O objetivo era aumentar a visibilidade local, e o site responsivo foi otimizado para SEO local. O desempenho foi uma prioridade, garantindo que os clientes encontrem rapidamente o que precisam, seja em desktops ou dispositivos móveis",
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
      <FadeUp delay={0.1}>
        <h2 className="section__title">Portfólio</h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <span className="section__subtitle">Trabalhos mais recentes</span>
      </FadeUp>

      <ul className="portfolio__container">
        {projects.map((item, index) => {
          return <FadeUp key={index} delay={index/10}>
              <PortItem
              key={item.name}
              name={item.name}
              description={item.description}
              urlImg={item.urlImg}
              urlSite={item.urlSite}
              urlRepo={item.urlRepo}
              stackIcons={item.stackIcons}
            />
          </FadeUp>
        })}
      </ul>
    </section>
  )
}

export default Portfolio