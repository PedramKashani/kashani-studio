import { Link } from 'react-router-dom'
import Logo from './Logo'
import { C, pagePadX } from '../styles/tokens'

const FOOTER_LINKS = [
  ['Work', '/work'],
  ['Services', '/services'],
  ['About', '/about'],
  ['Contact', '/contact'],
] as const

export default function Footer() {
  return (
    <footer style={{ borderTop: `0.5px solid ${C.bg5}`, padding: `36px ${pagePadX}`, background: C.bg, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div className="site-shell footer-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo muted />
        </Link>
        <div className="footer-links" style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {FOOTER_LINKS.map(([label, href]) => (
            <Link key={label} to={href} style={{ fontSize: '13px', color: C.muted1, textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </div>
        <p style={{ fontSize: '12px', color: C.muted2, margin: 0 }}>
          © 2026 Kashani Studio
        </p>
      </div>
    </footer>
  )
}
