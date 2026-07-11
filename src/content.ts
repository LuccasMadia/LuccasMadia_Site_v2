import type { Icon } from 'react-bootstrap-icons'
import { BarChartLine, Briefcase, CodeSlash, Megaphone, Palette } from 'react-bootstrap-icons'

export interface Servico {
  icone: Icon
  nome: string
  descricao: string
}

export interface CaseStudyArea {
  titulo: string
  imagem: string
  descricao: string
}

export interface Project {
  numero: string
  nome: string
  categoria: string
  imagens: { col1a: string; col1b: string; col2: string }
  caseStudy?: CaseStudyArea[]
}

export interface Depoimento {
  citacao: string
  nome: string
  empresa: string
}

export interface Formacao {
  nome: string
  instituicao: string
  ano: string
}

export const site = {
  title: 'Madia — Consultoria Digital',
  whatsapp:
    'https://wa.me/+5567998746300?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%2C%20fiquei%20interessado(a)%20no%20seu%20trabalho.',
  email: 'madiaconsultoria@gmail.com',
}

export const sectionOrder = ['hero', 'sobre', 'servicos', 'projetos', 'contato']

export const hero = {
  heading: 'MADIA',
  tagline: 'soluções administrativas, tecnológicas e visuais para o seu negócio',
  cta: 'Fale comigo',
  portrait: '/images/logo-madia.png',
}

export const about = {
  heading: 'Sobre nós',
  text: 'Somos uma empresa de consultoria dedicada a entregar soluções estratégicas e criativas. Atuamos com compromisso, ética e foco em resultados que impulsionam negócios.',
  decorations: [
    {
      src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
      className:
        'w-[120px] sm:w-[160px] md:w-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
      delay: 0.1,
      x: -80,
    },
    {
      src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
      className:
        'w-[100px] sm:w-[140px] md:w-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
      delay: 0.25,
      x: -80,
    },
    {
      src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
      className:
        'w-[120px] sm:w-[160px] md:w-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
      delay: 0.15,
      x: 80,
    },
    {
      src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
      className:
        'w-[130px] sm:w-[170px] md:w-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
      delay: 0.3,
      x: 80,
    },
  ],
}

export const services: Servico[] = [
  {
    icone: Briefcase,
    nome: 'Consultoria Administrativa',
    descricao:
      'Otimização de processos e estruturas para máxima eficiência e crescimento sustentável.',
  },
  {
    icone: BarChartLine,
    nome: 'Dashboards Interativos',
    descricao:
      'Visualização de dados em tempo real para decisões mais rápidas e embasadas.',
  },
  {
    icone: CodeSlash,
    nome: 'Sites e Sistemas',
    descricao:
      'Desenvolvimento de soluções digitais sob medida, do site institucional ao sistema completo.',
  },
  {
    icone: Megaphone,
    nome: 'Social Media',
    descricao:
      'Gestão estratégica de perfis digitais para ampliar presença e engajamento online.',
  },
  {
    icone: Palette,
    nome: 'Design Gráfico',
    descricao:
      'Identidade visual e materiais que comunicam autoridade e profissionalismo.',
  },
]

