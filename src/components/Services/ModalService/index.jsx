import React from 'react'
import './index.css'

const ModalService = ({isModal}) => {
  if(isModal === 1){
    return (
      <div className="modal__container">
        <h2 className="modal__title">Desenvolvimento Frontend</h2>
        <div className='modal__box'>
          <span className='modal__subtitle'>
            Serviço completo desde a criação do design da sua página até a implementação do código.
          </span>
          <ul className="modal__list">
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
  
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
  
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
  
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
  
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
          </ul>
        </div>
      </div>
    )
  } else if(isModal === 2){
    return (
      <div className="modal__container">
        <h2 className="modal__title">UI/UX Designer</h2>
        <div className='modal__box'>
          <span className='modal__subtitle'>
            Serviço completo desde a criação do design da sua página até a implementação do código.
          </span>
          <ul className="modal__list">
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
  
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
  
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
  
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
  
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
          </ul>
        </div>
      </div>
    )
  } else if(isModal === 3){
    return (
      <div className="modal__container">
        <h2 className="modal__title">Criação de Ecommerce</h2>
        <div className='modal__box'>
          <span className='modal__subtitle'>
            Serviço completo desde a criação do design da sua página até a implementação do código.
          </span>
          <ul className="modal__list">
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
  
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
  
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
  
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
  
            <li className="modal__item">
              <i class="uil uil-check-circle modal__icon"></i>
              Criação da interface com o Figma
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ModalService