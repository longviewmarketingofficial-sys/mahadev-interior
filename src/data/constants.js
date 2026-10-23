// ─────────────────────────────────────────────────────────────────────────────
// MAHADEV INTERIOR DESIGNER & DECOR — Central Data & Constants
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'Mahadev Interior Designer & Mahadev Decor',
  shortName: 'Mahadev',
  interior: {
    name: 'Mahadev Interior Designer',
    tagline: 'Designing Dreams, Creating Reality',
  },
  decor: {
    name: 'Mahadev Decor',
    tagline: 'Elevate Your Living — One Stop Solution For All Home Furnishing Needs',
  },
  slogans: [
    'We don\'t just design spaces, We design your lifestyle.',
    'Quality that lasts, Comfort that speaks.',
  ],
  phone1: '+919664391486',
  phone2: '+919352282905',
  phone1Display: '+91 96643 91486',
  phone2Display: '+91 93522 82905',
  whatsapp: 'https://wa.me/919664391486',
  call: 'tel:+919664391486',
  address: {
    shop: 'Shop No. 22 Serenity Satyam',
    area: 'Near Marigold Circle, South Bopal',
    city: 'Ahmedabad, Gujarat 380058',
    full: 'Shop No. 22 Serenity Satyam, Near Marigold Circle, South Bopal, Ahmedabad, Gujarat 380058',
    mapUrl: 'https://maps.google.com/?q=South+Bopal+Ahmedabad+Gujarat',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.148!2d72.4858!3d23.0469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2f7b000001%3A0x0!2sSouth+Bopal+Ahmedabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },
  badges: [
    'Creative Ideas',
    'Quality Work',
    'On Time Delivery',
    '100% Client Satisfaction',
    'Durable & Long Lasting',
  ],
}

// Only confirmed stats from the business brief
export const STATS = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'On-Time Delivery' },
]

export const INTERIOR_SERVICES = [
  {
    id: 'residential',
    icon: 'Home',
    title: 'Residential Interior',
    subtitle: 'Dream Homes Crafted',
    desc: 'Transform your living space with bespoke designs tailored to your personality. From 1BHK apartments to sprawling villas, we craft every corner with precision.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
  {
    id: 'commercial',
    icon: 'Building2',
    title: 'Commercial Interior',
    subtitle: 'Workspaces That Inspire',
    desc: 'Elevate your brand with interiors that make lasting impressions. Offices, showrooms, restaurants — every commercial space reimagined for success.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: '2d-plan',
    icon: 'LayoutGrid',
    title: '2D Floor Plans',
    subtitle: 'Precision Space Planning',
    desc: 'Detailed architectural floor plans that maximize space efficiency. Visualize your layout before a single nail is driven.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    id: '3d-design',
    icon: 'Layers',
    title: '3D Design & Rendering',
    subtitle: 'See Before You Build',
    desc: 'Photorealistic 3D renders and walkthroughs so you can experience your dream space before construction begins. Zero surprises, pure satisfaction.',
    image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80',
  },
  {
    id: 'modular',
    icon: 'Sofa',
    title: 'Modular Furniture Design',
    subtitle: 'Custom Built, Perfectly Fitted',
    desc: 'Bespoke modular kitchens, wardrobes, and storage solutions designed to fit your exact space. Premium materials, precision craftsmanship.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 'turnkey',
    icon: 'Key',
    title: 'Turnkey Solutions',
    subtitle: 'End-to-End Excellence',
    desc: 'Hand over the keys and receive a completely furnished, move-in-ready home. We manage every detail — design, procurement, execution, finishing.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  },
]

export const DECOR_SERVICES = [
  {
    id: 'sofas',
    icon: 'Sofa',
    title: 'Luxury Sofas',
    subtitle: 'Statement Seating',
    desc: 'Handcrafted luxury sofas in premium fabrics and leathers. From classic chesterfields to contemporary sectionals.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  },
  {
    id: 'curtains',
    icon: 'Blinds',
    title: 'Premium Curtains',
    subtitle: 'Draped in Elegance',
    desc: 'Exquisite curtain collections in imported fabrics. Floor-to-ceiling drama or subtle sheers — expertly tailored and installed.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  },
  {
    id: 'blinds',
    icon: 'AlignJustify',
    title: 'Smart Blinds',
    subtitle: 'Modern Light Control',
    desc: 'Motorized and manual roller blinds, Venetian, zebra, and wood blinds. Precision light filtering with refined aesthetics.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 'beds',
    icon: 'BedDouble',
    title: 'Imported Beds',
    subtitle: 'Rest in Grandeur',
    desc: 'Opulent bed frames and headboards imported from across the world. Upholstered, wooden, and metal finishes for every taste.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
  },
  {
    id: 'bedsheets',
    icon: 'Wind',
    title: 'Luxury Bedsheets',
    subtitle: 'Hotel-Grade Comfort',
    desc: 'Egyptian cotton, bamboo silk, and premium microfiber bedsheets. Thread counts that whisper luxury every night.',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80',
  },
  {
    id: 'mattresses',
    icon: 'AlignCenter',
    title: 'Premium Mattresses',
    subtitle: 'Sleep Like Royalty',
    desc: 'Orthopedic, memory foam, latex, and hybrid mattresses from top brands. Wake up refreshed, every single day.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  },
]

export const ROOM_PREVIEWS = [
  {
    id: 'living',
    label: 'Living Room',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
    accent: 'Champagne & Slate',
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
    accent: 'Ivory & Gold',
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    accent: 'Obsidian & Brass',
  },
  {
    id: 'office',
    label: 'Office',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    accent: 'Carbon & Chrome',
  },
]

// Portfolio — your real project photos will go here.
// Add entries with: title, type, location, image URL, tag
// export const PROJECTS = [ ... ]

export const BHK_BASE_PRICES = {
  '1BHK': 3,
  '2BHK': 5,
  '3BHK': 8,
  '4BHK+': 12,
}

export const SCOPE_MULTIPLIERS = {
  basic: { label: 'Essential', multiplier: 1 },
  standard: { label: 'Premium', multiplier: 1.6 },
  luxury: { label: 'Ultra-Luxury', multiplier: 2.5 },
}
