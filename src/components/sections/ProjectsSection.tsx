import { useRef, useState } from 'react'
import type { WheelEvent } from 'react'
import { motion } from 'framer-motion'
import LiveProjectButton from '../ui/LiveProjectButton'
import { projects } from '../../content'
import type { Project } from '../../content'

interface ProjectPanelProps {
  project: Project
  isActive: boolean
  isDimmed: boolean
  onEnter: () => void
  onToggle: () => void
}

function ProjectPanel({ project, isActive, isDimmed, onEnter, onToggle }: ProjectPanelProps) {
  const radius = 'rounded-[24px] sm:rounded-[32px] md:rounded-[40px]'

  return (
    <motion.div
      onMouseEnter={onEnter}
      onClick={onToggle}
      animate={{
        width: isActive ? 'clamp(320px, 52vw, 640px)' : 'clamp(64px, 9vw, 110px)',
      }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: '70vh' }}
      className={`group relative shrink-0 cursor-pointer overflow-hidden border-2 border-[#D7E2EA]/30 ${radius}`}
    >
      <img
        src={project.imagens.col2}
        alt=""
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <motion.div
        animate={{ opacity: isDimmed ? 0.35 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10"
      />

      <motion.div
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col items-center justify-between p-3 sm:p-4"
      >
        <span className="text-xs font-light text-[#D7E2EA] opacity-60">{project.numero}</span>
        <span
          className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA] sm:text-sm"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {project.nome}
        </span>
        <span className="h-6" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 24 }}
        transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
        className="absolute inset-0 flex flex-col justify-end gap-3 p-5 sm:p-7"
      >
        <span
          className="hero-heading font-black leading-none"
          style={{ fontSize: 'clamp(2rem, 4vw, 64px)' }}
        >
          {project.numero}
        </span>
        <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
          {project.categoria}
        </p>
        <h3
          className="font-medium uppercase leading-tight text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1.2rem, 2.4vw, 2rem)' }}
        >
          {project.nome}
        </h3>
        <div className="pt-1">
          <LiveProjectButton label="Ver projeto" href="#" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    const el = scrollRef.current
    if (!el) return
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
    const canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
    const canScrollLeft = el.scrollLeft > 0
    if ((delta > 0 && canScrollRight) || (delta < 0 && canScrollLeft)) {
      e.preventDefault()
      el.scrollLeft += delta
    }
  }

  return (
    <section
      id="projetos"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2
        className="hero-heading mb-10 text-center font-black uppercase leading-none tracking-tight sm:mb-14 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projetos
      </h2>
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        onMouseLeave={() => setActiveIndex(null)}
        data-no-advance
        className="scrollbar-hide mx-auto flex max-w-6xl gap-2 overflow-x-auto sm:gap-3"
      >
        {projects.map((project, i) => (
          <ProjectPanel
            key={project.nome}
            project={project}
            isActive={activeIndex === i}
            isDimmed={activeIndex !== null && activeIndex !== i}
            onEnter={() => setActiveIndex(i)}
            onToggle={() => setActiveIndex((current) => (current === i ? null : i))}
          />
        ))}
      </div>
    </section>
  )
}
