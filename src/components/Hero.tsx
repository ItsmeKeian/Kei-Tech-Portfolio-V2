import { HeroPhoto } from './HeroPhoto'
import { contactChannels } from '../data/contact'

const trustPoints = [
  { text: 'Eastern Samar, Philippines', icon: 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z' },
  { text: 'Works remotely · UTC+8', icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18' },
  { text: 'Regular progress updates', icon: 'M20 6 9 17l-5-5' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Faint circuit lines in the background */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-ink opacity-[0.07] dark:text-highlight dark:opacity-[0.12]" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M0 120h220l40 40h180" /><circle cx="440" cy="160" r="5" />
        <path d="M0 620h160l60-60h140" /><circle cx="360" cy="560" r="5" />
        <path d="M1440 80h-200l-40 40h-120" /><circle cx="1080" cy="120" r="5" />
        <path d="M1440 700h-260l-50-50h-90" /><circle cx="1040" cy="650" r="5" />
      </svg>

      <div className="relative mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 py-16 md:py-20">
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
          <p className="font-mono text-sm text-highlight">// web · mobile · iot</p>

          <h1 className="font-heading text-[clamp(2.5rem,5.2vw,4.25rem)] leading-[1.04] font-bold tracking-tight">
            Websites, apps &amp; smart devices that{' '}
            <span className="text-highlight dark:text-accent">make your work easier.</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted">
            I’m Keian, a developer from Eastern Samar, Philippines, working with clients locally and worldwide.
            I build websites, online stores, web systems with mobile apps, and Arduino/IoT solutions for schools,
            businesses and offices.
            </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
                href="#contact"
                className="inline-flex min-h-13 items-center gap-2.5 rounded-[10px] bg-accent px-6 font-semibold text-on-accent transition-transform hover:-translate-y-0.5"
            >
                Get a Free Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
            </a>
            <a
                href={contactChannels[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center gap-2.5 rounded-[10px] border-[1.5px] border-ink px-6 font-semibold transition-colors hover:border-highlight hover:text-highlight dark:border-muted/50"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
                </svg>
                Message Me
            </a>
            </div>

          <ul className="flex flex-wrap gap-x-7 gap-y-2.5 pt-4 text-sm text-muted">
            {trustPoints.map((point) => (
              <li key={point.text} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-highlight">
                  <path d={point.icon} />
                </svg>
                {point.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex min-w-0 flex-[1_1_380px] justify-center">
          <HeroPhoto />
        </div>
      </div>
    </section>
  )
}