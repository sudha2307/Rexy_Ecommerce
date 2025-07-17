import React from 'react'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import CategorySection from  './components/CategorySection'
import FeatureBoxes from  './components/FeatureBoxes'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';



const App = () => {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <CategorySection />
      <HeroSection />
      <FeatureBoxes />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
