import React from 'react'


const ServicesBox = ({handleSeeMore}) => {

  return (
    <div className="services__container container">
      <div className="services__item">
        <i class="uil uil-window-grid service__icon"></i>
        <h3 className='service__title'>Desenvolvimento Frontend</h3>
        <a 
        href="#somevalue" 
        className="service__btn button--flex"
        onClick={()=> handleSeeMore(1)}
        >
          Ver mais
          <i class="uil uil-arrow-right"></i>
        </a>
      </div>

      <div className="services__item">
        <i class="uil uil-edit service__icon"></i>
        <h3 className='service__title'>UI/UX Designer</h3>
        <a 
        href="#somevalue" 
        className="service__btn button--flex"
        onClick={()=> handleSeeMore(2)}
        >
          Ver mais
          <i class="uil uil-arrow-right"></i>
        </a>
      </div>

      <div className="services__item ">
        <i class="uil uil-shopping-bag service__icon"></i>
        <h3 className='service__title'>Criação de Ecommerces</h3>
        <a 
        href="#somevalue" 
        className="service__btn button--flex"
        onClick={()=> handleSeeMore(3)}
        >
          Ver mais
          <i class="uil uil-arrow-right"></i>
        </a>
      </div>
    </div>
  )
}

export default ServicesBox