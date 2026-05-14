//import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import ContactMe from "../components/ContactMe"
import Footer from '../components/Footer'


export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  )
}