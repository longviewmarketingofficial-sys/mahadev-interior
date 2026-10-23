import React from 'react'
import { motion } from 'framer-motion'
import { ImagePlus, MessageCircle, Phone, ArrowRight } from 'lucide-react'
import { SectionHeader, FadeInSection } from './ui'
import { BRAND } from '../data/constants'

// Service category tiles — real categories, no invented project names
const CATEGORIES = [
  {
    label: 'Residential Interior',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
  {
    label: 'Commercial Interior',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    label: '3D Design & Rendering',
    image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80',
  },
  {
    label: 'Modular Furniture',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    label: 'Turnkey Solutions',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  },
  {
    label: 'Luxury Decor',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Our Work"
          title={<>150+ Projects <span className="gold-text italic">Delivered</span></>}
          subtitle="We have completed 150+ projects across Ahmedabad. Contact us directly to view our full portfolio and past work."
        />

        {/* Category grid — illustrative photography only, no fake project names */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {CATEGORIES.map((cat, i) => (
            <FadeInSection key={cat.label} delay={i * 0.07}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative overflow-hidden rounded-xl border border-gold-DEFAULT/10 hover:border-gold-DEFAULT/35 transition-all duration-400 cursor-pointer group"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />
                {/* Gold glow on hover */}
                <div className="absolute inset-0 bg-gold-DEFAULT/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-warmwhite font-semibold text-sm">{cat.label}</span>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* Portfolio CTA — invitation to see real work */}
        <FadeInSection>
          <div className="glass-card rounded-2xl p-10 text-center border border-gold-DEFAULT/20">
            <div className="w-14 h-14 rounded-2xl bg-gold-DEFAULT/10 border border-gold-DEFAULT/25 flex items-center justify-center mx-auto mb-6">
              <ImagePlus size={24} className="text-gold-DEFAULT" />
            </div>
            <h3 className="font-display text-3xl lg:text-4xl text-warmwhite mb-3">
              Want to See Our <span className="gold-text italic">Actual Work?</span>
            </h3>
            <p className="text-warmwhite/55 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Our completed projects speak for themselves. Reach out on WhatsApp or call us — we'll share our full portfolio, site photos, and client references directly with you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`${BRAND.whatsapp}?text=Hi! I'd like to see your portfolio of completed projects.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center gap-2 relative z-10"
              >
                <MessageCircle size={16} />
                View Portfolio on WhatsApp
              </a>
              <a
                href={BRAND.call}
                className="btn-ghost flex items-center gap-2"
              >
                <Phone size={16} />
                Call to Discuss
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
