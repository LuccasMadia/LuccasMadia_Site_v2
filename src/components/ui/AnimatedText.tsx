import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

function Char({
  char,
  start,
  end,
  progress,
}: {
  char: string
  start: number
  end: number
  progress: MotionValue<number>
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return (
    <span className="relative inline-block">
      <span className="opacity-20">{char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const words = text.split(' ')
  const total = text.length
  let charCount = 0

  return (
    <p ref={ref} className={className}>
      {words.map((word, wi) => {
        const wordStart = charCount
        charCount += word.length + 1
        return (
          <span key={wi}>
            <span className="inline-block whitespace-nowrap">
              {word.split('').map((char, ci) => {
                const index = wordStart + ci
                return (
                  <Char
                    key={ci}
                    char={char}
                    start={index / total}
                    end={(index + 1) / total}
                    progress={scrollYProgress}
                  />
                )
              })}
            </span>{' '}
          </span>
        )
      })}
    </p>
  )
}
