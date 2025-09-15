import React from 'react'
import AboutUsPage from '../components/aboutUs'
import Header from '../components/header'
import Footer from '../components/footer'

const AboutUs = () => {
  return (
    <div>
             <Header />
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">

       <AboutUsPage />
    </div>
    <Footer />
    </div>
  )
}

export default AboutUs