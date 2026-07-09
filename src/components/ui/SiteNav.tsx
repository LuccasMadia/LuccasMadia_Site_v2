import FadeIn from './FadeIn'
import { nav, sectionOrder } from '../../content'

interface SiteNavProps {
  dark: boolean
  onNavigate: (index: number) => void
}

export default function SiteNav({ dark, onNavigate }: SiteNavProps) {
  return (
    <FadeIn
      as="nav"
      delay={0}
      y={-20}
      className="fixed left-0 right-0 top-0 z-50 px-6 pt-6 md:px-10 md:pt-8"
    >
      <ul className="flex justify-between">
        {nav.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                const index = sectionOrder.indexOf(item.href.replace('#', ''))
                if (index !== -1) onNavigate(index)
              }}
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-70 md:text-lg lg:text-[1.4rem] ${
                dark ? 'text-[#0C0C0C]' : 'text-[#D7E2EA]'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </FadeIn>
  )
}
