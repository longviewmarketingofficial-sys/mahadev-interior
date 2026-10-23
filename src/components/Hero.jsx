import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle, Phone, Star, Award } from 'lucide-react'
import { BRAND } from '../data/constants'

const HERO_IMAGES = {
  interior: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85',
  decor: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=85',
}

export default function Hero({ onOpenModal }) {
  const [mode, setMode] = useState('interior')
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const img = new Image()
    img.src = HERO_IMAGES[mode]
    img.onload = () => setImageLoaded(true)
    setImageLoaded(false)
  }, [mode])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      })
    }
    const el = heroRef.current
    el?.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => el?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        style={{ scale: 1.08 }}
      >
        <motion.div
          key={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGES[mode]})` }}
        />
        {/* Multi-layer dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
        {/* Gold vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
      </motion.div>

      {/* Floating orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl bg-gold-DEFAULT/5"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl bg-gold-mid/5"
        />
      </div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-1 mb-8 p-1 rounded-full glass-card w-fit"
          >
            {[
              { key: 'interior', label: 'Interior Designing' },
              { key: 'decor', label: 'Luxury Decor' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setMode(key)}
                className={`relative px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-400 ${
                  mode === key
                    ? 'text-obsidian'
                    : 'text-warmwhite/60 hover:text-warmwhite'
                }`}
              >
                {mode === key && (
                  <motion.div
                    layoutId="mode-pill"
                    className="absolute inset-0 rounded-full bg-gold-gradient"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-gold-DEFAULT text-gold-DEFAULT" />
              ))}
            </div>
            <span className="text-gold-mid text-xs font-semibold tracking-widest uppercase">
              South Bopal, Ahmedabad
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            key={`headline-${mode}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] mb-6 text-balance"
          >
            {mode === 'interior' ? (
              <>
                <span className="text-warmwhite">Designing</span>
                <br />
                <span className="gold-text font-semibold italic">Dreams,</span>
                <br />
                <span className="text-warmwhite">Creating</span>{' '}
                <span className="text-warmwhite/60">Reality</span>
              </>
            ) : (
              <>
                <span className="text-warmwhite">Elevate</span>
                <br />
                <span className="gold-text font-semibold italic">Your Living</span>
                <br />
                <span className="text-warmwhite/60">Experience</span>
              </>
            )}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            key={`sub-${mode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-warmwhite/70 text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-xl"
          >
            {mode === 'interior'
              ? 'We don\'t just design spaces, We design your lifestyle. Quality that lasts, Comfort that speaks.'
              : 'One Stop Solution For All Home Furnishing Needs. Luxury sofas, premium curtains, imported beds & more at our South Bopal showroom.'}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button
              onClick={onOpenModal}
              className="btn-gold flex items-center gap-2 relative z-10"
            >
              <Award size={16} />
              Book Free 3D Consultation
            </button>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Value Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-2"
          >
            {['Creative Ideas', 'Quality Work', 'On Time Delivery', '100% Satisfaction'].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-gold-mid border border-gold-DEFAULT/20 bg-gold-DEFAULT/5 backdrop-blur-sm tracking-wide"
              >
                ✦ {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Phone strip */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute right-6 bottom-24 hidden xl:flex flex-col gap-3"
      >
        <a
          href={`tel:${BRAND.phone1}`}
          className="flex items-center gap-3 glass-card rounded-full px-4 py-3 hover:border-gold-mid transition-all group"
        >
          <div className="w-8 h-8 rounded-full bg-gold-DEFAULT/10 flex items-center justify-center group-hover:bg-gold-DEFAULT/20 transition-colors">
            <Phone size={14} className="text-gold-DEFAULT" />
          </div>
          <span className="text-warmwhite/80 text-sm font-medium">{BRAND.phone1Display}</span>
        </a>
        <a
          href={`tel:${BRAND.phone2}`}
          className="flex items-center gap-3 glass-card rounded-full px-4 py-3 hover:border-gold-mid transition-all group"
        >
          <div className="w-8 h-8 rounded-full bg-gold-DEFAULT/10 flex items-center justify-center group-hover:bg-gold-DEFAULT/20 transition-colors">
            <Phone size={14} className="text-gold-DEFAULT" />
          </div>
          <span className="text-warmwhite/80 text-sm font-medium">{BRAND.phone2Display}</span>
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-warmwhite/40 text-xs tracking-widest uppercase font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} className="text-gold-DEFAULT" />
        </motion.div>
      </motion.div>
    </section>
  )
}
