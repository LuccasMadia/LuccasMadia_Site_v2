import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ServicesSection from './components/sections/ServicesSection'
import ProjectsSection from './components/sections/ProjectsSection'
// import DepoimentosSection from './components/sections/DepoimentosSection'
// import FormacoesSection from './components/sections/FormacoesSection'
import ContatoSection from './components/sections/ContatoSection'
import SiteNav from './components/ui/SiteNav'
import { sectionOrder } from './content'

export default function App() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const { overflow: htmlOverflow } = document.documentElement.style
    const { overflow: bodyOverflow } = document.body.style
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = htmlOverflow
      document.body.style.overflow = bodyOverflow
    }
  }, [])

  const handleAdvance = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if (target.closest('a, button, [data-no-advance]')) return
    setIndex((i) => (i + 1) % sectionOrder.length)
  }

  return (
    <div
      className="relative h-screen cursor-pointer overflow-hidden bg-[#0C0C0C] font-kanit"
      style={{ overflowX: 'clip' }}
      onClick={handleAdvance}
    >
      <SiteNav dark={sectionOrder[index] === 'servicos'} onNavigate={setIndex} />
      <motion.main
        animate={{ y: `-${index * 100}vh` }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-screen">
          <HeroSection />
        </div>
        <div className="h-screen overflow-y-auto">
          <AboutSection />
        </div>
        <div className="h-screen overflow-y-auto">
          <ServicesSection />
        </div>
        <div className="h-screen overflow-y-auto">
          <ProjectsSection />
        </div>
        <div className="h-screen overflow-y-auto">
          <ContatoSection />
        </div>
      </motion.main>
    </div>
  )
}
