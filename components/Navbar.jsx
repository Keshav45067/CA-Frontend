import React from 'react'

export default function Navbar(){
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">LOGO</div>
        <div className="hidden md:flex gap-6 text-white">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  )
}