import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Section from '../layouts/Section.jsx'
import { estimateMonthlyPayment } from '../lib/calculators.js'
import { formatCurrencyNGN } from '../lib/format.js'

const plans = [
  {
    key: 'starter',
    title: 'Starter',
    deposit: '10% down',
    duration: '12 months',
    rate: '0% interest',
    tag: null,
    hot: false,
    perks: ['Small upfront deposit', 'Fixed monthly payments', 'No hidden fees', 'Early payoff allowed'],
    accent: 'border-white/15',
  },
  {
    key: 'flex',
    title: 'Flex Pay',
    deposit: '10% down',
    duration: '24 months',
    rate: 'Low APR',
    tag: 'Most popular',
    hot: true,
    perks: ['Small upfront deposit', 'Lowest monthly cost', 'Flexible system size', 'Priority installation'],
    accent: 'border-solar-gold/40',
  },
  {
    key: 'community',
    title: 'Community',
    deposit: 'Group rates',
    duration: '36 months',
    rate: '0% interest',
    tag: null,
    hot: false,
    perks: ['Group buying power', 'Estate/compound plans', 'Shared monitoring', 'Dedicated liaison'],
    accent: 'border-electric-500/30',
  },
]

const SYSTEM_OPTIONS = [
  { label: '3kW Home',      cost: 950_000   },
  { label: '5kW Home',      cost: 1_500_000 },
  { label: '8kW Business',  cost: 2_400_000 },
  { label: '10kW Business', cost: 3_200_000 },
  { label: 'Custom',        cost: 5_000_000 },
]

export default function FinancingSection() {
  const [systemIdx, setSystemIdx] = useState(1)
  const [months, setMonths]       = useState(24)
  const [downPct, setDownPct]     = useState(0.1)

  const systemCost = SYSTEM_OPTIONS[systemIdx].cost
  const result = estimateMonthlyPayment({
    systemCost,
    downPaymentPct: downPct,
    months,
    apr: 0.0,
  })

  return (
    <Section
      id="financing"
      eyebrow="Solar for everyone"
      title="Flexible financing — no barriers"
      subtitle="Clean energy shouldn't be a luxury. Choose a plan that fits your income and start saving from month one."
    >
      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {plans.map((pl, i) => (
          <motion.div
            key={pl.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className={`relative rounded-3xl border ${pl.accent} bg-white/5 backdrop-blur-xl p-6 overflow-hidden
              ${pl.hot ? 'shadow-[0_0_60px_rgba(253,184,19,0.1)]' : ''}`}
          >
            {pl.hot && (
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-solar-gold to-transparent" />
            )}
            {pl.tag ? (
              <span className="inline-block mb-4 rounded-full bg-solar-gold text-space-100 text-[10px] font-bold px-3 py-1 tracking-wide uppercase">
                {pl.tag}
              </span>
            ) : (
              <div className="mb-4 h-6" />
            )}

            <div className="text-white font-semibold text-xl mb-1">{pl.title}</div>
            <div className="text-solar-gold text-2xl font-semibold mb-1">{pl.deposit}</div>
            <div className="text-white/50 text-sm mb-1">{pl.duration}</div>
            <div className="text-electric-500/90 text-sm font-semibold mb-5">{pl.rate}</div>

            <ul className="space-y-2.5 mb-6">
              {pl.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2.5 text-sm text-white/70">
                  <Check size={13} className="text-solar-gold shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`w-full rounded-2xl py-3 font-semibold text-sm transition
                ${pl.hot
                  ? 'bg-solar-gold text-space-100 hover:brightness-110 shadow-[0_0_30px_rgba(253,184,19,0.2)]'
                  : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'}`}
            >
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Calculator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(43,108,255,0.1),transparent_45%),radial-gradient(circle_at_75%_60%,rgba(253,184,19,0.08),transparent_40%)]" />
        <div className="relative">
          <div className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-2">Payment Calculator</div>
          <div className="text-white text-xl font-semibold mb-6">Estimate your monthly instalments</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <div className="text-white/70 text-sm mb-3">Select system size</div>
                <div className="flex flex-wrap gap-2">
                  {SYSTEM_OPTIONS.map((opt, i) => (
                    <button
                      key={opt.label}
                      onClick={() => setSystemIdx(i)}
                      className={`rounded-xl px-3 py-1.5 text-xs font-semibold border transition
                        ${systemIdx === i
                          ? 'bg-solar-gold text-space-100 border-solar-gold'
                          : 'border-white/15 bg-white/5 text-white/70 hover:bg-white/10'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <div className="mt-2 text-white/45 text-xs">
                  System cost:{' '}
                  <span className="text-white/80 font-semibold">{formatCurrencyNGN(systemCost)}</span>
                </div>
              </div>

              <div>
                <div className="text-white/70 text-sm mb-2">
                  Down payment:{' '}
                  <span className="text-white font-semibold">{(downPct * 100).toFixed(0)}%</span>
                  <span className="text-white/40 ml-2 text-xs">({formatCurrencyNGN(result.down)})</span>
                </div>
                <input
                  type="range" min={0} max={0.5} step={0.05} value={downPct}
                  onChange={(e) => setDownPct(Number(e.target.value))}
                  className="w-full accent-solar-gold"
                />
                <div className="flex justify-between text-[10px] text-white/30 mt-1">
                  <span>0%</span><span>50%</span>
                </div>
              </div>

              <div>
                <div className="text-white/70 text-sm mb-2">
                  Payment period:{' '}
                  <span className="text-white font-semibold">{months} months</span>
                </div>
                <input
                  type="range" min={6} max={36} step={6} value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full accent-electric-500"
                />
                <div className="flex justify-between text-[10px] text-white/30 mt-1">
                  <span>6 mo</span><span>36 mo</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${systemCost}-${months}-${downPct}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-3xl border border-solar-gold/25 bg-solar-gold/8 p-6 text-center"
                >
                  <div className="text-white/55 text-xs font-semibold tracking-wide uppercase mb-2">Monthly Payment</div>
                  <div className="text-4xl md:text-5xl font-semibold text-solar-gold">
                    {formatCurrencyNGN(result.monthly)}
                  </div>
                  <div className="text-white/40 text-xs mt-2">for {months} months · no hidden fees</div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-white/45 text-[10px]">Principal</div>
                      <div className="text-white text-sm font-semibold mt-0.5">{formatCurrencyNGN(result.principal)}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-white/45 text-[10px]">Down payment</div>
                      <div className="text-white text-sm font-semibold mt-0.5">{formatCurrencyNGN(result.down)}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-solar-gold text-space-100 font-semibold py-3 hover:brightness-110 transition text-sm"
                  >
                    Get financing <ArrowRight size={15} />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
