'use client';

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { BRAND } from '../data/constants'
import { SectionHeader, FadeInSection } from './ui'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(`*Message from Website*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Subject:* ${form.subject}\n*Message:* ${form.message}`)
    window.open(`https://wa.me/${BRAND.phone1}?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  const handleChange = (f) => (e) => setForm((p) => ({ ...p, [f]: e.target.value }))

  return (
    <section id="contact" className="relative py-32 bg-obsidian overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Get In Touch"
          title={<>Let's Build Your <span className="gold-text italic">Dream</span></>}
          subtitle="Ready to transform your space? We're just a message away. Free site visit & consultation available."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <FadeInSection className="lg:col-span-2 space-y-6" direction="left">
            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 glass-card rounded-xl p-5 border border-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#25D366]/10 border border-[#25D366]/20 flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle size={20} className="text-[#25D366]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#25D366] tracking-widest uppercase mb-0.5">WhatsApp Us</div>
                  <div className="text-warmwhite font-semibold">{BRAND.phone1Display}</div>
                </div>
              </motion.a>

              <motion.a
                href={BRAND.call}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 glass-card rounded-xl p-5 border border-gold-DEFAULT/20 hover:border-gold-DEFAULT/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gold-DEFAULT/10 border border-gold-DEFAULT/20 flex-shrink-0 group-hover:bg-gold-DEFAULT/20 transition-colors">
                  <Phone size={20} className="text-gold-DEFAULT" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-0.5">Call Us</div>
                  <div className="text-warmwhite font-semibold">{BRAND.phone1Display}</div>
                  <div className="text-warmwhite font-semibold text-sm">{BRAND.phone2Display}</div>
                </div>
              </motion.a>

              <div className="flex items-start gap-4 glass-card rounded-xl p-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gold-DEFAULT/10 border border-gold-DEFAULT/20 flex-shrink-0">
                  <MapPin size={20} className="text-gold-DEFAULT" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-1">Showroom Address</div>
                  <div className="text-warmwhite/70 text-sm leading-relaxed">
                    Shop No. 22 Serenity Satyam,<br />
                    Near Marigold Circle, South Bopal,<br />
                    Ahmedabad, Gujarat — 380058
                  </div>
                </div>
              </div>


            </div>
          </FadeInSection>

          {/* Contact Form */}
          <FadeInSection className="lg:col-span-3" direction="right">
            <div className="glass-card rounded-2xl p-8 border border-gold-DEFAULT/20">
              <h3 className="font-display text-2xl text-warmwhite mb-6 font-semibold">
                Send Us a Message
              </h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 size={56} className="text-gold-DEFAULT mx-auto mb-4" />
                  <h4 className="font-display text-2xl text-warmwhite mb-2">Message Sent!</h4>
                  <p className="text-warmwhite/60 text-sm">We'll get back to you on WhatsApp within 30 minutes.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-1.5 block">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange('name')}
                        placeholder="Your full name"
                        className="w-full bg-obsidian border border-gold-subtle rounded-lg px-4 py-3 text-warmwhite text-sm placeholder:text-warmwhite/25 focus:outline-none focus:border-gold-DEFAULT focus:shadow-gold-glow-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-1.5 block">Phone</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange('phone')}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-obsidian border border-gold-subtle rounded-lg px-4 py-3 text-warmwhite text-sm placeholder:text-warmwhite/25 focus:outline-none focus:border-gold-DEFAULT transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-1.5 block">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={handleChange('subject')}
                      placeholder="Interior Design / Home Decor / Modular Kitchen..."
                      className="w-full bg-obsidian border border-gold-subtle rounded-lg px-4 py-3 text-warmwhite text-sm placeholder:text-warmwhite/25 focus:outline-none focus:border-gold-DEFAULT transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-1.5 block">Message</label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange('message')}
                      placeholder="Describe your project, requirements, budget range, or any questions..."
                      className="w-full bg-obsidian border border-gold-subtle rounded-lg px-4 py-3 text-warmwhite text-sm placeholder:text-warmwhite/25 focus:outline-none focus:border-gold-DEFAULT transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2 py-4 relative z-10">
                    <Send size={16} />
                    Send Message via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
