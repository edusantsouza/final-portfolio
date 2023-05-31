import React, {useState}  from 'react'
import ServicesBox from './ServicesBox'
import ModalService from './ModalService'
import './index.css'

const Services = () => {
  const [seeMore, setSeeMore] = useState(0)

  const handleSeeMore = (num) =>{
    setSeeMore(num)
  }
  return (
    <section className="services section" id="services"
    onClick={(e) => e.target.nodeName !== 'A' ? setSeeMore(0) : null} >
      <h2 className="section__title">Serviços</h2>
      <span className="section__subtitle">O que eu ofereço</span>

      <ServicesBox handleSeeMore={handleSeeMore}/>
      <ModalService isModal={seeMore}/>
    </section>
  )
}

export default Services