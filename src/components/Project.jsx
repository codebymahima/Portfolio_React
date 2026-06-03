import React from 'react'
import './Project.css'

const Project = (props) => {
  return (
    <div>
        <div className="projectCard">
            <h3 className='projectname'>{props.name}</h3>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default Project