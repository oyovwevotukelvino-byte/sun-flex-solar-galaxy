import Section from '../layouts/Section.jsx'
import { productData } from '../data/site.js'
import { ArrowRight } from 'lucide-react'

function ProductCard({ p }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(43,108,255,0.18),transparent_45%),radial-gradient(circle_at_70%_35%,rgba(253,184,19,0.18),transparent_45%)] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-white/70 text-sm font-semibold tracking-wide">{p.watt}</div>
            <div className="mt-2 text-white text-2xl font-semibold">{p.title}</div>
          </div>
          <div className="h-12 w-12 rounded-2xl border border-white/10 bg-electric-500/15 flex items-center justify-center">
            <div className="h-2.5 w-2.5 rounded-full bg-solar-gold shadow-[0_0_22px_rgba(253,184,19,0.65)]" />
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {p.features.map((f) => (
            <div key={f} className="text-white/65 text-sm flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-500" />
              {f}
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-4">
          <div className="text-white/60 text-xs font-semibold tracking-wide">Pricing</div>
          <div className="mt-1 text-white font-semibold">{p.price}</div>
        </div>

        <button className="mt-5 w-full rounded-2xl border border-white/15 bg-white/5 text-white font-semibold px-6 py-3 hover:bg-white/10 transition group-hover:shadow-galaxy flex items-center justify-center gap-2">
          Request Quote
          <ArrowRight size={18} className="text-solar-gold" />
        </button>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  return (
    <Section
      id="products"
      eyebrow="Premium solar technology"
      title="Solar products for every modern need"
      subtitle="Luxury-tech reliability from panels to storage—built to convert and perform."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {productData.map((p) => (
          <ProductCard key={p.key} p={p} />
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-electric-500/10 via-white/5 to-solar-gold/10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-white/70 text-sm font-semibold tracking-wide">Interactive comparison</div>
            <div className="mt-2 text-white text-3xl font-semibold">Choose what fits your lifestyle</div>
            <div className="mt-3 text-white/65 text-sm max-w-2xl">
              Compare systems by wattage, storage readiness, and smart monitoring features—then request a quote.
            </div>
          </div>
          <button
            className="rounded-2xl bg-solar-gold text-space-100 font-semibold px-7 py-4 hover:brightness-110 transition shadow-[0_0_30px_rgba(253,184,19,0.25)]"
            onClick={() => document.getElementById('financing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Financing
          </button>
        </div>
      </div>
    </Section>
  )
}