export const projects: Project[] = [
  {
    numero: '01',
    nome: 'Canecas da Dri',
    categoria: 'Cliente',
    imagens: {
      col1a: '/images/canecas/canecas-01-dashboard.png',
      col1b: '/images/canecas/canecas-04-pedidos.png',
      col2: '/images/canecas/canecas-00-inicio.png',
    },
    caseStudy: [
      {
        titulo: 'Tela inicial',
        imagem: '/images/canecas/canecas-00-inicio.png',
        descricao:
          'Painel inicial com acesso rápido a todos os módulos do sistema — dashboard, insumos, produtos, pedidos, clientes, fornecedores, relatórios e histórico.',
      },
      {
        titulo: 'Dashboard',
        imagem: '/images/canecas/canecas-01-dashboard.png',
        descricao:
          'Resumo do dia com alertas de estoque baixo, para a Dri saber exatamente o que precisa repor antes de fechar um pedido.',
      },
      {
        titulo: 'Insumos',
        imagem: '/images/canecas/canecas-02-insumos.png',
        descricao:
          'Controle de entradas e saídas de materiais — canecas em branco, tintas, embalagens — com o estoque sempre atualizado automaticamente.',
      },
      {
        titulo: 'Produtos',
        imagem: '/images/canecas/canecas-03-produtos.png',
        descricao:
          'Cadastro dos produtos finais com suas receitas de produção, mostrando quanto de cada insumo é consumido por unidade.',
      },
      {
        titulo: 'Pedidos',
        imagem: '/images/canecas/canecas-04-pedidos.png',
        descricao:
          'Registro e acompanhamento de pedidos por status — pendente, em produção, entregue ou cancelado — com abertura de novo pedido, calendário de entregas e QR code individual para rastrear cada encomenda.',
      },
      {
        titulo: 'Clientes',
        imagem: '/images/canecas/canecas-05-clientes.png',
        descricao: 'Cadastro e histórico de clientes, para saber quem comprou o quê e quando.',
      },
      {
        titulo: 'Fornecedores',
        imagem: '/images/canecas/canecas-06-fornecedores.png',
        descricao: 'Cadastro dos fornecedores de insumos, centralizando contatos e origem dos materiais.',
      },
      {
        titulo: 'Segurança por módulo',
        imagem: '/images/canecas/canecas-07-seguranca.png',
        descricao:
          'Senha específica em abas sensíveis, restringindo o acesso a informações financeiras e de estoque.',
      },
      {
        titulo: 'Relatórios',
        imagem: '/images/canecas/canecas-08-relatorios.png',
        descricao:
          'Relatórios de pedidos, estoque de insumos e vendas por produto, com filtro por período e exportação em CSV.',
      },
      {
        titulo: 'Histórico',
        imagem: '/images/canecas/canecas-09-historico.png',
        descricao: 'Registro de todas as ações realizadas no sistema, com opção de reverter erros.',
      },
    ],
  },
  {
    numero: '02',
    nome: 'Aura Brand Identity',
    categoria: 'Pessoal',
    imagens: {
      col1a: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1b: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    numero: '03',
    nome: 'Solaris Digital',
    categoria: 'Cliente',
    imagens: {
      col1a: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1b: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
]

export const depoimentos: Depoimento[] = [
  {
    citacao:
      'O dashboard mudou a forma como enxergamos o negócio. Decisões que levavam dias agora saem na hora.',
    nome: 'Ana Souza',
    empresa: 'Comércio local',
  },
  {
    citacao:
      'Site entregue rápido, bonito e do jeito que pedimos. Recomendo de olhos fechados.',
    nome: 'Carlos Lima',
    empresa: 'Prestador de serviços',
  },
  {
    citacao:
      'Organização dos processos que a gente nem sabia que precisava. Profissional e atencioso do início ao fim.',
    nome: 'Marina Alves',
    empresa: 'Clínica',
  },
]

export const formacoes = {
  academica: [
    {
      nome: 'Bacharelado em Administração (cursando)',
      instituicao: 'AEMS - Três Lagoas',
      ano: '2028 (Conclusão)',
    },
  ] as Formacao[],
  tecnica: [
    {
      nome: 'Pós-Graduação — Power BI Avançado',
      instituicao: 'Ipog',
      ano: '2026',
    },
    {
      nome: 'Curso de Extensão — Cronograma e Ferramentas de Produtividade',
      instituicao: 'Ipog',
      ano: '2026',
    },
    {
      nome: 'Programação — Python',
      instituicao: 'Curso em Vídeo — Gustavo Guanabara',
      ano: '2026',
    },
  ] as Formacao[],
}

export const contato = {
  titulo: 'Vamos conversar?',
  botao: 'Chamar no WhatsApp',
  direitos: '© Madia Consultoria Digital — Todos os direitos reservados',
}
