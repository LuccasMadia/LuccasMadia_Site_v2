import HeroSection from './components/sections/HeroSection'
import MarqueeSection from './components/sections/MarqueeSection'
import AboutSection from './components/sections/AboutSection'
import ServicesSection from './components/sections/ServicesSection'

export default function App() {
  return (
    <main className="bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
    </main>
  )
}
