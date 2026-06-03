import React from 'react'
import './Hero.css'
import image from '../assets/image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='Left-Hero'>
                <p className='intro'>Hi, I am Mahima</p>
                <h1 className='occupation'> I am a <b>Frontend Developer</b> </h1>
                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti et voluptatem fugiat magnam ullam aperiam perferendis incidunt repudiandae illum cupiditate.</p>
                <button>Download My Resume</button>
            </div>
            <div className="ImageSection">
             
                <img src={image} alt="Profile Picture" />
                
            </div>
        </div>
    )
}

export default Hero