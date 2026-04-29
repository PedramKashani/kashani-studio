import { Link } from 'react-router-dom'
import { C } from '../styles/tokens'

const STATS = [
  ['3+',    'Industries served'],
  ['100%',  'Custom code'],
  ['React', 'Core stack'],
  ['~21d',  'Avg. to launch'],
] as const

export default function Hero() {
  return (
    <section style={{ background: C.bg, padding: '80px 48px 0', position: 'relative', overflow: 'hidden', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,158,117,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* eyebrow */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <div style={{ width: '28px', height: '1px', background: C.border3 }} />
        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.teal }} />
        <span style={{ fontSize: '12px', color: '#444', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Web Design & Development</span>
      </div>

      {/* headline */}
      <h1 style={{ fontSize: '62px', fontWeight: 500, lineHeight: 1.03, letterSpacing: '-0.03em', color: C.text, margin: 0, maxWidth: '580px' }}>
        Websites built to make<br />
        your business look<br />
        <span style={{ color: C.fade }}>un</span>deniable.
      </h1>

      {/* bottom row */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '40px', gap: '24px' }}>
        <p style={{ fontSize: '15px', color: '#4a4a4a', lineHeight: 1.65, maxWidth: '300px', margin: 0 }}>
          Custom code, no templates. For firms, nonprofits, and service businesses that have outgrown their current site.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px', flexShrink: 0 }}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button style={{ background: C.text, color: C.bg, fontSize: '14px', fontWeight: 500, padding: '13px 30px', borderRadius: '6px', border: 'none', cursor: 'pointer', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
              Start a project
            </button>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.teal, boxShadow: '0 0 0 3px rgba(29,158,117,0.15)' }} />
            <span style={{ fontSize: '12px', color: '#3a3a3a' }}>Taking on new clients</span>
          </div>
        </div>
      </div>

      {/* stats bar */}
      <div style={{ height: '1px', background: C.border, marginTop: '40px' }} />
      <div style={{ display: 'flex' }}>
        {STATS.map(([num, lbl], i) => (
          <div key={lbl} style={{ flex: 1, padding: '20px 0', borderRight: i < STATS.length - 1 ? `0.5px solid ${C.border}` : 'none' }}>
            <div style={{ fontSize: '22px', fontWeight: 500, color: C.text, letterSpacing: '-0.02em', marginBottom: '3px' }}>{num}</div>
            <div style={{ fontSize: '11px', color: '#444', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{lbl}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
