import React from 'react'
import desktop from'../../../assets/desktop.svg' 
import features from '../../../assets/features.svg'
import otimizacao from '../../../assets/otimizacao.svg'

const SkillBox = () => {
  return (
    <ul className="skillbox__container container">
      <li className='service__item grid_item-1'>
        <div>
          <h1>Atualizações do WordPress, Tema e Plugins</h1>
          <p>
          A <b>atualização</b> é realizada por um especialista para garantir o funcionamento do site. 
          Manter seu site atualizado com as últimas versões não só evita problemas, mas também 
          proporciona acesso aos novos recursos que <b>otimizam</b> suas atividades diárias.
          </p>
        </div>

      </li>

      <li className="service__item grid_item-2">
        <div>


          <h1>Implementações de Recursos no Site</h1>
          <p>
          Com o <b>WordPress</b>, é possível <b>personalizar</b> seu site conforme sua vontade e a qualquer momento. 
          Para atender a essa demanda específica, trabalhamos juntos no planejamento para compreender
          suas necessidades e recomendar as melhores alternativas disponíveis.
          </p>
        </div>

      </li>

      <li className="service__item grid_item-3">
       <div>
        <h1>Estratégias de Otimização</h1>
          <p>
          Um <b>site lento</b> pode prejudicar seu negócio de várias maneiras. Aumenta a taxa de rejeição devido 
          ao carregamento demorado e compromete seu posicionamento nos mecanismos de busca. Conte com uma  
          <b> otimização de performance</b> para resolver esses problemas.
          </p>
       </div>

      </li>
     
    </ul>
  )
}

export default SkillBox