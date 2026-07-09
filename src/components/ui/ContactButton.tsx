interface ContactButtonProps {
  label: string
  href: string
  className?: string
}

export default function ContactButton({ label, href, className }: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className ?? ''}`}
      style={{
        background:
          'linear-gradient(123deg, #061F22 7%, #0C6169 37%, #1FA6AC 72%, #9FE4E7 100%)',
        boxShadow:
          '0px 4px 4px rgba(15, 100, 110, 0.3), 4px 4px 12px #0C6169 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  )
}
