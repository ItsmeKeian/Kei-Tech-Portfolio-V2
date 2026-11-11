import { services } from '../data/services'

export function Services() {
  return (
    <section id="services" className="bg-band text-band-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
        <div className="flex max-w-2xl flex-col gap-3">
          <p className="font-mono text-sm text-band-accent">// services</p>
          <h2 className="font-heading text-[clamp(1.875rem,3.4vw,2.75rem)] leading-tight font-bold tracking-tight">
            What I can build for you
          </h2>
          <p className="text-lg leading-relaxed text-band-muted">
            Tell me the problem you want solved. I’ll suggest the simplest system that fixes it.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="flex flex-col gap-4 rounded-2xl border border-band-line bg-band-card p-7 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl border border-band-line bg-band">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-accent">
                    <path d={service.icon} />
                  </svg>
                </span>
                <span className="font-mono text-[13px] text-band-muted">{service.number}</span>
              </div>
              <h3 className="font-heading text-[22px] leading-snug font-semibold">{service.title}</h3>
              <p className="leading-relaxed text-band-muted">{service.description}</p>
              <p className="mt-auto pt-2 font-mono text-xs text-band-muted">For: {service.idealFor}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}