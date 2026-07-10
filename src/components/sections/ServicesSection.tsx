import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../ui/FadeIn'
import { services } from '../../content'

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section
      id="servicos"
      className="flex h-full flex-col items-center justify-center rounded-t-[40px] bg-white px-5 py-10 sm:rounded-t-[50px] sm:px-8 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-24 md:mb-32"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Serviços
        </h2>
      </FadeIn>
      <div
        className="mx-auto flex w-full max-w-5xl flex-wrap items-start justify-center gap-x-14 gap-y-16 sm:gap-x-20 md:gap-x-24"
        data-no-advance
      >
        {services.map((servico, i) => {
          const isActive = activeIndex === i
          return (
            <FadeIn key={servico.nome} delay={i * 0.08}>
              <div
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex((current) => (current === i ? null : i))}
                className="relative flex cursor-pointer flex-col items-center"
              >
                <servico.icone
                  className="text-[#0C0C0C] transition-transform duration-300"
                  style={{
                    fontSize: 'clamp(3rem, 7vw, 96px)',
                    transform: isActive ? 'scale(1.12)' : 'scale(1)',
                  }}
                  aria-hidden
                />
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-full z-10 mt-5 w-48 text-center sm:w-64 md:w-72"
                    >
                      <h3
                        className="mb-2 font-medium uppercase text-[#0C0C0C]"
                        style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}
                      >
                        {servico.nome}
                      </h3>
                      <p
                        className="font-light leading-relaxed text-[#0C0C0C] opacity-60"
                        style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)' }}
                      >
                        {servico.descricao}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
