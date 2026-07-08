import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import LiveProjectButton from '../ui/LiveProjectButton'
import { projects } from '../../content'
import type { Project } from '../../content'

interface ProjectCardProps {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
}

function ProjectCard({ project, index, total, progress }: ProjectCardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])
  const radius = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

  return (
    <div className="h-[85vh]">
      <motion.div
        style={{ scale, top: `calc(6rem + ${index * 28}px)` }}
        className={`sticky mx-auto max-w-6xl border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${radius}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 px-2 pb-4 sm:px-4 sm:pb-6">
          <div className="flex items-center gap-4 sm:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 100px)' }}
            >
              {project.numero}
            </span>
            <div>
              <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {project.categoria}
              </p>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}
              >
                {project.nome}
              </h3>
            </div>
          </div>
          <LiveProjectButton label="Ver projeto" href="#" />
        </div>
        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={project.imagens.col1a}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${radius}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.imagens.col1b}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${radius}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.imagens.col2}
              alt=""
              loading="lazy"
              className={`h-full w-full object-cover ${radius}`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

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
      <div ref={containerRef}>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.nome}
            project={project}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
