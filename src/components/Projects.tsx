const upcomingCaseStudies = ['// online store', '// web + mobile', '// iot']

export function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
        <div className="flex max-w-2xl flex-col gap-3">
          <p className="font-mono text-sm text-highlight">// projects</p>
          <h2 className="font-heading text-[clamp(1.875rem,3.4vw,2.75rem)] leading-tight font-bold tracking-tight">
            Case studies, coming soon
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            I’m turning my best projects into full case studies: the problem, how I solved it, and the result.
            Want to see my work now? Message me and I’ll walk you through a live demo.
          </p>
          <a
            href="#contact"
            className="mt-2 inline-flex items-center gap-2 self-start font-semibold text-highlight transition-colors hover:text-ink"
          >
            Ask for a live demo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {upcomingCaseStudies.map((tag) => (
            <li key={tag} className="flex flex-col gap-4 rounded-2xl border-[1.5px] border-dashed border-line p-5">
              <div className="flex h-44 items-center justify-center rounded-xl bg-card text-muted">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M3 14l5-4 4 3 3-2 6 4" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-xs text-highlight">{tag}</span>
                <span className="font-heading text-lg font-semibold">Case study in progress</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}