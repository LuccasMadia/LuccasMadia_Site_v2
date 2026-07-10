import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../../content'

interface CaseStudyModalProps {
  project: Project | null
  onClose: () => void
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [project, onClose])

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          data-no-advance
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-[24px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:rounded-[32px] sm:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-5 top-5 z-10 text-3xl leading-none text-[#D7E2EA] transition-opacity hover:opacity-60 sm:right-8 sm:top-8"
            >
              ×
            </button>

            <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
              {project?.categoria}
            </p>
            <h3
              className="hero-heading mb-10 font-black uppercase leading-none tracking-tight sm:mb-14"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
            >
              {project?.nome}
            </h3>

            <div className="flex flex-col gap-10 sm:gap-14">
              {project?.caseStudy?.map((area) => (
                <div key={area.titulo} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                  <img
                    src={area.imagem}
                    alt={area.titulo}
                    loading="lazy"
                    className="w-full rounded-[16px] border border-[#D7E2EA]/20 sm:w-3/5"
                  />
                  <div className="flex flex-col justify-center sm:w-2/5">
                    <h4
                      className="mb-2 font-medium uppercase text-[#D7E2EA]"
                      style={{ fontSize: 'clamp(1rem, 1.6vw, 1.3rem)' }}
                    >
                      {area.titulo}
                    </h4>
                    <p
                      className="font-light leading-relaxed text-[#D7E2EA] opacity-70"
                      style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1rem)' }}
                    >
                      {area.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
