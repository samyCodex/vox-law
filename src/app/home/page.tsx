import React from 'react'
// import styles from './home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import HeroSection from '../components/hero'
import TrustedSection from '../components/trusted'
import HomePageSection from '../components/home-section'

const HomePage = () => {
  return (
    <div>
          <div className="bg-black text-white">
      <Header />
    <HeroSection />
    <TrustedSection />
    </div>
    <HomePageSection />
      <Footer />
    </div>
  )
}

export default HomePage
