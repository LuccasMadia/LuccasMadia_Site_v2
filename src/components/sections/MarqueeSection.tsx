import { useEffect, useRef, useState } from 'react'
import { marqueeImages } from '../../content'

const triple = (arr: string[]) => [...arr, ...arr, ...arr]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.offsetTop
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const row1 = triple(marqueeImages.slice(0, 11))
  const row2 = triple(marqueeImages.slice(11))

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {row1.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="h-[270px] w-[420px] flex-shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
        <div
          className="flex justify-end gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {row2.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="h-[270px] w-[420px] flex-shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
