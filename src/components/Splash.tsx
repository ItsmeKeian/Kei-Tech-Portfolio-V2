import { useEffect, useState } from 'react'

const SHOWN_KEY = 'kt-splash-shown'
const SHOW_DURATION_MS = 1000 // how long the splash stays fully visible
const FADE_DURATION_MS = 500  // how long the fade-out takes

function shouldShowSplash(): boolean {
  try {
    // Testing shortcut: add ?splash to the URL to always show it
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
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!visible) return
    try {
      sessionStorage.setItem(SHOWN_KEY, '1')
    } catch {
      // Storage blocked: the splash may show again, which is fine.
    }
    const fadeTimer = setTimeout(() => setLeaving(true), SHOW_DURATION_MS)
    const removeTimer = setTimeout(() => setVisible(false), SHOW_DURATION_MS + FADE_DURATION_MS)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      aria-hidden="true"
      onClick={() => setLeaving(true)}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-page transition-opacity duration-500 ${
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M4 12h5l3-6 3 12 3-6h2" pathLength={1} className="animate-draw" />
      </svg>
      <p className="animate-rise font-heading text-3xl font-bold tracking-[0.2em] text-ink">
        KEI-TECH
      </p>
    </div>
  )
}