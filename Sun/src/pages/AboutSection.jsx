import { motion } from 'framer-motion'
import { Leaf, ShieldCheck, Lightbulb, Users, MapPin } from 'lucide-react'
import Section from '../layouts/Section.jsx'

const pillars = [
  {
    icon: Leaf,
    title: 'Sustainability First',
    desc: 'Zero-emission solutions protecting Africa',
    accent: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Certified',
    desc: 'ISO-certified products with 25-year performance warranties and 24/7 monitoring.',
    accent: 'text-electric-500',
    bg: 'bg-electric-500/10',
    border: 'border-electric-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Smart Innovation',
    desc: 'AI-powered energy management that learns and optimises your solar consumption.',
    accent: 'text-solar-gold',
    bg: 'bg-solar-gold/10',
    border: 'border-solar-gold/20',
  },
  {
    icon: Users,
    title: 'Community Impact',
    desc: 'Empowering rural communities with clean, affordable, accessible solar energy.',
    accent: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
]

const team = [
  { name: 'Abamram Ovie',      role: 'CEO & Founder',       loc: 'Delta, Nigeria',    initials: 'AO', g: 'from-solar-gold/30 to-orange-500/20'   },
  { name: 'Fatima Al-Hassan', role: 'CTO',                 loc: 'Lagos, Nigeria',  initials: 'FA', g: 'from-electric-500/30 to-cyan-500/20'   },
  { name: 'Kwame Mensah',    role: 'Head of Engineering',  loc: 'Nairobi, Kenya',  initials: 'KM', g: 'from-purple-500/30 to-indigo-500/20'   },
]

export default function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="Our story"
      title="Born from Africa, built for the world"
      subtitle="Founded on one belief: every African home and business deserves clean, reliable solar energy. We're not just installing panels — we're igniting a continent's potential."
    >
      {/* Mission / Vision / Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          {
            label: 'Our Mission',
            text: 'Democratise solar energy across Africa — making clean power accessible to every household, business, and community regardless of location or income.',
            top: 'bg-solar-gold',
          },
          {
            label: 'Our Vision',
            text: 'A solar-powered Africa where every sunrise brings sustainable energy independence, economic growth, and a cleaner tomorrow for 1.4 billion people.',
            top: 'bg-electric-500',
          },
          {
            label: 'Our Philosophy',
            text: 'Combining cutting-edge solar tech with deep local knowledge, we create energy solutions that outlast trends and power communities for generations.',
            top: 'bg-green-400',
          },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden"
          >
            <div className={`absolute top-0 left-0 right-0 h-0.5 ${item.top}`} />
            <div className="text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-3">{item.label}</div>
            <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
            className={`rounded-3xl border ${p.border} bg-white/5 backdrop-blur-xl p-5 hover:bg-white/[0.08] transition`}
          >
            <div className={`inline-flex items-center justify-center h-11 w-11 rounded-2xl ${p.bg} border ${p.border} mb-4`}>
              <p.icon size={20} className={p.accent} />
            </div>
            <div className="text-white font-semibold mb-2">{p.title}</div>
            <div className="text-white/60 text-sm leading-relaxed">{p.desc}</div>
          </motion.div>
        ))}
      </div>

      {/* Stats strip */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-electric-500/8 via-white/4 to-solar-gold/8 backdrop-blur-xl p-6 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: '2017',  label: 'Founded'           },
            { val: '12K+',  label: 'Systems installed'  },
            { val: '8',     label: 'Countries served'   },
            { val: '25yr',  label: 'Panel warranty'     },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-white">{s.val}</div>
              <div className="text-white/50 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div>
        <div className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-4">Leadership Team</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex items-center gap-4"
            >
              <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${t.g} border border-white/10 flex items-center justify-center text-white font-semibold shrink-0`}>
                {t.initials}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-solar-gold text-xs mt-0.5">{t.role}</div>
                <div className="text-white/45 text-xs mt-1 flex items-center gap-1">
                  <MapPin size={10} />{t.loc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
