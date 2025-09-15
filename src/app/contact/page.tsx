import React from 'react'
import ContactUsPage from '../components/contactUs'
import Header from '../components/header'
import Footer from '../components/footer'
const ContactPage = () => {
  return (
    <div>
       <Header />
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
       
        <ContactUsPage />
    </div>
        <Footer />
    </div>
  )
} 

export default ContactPage