import React from 'react'
import './Skills.css'

const Skills = (props) => {
  return (
    <div  >
       
        <div className="card">
            <img className="skill-icon"src={props.image} alt="" />
            <h4 className='skill-name'>{props.skill}</h4>
        </div>
    </div>
  )
}

export default Skills