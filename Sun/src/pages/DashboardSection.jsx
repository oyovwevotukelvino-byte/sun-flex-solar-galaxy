import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Zap, Battery, Sun, TrendingUp, Leaf, Wifi } from 'lucide-react'
import Section from '../layouts/Section.jsx'

function Bar({ value, color, label, delay = 0 }) {
  const ref = useRef(null)
  const [go, setGo] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setGo(true) },
      { threshold: 0.4 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between mb-1.5 text-sm">
        <span className="text-white/65">{label}</span>
        <span className="font-semibold" style={{ color }}>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={go ? { width: `${value}%` } : {}}
          transition={{ duration: 1.1, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(to right, ${color}55, ${color})` }}
        />
      </div>
    </div>
  )
}

function LiveRing({ children }) {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.22, 1], opacity: [0.35, 0, 0.35] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute h-28 w-28 rounded-full border border-solar-gold/35"
      />
      <motion.div
        animate={{ scale: [1, 1.38, 1], opacity: [0.18, 0, 0.18] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: 0.5 }}
        className="absolute h-36 w-36 rounded-full border border-solar-gold/20"
      />
      {children}
    </div>
  )
}

function Sparkline({ data, color = '#FDB813' }) {
  const max = Math.max(...data, 0.1)
  const W = 100, H = 36
  const pts = data
    .map((v, i) => `${(i / (data.length - 1)) * W},${H - (v / max) * H}`)
    .join(' ')
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: H }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points={`0,${H} ${pts} ${W},${H}`} fill={`${color}18`} stroke="none" />
    </svg>
  )
}

function HourlyChart({ data }) {
  const max = Math.max(...data, 0.1)
  return (
    <div className="flex items-end gap-1 h-20">
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: `${(v / max) * 100}%`, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.035 }}
          className="flex-1 rounded-t-sm"
          style={{ background: 'linear-gradient(to top, rgba(253,184,19,0.25), #FDB813)' }}
        />
      ))}
    </div>
  )
}

const metrics = [
  { label: 'System Efficiency', value: '97.3%', icon: TrendingUp, color: 'text-green-400',    bg: 'bg-green-400/10',    border: 'border-green-400/20',    sub: '+0.4% vs yesterday' },
  { label: 'Monthly Savings',   value: '₦41,800', icon: Zap,       color: 'text-solar-gold',   bg: 'bg-solar-gold/10',   border: 'border-solar-gold/20',   sub: 'vs grid power'       },
  { label: 'Grid Independence', value: '94%',    icon: Wifi,       color: 'text-electric-500', bg: 'bg-electric-500/10', border: 'border-electric-500/20', sub: 'battery + solar'     },
  { label: 'CO₂ Saved Today',   value: '9.2 kg', icon: Leaf,       color: 'text-teal-400',     bg: 'bg-teal-400/10',     border: 'border-teal-400/20',     sub: 'trees equiv: 0.8'    },
]

const hourly = [0.4,0.2,0.1,0.1,0.3,1.2,2.8,3.4,3.6,3.5,3.2,2.9,2.6,2.4,2.1,1.8,1.2,0.9,0.6,0.3,0.2,0.1,0.1,0.2]

export default function DashboardSection() {
  const [kw, setKw] = useState(3.4)
  const [history, setHistory] = useState([2.1, 2.8, 3.2, 3.5, 3.1, 3.4, 3.6, 3.4])

  useEffect(() => {
    const t = setInterval(() => {
      const next = +(2.8 + Math.random() * 0.9).toFixed(1)
      setKw(next)
      setHistory((h) => [...h.slice(-7), next])
    }, 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <Section
      id="dashboard"
      eyebrow="Smart energy"
      title="Your solar system, live"
      subtitle="Real-time monitoring, AI-powered insights, and remote control — from any device, anywhere."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Live generation */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="text-white/70 text-sm font-semibold">Live Generation</div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
              <span className="text-white/60 text-xs">Live</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center py-4">
            <LiveRing>
              <div className="h-24 w-24 rounded-full border border-white/10 bg-black/30 backdrop-blur flex flex-col items-center justify-center">
                <Sun size={18} className="text-solar-gold mb-1" />
                <motion.div
                  key={kw}
                  initial={{ scale: 0.85 }}
                  animate={{ scale: 1 }}
                  className="text-solar-gold text-2xl font-semibold leading-none"
                >
                  {kw}
                </motion.div>
                <div className="text-white/40 text-[10px] mt-0.5">kW</div>
              </div>
            </LiveRing>
          </div>

          <div className="mt-4 mb-5">
            <div className="text-white/40 text-[10px] mb-1">Last 8 readings</div>
            <Sparkline data={history} />
          </div>

          <Bar value={82} color="#FDB813" label="Solar Output"      delay={0.1} />
          <Bar value={67} color="#4ade80" label="Battery Level"     delay={0.2} />
          <Bar value={23} color="#3B82F6" label="Grid Usage"        delay={0.3} />
          <Bar value={94} color="#22d3ee" label="Grid Independence" delay={0.4} />
        </div>

        {/* Chart */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="flex items-center justify-between mb-1">
            <div className="text-white/70 text-sm font-semibold">Today's Generation</div>
            <div className="text-white/40 text-xs">
              {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </div>
          </div>
          <div className="text-white/40 text-xs mb-5">Hourly kW output · 24h</div>

          <HourlyChart data={hourly} />
          <div className="flex justify-between mt-1 text-[9px] text-white/25">
            <span>12am</span><span>6am</span><span>12pm</span><span>6pm</span><span>12am</span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {[
              { l: 'Generated', v: '18.4 kWh', c: '#FDB813' },
              { l: 'Consumed',  v: '11.2 kWh', c: '#3B82F6' },
              { l: 'Stored',    v: '7.2 kWh',  c: '#4ade80' },
              { l: 'CO₂ Saved', v: '9.2 kg',   c: '#22d3ee' },
            ].map((m) => (
              <div key={m.l} className="rounded-2xl border border-white/10 bg-black/15 p-3">
                <div className="text-sm font-semibold" style={{ color: m.c }}>{m.v}</div>
                <div className="text-white/40 text-[10px] mt-0.5">{m.l} today</div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/15 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-white/65 text-xs">
                <Battery size={13} className="text-green-400" />
                Battery Storage
              </div>
              <span className="text-green-400 text-xs font-semibold">67% · Charging</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/8 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '67%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-green-500/60 to-green-400"
              />
            </div>
          </div>
        </div>

        {/* Metric cards */}
        <div className="flex flex-col gap-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`rounded-3xl border ${m.border} bg-white/5 backdrop-blur-xl p-4 flex items-center gap-4`}
            >
              <div className={`h-11 w-11 rounded-2xl ${m.bg} border ${m.border} flex items-center justify-center shrink-0`}>
                <m.icon size={18} className={m.color} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white/45 text-[10px] uppercase tracking-wide">{m.label}</div>
                <div className={`text-xl font-semibold ${m.color}`}>{m.value}</div>
                <div className="text-white/35 text-[10px] mt-0.5">{m.sub}</div>
              </div>
            </motion.div>
          ))}

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-electric-500/10 to-white/4 backdrop-blur-xl p-5 mt-1">
            <div className="text-white/70 text-sm font-semibold mb-1">Remote Monitoring</div>
            <p className="text-white/50 text-xs leading-relaxed mb-4">
              Control your solar system from anywhere. Get alerts, reports, and recommendations in real time.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full rounded-2xl border border-electric-500/30 bg-electric-500/10 text-white text-sm font-semibold py-2.5 hover:bg-electric-500/20 transition"
            >
              Activate Smart Monitoring
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
