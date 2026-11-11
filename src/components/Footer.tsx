import { LogoMark } from './LogoMark'
import { navLinks } from '../data/navigation'
import { contactChannels } from '../data/contact'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-band text-band-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14">
        <div className="flex flex-wrap justify-between gap-10">
          {/* Brand */}
          <div className="flex max-w-xs flex-col gap-3">
            <a href="#top" className="flex items-center gap-2.5 text-band-ink">
              <LogoMark size={32} className="text-accent" />
              <span className="font-heading text-xl font-bold tracking-tight">Kei-Tech</span>
            </a>
            <p className="text-sm leading-relaxed">
              Websites, apps and smart devices. Built in Eastern Samar, Philippines, for clients worldwide.
            </p>
          </div>

          {/* Page links */}
          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="font-mono text-xs text-band-accent">// explore</p>
            <ul className="flex flex-col gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-band-ink">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact links */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs text-band-accent">// contact</p>
            <ul className="flex flex-col gap-2 text-sm">
              {contactChannels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-band-ink"
                  >
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-band-line pt-6 text-sm">
          <p>© {currentYear} Kei-Tech. All rights reserved.</p>
          <a href="#top" className="font-mono text-xs transition-colors hover:text-band-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}