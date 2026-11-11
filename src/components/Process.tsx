import { processSteps } from '../data/process'

export function Process() {
  return (
    <section id="process" className="bg-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
        <div className="flex max-w-2xl flex-col gap-3">
          <p className="font-mono text-sm text-highlight">// how i work</p>
          <h2 className="font-heading text-[clamp(1.875rem,3.4vw,2.75rem)] leading-tight font-bold tracking-tight">
            Simple steps, no surprises
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            You always know what’s happening, whether we meet in person or online.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {processSteps.map((step, index) => (
            <li
                key={step.title}
                className="flex flex-col gap-2.5 rounded-2xl border border-line bg-card p-5 sm:last:col-span-2 lg:last:col-span-2 xl:last:col-span-1"
                >
              <span className="flex size-9 items-center justify-center rounded-full border-[1.5px] border-highlight font-mono text-[13px] text-highlight">
                {index + 1}
              </span>
              <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}