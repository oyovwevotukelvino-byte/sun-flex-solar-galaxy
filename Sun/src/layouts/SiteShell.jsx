import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'

export default function SiteShell({ children }) {
  return (
    <div className="min-h-dvh bg-space-100 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-30%] h-[520px] w-[520px] rounded-full bg-electric-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[5%] h-[420px] w-[420px] rounded-full bg-solar-gold/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(43,108,255,0.20),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(253,184,19,0.18),transparent_40%)]" />
      </div>

      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}

