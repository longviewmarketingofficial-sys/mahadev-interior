import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calculator, Home, BedDouble, ChevronDown, MessageCircle, Send, CheckCircle2, Award } from 'lucide-react'
import { BRAND, BHK_BASE_PRICES, SCOPE_MULTIPLIERS } from '../data/constants'

// ─── Consultation Modal ───────────────────────────────────────────────────────
export function ConsultationModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', address: '', requirements: '', bhk: '2BHK' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `*New Consultation Request*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Address/Area:* ${form.address}\n*BHK:* ${form.bhk}\n*Requirements:* ${form.requirements}`
    )
    window.open(`https://wa.me/${BRAND.phone1}?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop bg-obsidian/80"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="glass-card rounded-2xl w-full max-w-lg overflow-hidden border border-gold-DEFAULT/30 shadow-gold-glow"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-gold-dark/20 to-gold-DEFAULT/10 p-6 border-b border-gold-DEFAULT/20">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-lg bg-gold-DEFAULT/15 flex items-center justify-center">
                  <Award size={16} className="text-gold-DEFAULT" />
                </div>
                <h3 className="font-display text-2xl text-warmwhite font-semibold">Free 3D Consultation</h3>
              </div>
              <p className="text-warmwhite/50 text-sm pl-11">No commitment — just your dream, our expertise.</p>
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-warmwhite/50 hover:text-warmwhite hover:bg-gold-DEFAULT/10 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle2 size={56} className="text-gold-DEFAULT mx-auto mb-4" />
                  <h4 className="font-display text-2xl text-warmwhite mb-2">Request Sent!</h4>
                  <p className="text-warmwhite/60 text-sm">Our team will connect with you on WhatsApp shortly to confirm your consultation.</p>
                  <button onClick={onClose} className="btn-gold mt-6 relative z-10">Done</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { field: 'name', label: 'Full Name', placeholder: 'Your Name', type: 'text' },
                    { field: 'phone', label: 'Phone Number', placeholder: '+91 98765 43210', type: 'tel' },
                    { field: 'address', label: 'Area / Location', placeholder: 'South Bopal, Ahmedabad', type: 'text' },
                  ].map(({ field, label, placeholder, type }) => (
                    <div key={field}>
                      <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-1.5 block">{label}</label>
                      <input
                        type={type}
                        required
                        value={form[field]}
                        onChange={handleChange(field)}
                        placeholder={placeholder}
                        className="w-full bg-obsidian-50 border border-gold-subtle rounded-lg px-4 py-3 text-warmwhite text-sm placeholder:text-warmwhite/25 focus:outline-none focus:border-gold-DEFAULT focus:shadow-gold-glow-sm transition-all"
                      />
                    </div>
                  ))}

                  {/* BHK Select */}
                  <div>
                    <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-1.5 block">Property Type</label>
                    <div className="relative">
                      <select
                        value={form.bhk}
                        onChange={handleChange('bhk')}
                        className="w-full bg-obsidian-50 border border-gold-subtle rounded-lg px-4 py-3 text-warmwhite text-sm focus:outline-none focus:border-gold-DEFAULT transition-all appearance-none cursor-pointer"
                      >
                        {['1BHK', '2BHK', '3BHK', '4BHK+', 'Villa', 'Office', 'Shop'].map((b) => (
                          <option key={b} value={b} className="bg-obsidian">{b}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-mid pointer-events-none" />
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-1.5 block">Design Requirements</label>
                    <textarea
                      rows={3}
                      value={form.requirements}
                      onChange={handleChange('requirements')}
                      placeholder="Tell us about your dream space..."
                      className="w-full bg-obsidian-50 border border-gold-subtle rounded-lg px-4 py-3 text-warmwhite text-sm placeholder:text-warmwhite/25 focus:outline-none focus:border-gold-DEFAULT transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2 py-4 relative z-10">
                    <MessageCircle size={16} />
                    Send via WhatsApp & Book Now
                  </button>

                  <p className="text-center text-warmwhite/30 text-xs">
                    Your information is private. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Quote Estimator ──────────────────────────────────────────────────────────
export function QuoteEstimator({ isOpen, onClose }) {
  const [bhk, setBhk] = useState('2BHK')
  const [scope, setScope] = useState('standard')
  const [area, setArea] = useState(900)

  const basePrice = BHK_BASE_PRICES[bhk] || 5
  const multiplier = SCOPE_MULTIPLIERS[scope]?.multiplier || 1
  const estimated = Math.round(basePrice * multiplier * (area / 800))
  const formattedLow = (estimated * 0.9).toFixed(1)
  const formattedHigh = (estimated * 1.15).toFixed(1)

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi! I used your budget estimator.\n*BHK:* ${bhk}\n*Area:* ${area} sq.ft\n*Scope:* ${SCOPE_MULTIPLIERS[scope].label}\n*Estimated Budget:* ₹${formattedLow}L – ₹${formattedHigh}L\n\nCan you provide a more precise quote?`
    )
    window.open(`https://wa.me/${BRAND.phone1}?text=${msg}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop bg-obsidian/80"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="glass-card rounded-2xl w-full max-w-md overflow-hidden border border-gold-DEFAULT/30"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gold-subtle">
              <div className="flex items-center gap-3">
                <Calculator size={18} className="text-gold-DEFAULT" />
                <h3 className="font-display text-xl text-warmwhite font-semibold">Budget Estimator</h3>
              </div>
              <button onClick={onClose} className="text-warmwhite/50 hover:text-warmwhite transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* BHK */}
              <div>
                <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-3 flex items-center gap-2">
                  <Home size={12} /> BHK Type
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {Object.keys(BHK_BASE_PRICES).map((b) => (
                    <button
                      key={b}
                      onClick={() => setBhk(b)}
                      className={`py-2.5 rounded-lg text-xs font-bold border transition-all duration-200 ${
                        bhk === b
                          ? 'bg-gold-gradient text-obsidian border-transparent shadow-gold-glow-sm'
                          : 'border-gold-subtle text-warmwhite/60 hover:border-gold-DEFAULT/40'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div>
                <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-2"><BedDouble size={12} /> Carpet Area</span>
                  <span className="text-warmwhite font-semibold">{area} sq.ft</span>
                </label>
                <input
                  type="range"
                  min="400"
                  max="5000"
                  step="100"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-warmwhite/30 mt-1">
                  <span>400 sq.ft</span><span>5000 sq.ft</span>
                </div>
              </div>

              {/* Scope */}
              <div>
                <label className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-3 block">Design Scope</label>
                <div className="flex gap-2">
                  {Object.entries(SCOPE_MULTIPLIERS).map(([key, { label }]) => (
                    <button
                      key={key}
                      onClick={() => setScope(key)}
                      className={`flex-1 py-2.5 rounded-lg text-xs font-bold border transition-all duration-200 ${
                        scope === key
                          ? 'bg-gold-gradient text-obsidian border-transparent'
                          : 'border-gold-subtle text-warmwhite/60 hover:border-gold-DEFAULT/40'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimate Display */}
              <motion.div
                key={`${bhk}-${scope}-${area}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl p-5 text-center border border-gold-DEFAULT/30 bg-gold-DEFAULT/5"
              >
                <div className="text-xs text-gold-mid font-bold tracking-widest uppercase mb-2">Estimated Investment</div>
                <div className="font-display text-4xl font-semibold gold-text">
                  ₹{formattedLow}L – ₹{formattedHigh}L
                </div>
                <p className="text-warmwhite/40 text-xs mt-2">
                  Indicative range. Final quote after site visit.
                </p>
              </motion.div>

              <button
                onClick={handleWhatsApp}
                className="btn-gold w-full flex items-center justify-center gap-2 py-4 relative z-10"
              >
                <Send size={15} />
                Get Exact Quote on WhatsApp
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
