import { MessageCircle, Phone, MapPin } from 'lucide-react'
import { BRAND } from '../data/constants'

export default function Footer() {
  return (
    <footer className="relative bg-obsidian-100 border-t border-gold-subtle overflow-hidden">
      {/* Top gold line */}
      <div className="h-px bg-gold-gradient" />

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-gradient-to-br from-gold-DEFAULT to-gold-dark">
                <span className="text-obsidian font-display font-bold text-xl">M</span>
              </div>
              <div>
                <div className="font-display text-warmwhite text-lg leading-tight font-semibold">Mahadev Interior Designer</div>
                <div className="font-display text-gold-mid text-sm leading-tight">&amp; Mahadev Decor</div>
              </div>
            </div>
            <p className="text-warmwhite/50 text-sm leading-relaxed mb-6 max-w-xs">
              <em className="text-gold-mid">"We don't just design spaces, We design your lifestyle."</em>
              <br /><br />
              <em className="text-warmwhite/40">"Quality that lasts, Comfort that speaks."</em>
            </p>
            <div className="flex gap-3">
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 transition-all"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={BRAND.call}
                title="Call +91 9664391486"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gold-DEFAULT/30 text-gold-DEFAULT hover:bg-gold-DEFAULT/10 transition-all"
              >
                <Phone size={16} />
              </a>
              <a
                href={`tel:${BRAND.phone2}`}
                title="Call +91 9352282905"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gold-DEFAULT/30 text-gold-DEFAULT hover:bg-gold-DEFAULT/10 transition-all"
              >
                <Phone size={16} />
              </a>
              <a
                href={BRAND.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Showroom Location on Google Maps"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gold-DEFAULT/30 text-gold-DEFAULT hover:bg-gold-DEFAULT/10 transition-all"
              >
                <MapPin size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-5">Interior Services</h4>
            <ul className="space-y-3">
              {[
                'Residential Interior',
                'Commercial Interior',
                '2D Floor Plans',
                '3D Design & Rendering',
                'Modular Furniture',
                'Turnkey Solutions',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-warmwhite/50 text-sm hover:text-gold-DEFAULT transition-colors flex items-center gap-2"
                  >
                    <span className="text-gold-DEFAULT/40">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Decor + Contact */}
          <div>
            <h4 className="text-xs font-bold text-gold-mid tracking-widest uppercase mb-5">Decor Showroom</h4>
            <ul className="space-y-3 mb-8">
              {['Luxury Sofas', 'Premium Curtains', 'Smart Blinds', 'Imported Beds', 'Bedsheets', 'Mattresses'].map((item) => (
                <li key={item}>
                  <a
                    href="#decor"
                    className="text-warmwhite/50 text-sm hover:text-gold-DEFAULT transition-colors flex items-center gap-2"
                  >
                    <span className="text-gold-DEFAULT/40">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-start gap-2 text-sm text-warmwhite/50">
              <MapPin size={14} className="text-gold-mid flex-shrink-0 mt-0.5" />
              <span>Shop No. 22 Serenity Satyam, Near Marigold Circle, South Bopal, Ahmedabad — 380058</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-warmwhite/30 text-xs">
            © {new Date().getFullYear()} Mahadev Interior Designer & Mahadev Decor. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            {BRAND.badges.map((badge, i) => (
              <span key={i} className="text-gold-DEFAULT/40 text-xs hidden sm:block">
                {badge}
                {i < BRAND.badges.length - 1 && <span className="ml-2 text-gold-DEFAULT/20">·</span>}
              </span>
            ))}
          </div>
          <div className="text-warmwhite/20 text-xs">
            {BRAND.address.area}, {BRAND.address.city}
          </div>
        </div>
      </div>
    </footer>
  )
}
