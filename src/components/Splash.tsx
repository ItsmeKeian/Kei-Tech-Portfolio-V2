import { useEffect, useState } from 'react'
import { LogoMark } from './LogoMark'

const SHOWN_KEY = 'kt-splash-shown'
const OPEN_AT_MS = 2000 // when the doors start opening
const DOOR_MS = 600 // how long the doors take to open

function shouldShowSplash(): boolean {
  try {
    // Testing shortcut (development only): add ?splash to the URL to always show it
    if (import.meta.env.DEV && new URLSearchParams(window.location.search).has('splash')) return true

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return false
    return sessionStorage.getItem(SHOWN_KEY) === null
  } catch {
    return false
  }
}

export function Splash() {
  const [visible, setVisible] = useState(shouldShowSplash)
  const [opening, setOpening] = useState(false)

  // Start the timeline: open the doors at OPEN_AT_MS
  useEffect(() => {
    if (!visible) return
    try {
      sessionStorage.setItem(SHOWN_KEY, '1')
    } catch {
      // Storage blocked: the splash may show again, which is fine.
    }
    const timer = setTimeout(() => setOpening(true), OPEN_AT_MS)
    return () => clearTimeout(timer)
  }, [visible])

  // When the doors open (on time or by tapping), remove the splash afterwards
  useEffect(() => {
    if (!opening) return
    const timer = setTimeout(() => setVisible(false), DOOR_MS)
    return () => clearTimeout(timer)
  }, [opening])

  if (!visible) return null

  const doorMotion = 'transition-transform duration-[600ms] ease-[cubic-bezier(0.7,0,0.3,1)]'

  return (
    <div
      aria-hidden="true"
      onClick={() => setOpening(true)}
      className={`fixed inset-0 z-50 ${opening ? 'pointer-events-none' : ''}`}
    >
      {/* Top door */}
      <div className={`absolute inset-x-0 top-0 h-1/2 bg-page ${doorMotion} ${opening ? '-translate-y-full' : ''}`} />
      {/* Bottom door */}
      <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-page ${doorMotion} ${opening ? 'translate-y-full' : ''}`} />

      {/* Glowing seam across the middle */}
      <div
        className={`splash-seam absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-accent transition-opacity duration-300 ${
          opening ? 'opacity-0' : ''
        }`}
      />

      {/* Logo and name */}
      <div
        className={`splash-content absolute inset-0 flex flex-col items-center justify-center gap-4 ${
          opening ? 'opacity-0' : ''
        }`}
      >
        <LogoMark size={88} animated className="text-accent" />
        <p className="splash-rise font-heading text-3xl font-bold tracking-[0.2em] text-ink">KEI-TECH</p>
        <p className="splash-rise splash-rise-late font-mono text-sm text-highlight">web · mobile · iot</p>
      </div>
    </div>
  )
}