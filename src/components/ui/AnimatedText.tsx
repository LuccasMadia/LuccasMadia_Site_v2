import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.022,
    },
  },
}

const charVariant: Variants = {
  hidden: { opacity: 0.2 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const words = text.split(' ')

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={container}
    >
      {words.map((word, wi) => (
        <span key={wi}>
          <span className="inline-block whitespace-nowrap">
            {word.split('').map((char, ci) => (
              <span key={ci} className="relative inline-block">
                <span className="opacity-20">{char}</span>
                <motion.span className="absolute inset-0" variants={charVariant}>
                  {char}
                </motion.span>
              </span>
            ))}
          </span>{' '}
        </span>
      ))}
    </motion.p>
  )
}
