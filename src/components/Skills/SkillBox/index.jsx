import React from 'react'

const SkillBox = () => {
  return (
    <div className="skillbox__container container">
      <div className="skillbox">
        <ul className="skill__list">
          <li className="skill__item">
            <h3 className="skill__title">
              <i class='bx bxs-badge-check'></i>
                HTML 5 - 
              <span className="skill__level">Avançado</span>
              </h3>
            <ul className="skill__att">
              <li className="skill__att__item">SEO</li>
              <li className="skill__att__item">Tags Semânticas</li>
              <li className="skill__att__item">Acessibilidade e Legibilidade</li>
            </ul>
          </li>

          <li className="skill__item">
            <h3 className="skill__title">
              <i class='bx bxs-badge-check'></i>
                CSS - 
              <span className="skill__level">Avançado</span>
            </h3>
            <ul className="skill__att">
              <li className="skill__att__item">Mobile first</li>
              <li className="skill__att__item">Animações</li>
              <li className="skill__att__item">Flexbox e Grid Layout</li>
            </ul>
          </li>

          <li className="skill__item">
            <h3 className="skill__title">
              <i class='bx bxs-badge-check'></i>
                Javascript ES6 - 
              <span className="skill__level">Avançado</span>
            </h3>
            <ul className="skill__att">
              <li className="skill__att__item">Manipulação do DOM</li>
              <li className="skill__att__item">Fetch/AJAX e Async?Await</li>
              <li className="skill__att__item">Estrutura de dados e boas práticas</li>
            </ul>
          </li>
        </ul>     
      </div>
      
      <div className="skillbox">
        <ul className="skill__list">
          <li className="skill__item">
            <h3 className="skill__title">
              <i class='bx bxs-badge-check'></i>
                React JS - 
              <span className="skill__level">Intermediário</span>
              </h3>
            <ul className="skill__att">
              <li className="skill__att__item">Manipulação de estados no React</li>
              <li className="skill__att__item">Criação de contextos</li>
              <li className="skill__att__item">Estilização com Styled Components</li>
            </ul>
          </li>

          <li className="skill__item">
            <h3 className="skill__title">
              <i class='bx bxs-badge-check'></i>
              SQL - 
              <span className="skill__level">Iniciante</span>
              </h3>
            <ul className="skill__att">
              <li className="skill__att__item">Criação e manipulação de entidades</li>
              <li className="skill__att__item">Projetar diagramas</li>
              <li className="skill__att__item">MySQL e MongoDB básico</li>
            </ul>
          </li>

          <li className="skill__item">
            <h3 className="skill__title">
              <i class='bx bxs-badge-check'></i>
              Git e Github - 
              <span className="skill__level">Intermediário</span>
              </h3>
            <ul className="skill__att">
              <li className="skill__att__item">Git no CLI intermediário</li>
              <li className="skill__att__item">Commits semânticos</li>
              <li className="skill__att__item">Documentação de projetos</li>
            </ul>
          </li>
        </ul>     
      </div>
    </div>
  )
}

export default SkillBox