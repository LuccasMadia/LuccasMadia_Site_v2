interface LiveProjectButtonProps {
  label: string
  href: string
  onClick?: () => void
}

export default function LiveProjectButton({ label, href, onClick }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault()
          onClick()
        }
      }}
      className="inline-block rounded-full border-2 border-[#35B4BA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#35B4BA] transition-colors duration-200 hover:bg-[#35B4BA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      {label}
    </a>
  )
}
