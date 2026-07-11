import FadeIn from '../ui/FadeIn'
import ContactButton from '../ui/ContactButton'
import { contato, site } from '../../content'

export default function ContatoSection() {
  return (
    <section
      id="contato"
      className="flex min-h-screen flex-col bg-[#0C0C0C] px-5 pt-20 sm:px-8 md:px-10"
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center sm:gap-8">
        <FadeIn>
          <h2
            className="hero-heading max-w-4xl font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 8vw, 110px)' }}
          >
            {contato.titulo}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="max-w-xl font-light leading-relaxed text-[#D7E2EA] opacity-70"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.25rem)' }}
          >
            {contato.subtitulo}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="pt-4">
            <ContactButton label={contato.botao} href={site.whatsapp} />
          </div>
        </FadeIn>
      </div>
      <footer className="flex flex-col items-center justify-between gap-2 py-8 sm:flex-row">
        <a
          href={`mailto:${site.email}`}
          className="font-light text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
        >
          {site.email}
        </a>
        <p className="font-light text-[#D7E2EA] opacity-60">{contato.direitos}</p>
      </footer>
    </section>
  )
}
