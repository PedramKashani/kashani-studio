import { Link } from 'react-router-dom'
import { C, pagePadX } from '../styles/tokens'

const STATS = [
  ['3+',    'Industries served'],
  ['100%',  'Custom code'],
  ['React', 'Core stack'],
  ['~21d',  'Avg. to launch'],
] as const

export default function Hero() {
  return (
    <section style={{ background: C.bg, padding: `72px ${pagePadX} 0`, position: 'relative', overflow: 'hidden', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: 'min(400px, 90vw)', height: 'min(400px, 90vw)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,158,117,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="site-shell">
        {/* eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <div style={{ width: '28px', height: '1px', background: C.border3 }} />
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.teal }} />
          <span style={{ fontSize: '12px', color: C.muted2, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Web Design & Development</span>
        </div>

        {/* headline */}
        <h1 style={{ fontSize: 'clamp(38px, 9vw, 62px)', fontWeight: 500, lineHeight: 1.03, letterSpacing: '-0.03em', color: C.text, margin: 0, maxWidth: '580px' }}>
          Websites built to make
          <br className="hero-headline-break" />
          your business look
          <br className="hero-headline-break hero-headline-break--last" />
          <span style={{ color: C.fade }}>un</span>deniable.
        </h1>

        {/* bottom row */}
        <div className="hero-bottom-row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '34px', gap: '14px', maxWidth: '390px' }}>
          <p style={{ fontSize: '15px', color: C.prose, lineHeight: 1.68, maxWidth: '100%', margin: 0 }}>
            Custom code, no templates. For firms, nonprofits, and service businesses that have outgrown their current site.
          </p>
          <div className="hero-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
            <Link to="/intake" style={{ textDecoration: 'none' }}>
              <button style={{ background: C.text, color: C.bg, fontSize: '14px', fontWeight: 500, padding: '13px 30px', borderRadius: '6px', border: 'none', cursor: 'pointer', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
                Start a project
              </button>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.teal, boxShadow: '0 0 0 3px rgba(29,158,117,0.15)' }} />
              <span style={{ fontSize: '12px', color: C.muted1 }}>Taking on new clients</span>
            </div>
          </div>
        </div>

        {/* stats bar */}
        <div style={{ height: '1px', background: C.border, marginTop: '40px' }} />
        <div className="hero-stats-grid">
          {STATS.map(([num, lbl]) => (
            <div key={lbl} className="hero-stats-item">
              <div style={{ fontSize: '22px', fontWeight: 500, color: C.text, letterSpacing: '-0.02em', marginBottom: '3px' }}>{num}</div>
              <div style={{ fontSize: '12px', color: C.muted1, letterSpacing: '0.03em', textTransform: 'uppercase' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
