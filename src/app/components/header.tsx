"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import Image from "next/image"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="shadow-md bg-gradient-to-r from-gray-900 to-gray-800  text-white sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
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




        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-amber-500">Home</Link>
          <Link href="/services" className="hover:text-amber-500">Services</Link>
          <Link href="/about" className="hover:text-amber-500">About us</Link>
          <Link href="/contact" className="hover:text-amber-500">Contact us</Link>
        </nav>

        {/* Phone Number (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-2 text-sm">
          <Phone size={16} className="text-yellow-500" />
          <span>(+234) 816 948 5151</span>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)} 
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black shadow-md px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-amber-500">Home</Link>
          <Link href="/services" className="block hover:text-amber-500">Services</Link>
          <Link href="/about" className="block hover:text-amber-500">About us</Link>
          <Link href="/contact" className="block hover:text-amber-500">Contact us</Link>
          
          {/* Phone number on mobile */}
          <div className="flex items-center space-x-2 text-sm pt-4 border-t">
            <Phone size={16} className="text-amber-500" />
            <span>(+234) 816 948 5151</span>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
