import FadeIn from '../ui/FadeIn'
import AnimatedText from '../ui/AnimatedText'
import ContactButton from '../ui/ContactButton'
import { about, hero, site } from '../../content'

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      {about.decorations.map((deco) => (
        <div key={deco.src} className={`absolute ${deco.className}`}>
          <FadeIn delay={deco.delay} x={deco.x} y={0} duration={0.9}>
            <img src={deco.src} alt="" loading="lazy" className="w-full" />
          </FadeIn>
        </div>
      ))}

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            {about.heading}
          </h2>
        </FadeIn>
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={about.text}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA] text-[clamp(1rem,2vw,1.35rem)]"
          />
          <FadeIn>
            <ContactButton label={hero.cta} href={site.whatsapp} />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
