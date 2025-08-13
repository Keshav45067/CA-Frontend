import React from 'react'

export default function Footer(){
  return (
    <footer id="contact" className="bg-primary text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">Contact — placeholder@email.com</p>
        <p className="text-sm opacity-80">© {new Date().getFullYear()} Thomso. All rights reserved.</p>
      </div>
    </footer>
  )
}