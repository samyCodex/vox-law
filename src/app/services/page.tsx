import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ServicesPage from '../components/service'
const ServicePage = () => {
  return (
    <div>
       <Header />
    <div className='bg-gradient-to-r from-gray-900 to-gray-800 text-white'>
        <ServicesPage />
    </div>
    <Footer />
    </div>

  )
}

export default ServicePage