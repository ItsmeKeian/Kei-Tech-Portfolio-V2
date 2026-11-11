import { ThemeToggle } from './ThemeToggle'
import { LogoMark } from './LogoMark'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'How I Work' },
  { href: '#about', label: 'About' },
]

export function Navbar() {
  return (
    <header className="border-b border-line">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
            <LogoMark size={36} className="text-accent" />
            <span className="font-heading text-[22px] font-bold tracking-tight">Kei-Tech</span>
            </a>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[15px] font-medium">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="py-3 transition-colors hover:text-highlight">
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a href="#contact" className="rounded-lg bg-accent px-5 py-3 font-semibold text-on-accent">
            Get a Quote
          </a>
        </div>
      </nav>
    </header>
  )
}