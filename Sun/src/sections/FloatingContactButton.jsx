import { MessageCircle } from 'lucide-react'

export default function FloatingContactButton() {
  return (
    <a
      href="https://wa.me/2347068218951?text=Hello%20Sun%20Flex%20Solar%20Galaxy%2C%20I%20need%20help%20choosing%20a%20solar%20system."
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 z-[60]"
      aria-label="Chat on WhatsApp"
    >
      <div className="h-14 w-14 rounded-2xl bg-electric-500/25 border border-electric-500/35 backdrop-blur-xl shadow-galaxy flex items-center justify-center hover:brightness-110 transition">
        <MessageCircle size={22} className="text-electric-500" />
      </div>
    </a>
  )
}

