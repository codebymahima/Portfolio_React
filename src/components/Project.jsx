import React from 'react'
import './Project.css'

const Project = (props) => {
  return (
    
        <div className="projectCard">
            <h3 className='projectname'>{props.name}</h3>
            <h4 className='techStack'>Tech stack: {props.stack}</h4>
            <p className='projDesc'>{props.desc}</p>
             <a href={props.link} target='_blank'><button className='button'>See this project</button></a>
                
        </div>
    )
}

export default Project