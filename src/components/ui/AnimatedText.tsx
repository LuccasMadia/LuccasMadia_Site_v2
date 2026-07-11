import { useEffect, useRef, useState } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
}

const STAGGER_SECONDS = 0.022

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [visible, setVisible] = useState(false)
  const words = text.split(' ')
  let charIndex = 0

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <p ref={ref} className={className}>
      {words.map((word, wi) => (
        <span key={wi}>
          <span className="inline-block whitespace-nowrap">
            {word.split('').map((char, ci) => {
              const delay = charIndex * STAGGER_SECONDS
              charIndex += 1
              return (
                <span key={ci} className="relative inline-block">
                  <span className="opacity-20">{char}</span>
                  <span
                    className="absolute inset-0 transition-opacity ease-out"
                    style={{
                      transitionDuration: '400ms',
                      transitionDelay: `${delay}s`,
                      opacity: visible ? 1 : 0,
                    }}
                  >
                    {char}
                  </span>
                </span>
              )
            })}
          </span>{' '}
        </span>
      ))}
    </p>
  )
}
