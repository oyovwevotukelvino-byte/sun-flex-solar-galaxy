import Section from '../layouts/Section.jsx'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonialData } from '../data/site.js'

function Stars({ n = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={14} className="text-solar-gold fill-solar-gold/60" />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0)
  const active = testimonialData[idx]

  function prev() {
    setIdx((i) => (i - 1 + testimonialData.length) % testimonialData.length)
  }
  function next() {
    setIdx((i) => (i + 1) % testimonialData.length)
  }

  return (
    <Section
      id="testimonials"
      eyebrow="Customer trust"
      title="Premium systems backed by real people"
      subtitle="Dark-glass testimonials designed to convert."
      className="pb-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-electric-500/10 via-white/5 to-solar-gold/10 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-white/70 text-sm font-semibold tracking-wide">Featured review</div>
              <div className="mt-2 text-white text-3xl font-semibold">{active.name}</div>
              <div className="mt-2 text-white/65 text-sm">{active.location} • {active.status}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
              <Stars n={active.rating} />
              <div className="mt-1 text-white/60 text-xs">Verified customer</div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-black/10 backdrop-blur-xl p-6">
            <div className="text-white/80 text-base leading-relaxed">“{active.quote}”</div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="text-white/60 text-sm">Sun Flex Solar Galaxy • Support & warranty included</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center"
                >
                  <ChevronLeft size={18} className="text-white" />
                </button>
                <button
                  onClick={next}
                  className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center"
                >
                  <ChevronRight size={18} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {testimonialData.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIdx(i)}
              className={
                i === idx
                  ? 'w-full rounded-3xl border border-solar-gold/40 bg-white/5 backdrop-blur-xl p-6 text-left shadow-galaxy'
                  : 'w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-left hover:border-white/20'
              }
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-white/60 text-xs mt-1">{t.location}</div>
                </div>
                <div className="text-solar-gold text-xs">{t.rating}.0 ★</div>
              </div>
              <div className="mt-3 text-white/65 text-sm leading-relaxed line-clamp-3">{t.quote}</div>
            </button>
          ))}
        </div>
      </div>
    </Section>
  )
}

