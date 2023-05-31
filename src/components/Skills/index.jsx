import React from 'react'
import './index.css'
import SkillBox from './SkillBox'

const Skills = () => {
  return (
    <section className="skill section " id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Meu nível técnico</span>
      <SkillBox/>
    </section>
  )
}

export default Skills