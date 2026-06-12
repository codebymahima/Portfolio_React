import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='aboutcont' id='about'>
            <div className="aboutleft">

            <h3 className='abouthead' id='about'>About Me</h3>
            <p className='aboutdesc'>I’m Mahima, a Computer Science student passionate about building web applications and solving problems through code. Currently, I’m focused on learning Data Structures & Algorithms, React, and modern web development while working on real-world projects to strengthen my skills.

                I enjoy turning ideas into interactive user experiences and continuously improving my development skills through hands-on learning. My goal is to grow as a software developer and contribute to impactful products that solve real problems. </p>

            <h4>What I Do:</h4>
            <ul>
                <li>💻 Build responsive websites</li>
                <li>⚛️ Learn React and modern frontend</li>
                <li>🧩 Practice DSA and problem solving</li>
                <li>🚀 Create personal projects</li>
            </ul>
            </div>
            <div className="aboutright">
                <div className="statcard">
                <h3>5+</h3>
                <p>Projects</p>
                </div>
                <div className="statcard">
                <h3>300+</h3>
                <p>DSA Questions</p>
                </div>
                <div className="statcard">
                <h3>4+</h3>
                <p>Technologies</p>
                </div>
            </div>
        </div>
    )
}

export default About