import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section from '../layouts/Section.jsx'
import { productData } from '../data/site.js'

function ProductCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.03 }}
      className="group relative"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-6 overflow-hidden relative">
        {/* ambient neon */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute -top-20 left-[-20%] h-56 w-56 rounded-full bg-electric-500/20 blur-3xl" />
          <div className="absolute top-10 right-[-25%] h-56 w-56 rounded-full bg-solar-gold/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(43,108,255,0.26),transparent_45%),radial-gradient(circle_at_70%_35%,rgba(253,184,19,0.22),transparent_45%)]" />
        </div>

        {/* hover border glow */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 rounded-3xl border border-electric-500/25" />
          <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_rgba(43,108,255,0.18)]" />
        </div>

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="text-white/70 text-xs md:text-sm font-semibold tracking-wide">
                {p.watt}
              </div>
              <div className="mt-2 text-white text-lg md:text-2xl font-semibold leading-tight">
                {p.title}
              </div>
            </div>
            <div className="h-11 w-11 md:h-12 md:w-12 rounded-2xl border border-white/10 bg-electric-500/15 flex items-center justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-solar-gold shadow-[0_0_22px_rgba(253,184,19,0.65)]" />
            </div>
          </div>

          {/* image */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/10">
            <motion.img
              src={p.imageSrc}
              alt={p.title}
              loading="lazy"
              decoding="async"
              className="h-44 md:h-48 w-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            />
          </div>

          {/* description */}
          <div className="mt-4 text-white/70 text-sm leading-relaxed">
            {p.description}
          </div>

          {/* features */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {p.features.slice(0, 4).map((f) => (
              <div key={f} className="flex items-center gap-2 text-white/65 text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-electric-500" />
                <span className="truncate">{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-4">
            <div className="text-white/60 text-[11px] font-semibold tracking-wide">Capacity pricing</div>
            <div className="mt-1 text-white font-semibold">{p.price}</div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.99 }}
            className="mt-5 w-full rounded-2xl bg-white/5 border border-white/15 text-white font-semibold px-5 py-3 hover:bg-white/10 transition flex items-center justify-center gap-2 group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {p.ctaLabel}
            <ArrowRight size={18} className="text-solar-gold group-hover:translate-x-0.5 transition" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductsSection() {
  return (
    <Section
      id="products"
      eyebrow="Premium solar technology"
      title="Solar products for every modern need"
      subtitle="Cinematic-grade performance from panels to storage—built to convert and perform."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {productData.map((p, index) => (
          <ProductCard key={p.key} p={p} index={index} />
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-electric-500/10 via-white/5 to-solar-gold/10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-white/70 text-sm font-semibold tracking-wide">
              Premium recommendations
            </div>
            <div className="mt-2 text-white text-2xl md:text-3xl font-semibold">
              Choose what fits your lifestyle
            </div>
            <div className="mt-3 text-white/65 text-sm max-w-2xl">
              Compare capacity, reliability, and smart monitoring—then request a quote.
            </div>
          </div>
          <button
            className="rounded-2xl bg-solar-gold text-space-100 font-semibold px-7 py-4 hover:brightness-110 transition shadow-[0_0_30px_rgba(253,184,19,0.25)]"
            onClick={() =>
              document.getElementById('financing')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Explore Financing
          </button>
        </div>
      </div>
    </Section>
  )
}


