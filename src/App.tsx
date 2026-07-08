import HeroSection from './components/sections/HeroSection'
import MarqueeSection from './components/sections/MarqueeSection'

export default function App() {
  return (
    <main className="bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
    </main>
  )
}
