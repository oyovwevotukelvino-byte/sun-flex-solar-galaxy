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
      <div className="relative z-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5 md:p-6 overflow-hidden">
        {/* Decorative backdrop (must stay behind content) */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute -top-24 -left-20 h-56 w-56 rounded-full bg-electric-500/15 blur-3xl" />
          <div className="absolute -bottom-28 -right-24 h-64 w-64 rounded-full bg-solar-gold/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(43,108,255,0.22),transparent_46%),radial-gradient(circle_at_70%_35%,rgba(253,184,19,0.18),transparent_46%)]" />
        </div>

        {/* Hover border glow */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 rounded-3xl border border-electric-500/20" />
          <div className="absolute inset-0 rounded-3xl shadow-[0_0_70px_rgba(43,108,255,0.16)]" />
        </div>

        {/* Content (must be above decorations) */}
        <div className="relative z-10">
          {/* Image hero */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-[radial-gradient(circle_at_30%_25%,rgba(43,108,255,0.20),transparent_50%),radial-gradient(circle_at_70%_35%,rgba(253,184,19,0.16),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative rounded-3xl border border-white/10 bg-black/15 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 via-transparent to-solar-gold/10" />

              <div className="pointer-events-none absolute top-8 left-8 h-20 w-20 rounded-full bg-electric-500/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-8 right-8 h-20 w-20 rounded-full bg-solar-gold/10 blur-3xl" />

              <motion.div
                className="relative z-10 h-[260px] sm:h-[280px] md:h-[300px] flex items-center justify-center"
                whileHover={{ scale: 1.04, rotate: -1 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={p.imageSrc}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[260px] max-w-[86%] object-contain drop-shadow-[0_0_45px_rgba(253,184,19,0.25)]"
                />
              </motion.div>

              {/* subtle cinematic frame */}
              <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl border border-white/0 group-hover:border-white/10 transition-colors" />
            </div>
          </div>

          {/* Info hierarchy */}
          <div className="mt-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                  {p.title}
                </h3>
              </div>
              <div className="shrink-0 rounded-2xl border border-electric-500/25 bg-electric-500/10 px-3 py-2">
                <div className="text-electric-500/90 text-[11px] font-semibold tracking-wide">
                  Capacity
                </div>
                <div className="mt-0.5 text-white font-semibold text-sm">{p.watt}</div>
              </div>
            </div>

            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              {p.description}
            </p>

            {/* Feature tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.features.slice(0, 4).map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10 transition"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-electric-500 shadow-[0_0_18px_rgba(43,108,255,0.45)]" />
                  {f}
                </span>
              ))}
            </div>

            {/* Price line (less dominant than CTA) */}
            <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
              <div>
                <div className="text-white/55 text-[11px] font-semibold tracking-wide">
                  Starting from
                </div>
                <div className="mt-0.5 text-white font-semibold">{p.price}</div>
              </div>
              <div className="hidden sm:block h-10 w-10 rounded-2xl border border-white/10 bg-electric-500/10" />
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              className="mt-5 w-full rounded-2xl bg-solar-gold text-space-100 font-semibold px-5 py-3 hover:brightness-110 transition shadow-[0_0_30px_rgba(253,184,19,0.22)] flex items-center justify-center gap-2 group"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              {p.ctaLabel}
              <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
            </motion.button>
          </div>
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


