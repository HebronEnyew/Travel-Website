import React from 'react'
import './App.css'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Selling from './Components/Selling'
import Bookings from './Components/Bookings'
import Testimonial from './Components/Testimonial'
import Brands from './Components/Brands'
import Footer from './Components/Footer'
import CTASection from './Components/CTASection'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Selling />
      <Bookings />
      <Testimonial />
      <Brands />
      <CTASection />
      <Footer />
    </>
  )
}

export default App
