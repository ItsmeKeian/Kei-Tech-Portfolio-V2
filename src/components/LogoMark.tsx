type LogoMarkProps = {
  size?: number
  className?: string
  animated?: boolean
}

export function LogoMark({ size = 32, className = '', animated = false }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="14" y="14" width="36" height="36" rx="5" pathLength={1} className={animated ? 'splash-draw' : undefined} />
      <path
        d="M24 7v7M32 7v7M40 7v7M24 50v7M32 50v7M40 50v7M7 24h7M7 32h7M7 40h7M50 24h7M50 32h7M50 40h7"
        className={animated ? 'splash-pins' : undefined}
      />
      <path
        d="M26 22v20M26 33l11-11M30 29l7 13"
        pathLength={1}
        className={animated ? 'splash-draw splash-draw-late' : undefined}
      />
    </svg>
  )
}