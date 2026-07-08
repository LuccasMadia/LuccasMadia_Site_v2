import FadeIn from '../ui/FadeIn'
import { depoimentos } from '../../content'

export default function DepoimentosSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Depoimentos
        </h2>
      </FadeIn>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {depoimentos.map((depoimento, i) => (
          <FadeIn key={depoimento.nome} delay={i * 0.1} className="h-full">
            <figure
              className="flex h-full flex-col justify-between rounded-[40px] border p-8 sm:p-10"
              style={{ borderColor: 'rgba(215, 226, 234, 0.25)' }}
            >
              <blockquote
                className="font-light leading-relaxed text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}
              >
                "{depoimento.citacao}"
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-medium uppercase tracking-wider text-[#D7E2EA]">
                  {depoimento.nome}
                </p>
                <p className="font-light text-[#D7E2EA] opacity-60">
                  {depoimento.empresa}
                </p>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
