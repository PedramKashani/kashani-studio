import { Link } from 'react-router-dom'
import { C, pagePadX } from '../styles/tokens'

export default function NotFound() {
  return (
    <section style={{ background: C.bg, padding: `112px ${pagePadX}`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <span style={{ fontSize: '11px', color: C.teal, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '24px' }}>404</span>
      <h1 style={{ fontSize: 'clamp(34px, 8vw, 48px)', fontWeight: 500, lineHeight: 1.08, letterSpacing: '-0.03em', color: C.text, margin: '0 0 20px' }}>
        Page not found.
      </h1>
      <p style={{ fontSize: '15px', color: C.muted3, lineHeight: 1.65, maxWidth: '320px', margin: '0 0 40px' }}>
        This page doesn't exist or was moved. Head back home.
      </p>
      <Link
        to="/"
        style={{ background: C.text, color: C.bg, fontSize: '14px', fontWeight: 500, padding: '13px 28px', borderRadius: '6px', textDecoration: 'none' }}
      >
        Back to home
      </Link>
    </section>
  )
}
