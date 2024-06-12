import React from 'react'


const PortItem = ({ stackIcons, urlSite, urlImg, name, description }) => {
  return (
    <div className="portfolio__item">

      <img src={require(`../../../assets/${urlImg}`)} className="portfolio__item-img" alt="Imagem do Projeto" />


      <div className="portfolio__details">

        <div className="portfolio__description">
          <h1 className="portfolio__item__name">{name}</h1>

          <div className="portfolio__stack">
            <span className="portifolio__tecnologies">Tecnologias:</span>
            <ul className="portfolio__stack-icons">
            {stackIcons.map((item, index) => {
                return (
                  <li key={index} className="stack__item">{item}</li>
                )
              })}
          </ul>
        </div>

          <p className="portfolio__item__description"><span>Descrição:</span>{description}</p>
     </div>
        
        <div className="portfolio__info">
          <a href={urlSite}
            rel='noreferrer'
            target="_blank"
            className="portfolio__see-more"
          >
            Ver site
            <i className="uil uil-arrow-right"></i>
          </a>
          
          
        </div>

       
    
      </div>
    
    </div>

  

  )
}

export default PortItem