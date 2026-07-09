import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ServicesSection from './components/sections/ServicesSection'
import ProjectsSection from './components/sections/ProjectsSection'
// import DepoimentosSection from './components/sections/DepoimentosSection'
// import FormacoesSection from './components/sections/FormacoesSection'
import ContatoSection from './components/sections/ContatoSection'

export default function App() {
  return (
    <main className="bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <DepoimentosSection /> */}
      {/* <FormacoesSection /> */}
      <ContatoSection />
    </main>
  )
}
