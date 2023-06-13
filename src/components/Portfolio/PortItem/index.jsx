import React from 'react'


const PortItem = ({stackIcons, urlSite, urlImg, urlRepo}) => {
  return (
      <div className="portfolio__item">

        <img src={require(`../../../assets/${urlImg}`)}  className="portfolio__item-img" alt="Imagem do Projeto"/>
          

        <div className="portfolio__details">
          <a href={urlSite}
          rel='noreferrer'
          target="_blank" 
          className="portfolio__see-more"
          >
            Ver site
            <i class="uil uil-arrow-right"></i>
          </a>
          <a href={urlRepo}
          rel='noreferrer'
          target="_blank" className="portfolio__see-repository">
            Repositório
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <div className="portfolio__stack">
          <span className="portifolio__tecnologies">Tecnologias:</span>
          <div className="portfolio__stack-icons">
           {stackIcons.map(item =>{
            return item
           })}
          </div>
        </div>

      </div>
  )
}

export default PortItem