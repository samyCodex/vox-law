"use client"
import React from "react"
import Link from "next/link"
import { Phone } from "lucide-react" 

const Header = () => {  
  return (

 <header>
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Law Firm" className="h-8 w-8" />
          <span className="font-bold text-lg">VOX</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-amber-500">Home</Link>
          <Link href="/services" className="hover:text-amber-500">Services</Link>
          <Link href="/about" className="hover:text-amber-500">About us</Link>
          <Link href="/contact" className="hover:text-amber-500">Contact us</Link>
        </nav>

        {/* Phone Number */}
        <div className="flex items-center space-x-2 text-sm">
          <Phone size={16} className="text-amber-500" />
          <span>(+234) 816 948 5151</span>
        </div>
      </div>
    </header>
   
  )
}

export default Header
