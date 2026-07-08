import FadeIn from '../ui/FadeIn'
import { formacoes } from '../../content'

export default function FormacoesSection() {
  const colunas = [
    { titulo: 'Formação Acadêmica', itens: formacoes.academica },
    { titulo: 'Certificações & Cursos', itens: formacoes.tecnica },
  ]

  return (
    <section className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Formações
        </h2>
      </FadeIn>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-2">
        {colunas.map((coluna) => (
          <div key={coluna.titulo}>
            <h3
              className="mb-6 font-medium uppercase tracking-wider text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.6rem)' }}
            >
              {coluna.titulo}
            </h3>
            {coluna.itens.map((item, i) => (
              <FadeIn key={item.nome} delay={i * 0.1}>
                <div
                  className="border-b py-6"
                  style={{ borderColor: 'rgba(215, 226, 234, 0.15)' }}
                >
                  <p className="font-medium text-[#D7E2EA]">{item.nome}</p>
                  <p className="font-light text-[#D7E2EA] opacity-60">
                    {item.instituicao} — {item.ano}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
