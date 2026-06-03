import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <div className="skillsbox">
        <h3>My Skills</h3>
        <div className='skillCards'>
          <Skills skill="HTML" image="https://img.icons8.com/?size=96&id=v8RpPQUwv0N8&format=png" />
          <Skills skill="CSS" image="https://img.icons8.com/?size=160&id=YjeKwnSQIBUq&format=png" />
          <Skills skill="JavaScript" image="https://img.icons8.com/?size=96&id=108784&format=png" />
          <Skills skill="React" image="https://img.icons8.com/?size=128&id=t4YbEbA834uH&format=png" />
          <Skills skill="Tailwind" image="https://img.icons8.com/?size=96&id=4PiNHtUJVbLs&format=png" />
          <Skills skill="Redux" image="https://img.icons8.com/?size=96&id=jD-fJzVguBmw&format=png" />
          <Skills skill="Java" image="https://img.icons8.com/?size=160&id=lTKW3iI3wIT0&format=png" />
          <Skills skill="C" image="https://img.icons8.com/?size=100&id=25423&format=png" />
        </div>
      </div>
        <h3>My Projects</h3>
      <div className="projectSection">
        <Project name="Quiz Generator" desc="an MCQ quiz application using HTML, CSS, and JavaScript with dynamic rendering and score calculation." />
        <Project name="Personal Portfolio" desc="Designed and developed personal portfolio using React" />
      </div>
      <Contact />
    </div>
  )
}

export default App
