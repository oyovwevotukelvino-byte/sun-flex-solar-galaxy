import { motion } from 'framer-motion'

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
}) {
  return (
    <section id={id} className={`relative py-20 ${className}`.trim()}>
      <div className="mx-auto w-11/12 max-w-6xl">
        {(eyebrow || title || subtitle) && (
          <div className="mb-10">
            {eyebrow && (
              <div className="text-electric-500/90 mb-2 text-sm font-semibold tracking-wide">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-white/75 max-w-2xl">{subtitle}</p>
            )}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

