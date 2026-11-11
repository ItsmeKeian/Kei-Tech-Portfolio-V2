import aboutPhoto from '../assets/keian-about.webp'

const facts = ['Eastern Samar, Philippines', 'Clients worldwide · UTC+8', 'English & Filipino']

export function About() {
  return (
    <section id="about" className="bg-band text-band-ink">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 py-20">
        <div className="mx-auto w-full max-w-90 md:mx-0">
          <img
            src={aboutPhoto}
            alt="Keian, the developer behind Kei-Tech"
            width={640}
            height={800}
            loading="lazy"
            decoding="async"
            className="aspect-4/5 w-full rounded-[20px] border-[1.5px] border-band-line object-cover shadow-[14px_14px_0_var(--accent)] dark:border-accent dark:shadow-[0_0_48px_rgb(198_244_50/0.15)]"
          />
        </div>

        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
          <p className="font-mono text-sm text-band-accent">// about me</p>
          <h2 className="font-heading text-[clamp(1.875rem,3.4vw,2.75rem)] leading-tight font-bold tracking-tight">
            Hi, I’m Keian.
          </h2>
          <p className="text-lg leading-relaxed text-band-muted">
            I’m a developer from Eastern Samar, Philippines. I build web systems, mobile apps and Arduino
            devices, and I enjoy turning slow, manual work into simple tools that just work.
          </p>
          <p className="text-lg leading-relaxed text-band-muted">
            When you work with me, you talk directly to the person building your project. No middlemen,
            clear updates, and help even after launch.
          </p>
          <ul className="mt-2 flex flex-wrap gap-2.5">
            {facts.map((fact) => (
              <li key={fact} className="rounded-full border border-band-line px-3.5 py-2 text-sm">
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}