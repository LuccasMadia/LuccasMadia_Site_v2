import FadeIn from '../ui/FadeIn'
import ContactButton from '../ui/ContactButton'
import DotGrid from '../ui/DotGrid'
import { hero, site } from '../../content'

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={28}
          baseColor="#1A1A1A"
          activeColor="#35B4BA"
          proximity={140}
          shockRadius={200}
          shockStrength={3}
          resistance={750}
          returnDuration={1.2}
        />
      </div>

      <div className="relative z-[1] flex flex-1 items-center justify-center overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            {hero.heading}
          </h1>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-1/2 z-10 w-[280px] -translate-x-1/2 sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <img src={hero.portrait} alt="" className="w-full" />
        </FadeIn>
      </div>

      <div className="relative z-[1] mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {hero.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton label={hero.cta} href={site.whatsapp} />
        </FadeIn>
      </div>
    </section>
  )
}
