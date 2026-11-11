import type { FormEvent } from 'react'
import { contactChannels } from '../data/contact'
import { services } from '../data/services'

const fieldClass =
  'min-h-12 w-full rounded-[10px] border border-line bg-page px-3.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-highlight focus:outline-none'

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault() // Sending is added in the next step
  }

  return (
    <section id="contact">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-12 px-6 py-20">
        {/* Left: intro and direct contact options */}
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <p className="font-mono text-sm text-highlight">// contact</p>
          <h2 className="font-heading text-[clamp(1.875rem,3.4vw,2.75rem)] leading-tight font-bold tracking-tight">
            Let’s talk about your project
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            Tell me what you need. The first consultation is free, and you’ll get a clear quote before any work starts.
          </p>

          <ul className="flex flex-col gap-3 pt-2">
            {contactChannels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 rounded-xl border border-line bg-card p-4 transition-colors hover:border-highlight"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[10px] border border-line bg-page text-highlight">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={channel.icon} />
                    </svg>
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="font-semibold">{channel.label}</span>
                    <span className="truncate font-mono text-[13px] text-muted">{channel.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: contact form */}
        <form
          onSubmit={handleSubmit}
          className="flex min-w-0 flex-[1_1_440px] flex-col gap-5 rounded-2xl border border-line bg-card p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-sm font-semibold">Your name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Juan Dela Cruz" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-sm font-semibold">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className={fieldClass} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-service" className="text-sm font-semibold">What do you need?</label>
            <select id="contact-service" name="service" className={fieldClass}>
              {services.map((service) => (
                <option key={service.number}>{service.title}</option>
              ))}
              <option>Not sure yet, let’s talk</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className="text-sm font-semibold">Tell me about your project</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              placeholder="What problem do you want to solve?"
              className={`${fieldClass} resize-y py-3`}
            />
          </div>

          <button type="submit" className="min-h-13 rounded-[10px] bg-accent font-semibold text-on-accent transition-transform hover:-translate-y-0.5">
            Send message
          </button>

          <p className="text-[13px] leading-relaxed text-muted">
            Your details are only used to reply to you, in line with the Data Privacy Act of 2012 (RA 10173).
          </p>
        </form>
      </div>
    </section>
  )
}