import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='aboutcont' id='about'>
            <div className="aboutleft">

            <h3 className='abouthead' id='about'>About Me</h3>
            <p className='aboutdesc'>I’m Mahima, <b>A Frontend Developer and Computer Science Engineering student</b> at JNU who enjoys turning ideas into clean, responsive, and user-focused web applications. I work primarily with <b>React, JavaScript, and Tailwind CSS</b>, and I’m currently expanding into <b>backend development with Node.js, databases, and APIs</b>.

I learn by building — from finance and productivity tools to database-driven applications — and continuously push myself to become a stronger software developer.
</p>

            <h4>What I Do:</h4>
            <ul>
                <li> 💻 Build responsive, user-focused web applications</li>
                <li>⚛️ React, JavaScript & Tailwind CSS</li>
                <li>🔧 Growing my backend skills with Node.js & APIs</li>
                <li>🗄️ SQL, MySQL & Supabase</li>
                <li>🚀 Build, deploy & continuously improve projects</li>
            </ul>
            </div>
            <div className="aboutright">
                <div className="statcard">
                <h3>5+</h3>
                <p>Projects</p>
                </div>
                <div className="statcard">
                <h3>100+</h3>
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