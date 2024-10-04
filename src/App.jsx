import React from 'react'
import Hero from './Hero.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import Collaborate from './Collaborate.jsx'
import NavbarMain from './NavbarMain.jsx'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Collaborate />
      <Contact />
      <Footer />
    </div>
  )
}

export default App