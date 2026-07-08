import FadeIn from '../ui/FadeIn'
import ContactButton from '../ui/ContactButton'
import { contato, site } from '../../content'

export default function ContatoSection() {
  return (
    <section
      id="contato"
      className="flex min-h-screen flex-col bg-[#0C0C0C] px-5 pt-20 sm:px-8 md:px-10"
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-12 text-center sm:gap-16">
        <FadeIn>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            {contato.titulo}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <ContactButton label={contato.botao} href={site.whatsapp} />
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
