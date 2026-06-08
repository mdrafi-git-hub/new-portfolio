import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './Pages/About'
import Service from './Pages/Service'
import Work from './Pages/Work'
import Tools from './Pages/Tools'
import Contact from './Pages/Contact'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import CaseStudies from './Components/CaseStudies'
import TechStack from './Components/TechStack'
import Testimonials from './Components/Testimonials'
import ContactSection from './Components/Contact'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <CaseStudies />
            <TechStack />
            <Testimonials />
            <ContactSection />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/work" element={<Work />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
    </>
  )
}

export default App;