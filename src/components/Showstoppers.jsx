'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Move, Sun, Moon, Palette, Lightbulb } from 'lucide-react'
import { SectionHeader, FadeInSection } from './ui'

// ─── Before/After Slider ─────────────────────────────────────────────────────
const BEFORE_IMAGE = 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80'
const AFTER_IMAGE = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80'

function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const updateSlider = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setSliderPos(pos)
  }, [])

  const handleMouseDown = () => { isDragging.current = true }
  const handleMouseUp = () => { isDragging.current = false }
  const handleMouseMove = (e) => { if (isDragging.current) updateSlider(e.clientX) }
  const handleTouchMove = (e) => { updateSlider(e.touches[0].clientX) }
  const handleClick = (e) => { updateSlider(e.clientX) }

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative">
      <div className="text-center mb-8">
        <span className="section-label">Before vs After</span>
        <h3 className="font-display text-3xl lg:text-4xl text-warmwhite mt-4">
          The <span className="gold-text italic">Transformation</span>
        </h3>
        <p className="text-warmwhite/50 text-sm mt-3 flex items-center justify-center gap-2">
          <Move size={14} className="text-gold-DEFAULT" />
          Drag the slider to see the magic
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative h-72 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-gold-DEFAULT/20"
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        {/* After (full) */}
        <img src={AFTER_IMAGE} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <img src={BEFORE_IMAGE} alt="Before" className="absolute inset-0 h-full object-cover pointer-events-none"
            style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: 'none' }} />
          <div className="absolute inset-0 bg-obsidian/20" />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gold-gradient pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold-gradient border-2 border-warmwhite flex items-center justify-center shadow-gold-glow cursor-ew-resize">
            <Move size={18} className="text-obsidian" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 glass-card rounded-lg px-3 py-1.5 pointer-events-none">
          <span className="text-xs font-bold text-warmwhite/60 tracking-widest uppercase">Before</span>
        </div>
        <div className="absolute bottom-4 right-4 glass-card rounded-lg px-3 py-1.5 pointer-events-none">
          <span className="text-xs font-bold text-gold-DEFAULT tracking-widest uppercase">After ✦</span>
        </div>
      </div>
    </div>
  )
}

// ─── Room Mood Customizer ─────────────────────────────────────────────────────
const MOODS = [
  { id: 'day', label: 'Bright Day', bg: 'rgba(255,240,200,0.15)', tint: 'rgba(255,220,120,0.25)', icon: Sun },
  { id: 'evening', label: 'Warm Evening', bg: 'rgba(180,80,20,0.12)', tint: 'rgba(220,100,30,0.2)', icon: Lightbulb },
  { id: 'night', label: 'Night Ambiance', bg: 'rgba(10,10,40,0.6)', tint: 'rgba(30,30,100,0.3)', icon: Moon },
  { id: 'luxury', label: 'Gold Luxury', bg: 'rgba(212,175,55,0.15)', tint: 'rgba(212,175,55,0.25)', icon: Palette },
]

const FINISHES = [
  { id: 'white', label: 'Ivory White', color: '#F5F0E8' },
  { id: 'sage', label: 'Sage Green', color: '#8AAE92' },
  { id: 'navy', label: 'Deep Navy', color: '#1B3A5C' },
  { id: 'terracotta', label: 'Terracotta', color: '#C27D5E' },
  { id: 'charcoal', label: 'Charcoal', color: '#2D3142' },
]

const ROOM_IMAGE = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80'

function MoodCustomizer() {
  const [mood, setMood] = useState('day')
  const [finish, setFinish] = useState('white')
  const [brightness, setBrightness] = useState(80)

  const currentMood = MOODS.find((m) => m.id === mood)
  const currentFinish = FINISHES.find((f) => f.id === finish)
  const Icon = currentMood?.icon || Sun

  return (
    <div>
      <div className="text-center mb-8">
        <span className="section-label">Room Customizer</span>
        <h3 className="font-display text-3xl lg:text-4xl text-warmwhite mt-4">
          Design Your <span className="gold-text italic">Mood</span>
        </h3>
        <p className="text-warmwhite/50 text-sm mt-3">Live lighting & finish customizer</p>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        {/* Room preview */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img src={ROOM_IMAGE} alt="Room" className="w-full h-full object-cover"
            style={{ filter: `brightness(${brightness / 100})` }} />
          {/* Mood tint */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mood}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
              style={{ backgroundColor: currentMood?.tint }}
            />
          </AnimatePresence>
          {/* Finish wash */}
          <div
            className="absolute inset-0 mix-blend-soft-light transition-all duration-700"
            style={{ backgroundColor: currentFinish?.color + '33' }}
          />
          {/* Live indicator */}
          <div className="absolute top-4 right-4 glass-card rounded-full px-3 py-1.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-warmwhite font-semibold">Live Preview</span>
          </div>
        </div>

        {/* Controls */}
        <div className="p-6 space-y-6">
          {/* Mood selector */}
          <div>
            <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-3 block">Lighting Mood</label>
            <div className="flex flex-wrap gap-2">
              {MOODS.map(({ id, label, icon: MoodIcon }) => (
                <button
                  key={id}
                  onClick={() => setMood(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
                    mood === id
                      ? 'border-gold-DEFAULT bg-gold-DEFAULT/10 text-gold-DEFAULT'
                      : 'border-gold-subtle text-warmwhite/50 hover:border-gold-DEFAULT/30 hover:text-warmwhite/80'
                  }`}
                >
                  <MoodIcon size={12} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Wall finish */}
          <div>
            <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-3 block">Wall Finish</label>
            <div className="flex gap-3 flex-wrap">
              {FINISHES.map(({ id, label, color }) => (
                <button
                  key={id}
                  onClick={() => setFinish(id)}
                  title={label}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                    finish === id ? 'border-gold-DEFAULT scale-125 shadow-gold-glow-sm' : 'border-transparent hover:scale-110'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="text-xs text-warmwhite/40 mt-2 block">{currentFinish?.label}</span>
          </div>

          {/* Brightness */}
          <div>
            <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-3 flex items-center gap-2">
              <Sun size={12} /> Brightness — {brightness}%
            </label>
            <input
              type="range"
              min="20"
              max="120"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="w-full accent-gold-DEFAULT"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Showstoppers Section ────────────────────────────────────────────────
export default function Showstoppers() {
  return (
    <section id="showstoppers" className="relative py-32 bg-obsidian-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(212,175,55,0.04)_0%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Interactive Experience"
          title={<>See the <span className="gold-text italic">Difference</span></>}
          subtitle="Experience our work through interactive tools before committing to your dream design."
        />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          <FadeInSection delay={0} direction="left">
            <BeforeAfterSlider />
          </FadeInSection>
          <FadeInSection delay={0.2} direction="right">
            <MoodCustomizer />
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
