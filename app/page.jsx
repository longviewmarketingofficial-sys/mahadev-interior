'use client';

import React, { useState } from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import InteriorServices from '../src/components/InteriorServices';
import DecorShowroom from '../src/components/DecorShowroom';
import Showstoppers from '../src/components/Showstoppers';
import Projects from '../src/components/Projects';
import SocialProof from '../src/components/SocialProof';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import StickyActions from '../src/components/StickyActions';
import { ConsultationModal } from '../src/components/Modals';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="bg-obsidian min-h-screen relative">
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

      {/* Portfolio / Category Showcase */}
      <Projects />

      {/* Social Proof + Ahmedabad Map */}
      <SocialProof />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Sticky Quick Action Cluster */}
      <StickyActions />

      {/* Free 3D Consultation Booking Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
