import React from 'react'
import { SimpleSlider } from './Header/Carousel'
import FeaturedProducts from './FeaturedProducts'
import HealthMonitor from './HealthMonitor'
import TestingKits from './TestingKits'
import PhoneNumber from './phone'
import Footer from './Footer'
import TestimonialsSection from './Testimonials'

const Home = () => {
  return (
    <>
    <SimpleSlider/>
    <FeaturedProducts/>
    <HealthMonitor/>
    <TestingKits/>
    <TestimonialsSection/>
    <PhoneNumber/>
    <Footer/>
    </>
  )
}

export default Home
