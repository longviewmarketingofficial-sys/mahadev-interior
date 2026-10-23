'use client';

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, Calculator, X } from 'lucide-react'
import { BRAND } from '../data/constants'
import { QuoteEstimator } from './Modals'

export default function StickyActions() {
  const [showEstimator, setShowEstimator] = useState(false)
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {/* Floating action cluster — bottom right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Expandable actions */}
        <AnimatePresence>
          {expanded && (
            <>
              <motion.a
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ delay: 0.15 }}
                href={BRAND.call}
                className="flex items-center gap-3 glass-card border border-gold-DEFAULT/30 rounded-full pl-4 pr-5 py-3 shadow-gold-glow-sm hover:border-gold-DEFAULT/60 transition-all group call-pulse"
              >
                <div className="w-8 h-8 rounded-full bg-gold-DEFAULT flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-obsidian" />
                </div>
                <span className="text-warmwhite text-sm font-semibold whitespace-nowrap">{BRAND.phone1Display}</span>
              </motion.a>

              <motion.button
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ delay: 0.08 }}
                onClick={() => { setShowEstimator(true); setExpanded(false) }}
                className="flex items-center gap-3 glass-card border border-gold-DEFAULT/30 rounded-full pl-4 pr-5 py-3 hover:border-gold-DEFAULT/60 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gold-DEFAULT/10 border border-gold-DEFAULT/30 flex items-center justify-center flex-shrink-0">
                  <Calculator size={14} className="text-gold-DEFAULT" />
                </div>
                <span className="text-warmwhite text-sm font-semibold whitespace-nowrap">Budget Estimator</span>
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setExpanded(!expanded)}
          className="w-10 h-10 rounded-full glass-card border border-gold-DEFAULT/20 flex items-center justify-center text-gold-mid hover:border-gold-DEFAULT/40 hover:text-gold-DEFAULT transition-all"
        >
          <motion.div animate={{ rotate: expanded ? 45 : 0 }} transition={{ duration: 0.2 }}>
            <X size={16} className={expanded ? '' : 'rotate-45'} />
          </motion.div>
        </motion.button>

        {/* WhatsApp button — always visible */}
        <motion.a
          href={BRAND.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg whatsapp-pulse transition-all"
          style={{ backgroundColor: '#25D366' }}
          title="Chat on WhatsApp"
        >
          <MessageCircle size={26} className="text-white" />
        </motion.a>
      </div>

      {/* Quote Estimator Modal */}
      <QuoteEstimator isOpen={showEstimator} onClose={() => setShowEstimator(false)} />
    </>
  )
}
