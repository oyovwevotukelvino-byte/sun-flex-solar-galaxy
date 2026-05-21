import Section from '../layouts/Section.jsx'
import { useState } from 'react'
import { estimateMonthlyPayment } from '../lib/calculators.js'
import { ArrowRight } from 'lucide-react'

export default function FinancingSection() {
  const [systemCost, setSystemCost] = useState(1800000)
  const [downPct, setDownPct] = useState(0.12)
  const [months, setMonths] = useState(24)

  const result = estimateMonthlyPayment({
    systemCost,
    downPaymentPct: downPct,
    months,
    apr: 0.24,
  })

  const downAmount = result.down
  const monthly = result.monthly

  return (
    <Section
      id="financing"
      eyebrow="Pay small installments"
      title="Flexible financing plans"
      subtitle="Solar for everyone—structured payments that fit real budgets."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(43,108,255,0.18),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(253,184,19,0.16),transparent_45%)]" />
          <div className="relative">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-white/70 text-sm font-semibold tracking-wide">Financing calculator</div>
                <div className="mt-2 text-white text-3xl font-semibold">Estimate your monthly payment</div>
                <div className="mt-3 text-white/65 text-sm max-w-xl">
                  Adjust system cost, down payment, and duration. Get a clear monthly plan instantly.
                </div>
              </div>
              <div className="text-right">
                <div className="text-white/60 text-xs font-semibold">Estimated monthly</div>
                <div className="text-solar-gold text-4xl font-semibold">₦{Math.round(monthly).toLocaleString('en-NG')}</div>
                <div className="mt-1 text-white/60 text-sm">for {months} months</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="block">
                <div className="text-white/70 text-sm mb-2">System cost (₦)</div>
                <input
                  type="range"
                  min={900000}
                  max={6500000}
                  step={50000}
                  value={systemCost}
                  onChange={(e) => setSystemCost(Number(e.target.value))}
                  className="w-full accent-solar-gold"
                />
                <div className="text-white/80 text-xs mt-2">₦{systemCost.toLocaleString('en-NG')}</div>
              </label>

              <label className="block">
                <div className="text-white/70 text-sm mb-2">Down payment %</div>
                <input
                  type="range"
                  min={0.05}
                  max={0.35}
                  step={0.01}
                  value={downPct}
                  onChange={(e) => setDownPct(Number(e.target.value))}
                  className="w-full accent-solar-gold"
                />
                <div className="text-white/80 text-xs mt-2">{(downPct * 100).toFixed(0)}%</div>
              </label>

              <label className="block">
                <div className="text-white/70 text-sm mb-2">Duration</div>
                <select
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full rounded-xl border border-white/10 bg-black/10 px-3 py-2 text-white"
                >
                  {[12, 18, 24, 30, 36].map((m) => (
                    <option key={m} value={m} className="bg-black">
                      {m} months
                    </option>
                  ))}
                </select>
                <div className="text-white/80 text-xs mt-2">Down: ₦{Math.round(downAmount).toLocaleString('en-NG')}</div>
              </label>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-white/60 text-sm">
                You’ll pay approximately{' '}
                <span className="text-white/90 font-semibold">₦{Math.round(downAmount).toLocaleString('en-NG')}</span>{' '}
                upfront, then installments.
              </div>
              <button
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-solar-gold text-space-100 font-semibold px-6 py-3 hover:brightness-110 transition shadow-[0_0_30px_rgba(253,184,19,0.25)]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request financing plan
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition" />
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="text-white/70 text-sm font-semibold tracking-wide">Solar For Everyone</div>
          <div className="mt-2 text-white text-2xl font-semibold">Monthly payment cards</div>
          <div className="mt-5 space-y-3">
            {[
              { label: 'Starter', months: 12, hint: 'Fast install + smart monitoring' },
              { label: 'Comfort', months: 24, hint: 'Balanced payments for households' },
              { label: 'Pro', months: 36, hint: 'Max savings + storage-ready setups' },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">{c.label}</div>
                  <div className="text-solar-gold text-sm font-semibold">{c.months} mo</div>
                </div>
                <div className="mt-2 text-white/60 text-sm">{c.hint}</div>
                <button className="mt-3 w-full rounded-xl border border-white/15 bg-white/5 text-white/90 py-2 text-sm hover:bg-white/10 transition">
                  Choose {c.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

