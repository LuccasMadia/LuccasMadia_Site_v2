import FadeIn from '../ui/FadeIn'
import { services } from '../../content'

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Serviços
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {services.map((servico, i) => (
          <FadeIn key={servico.numero} delay={i * 0.1}>
            <div
              className="flex items-center gap-8 border-b py-8 sm:py-10 md:gap-14 md:py-12"
              style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {servico.numero}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {servico.nome}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {servico.descricao}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
