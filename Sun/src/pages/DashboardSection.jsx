import Section from '../layouts/Section.jsx'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Battery, Gauge, Zap, Shield } from 'lucide-react'

function Stat({ icon: Icon, label, value, unit, glow = 'from-solar-gold/15 to-electric-500/10' }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
      <div className={`h-12 w-12 rounded-2xl border border-white/10 bg-gradient-to-br ${glow} flex items-center justify-center`}>
        <Icon size={18} className="text-solar-gold" />
      </div>
      <div className="mt-4 text-white/60 text-sm font-semibold">{label}</div>
      <div className="mt-2 text-3xl font-semibold text-white">{value}{unit}</div>
    </div>
  )
}

export default function DashboardSection() {
  const [battery, setBattery] = useState(74)
  const [usage, setUsage] = useState(2.6)
  const [generation, setGeneration] = useState(3.4)
  const [gridIndependence, setGridIndependence] = useState(61)

  useEffect(() => {
    const t = setInterval(() => {
      setBattery((b) => Math.max(0, Math.min(100, b + (Math.random() * 2 - 1))))
      setUsage((u) => Math.max(0, u + (Math.random() * 0.3 - 0.15)))
      setGeneration((g) => Math.max(0, g + (Math.random() * 0.5 - 0.25)))
      setGridIndependence((p) => Math.max(0, Math.min(100, p + (Math.random() * 4 - 2))))
    }, 900)

    return () => clearInterval(t)
  }, [])

  const chartPoints = [
    18, 24, 30, 28, 35, 40, 38, 45, 52, 48, 57, 63,
  ]

  return (
    <Section
      id="dashboard"
      eyebrow="Smart energy dashboard"
      title="Real-time insights, galaxy-level clarity"
      subtitle="Animated charts and live metrics—so you always know what your system is doing."
      className="pb-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="text-white/70 text-sm font-semibold tracking-wide">Energy flows</div>
              <div className="mt-2 text-white text-2xl font-semibold">Solar → Battery → Home</div>
              <div className="mt-3 text-white/65 text-sm">Glowing network view with animated chart.</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
              <div className="text-white/60 text-xs font-semibold">System status</div>
              <div className="text-solar-gold font-semibold">Online • Stable</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <div className="flex items-center justify-between">
                <div className="text-white/70 text-sm font-semibold">Solar generation</div>
                <div className="text-electric-500 font-semibold">+{generation.toFixed(1)} kW</div>
              </div>
              <motion.div
                className="mt-3 h-28 rounded-xl bg-gradient-to-b from-electric-500/20 to-transparent flex items-end justify-around p-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {chartPoints.slice(0, 8).map((v, i) => (
                  <motion.div
                    key={i}
                    className="w-8 rounded-xl bg-electric-500/40 border border-electric-500/30"
                    initial={{ height: 30 }}
                    animate={{ height: 20 + v * 0.35 }}
                    transition={{ duration: 0.8, delay: i * 0.03 }}
                  />
                ))}
              </motion.div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <div className="flex items-center justify-between">
                <div className="text-white/70 text-sm font-semibold">Energy usage</div>
                <div className="text-solar-gold font-semibold">-{usage.toFixed(1)} kW</div>
              </div>
              <motion.div
                className="mt-3 h-28 rounded-xl bg-gradient-to-b from-solar-gold/15 to-transparent flex items-end justify-around p-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {chartPoints.slice(4, 12).map((v, i) => (
                  <motion.div
                    key={i}
                    className="w-8 rounded-xl bg-solar-gold/35 border border-solar-gold/25"
                    initial={{ height: 30 }}
                    animate={{ height: 18 + v * 0.33 }}
                    transition={{ duration: 0.85, delay: i * 0.025 }}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/10 p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div className="text-white/60 text-sm font-semibold">Grid independence</div>
                <div className="mt-1 text-white text-2xl font-semibold">{gridIndependence.toFixed(0)}%</div>
              </div>
              <div className="w-full md:w-64">
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-electric-500 to-solar-gold"
                    initial={{ width: 0 }}
                    animate={{ width: `${gridIndependence}%` }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="mt-2 text-white/60 text-xs">Higher = fewer grid interruptions</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Stat icon={Battery} label="Battery" value={battery.toFixed(0)} unit="%" />
          <Stat icon={Zap} label="Solar generation" value={generation.toFixed(1)} unit="" glow="from-electric-500/15 to-solar-gold/10" />
          <Stat icon={Gauge} label="Energy usage" value={usage.toFixed(1)} unit="" />
          <Stat icon={Shield} label="Grid independence" value={gridIndependence.toFixed(0)} unit="%" glow="from-electric-500/15 to-electric-500/10" />
        </div>
      </div>
    </Section>
  )
}

