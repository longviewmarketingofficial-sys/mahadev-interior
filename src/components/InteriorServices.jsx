'use client';

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, Building2, LayoutGrid, Layers, Sofa, Key,
  ArrowRight, CheckCircle2
} from 'lucide-react'
import { INTERIOR_SERVICES, ROOM_PREVIEWS } from '../data/constants'
import { SectionHeader, FadeInSection, TiltCard } from './ui'

const iconMap = { Home, Building2, LayoutGrid, Layers, Sofa, Key }

export default function InteriorServices() {
  const [activeRoom, setActiveRoom] = useState('living')
  const [hoveredService, setHoveredService] = useState(null)

  const currentRoom = ROOM_PREVIEWS.find((r) => r.id === activeRoom)

  return (
    <section id="services" className="relative py-32 bg-obsidian overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Interior Design Studio"
          title={<>Spaces That <span className="gold-text italic">Define</span> You</>}
          subtitle="Designing Dreams, Creating Reality — from concept to completion, every space we deliver reflects your vision and our commitment to quality."
        />

        {/* Room Preview Switcher */}
        <FadeInSection className="mb-20">
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Room tabs */}
            <div className="flex border-b border-gold-subtle">
              {ROOM_PREVIEWS.map((room) => (
                <button
                  key={room.id}
                  onClick={() => setActiveRoom(room.id)}
                  className={`flex-1 py-4 px-6 text-sm font-semibold tracking-widest uppercase transition-all duration-300 relative ${
                    activeRoom === room.id
                      ? 'text-gold-DEFAULT'
                      : 'text-warmwhite/40 hover:text-warmwhite/70'
                  }`}
                >
                  {activeRoom === room.id && (
                    <motion.div
                      layoutId="room-tab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-gradient"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {room.label}
                </button>
              ))}
            </div>
            {/* Room image */}
            <div className="relative h-72 sm:h-96 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeRoom}
                  src={currentRoom.image}
                  alt={currentRoom.label}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 glass-card rounded-lg px-4 py-2">
                <span className="text-xs text-gold-mid font-semibold tracking-widest uppercase">
                  {currentRoom.accent}
                </span>
                <div className="text-sm text-warmwhite font-medium">{currentRoom.label} Design</div>
              </div>
              {/* Gold overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </FadeInSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERIOR_SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Home
            return (
              <FadeInSection key={service.id} delay={index * 0.08}>
                <TiltCard className="group h-full">
                  <div
                    className="glass-card glass-card-hover rounded-xl overflow-hidden h-full flex flex-col cursor-pointer"
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                      {/* Icon badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-gold-DEFAULT/10 border border-gold-DEFAULT/30 flex items-center justify-center backdrop-blur-sm">
                        <Icon size={18} className="text-gold-DEFAULT" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="text-xs text-gold-mid font-semibold tracking-widest uppercase mb-1">
                        {service.subtitle}
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-warmwhite mb-3 group-hover:text-gold-pale transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-warmwhite/60 text-sm leading-relaxed flex-1">{service.desc}</p>
                      <div className="mt-5 flex items-center text-gold-DEFAULT text-sm font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                        <span>Learn More</span>
                        <motion.div
                          animate={{ x: hoveredService === service.id ? 4 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight size={14} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </FadeInSection>
            )
          })}
        </div>

        {/* Process Steps */}
        <FadeInSection className="mt-24">
          <div className="text-center mb-12">
            <span className="section-label">Our Process</span>
            <h3 className="font-display text-3xl lg:text-4xl text-warmwhite mt-4">
              From Vision to <span className="gold-text italic">Reality</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Free site visit & design brief discussion' },
              { step: '02', title: '3D Design', desc: 'Photorealistic renders & floor plans' },
              { step: '03', title: 'Execution', desc: 'Expert craftsmen, premium materials' },
              { step: '04', title: 'Handover', desc: 'Snagging, quality check & final walkthrough' },
            ].map(({ step, title, desc }, i) => (
              <FadeInSection key={step} delay={i * 0.1}>
                <div className="glass-card rounded-xl p-6 text-center group hover:border-gold-mid transition-all duration-300">
                  <div className="text-4xl font-display font-light gold-text mb-3">{step}</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CheckCircle2 size={14} className="text-gold-DEFAULT" />
                    <span className="text-warmwhite font-semibold text-sm">{title}</span>
                  </div>
                  <p className="text-warmwhite/50 text-xs">{desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
