import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Star } from 'lucide-react'
import { STATS, BRAND } from '../data/constants'
import { SectionHeader, FadeInSection, AnimatedCounter } from './ui'

export default function SocialProof() {
  return (
    <section id="about" className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0a0c 0%, #0d0d0f 50%, #0a0a0c 100%)' }}
    >
      {/* Decorative lines */}
      <div className="absolute left-0 top-1/2 w-32 h-px bg-gradient-to-r from-transparent to-gold-DEFAULT/20 pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-32 h-px bg-gradient-to-l from-transparent to-gold-DEFAULT/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Stats Counter Row — only confirmed business stats */}
        <FadeInSection className="mb-12 text-center">
          <span className="section-label">By The Numbers</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mt-4 mb-6 text-warmwhite leading-tight">
            A Decade of <span className="gold-text italic">Excellence</span>
          </h2>
          <div className="divider-gold mt-6 mx-auto" />
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
          {STATS.map(({ value, suffix, label }, i) => (
            <FadeInSection key={label} delay={i * 0.12}>
              <motion.div
                whileHover={{ scale: 1.03, borderColor: 'rgba(212,175,55,0.4)' }}
                className="glass-card rounded-2xl p-10 text-center group transition-all duration-300"
              >
                <div className="font-display text-6xl lg:text-7xl font-semibold gold-text-shimmer mb-3">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <div className="divider-gold mb-4" />
                <p className="text-warmwhite/60 text-sm font-medium tracking-wide uppercase">{label}</p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* Value Badges Strip */}
        <FadeInSection className="mb-24">
          <div className="flex flex-wrap justify-center gap-3">
            {BRAND.badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 px-5 py-3 glass-card rounded-full border border-gold-DEFAULT/20 hover:border-gold-DEFAULT/40 transition-all duration-300"
              >
                <Star size={12} className="fill-gold-DEFAULT text-gold-DEFAULT" />
                <span className="text-warmwhite/80 text-sm font-semibold tracking-wide">{badge}</span>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Testimonials — prompt to share real reviews */}
        <FadeInSection className="mb-16">
          <div className="glass-card rounded-2xl p-10 text-center border border-gold-DEFAULT/15">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-gold-DEFAULT text-gold-DEFAULT" />
              ))}
            </div>
            <h3 className="font-display text-3xl lg:text-4xl text-warmwhite mb-4">
              What Our Clients Say
            </h3>
            <p className="text-warmwhite/50 text-base max-w-xl mx-auto mb-6 leading-relaxed">
              150+ satisfied families across Ahmedabad. Ask us for client references and real project feedback directly — we're proud to connect you with our past clients.
            </p>
            <a
              href={`${BRAND.whatsapp}?text=Hi! Can you share some client references or reviews?`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2"
            >
              Request Client References
            </a>
          </div>
        </FadeInSection>

        {/* Map + Address Card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Map */}
          <FadeInSection className="lg:col-span-3" direction="left">
            <div className="glass-card rounded-2xl overflow-hidden h-80">
              <iframe
                title="Mahadev Interior Location — South Bopal, Ahmedabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1!2d72.4858!3d23.0469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2f7b000001%3A0x0!2sSouth+Bopal%2C+Ahmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.9) sepia(0.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeInSection>

          {/* Address Info */}
          <FadeInSection className="lg:col-span-2" direction="right">
            <div className="glass-card rounded-2xl p-8 h-80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gold-DEFAULT/10 border border-gold-DEFAULT/30 flex items-center justify-center">
                    <MapPin size={18} className="text-gold-DEFAULT" />
                  </div>
                  <div>
                    <div className="text-xs text-gold-mid font-bold tracking-widest uppercase">Showroom Location</div>
                    <div className="text-warmwhite font-semibold text-sm">South Bopal, Ahmedabad</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-DEFAULT mt-2 flex-shrink-0" />
                    <span className="text-warmwhite/70 text-sm">Shop No. 22, Serenity Satyam</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-DEFAULT mt-2 flex-shrink-0" />
                    <span className="text-warmwhite/70 text-sm">Near Marigold Circle, South Bopal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-DEFAULT mt-2 flex-shrink-0" />
                    <span className="text-warmwhite/70 text-sm">Ahmedabad, Gujarat — 380058</span>
                  </div>
                </div>
              </div>

              <a
                href={BRAND.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2 relative z-10 mt-6"
              >
                <ExternalLink size={14} />
                Open in Google Maps
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
