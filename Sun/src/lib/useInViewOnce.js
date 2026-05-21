import { useEffect, useRef, useState } from 'react'

export function useInViewOnce(options) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    if (seen) return

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          setSeen(true)
          obs.disconnect()
        }
      },
      {
        threshold: 0.25,
        ...(options || {}),
      },
    )

    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [options, seen])

  return { ref, seen }
}

