import React from 'react'
import ContactUsPage from '../components/contactUs'
import Header from '../components/header'
import Footer from '../components/footer'
const ContactPage = () => {
  return (
    <div>
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <Header />
        <ContactUsPage />
    </div>
        <Footer />
    </div>
  )
} 

export default ContactPage