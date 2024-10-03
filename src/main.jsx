import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import Collaborate from './Collaborate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Skills />
    <Projects />
    <Collaborate />
    <Contact />
    <Footer />
  </StrictMode>,
)
