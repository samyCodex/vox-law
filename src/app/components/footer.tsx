"use client"
import React from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
      <div className="flex items-center space-x-2">
        <div className="relative h-20 w-20">
          <Image
            src="/images/logo.svg"
            alt="VOX"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
          <p className="mt-4 text-sm text-jusify">
          Our client base continues to expand as more organizations entrust us with their legal and strategic needs. 
          Beyond delivering sound legal advice, we position ourselves as long-term partners; helping clients anticipate risks,   
          seize opportunities, and structure solutions that support growth and sustainability.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#"><Facebook size={18} className="hover:text-yellow-500" /></Link>
            <Link href="#"><Twitter size={18} className="hover:text-yellow-500" /></Link>
            <Link href="#"><Instagram size={18} className="hover:text-yellow-500" /></Link>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
            <li><Link href="/services" className="hover:text-yellow-500">Services</Link></li>
            <li><Link href="/about" className="hover:text-yellow-500">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-500">Contact Us</Link></li>
          </ul>
        </div> 

        {/* Find Us */}
        <div>
          <h3 className="text-white font-semibold mb-4">Find Us</h3>
          <p className="text-sm">Sabr Plaza, Kachia Road,<br/> Kaduna, Kaduna State</p>
          <p className="mt-2 text-sm flex items-center">
            <Phone size={16} className="mr-2 text-yellow-500" /> (+234) 816 948 5151
          </p>
          <p className="mt-2 text-sm flex items-center">
            <Mail size={16} className="mr-2 text-yellow-500" />  voxregis.s.a.p@gmail.com
          </p>
        </div>

        {/* Practice Areas */}
        <div>
          <h3 className="text-white font-semibold mb-4">Practice Areas</h3>
          <ul className="space-y-2 text-sm">
            <li>Corporate & Commercial Law</li>
            <li>Corporate Governance & Compliance</li>
            <li>Litigation & Dispute Resolution</li>
            <li>Banking, Finance & Capital Markets</li>
            <li>Real Estate & Infrastructure</li>
            <li>Technology, Media & Telecommunications</li>
            <li>Intellectual Property</li>
            <li>Regulatory Advisory</li>
            <li>Employment & Labour Law</li>
            <li>Public Sector & Development Advisory</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 py-4 text-center text-sm text-gray-500">
        © Copyright Vox {new Date().getFullYear()}.
      </div>
    </footer>
  )
}

export default Footer
