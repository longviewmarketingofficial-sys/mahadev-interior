'use client';

import React, { useRef, useEffect, useState } from 'react'
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'

export function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      {/* Glow layer */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(212,175,55,0.15) 0%, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  )
}

export function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = target
    const incrementTime = (duration * 1000) / end
    const timer = setInterval(() => {
      start += Math.ceil(end / 60)
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, incrementTime)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function FadeInSection({ children, delay = 0, direction = 'up', className = '' }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeader({ label, title, subtitle, center = true }) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <FadeInSection>
        <span className="section-label">{label}</span>
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mt-4 mb-6 text-warmwhite leading-tight">
          {title}
        </h2>
      </FadeInSection>
      {subtitle && (
        <FadeInSection delay={0.2}>
          <p className="text-warmwhite/60 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        </FadeInSection>
      )}
      <FadeInSection delay={0.3}>
        <div className={`divider-gold mt-6 ${center ? '' : 'ml-0'}`} />
      </FadeInSection>
    </div>
  )
}
