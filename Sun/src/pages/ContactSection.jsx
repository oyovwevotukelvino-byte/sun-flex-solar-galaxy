import Section from '../layouts/Section.jsx'
import { useState } from 'react'
import { Phone, Mail, Send, MapPin } from 'lucide-react'

function FAQItem({ q, a, open, onToggle }) {
  return (
    <button
      type="button"
      className={
        open
          ? 'w-full rounded-2xl border border-solar-gold/35 bg-white/5 p-5 text-left'
          : 'w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left hover:border-white/20'
      }
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-white font-semibold">{q}</div>
        <div className="text-solar-gold font-semibold">{open ? '−' : '+'}</div>
      </div>
      {open && <div className="mt-3 text-white/65 text-sm leading-relaxed">{a}</div>}
    </button>
  )
}

export default function ContactSection() {
  const [faqOpen, setFaqOpen] = useState(0)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  function onSubmit(e) {
    e.preventDefault()
    // demo-only
    alert('Thanks! We will contact you shortly (demo form).')
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact Sun Flex Solar Galaxy"
      title="Request a quote"
      subtitle="Fast support, transparent recommendations, and smart installations."
      className="pb-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-white/70 text-sm font-semibold">Full name</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/10 px-3 py-2 text-white"
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              />
            </div>
            <div>
              <label className="text-white/70 text-sm font-semibold">Phone number</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/10 px-3 py-2 text-white"
                value={form.phone}
                onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
              />
            </div>
            <div>
              <label className="text-white/70 text-sm font-semibold">Email (optional)</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/10 px-3 py-2 text-white"
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-white/70 text-sm font-semibold">Message</label>
              <textarea
                className="mt-2 w-full min-h-[120px] rounded-xl border border-white/10 bg-black/10 px-3 py-2 text-white"
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-white/60 text-sm">
              By submitting, you agree to receive a response about your solar options.
            </div>
            <button
              onClick={onSubmit}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-solar-gold text-space-100 font-semibold px-6 py-3 hover:brightness-110 transition shadow-[0_0_30px_rgba(253,184,19,0.25)]"
            >
              Send request
              <Send size={18} className="group-hover:translate-x-0.5 transition" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="text-white/70 text-sm font-semibold tracking-wide">Support</div>
            <div className="mt-2 text-white text-2xl font-semibold">Talk to an expert</div>
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Phone size={18} className="text-solar-gold" />
                <div className="text-sm">+234 706 821 8951</div>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail size={18} className="text-electric-500" />
                <div className="text-sm">oviemaya1@gmail.com</div>
              </div>
            </div>

            <a
              href="https://wa.me/2347068218951?text=Hello%20Sun%20Flex%20Solar%20Galaxy%2C%20I%20want%20a%20solar%20quote."
              target="_blank"
              rel="noreferrer"
              className="mt-6 block w-full rounded-2xl bg-electric-500/20 border border-electric-500/30 text-white font-semibold px-6 py-3 hover:bg-electric-500/25 transition"
            >
              WhatsApp CTA
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="flex items-center gap-2 text-white/70 text-sm font-semibold tracking-wide">
              <MapPin size={16} className="text-solar-gold" />
              Interactive map
            </div>
            <div className="mt-3 h-44 rounded-2xl border border-white/10 bg-black/10 flex items-center justify-center text-white/50 text-sm">
              Map embed placeholder
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="text-white/70 text-sm font-semibold tracking-wide">FAQ</div>
            <div className="mt-2 text-white text-2xl font-semibold">Quick answers</div>
            <div className="mt-4 space-y-3">
              {[
                {
                  q: 'How fast can installation start?',
                  a: 'Most installations begin within 7–14 days after site assessment and confirmation of your plan (demo content).',
                },
                {
                  q: 'Do you offer financing?',
                  a: 'Yes—flexible monthly installments with transparent terms. Use the financing calculator to estimate payments.',
                },
                {
                  q: 'Do I get monitoring?',
                  a: 'Absolutely. Smart monitoring gives you energy insights so you can manage usage confidently.',
                },
              ].map((item, i) => (
                <FAQItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  open={faqOpen === i}
                  onToggle={() => setFaqOpen((cur) => (cur === i ? -1 : i))}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

