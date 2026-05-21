export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Solar Products' },
  { id: 'financing', label: 'Financing' },
  { id: 'dashboard', label: 'Smart Dashboard' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export const trustedLogos = [
  { name: 'SunFlex Partners' },
  { name: 'SolarGrid Africa' },
  { name: 'EcoVolt' },
  { name: 'GridShield' },
]

import benjaminJopenImg from '../assets/nazrin-babashova-iKjAj_oq-IE-unsplash.jpg'
import jackeryImg from '../assets/jackery-power-station-czFRckykwYc-unsplash.jpg'
import zendureImg from '../assets/anastase-maragos-8l7qAVADp_0-unsplash.jpg'
import newpowaImg from '../assets/newpowa-PhxCRgOg1eo-unsplash.jpg'
import bluewaterImg from '../assets/david-docil-hMrxNBoxmIQ-unsplash.jpg'

export const productData = [
  {
    key: 'home',
    title: 'Solar Home Systems',
    watt: '3kW – 10kW',
    price: 'From ₦950,000',
    imageSrc: benjaminJopenImg,
    description: 'Galaxy-grade performance for homes—premium panels, smart monitoring, and battery-ready planning.',
    ctaLabel: 'Request a Quote',
    features: ['Premium panels', 'Smart monitoring', 'Installation support', 'Battery-ready'],
  },
  {
    key: 'inverter',
    title: 'Solar Inverters',
    watt: '3kW – 8kW',
    price: 'From ₦320,000',
    imageSrc: zendureImg,
    description: 'High-efficiency conversion with quiet operation—built for stable grid & backup performance.',
    ctaLabel: 'Request a Quote',
    features: ['High efficiency', 'Quiet operation', 'MPPT technology', 'Grid & backup modes'],
  },
  {
    key: 'street',
    title: 'Solar Street Lights',
    watt: '50W – 200W',
    price: 'From ₦180,000',
    imageSrc: bluewaterImg,
    description: 'Auto dusk-to-dawn reliability with weather-proof design for safer, brighter communities.',
    ctaLabel: 'Request a Quote',
    features: ['Auto dusk-to-dawn', 'Long-life LEDs', 'Weather-proof design', 'Flexible mounting'],
  },
  {
    key: 'commercial',
    title: 'Commercial Solar Systems',
    watt: '10kW – 100kW',
    price: 'Custom pricing',
    imageSrc: newpowaImg,
    description: 'Scalable power architecture with energy analytics—fast ROI planning for businesses.',
    ctaLabel: 'Request a Quote',
    features: ['Scalable capacity', 'Energy analytics', 'Fast ROI planning', 'Compliance-ready'],
  },
  {
    key: 'portable',
    title: 'Portable Solar Kits',
    watt: '50W – 400W',
    price: 'From ₦95,000',
    imageSrc: jackeryImg,
    description: 'Lightweight, travel-ready solar power with clean outputs—emergency-ready when it matters.',
    ctaLabel: 'Request a Quote',
    features: ['Lightweight setup', 'USB & DC outputs', 'Perfect for travel', 'Emergency-ready'],
  },
]


export const testimonialData = [
  {
    name: 'Amina O.',
    location: 'Lagos, Nigeria',
    status: 'Home Owner',
    rating: 5,
    quote:
      'The installation was smooth and the system is powering our home quietly. The smart dashboard makes it easy to track everything.',
  },
  {
    name: 'Kofi Mensah',
    location: 'Accra, Ghana',
    status: 'Business Owner',
    rating: 5,
    quote:
      'Our shop runs reliably now—no more constant fuel for generators. The financing plan made it possible.',
  },
  {
    name: 'Chinedu E.',
    location: 'Enugu, Nigeria',
    status: 'Home Owner',
    rating: 5,
    quote:
      'Professional service, premium products, and a team that communicates clearly. We feel confident with Sun Flex Solar Galaxy.',
  },
]

