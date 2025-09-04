"use client"
import React from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Law Firm" className="h-8 w-8" />
            <span className="text-lg font-bold text-white">Law Firm</span>
          </div>
          <p className="mt-4 text-sm">
            Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio
            mauris lectus consequat sed.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#"><Facebook size={18} className="hover:text-amber-500" /></Link>
            <Link href="#"><Twitter size={18} className="hover:text-amber-500" /></Link>
            <Link href="#"><Instagram size={18} className="hover:text-amber-500" /></Link>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-amber-500">Home</Link></li>
            <li><Link href="/services" className="hover:text-amber-500">Services</Link></li>
            <li><Link href="/about" className="hover:text-amber-500">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-amber-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* Find Us */}
        <div>
          <h3 className="text-white font-semibold mb-4">Find Us</h3>
          <p className="text-sm">43 W. Wellington Road<br/>Fairhope, AL 36532</p>
          <p className="mt-2 text-sm flex items-center">
            <Phone size={16} className="mr-2 text-amber-500" /> (257) 388-6895
          </p>
          <p className="mt-2 text-sm flex items-center">
            <Mail size={16} className="mr-2 text-amber-500" /> temmink@outlook.com
          </p>
        </div>

        {/* Practice Areas */}
        <div>
          <h3 className="text-white font-semibold mb-4">Practice Areas</h3>
          <ul className="space-y-2 text-sm">
            <li>Banking and Finance</li>
            <li>Business Law</li>
            <li>Real Estate</li>
            <li>Family Law</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 py-4 text-center text-sm text-gray-500">
        © Copyright Law Firm {new Date().getFullYear()}. Design by Figma.guru
      </div>
    </footer>
  )
}

export default Footer
