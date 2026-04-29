import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { C, pagePadX } from '../styles/tokens'

const NAV_LINKS = [
  ['Work', '/work'],
  ['Services', '/services'],
  ['About', '/about'],
  ['Contact', '/contact'],
] as const

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header style={{ background: C.bg, padding: `22px ${pagePadX}`, fontFamily: 'system-ui, -apple-system, sans-serif', position: 'sticky', top: 0, zIndex: 60 }}>
      <nav className="site-shell" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <Link to="/" style={{ textDecoration: 'none', position: 'relative', zIndex: 61 }}>
          <Logo />
        </Link>
        <div className="navbar-desktop" style={{ alignItems: 'center', gap: '28px', display: 'flex' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            {NAV_LINKS.map(([label, href]) => (
              <Link
                key={label}
                to={href}
                style={{ fontSize: '13px', color: C.muted2, textDecoration: 'none' }}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            to="/intake"
            style={{ fontSize: '13px', fontWeight: 500, color: C.text, border: `0.5px solid ${C.border3}`, padding: '8px 20px', borderRadius: '6px', background: '#111', textDecoration: 'none' }}
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          className="navbar-mobile-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-site-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(prev => !prev)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            border: `0.5px solid ${C.border3}`,
            background: C.bg3,
            color: C.text,
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            cursor: 'pointer',
            position: 'relative',
            zIndex: 61,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {menuOpen ? (
              <>
                <path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </>
            ) : (
              <>
                <path d="M3.5 5.5h11M3.5 9h11M3.5 12.5h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(8, 8, 8, 0.92)',
            backdropFilter: 'blur(2px)',
            zIndex: 59,
            padding: '92px 16px 24px',
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            id="mobile-site-menu"
            className="mobile-menu-panel"
            style={{
              border: `0.5px solid ${C.border3}`,
              borderRadius: '12px',
              background: C.bg2,
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              maxHeight: 'calc(100vh - 124px)',
              overflowY: 'auto',
            }}
            onClick={e => e.stopPropagation()}
          >
            {NAV_LINKS.map(([label, href]) => (
              <Link
                key={label}
                to={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: '15px',
                  color: C.muted1,
                  textDecoration: 'none',
                  border: `0.5px solid ${C.border2}`,
                  borderRadius: '8px',
                  padding: '12px 14px',
                  background: C.bg3,
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/intake"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: C.text,
                border: `0.5px solid ${C.border3}`,
                padding: '12px 14px',
                borderRadius: '8px',
                background: '#111',
                textDecoration: 'none',
                marginTop: '4px',
              }}
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
