import {useEffect, useRef} from 'react'
import './index.css'
import SkillBox from './SkillBox'
import FadeUp from '../FadeUp'


const Skills = () => {
  return (
    <section className="skill section " id="services">
      <FadeUp delay={0.1}>
        <h2 className=" section__title">Serviços</h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <span  className=" section__subtitle">No que eu posso te ajudar</span>
      </FadeUp>

      <SkillBox/>
    </section>
  )
}

export default Skills