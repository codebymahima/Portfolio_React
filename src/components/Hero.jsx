import React from 'react'
import './Hero.css'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Profile from '../assets/Profile.jpeg'

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <div className='Left-Hero'>
                <p className='intro'>Hi, I am Mahima</p>
                <h1 className='occupation'> I am a <span>FRONTEND DEVELOPER</span> </h1>
                <p className="description">Building responsive and interactive web experiences with React and modern JavaScript.</p>
                <div className="buttons">
                    <a href="/Mahima_Lalwani_Resume.pdf" download>
  <button>Download Resume</button>
</a>
                    <a href="#contact">
                        <button id='hire'>Hire Me</button>
                    </a>
                </div>
                <div className="socials">
                    <a href="https://github.com/codebymahima" target='_blank'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/mahima-lalwani/" target='_blank'><FaLinkedin /></a>
                    <a href="codebymahima@gmail.com" target='_blank'><FaEnvelope /></a>
                </div>
            </div>
            <div className="ImageSection">
                <img src={Profile} alt="Profile Picture" />
            </div>
        </div>
    )
}

export default Hero