import React from 'react'
import './Skills.css'

const Skills = (props) => {
  return (
    <div >
       
        <div className="card">
            <img src={props.image} alt="" />
            <h4>{props.skill}</h4>
        </div>
    </div>
  )
}

export default Skills