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
        <h3 id='skills'>My Skills</h3>
        <div className='skillCards'>
          <Skills skill="HTML" image="https://img.icons8.com/?size=96&id=v8RpPQUwv0N8&format=png" />
          <Skills skill="CSS" image="https://img.icons8.com/?size=160&id=YjeKwnSQIBUq&format=png" />
          <Skills skill="JavaScript" image="https://img.icons8.com/?size=96&id=108784&format=png" />
          <Skills skill="React" image="https://img.icons8.com/?size=128&id=t4YbEbA834uH&format=png" />
          <Skills skill="Tailwind" image="https://img.icons8.com/?size=96&id=4PiNHtUJVbLs&format=png" />
          <Skills skill="Redux" image="https://img.icons8.com/?size=96&id=jD-fJzVguBmw&format=png" />
          <Skills skill="Java" image="https://img.icons8.com/?size=160&id=lTKW3iI3wIT0&format=png" />
          <Skills skill="C" image="https://img.icons8.com/?size=100&id=25423&format=png" />
          <Skills skill="MySQL" image="https://img.icons8.com/?size=96&id=qGUfLiYi1bRN&format=png" />
          <Skills skill="Node.js" image="https://img.icons8.com/?size=96&id=hsPbhkOH4FMe&format=png" />
          <Skills skill="Git" image="https://img.icons8.com/?size=128&id=xBKl2pdJg5kk&format=png" />
          <Skills skill="GitHub" image="https://img.icons8.com/?size=160&id=efFfwotdkiU5&format=png" />
        </div>
      </div>
      <h3 id='projects'>My Projects</h3>
      <div className="projectSection">
        <Project name="AI Freelancer Finance Assistant" link="https://ai-freelancer-finance-assistant.vercel.app/" stack="React.js, Tailwind CSS, Gemini API, SupaBase" desc="Built a React, Tailwind CSS, and Supabase-based finance dashboard for freelancers with authentication, invoice creation, PDF download, invoice history, payment status tracking, and AI-assisted finance guidance." />
        <Project name="ScopeWise – Project Scope Analysis & Proposal Generator" stack="React.js, Tailwind CSS" link="https://scope-wise-project-scope-analysis-p.vercel.app/" desc="Built a React and Tailwind CSS web app that analyzes client project inputs to generate proposal score, risk level, complexity, pricing guidance, timelines, negotiation points, email draft, and SOW draft." />
        <Project name="Personal Portfolio" stack="React.js, CSS3" desc="Personal portfolio website built with React to showcase projects, skills, and achievements with a fully responsive and modern design." link="https://github.com/codebymahima/Portfolio_React"/>
      </div>
      <Contact />
    </div>
  )
}

export default App
