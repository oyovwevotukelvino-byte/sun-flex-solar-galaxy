import { useEffect, useMemo, useState } from 'react'
import { navItems } from '../data/site.js'
import { scrollToId } from '../lib/scrollToId.js'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  const items = useMemo(() => navItems, [])

  useEffect(() => {
    const ids = items.map((i) => i.id)
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { root: null, threshold: [0.2, 0.35, 0.5] },
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [items])

  function onNav(id) {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto w-11/12 max-w-6xl pt-4">
        <div className="backdrop-blur-xl bg-space-100/20 border border-white/10 rounded-2xl shadow-galaxy px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-solar-gold/30 to-electric-500/30 border border-white/10 flex items-center justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-solar-gold shadow-[0_0_22px_rgba(253,184,19,0.65)]" />
            </div>
            <div>
              <div className="font-semibold leading-none">Sun Flex Solar Galaxy</div>
              <div className="text-xs text-white/60 mt-1">Beyond The Grid</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => onNav(it.id)}
                className={
                  active === it.id
                    ? 'px-3 py-2 rounded-xl text-white bg-white/10 border border-white/15'
                    : 'px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5'
                }
              >
                {it.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3">
          <div className="mx-auto w-11/12 max-w-6xl bg-space-100/30 border border-white/10 rounded-2xl backdrop-blur-xl overflow-hidden">
            <div className="p-2 flex flex-col">
              {items.map((it) => (
                <button
                  key={it.id}
                  onClick={() => onNav(it.id)}
                  className={
                    active === it.id
                      ? 'px-4 py-3 rounded-xl text-left text-white bg-white/10 border border-white/15'
                      : 'px-4 py-3 rounded-xl text-left text-white/70 hover:text-white hover:bg-white/5'
                  }
                >
                  {it.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

