import { motion } from 'framer-motion'
import { useState } from 'react'
import Section from '../layouts/Section.jsx'
import { estimateSolarSavings } from '../lib/calculators.js'
import { formatCurrencyNGN } from '../lib/format.js'
import { productData } from '../data/site.js'
import { ArrowRight, Zap, ShieldCheck, Star } from 'lucide-react'

import { useEffect, useRef } from 'react'

function AnimatedCounter({ value, suffix = '', duration = 1.2 }) {
  const [display, setDisplay] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(null)

useEffect(() => {
    // Animate only when value changes.
    startRef.current = performance.now()

    const from = 0
    const to = value

    const tick = (t) => {
      const p = Math.min(1, (t - startRef.current) / (duration * 1000))
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(from + (to - from) * eased))
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [value, duration])

  return (
    <div className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
      {display.toLocaleString()}
      {suffix}
    </div>
  )
}


function SolarSavingsPreview() {
  const [monthlyKwh, setMonthlyKwh] = useState(420)
  const [offsetPct, setOffsetPct] = useState(0.72)
  const [tariff, setTariff] = useState(260)

  const result = estimateSolarSavings({
    monthlyKwh,
    solarOffsetPct: offsetPct,
    tariffNgnPerKwh: tariff,
  })

  const estimatedMonthly = result.avoidedCost

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-7 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,108,255,0.25),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(253,184,19,0.18),transparent_35%)]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-electric-500/90 text-sm font-semibold tracking-wide">
              Solar Savings Calculator (Preview)
            </div>
            <div className="mt-2 text-white/90 font-semibold text-xl">
              Estimated monthly savings
            </div>
          </div>
          <div className="text-right">
            <div className="text-electric-500 text-3xl font-semibold">
              {formatCurrencyNGN(estimatedMonthly)}
            </div>
            <div className="text-white/60 text-xs mt-1">based on your inputs</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="block">
            <div className="text-white/70 text-sm mb-2">Monthly usage (kWh)</div>
            <input
              type="range"
              min={120}
              max={1200}
              step={10}
              value={monthlyKwh}
              onChange={(e) => setMonthlyKwh(Number(e.target.value))}
              className="w-full accent-solar-gold"
            />
            <div className="text-white/80 text-xs mt-2">{monthlyKwh} kWh</div>
          </label>

          <label className="block">
            <div className="text-white/70 text-sm mb-2">Solar offset</div>
            <input
              type="range"
              min={0.5}
              max={0.95}
              step={0.01}
              value={offsetPct}
              onChange={(e) => setOffsetPct(Number(e.target.value))}
              className="w-full accent-solar-gold"
            />
            <div className="text-white/80 text-xs mt-2">
              {(offsetPct * 100).toFixed(0)}%
            </div>
          </label>

          <label className="block">
            <div className="text-white/70 text-sm mb-2">Tariff (₦ / kWh)</div>
            <input
              type="range"
              min={180}
              max={450}
              step={5}
              value={tariff}
              onChange={(e) => setTariff(Number(e.target.value))}
              className="w-full accent-solar-gold"
            />
            <div className="text-white/80 text-xs mt-2">₦{tariff}</div>
          </label>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-white/60 text-sm">
            Solar generation estimate:{' '}
            <span className="text-white/90 font-semibold">
              {result.solarKwh.toFixed(0)} kWh
            </span>
          </div>
          <button className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition">
            Get financing estimate
            <ArrowRight
              className="text-solar-gold group-hover:translate-x-0.5 transition"
              size={16}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function HomeSection() {
  const highlights = [
    { icon: Zap, title: 'Premium tech', desc: 'High-efficiency modules + smart monitoring.' },
    {
      icon: ShieldCheck,
      title: 'Trust-first',
      desc: 'Clear pricing, warranty support, certified installs.',
    },
    {
      icon: Star,
      title: 'African-ready',
      desc: 'Built for our power realities—today & tomorrow.',
    },
  ]

  return (
    <div id="home">
      <section className="relative pt-24 md:pt-28 pb-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-20%] top-[-15%] h-[520px] w-[520px] rounded-full bg-electric-500/20 blur-3xl" />
          <div className="absolute right-[-20%] top-[0%] h-[460px] w-[460px] rounded-full bg-solar-gold/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_35%,rgba(43,108,255,0.12),transparent_40%)]" />
        </div>

        <div className="mx-auto w-11/12 max-w-6xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-3 py-1 text-xs text-white/70">
                  <span className="h-2.5 w-2.5 rounded-full bg-solar-gold shadow-[0_0_22px_rgba(253,184,19,0.65)]" />
                  Smart solar systems for modern African living
                </div>

                <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] text-white">
                  Unlimited Solar Energy For Modern Africa
                </h1>

                <p className="mt-5 text-white/75 max-w-xl text-base md:text-lg">
                  Sun Flex Solar Galaxy delivers premium solar installations, batteries, and energy management—designed for reliability, beauty, and speed.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() =>
                      document.getElementById('products')?.scrollIntoView({
                        behavior: 'smooth',
                      })
                    }
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-solar-gold text-space-100 px-6 py-3 font-semibold hover:brightness-110 transition shadow-[0_0_30px_rgba(253,184,19,0.25)]"
                  >
                    Explore Solutions
                    <ArrowRight size={18} className="group-hover:translate-x-0.5 transition" />
                  </button>
                  <button
                    onClick={() =>
                      document.getElementById('contact')?.scrollIntoView({
                        behavior: 'smooth',
                      })
                    }
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white px-6 py-3 font-semibold hover:bg-white/10 transition"
                  >
                    Get Started
                  </button>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                    <AnimatedCounter value={12000} suffix='+' />
                    <div className="text-white/60 text-xs mt-2">Homes powered</div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                    <AnimatedCounter value={3400} suffix='+' />
                    <div className="text-white/60 text-xs mt-2">Solar installs</div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                    <AnimatedCounter value={98} suffix='%' />
                    <div className="text-white/60 text-xs mt-2">Customer satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 h-44 w-44 rounded-full bg-electric-500/20 blur-2xl" />
              <div className="absolute top-16 -right-6 h-40 w-40 rounded-full bg-solar-gold/15 blur-2xl" />

              <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white/70 text-sm">Floating Solar Panels</div>
                      <div className="text-white/90 font-semibold text-xl mt-1">
                        Galaxy-grade energy capture
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-electric-500/90">
                      Live simulation
                    </div>
                  </div>

                  <div className="mt-6 relative h-[280px]">
                    <motion.div
                      className="absolute left-6 top-10 w-[230px] h-[140px] rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl shadow-[0_0_60px_rgba(43,108,255,0.15)]"
                      animate={{ y: [0, -14, 0] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div className="p-4">
                        <div className="h-2 w-full bg-white/10 rounded-full" />
                        <div className="mt-5 grid grid-cols-2 gap-3">
                          {[0, 1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="h-20 rounded-2xl bg-gradient-to-br from-solar-gold/20 to-electric-500/10 border border-white/10 flex items-end p-3"
                            >
                              <div className="h-1.5 w-full bg-white/10 rounded-full" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute right-4 top-24 w-[190px] h-[120px] rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl"
                      animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute left-[22%] top-[18%] h-2 w-2 rounded-full bg-white/60" />
                      <div className="absolute left-[65%] top-[26%] h-2 w-2 rounded-full bg-white/40" />
                      <div className="absolute left-[40%] top-[58%] h-1.5 w-1.5 rounded-full bg-white/30" />
                      <div className="absolute left-[70%] top-[65%] h-1 w-1 rounded-full bg-white/25" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <SolarSavingsPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="highlights"
        eyebrow="Power, beautifully engineered"
        title="Built for trust. Designed for modern Africa."
        subtitle="From premium panels to smart monitoring—your energy system should look and feel futuristic."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-electric-500/15 border border-white/10 shadow-[0_0_40px_rgba(43,108,255,0.12)]">
                <h.icon size={22} className="text-electric-500" />
              </div>
              <div className="mt-4 text-xl font-semibold">{h.title}</div>
              <div className="mt-2 text-white/65 text-sm leading-relaxed">{h.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="text-white/70 text-sm font-semibold tracking-wide">
              Product Highlights
            </div>
            <div className="mt-2 text-white text-2xl font-semibold">
              Popular Solar Solutions
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {productData.slice(0, 4).map((p) => (
                <div key={p.key} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-white/80 font-semibold">{p.title}</div>
                  <div className="mt-2 text-white/60 text-sm">{p.watt}</div>
                  <div className="mt-3 h-px bg-white/10" />
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-electric-500/90 font-semibold">{p.price}</div>
                    <button className="text-solar-gold text-sm hover:underline">Learn more</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="text-white/70 text-sm font-semibold tracking-wide">
              Trusted Customers
            </div>
            <div className="mt-2 text-white text-2xl font-semibold">
              Powering communities across Africa
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Lagos', 'Accra', 'Nairobi', 'Kano', 'Abuja', 'Enugu'].map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-6 text-white/60 text-sm leading-relaxed">
              Get a tailored system recommendation in minutes—then we handle installation, monitoring setup, and after-sales support.
            </div>
            <div className="mt-6">
              <button className="w-full rounded-2xl bg-electric-500/15 border border-electric-500/30 text-white font-semibold py-3 hover:bg-electric-500/20 transition">
                Talk to an Energy Expert
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-white/70 text-sm font-semibold tracking-wide">Partners</div>
              <div className="mt-2 text-white text-2xl font-semibold">Trusted by forward-thinking teams</div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['SolarGrid Africa', 'EcoVolt', 'GridShield', 'Kobo Energy', 'LumenVolt', 'VoltWorks'].map(
                (name) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/65 text-sm flex items-center justify-center"
                  >
                    {name}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="testimonials"
        eyebrow="Proof in performance"
        title="What customers say"
        subtitle="Premium installations and real results."
        className="pb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: 'Amina O.',
              location: 'Lagos, Nigeria',
              status: 'Home Owner',
              quote:
                'The installation was smooth and the system is powering our home quietly. The smart dashboard makes it easy to track everything.',
            },
            {
              name: 'Kofi Mensah',
              location: 'Accra, Ghana',
              status: 'Business Owner',
              quote:
                'Our shop runs reliably now—no more constant fuel for generators. The financing plan made it possible.',
            },
            {
              name: 'Chinedu E.',
              location: 'Enugu, Nigeria',
              status: 'Home Owner',
              quote:
                'Professional service, premium products, and a team that communicates clearly. We feel confident with Sun Flex Solar Galaxy.',
            },
          ].map((t) => (
            <div key={t.name} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-solar-gold/25 to-electric-500/10 border border-white/10 flex items-center justify-center">
                    <div className="text-white/85 font-semibold">{t.name.split(' ')[0][0]}</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-white/60 text-xs">{t.location}</div>
                  </div>
                </div>
                <div className="text-solar-gold text-xs border border-white/10 rounded-full px-3 py-1 bg-black/10">
                  5.0 ★
                </div>
              </div>
              <div className="mt-4 text-white/70 text-sm leading-relaxed">“{t.quote}”</div>
              <div className="mt-4 text-white/60 text-xs">{t.status}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-electric-500/10 via-white/5 to-solar-gold/10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-white/70 text-sm font-semibold tracking-wide">Ready to go beyond the grid?</div>
              <div className="mt-2 text-white text-2xl font-semibold">Get your solar estimate today</div>
              <div className="mt-2 text-white/65 text-sm">Instant calculation + financing options available.</div>
            </div>
            <div className="flex gap-3">
              <button
                className="rounded-2xl border border-white/15 bg-white/5 text-white font-semibold px-6 py-3 hover:bg-white/10 transition"
                onClick={() =>
                  document.getElementById('financing')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View Financing
              </button>
              <button
                className="rounded-2xl bg-solar-gold text-space-100 font-semibold px-6 py-3 hover:brightness-110 transition shadow-[0_0_30px_rgba(253,184,19,0.25)]"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

