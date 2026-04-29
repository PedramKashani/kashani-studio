import { Link } from 'react-router-dom'
import Logo from './Logo'
import { C } from '../styles/tokens'

const FOOTER_LINKS = [
  ['Work', '/work'],
  ['Services', '/services'],
  ['About', '/about'],
  ['Contact', '/contact'],
] as const

export default function Footer() {
  return (
    <footer style={{ borderTop: `0.5px solid ${C.bg5}`, padding: '36px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', background: C.bg, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo muted />
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
        {FOOTER_LINKS.map(([label, href]) => (
          <Link key={label} to={href} style={{ fontSize: '13px', color: '#222', textDecoration: 'none' }}>
            {label}
          </Link>
        ))}
      </div>
      <p style={{ fontSize: '12px', color: '#1e1e1e', whiteSpace: 'nowrap', margin: 0 }}>
        © 2025 Kashani Studio
      </p>
    </footer>
  )
}
