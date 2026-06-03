import React from 'react'
import './Project.css'

const Project = (props) => {
  return (
    <div>
        <div className="projectCard">
            <h3 className='projectname'>{props.name}</h3>
            <p className='projDesc'>{props.desc}</p>
            <button> <a href={props.link}></a>
                See this project</button>
        </div>
    </div>
  )
}

export default Project