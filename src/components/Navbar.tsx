import { useEffect, useState } from 'react'
import { LogoMark } from './LogoMark'
import { ThemeToggle } from './ThemeToggle'
import { navLinks } from '../data/navigation'



export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  // Close the mobile menu when the Escape key is pressed
  useEffect(() => {
    if (!menuOpen) return
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <header className="relative z-40 border-b border-line bg-page">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" onClick={closeMenu} className="flex items-center gap-2.5">
          <LogoMark size={36} className="text-accent" />
          <span className="font-heading text-[22px] font-bold tracking-tight">Kei-Tech</span>
        </a>

        <div className="flex items-center gap-2 md:gap-6">
          {/* Desktop links */}
          <ul className="hidden items-center gap-6 text-[15px] font-medium md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="py-3 transition-colors hover:text-highlight">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          {/* Desktop "Get a Quote" */}
          <a href="#contact" className="hidden rounded-lg bg-accent px-5 py-3 font-semibold text-on-accent md:inline-block">
            Get a Quote
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex size-11 items-center justify-center rounded-lg border border-line bg-card md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full border-b border-line bg-page px-6 pb-6 shadow-lg md:hidden">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu} className="block border-b border-line py-4 text-lg font-medium">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-5 flex min-h-13 items-center justify-center rounded-lg bg-accent font-semibold text-on-accent"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}