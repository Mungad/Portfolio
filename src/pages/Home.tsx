//import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import ContactMe from "../components/ContactMe"


export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <About />
      <ContactMe />
    </main>
  )
}