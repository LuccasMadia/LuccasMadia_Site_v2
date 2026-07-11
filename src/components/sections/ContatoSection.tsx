import { Envelope, Github, Instagram, Whatsapp } from 'react-bootstrap-icons'
import FadeIn from '../ui/FadeIn'
import ContactButton from '../ui/ContactButton'
import { contato, site } from '../../content'

const socialLinks = [
  { icon: Envelope, href: `mailto:${site.email}`, label: 'E-mail' },
  { icon: Instagram, href: site.instagram, label: 'Instagram' },
  { icon: Whatsapp, href: site.whatsapp, label: 'WhatsApp' },
  { icon: Github, href: site.github, label: 'GitHub' },
]

export default function ContatoSection() {
  return (
    <section
      id="contato"
      className="flex min-h-screen flex-col bg-[#0C0C0C] px-5 pt-20 sm:px-8 md:px-10"
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center sm:gap-8">
        <FadeIn>
          <h2
            className="hero-heading max-w-6xl font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 8vw, 110px)' }}
          >
            {contato.titulo}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="max-w-3xl font-light leading-relaxed text-[#D7E2EA] opacity-70"
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
      <footer className="flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div className="flex items-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="font-light text-[#D7E2EA] opacity-60">{contato.direitos}</p>
      </footer>
    </section>
  )
}
