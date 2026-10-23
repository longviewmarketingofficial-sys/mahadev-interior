import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sofa, Wind, BedDouble, AlignJustify, AlignCenter, Blinds, ArrowRight, ShoppingBag } from 'lucide-react'
import { DECOR_SERVICES } from '../data/constants'
import { SectionHeader, FadeInSection, TiltCard } from './ui'
import { BRAND } from '../data/constants'

const iconMap = {
  Sofa, Wind, BedDouble, AlignJustify, AlignCenter,
  Blinds: AlignJustify,
}

const SHOWROOM_IMAGES = [
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
  'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80',
]

export default function DecorShowroom() {
  const [activeProduct, setActiveProduct] = useState(0)

  return (
    <section id="decor" className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0c 0%, #0f0e0b 50%, #0a0a0c 100%)' }}
    >
      {/* Gold glow bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl bg-gold-DEFAULT/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Mahadev Decor Showroom"
          title={<>Luxury <span className="gold-text italic">Furnishings</span> & Decor</>}
          subtitle="One Stop Solution For All Home Furnishing Needs. Visit our showroom at South Bopal and experience luxury firsthand."
        />

        {/* Showroom Gallery Strip */}
        <FadeInSection className="mb-20">
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
            {SHOWROOM_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, y: -4 }}
                className="flex-shrink-0 w-56 h-40 rounded-xl overflow-hidden border border-gold-DEFAULT/10 hover:border-gold-DEFAULT/30 transition-all duration-300 cursor-pointer"
              >
                <img src={img} alt={`Showroom ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
            <a
              href={`${BRAND.whatsapp}?text=${encodeURIComponent('Hello Mahadev Decor! I would like to visit your showroom at Shop No. 22 Serenity Satyam, South Bopal.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-56 h-40 rounded-xl glass-card flex items-center justify-center cursor-pointer hover:border-gold-mid transition-all group"
            >
              <div className="text-center">
                <ShoppingBag className="text-gold-DEFAULT mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
                <span className="text-warmwhite/75 text-xs font-semibold tracking-wider block">Visit Showroom</span>
                <span className="text-gold-mid text-[11px] block mt-0.5">South Bopal</span>
              </div>
            </a>
          </div>
        </FadeInSection>

        {/* Decor Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {DECOR_SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Sofa
            return (
              <FadeInSection key={service.id} delay={index * 0.1}>
                <TiltCard className="group h-full">
                  <motion.div
                    className="glass-card rounded-xl overflow-hidden h-full flex flex-col cursor-pointer"
                    whileHover={{ borderColor: 'rgba(212,175,55,0.4)' }}
                  >
                    <div className="relative h-52 overflow-hidden flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                      {/* Floating icon */}
                      <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [-4, 4, -4] }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold-DEFAULT/10 border border-gold-DEFAULT/30 flex items-center justify-center backdrop-blur-sm"
                      >
                        <Icon size={16} className="text-gold-DEFAULT" />
                      </motion.div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="text-xs text-gold-mid font-bold tracking-widest uppercase mb-1">{service.subtitle}</div>
                      <h3 className="font-serif text-xl font-semibold text-warmwhite mb-3 group-hover:text-gold-pale transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-warmwhite/55 text-sm leading-relaxed flex-1">{service.desc}</p>
                      <a
                        href={BRAND.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 flex items-center gap-2 text-gold-DEFAULT text-sm font-semibold hover:gap-4 transition-all duration-200"
                      >
                        <span>Enquire Now</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </motion.div>
                </TiltCard>
              </FadeInSection>
            )
          })}
        </div>

        {/* CTA Banner */}
        <FadeInSection>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
              alt="Showroom"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/30" />
            <div className="absolute inset-0 flex items-center px-10">
              <div>
                <span className="section-label mb-3 block">Visit Us Today</span>
                <h3 className="font-display text-3xl lg:text-4xl text-warmwhite mb-2">
                  Experience Luxury <span className="gold-text italic">In Person</span>
                </h3>
                <p className="text-warmwhite/60 text-sm mb-6 max-w-sm">
                  Shop No. 22 Serenity Satyam, Near Marigold Circle, South Bopal, Ahmedabad
                </p>
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2 relative z-10"
                >
                  <ShoppingBag size={16} />
                  Book Showroom Visit
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
