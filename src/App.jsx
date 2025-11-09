import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Solutions from './components/Solutions'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Services />
      <Solutions />
      <CTA />
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ameya Innovex. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#solutions" className="hover:text-slate-900">Solutions</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
