import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InteriorServices from './components/InteriorServices'
import DecorShowroom from './components/DecorShowroom'
import Showstoppers from './components/Showstoppers'
import Projects from './components/Projects'
import SocialProof from './components/SocialProof'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyActions from './components/StickyActions'
import { ConsultationModal } from './components/Modals'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="bg-obsidian min-h-screen grain-overlay">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero onOpenModal={() => setModalOpen(true)} />

      {/* Interior Design Services */}
      <InteriorServices />

      {/* Interactive Showstoppers */}
      <Showstoppers />

      {/* Decor Showroom */}
      <DecorShowroom />

      {/* Portfolio */}
      <Projects />

      {/* Social Proof + Map */}
      <SocialProof />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Sticky WhatsApp + Quote Actions */}
      <StickyActions />

      {/* Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
