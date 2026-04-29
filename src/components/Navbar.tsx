import { Link } from 'react-router-dom'
import Logo from './Logo'
import { C } from '../styles/tokens'

const NAV_LINKS = [
  ['Work', '/work'],
  ['Services', '/services'],
  ['About', '/about'],
] as const

export default function Navbar() {
  return (
    <header style={{ background: C.bg, padding: '28px 48px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
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
            to="/contact"
            style={{ fontSize: '13px', fontWeight: 500, color: C.text, border: `0.5px solid ${C.border3}`, padding: '8px 20px', borderRadius: '6px', background: '#111', textDecoration: 'none' }}
          >
            Book a call
          </Link>
        </div>
      </nav>
    </header>
  )
}
