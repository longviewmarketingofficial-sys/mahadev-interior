import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { BRAND } from '../data/constants'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Showroom', href: '#decor' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-obsidian/95 backdrop-blur-xl border-b border-gold-subtle shadow-card'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-gradient-to-br from-gold-DEFAULT to-gold-dark flex-shrink-0 group-hover:shadow-gold-glow transition-all duration-300">
                <span className="text-obsidian font-display font-bold text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-warmwhite text-lg leading-tight font-semibold">
                  Mahadev
                </div>
                <div className="text-gold-mid text-xs font-sans tracking-widest uppercase leading-tight">
                  Interior & Decor
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all duration-300"
              >
                <MessageCircle size={15} />
                <span className="hidden lg:block">WhatsApp</span>
              </a>
              <a
                href={BRAND.call}
                className="btn-gold text-sm px-5 py-2.5 flex items-center gap-2 relative z-10"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-warmwhite hover:text-gold-DEFAULT transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden pt-20"
          >
            <div className="absolute inset-0 bg-obsidian/98 backdrop-blur-2xl" />
            <div className="relative h-full flex flex-col items-center justify-center gap-8 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-display text-3xl text-warmwhite hover:text-gold-DEFAULT transition-colors tracking-wide"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex gap-4 mt-8">
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a
                  href={BRAND.call}
                  className="btn-gold flex items-center gap-2 relative z-10"
                  onClick={() => setMenuOpen(false)}
                >
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
