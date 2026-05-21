import Section from '../layouts/Section.jsx'
import { Users, Sparkles, Leaf, Globe, Lightbulb } from 'lucide-react'

export default function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="Built on African ingenuity"
      title="Innovation that powers daily life"
      subtitle="A premium solar partner engineered for reliability, trust, and smart living."
      className="pt-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/15 border border-white/10">
                <Users size={18} className="text-electric-500" />
              </div>
              <div className="mt-4 text-white font-semibold">Our Mission</div>
              <div className="mt-2 text-white/65 text-sm leading-relaxed">
                Make reliable solar energy accessible—so families and businesses can grow beyond outages.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-solar-gold/15 border border-white/10">
                <Sparkles size={18} className="text-solar-gold" />
              </div>
              <div className="mt-4 text-white font-semibold">Our Vision</div>
              <div className="mt-2 text-white/65 text-sm leading-relaxed">
                A futuristic African clean-energy ecosystem powered by smart systems and transparent service.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/15 border border-white/10">
                <Leaf size={18} className="text-electric-500" />
              </div>
              <div className="mt-4 text-white font-semibold">Sustainability Goals</div>
              <div className="mt-2 text-white/65 text-sm leading-relaxed">
                Reduce emissions, maximize system efficiency, and build long-term value with low-waste installs.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-solar-gold/15 border border-white/10">
                <Globe size={18} className="text-solar-gold" />
              </div>
              <div className="mt-4 text-white font-semibold">Innovation Philosophy</div>
              <div className="mt-2 text-white/65 text-sm leading-relaxed">
                Smart living means measurable energy: monitoring, analytics, and dependable support.
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-electric-500/10 via-white/5 to-solar-gold/10 p-5">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/20 border border-white/10">
                <Lightbulb size={18} className="text-solar-gold" />
              </div>
              <div>
                <div className="text-white font-semibold">African energy empowerment</div>
                <div className="mt-2 text-white/65 text-sm leading-relaxed">
                  We partner with trusted installers and innovators across Africa—so every system delivers confidence.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="text-white/70 text-sm font-semibold tracking-wide">Team</div>
          <div className="mt-2 text-white text-2xl font-semibold">Engineers. Operators. Builders.</div>
          <div className="mt-5 space-y-4">
            {[
              { name: 'Engineering Lead', role: 'Systems design & reliability' },
              { name: 'Solar Ops Manager', role: 'Install quality & scheduling' },
              { name: 'Customer Success', role: 'Monitoring setup & support' },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <div className="text-white font-semibold">{t.name}</div>
                <div className="text-white/60 text-sm mt-1">{t.role}</div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full rounded-2xl bg-solar-gold text-space-100 font-semibold px-6 py-3 hover:brightness-110 transition shadow-[0_0_30px_rgba(253,184,19,0.25)]">
            Meet the Team
          </button>
        </div>
      </div>
    </Section>
  )
}

