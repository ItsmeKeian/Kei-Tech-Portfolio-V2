import type { ReactNode } from 'react'

type ChipProps = {
  label: string
  position: string
  children: ReactNode
}

function Chip({ label, position, children }: ChipProps) {
  return (
    <div className={`absolute flex items-center gap-2 rounded-[10px] border border-line bg-card px-3.5 py-2.5 font-mono text-[13px] font-medium shadow-sm ${position}`}>
      <span className="text-highlight">{children}</span>
      {label}
    </div>
  )
}

export function HeroPhoto() {
  return (
    <div className="relative h-120 w-full max-w-115">
      {/* Circuit traces */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-highlight" viewBox="0 0 460 480" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M120 90H80V60" />
        <path d="M340 380h50v40" />
        <path d="M120 300H60v-40" />
        <circle cx="80" cy="60" r="4" fill="currentColor" />
        <circle cx="390" cy="420" r="4" fill="currentColor" />
        <circle cx="60" cy="260" r="4" fill="currentColor" />
      </svg>

      {/* Photo frame (placeholder until you have your photo) */}
      <div className="absolute top-[8%] left-[26%] flex h-[76%] w-[48%] flex-col items-center justify-center gap-3 rounded-[20px] border-[1.5px] border-band bg-band text-band-muted shadow-[14px_14px_0_var(--accent)] dark:border-accent dark:bg-band-card dark:shadow-[0_0_48px_rgb(198_244_50/0.2)]">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
        <span className="font-mono text-[13px]">[ YOUR PHOTO ]</span>
      </div>

      <Chip label="web" position="top-[2%] left-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8" /></svg>
      </Chip>
      <Chip label="mobile" position="top-[46%] left-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>
      </Chip>
      <Chip label="iot" position="right-0 bottom-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1.5" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></svg>
      </Chip>
    </div>
  )
}