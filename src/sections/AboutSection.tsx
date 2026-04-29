import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow'
import { C, s } from '../styles/tokens'

const VALUES = [
  ['Approach', 'Custom code only. No shortcuts.'],
  ['Speed',    'Discovery to launch in ~21 days.'],
  ['Clients',  'Firms, nonprofits, creatives, services.'],
  ['Stack',    'React, Vite, Vercel.'],
] as const

export default function AboutSection() {
  return (
    <section id="about" style={s.section}>
      <Eyebrow label="About" />
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: '72px', alignItems: 'start' }}>

        {/* photo col */}
        <div>
          <div style={{ width: '100%', aspectRatio: '3/4', background: C.bg4, border: `0.5px solid ${C.border}`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }} aria-hidden="true">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#161616', border: `0.5px solid ${C.border2}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="#333" strokeWidth="1" />
                  <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#333" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>
              <span style={{ fontSize: '11px', color: '#222', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Photo</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: C.bg3, border: `0.5px solid ${C.border}`, borderRadius: '8px', marginTop: '10px' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: C.text, marginBottom: '3px' }}>Kashani Studio</div>
              <div style={{ fontSize: '12px', color: '#333' }}>Web Design & Development</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: C.teal, border: `0.5px solid ${C.tealDark}`, padding: '4px 10px', borderRadius: '100px' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: C.teal }} />
              Open to work
            </div>
          </div>
        </div>

        {/* copy col */}
        <div style={{ paddingTop: '8px' }}>
          <h2 style={{ fontSize: '38px', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.025em', color: C.text, margin: '0 0 28px' }}>
            Built on the belief that <span style={{ color: C.dim }}>great</span> websites change businesses.
          </h2>
          <p style={{ fontSize: '15px', color: C.muted3, lineHeight: 1.75, margin: '0 0 18px' }}>
            Kashani Studio was built for the businesses agencies overlook —{' '}
            <span style={{ color: '#666' }}>law firms trying to look the part, nonprofits that need to earn trust fast, creatives who want a site as sharp as their work.</span>
          </p>
          <p style={{ fontSize: '15px', color: C.muted3, lineHeight: 1.75, margin: 0 }}>
            Every site is custom-coded from scratch. No templates. No page builders.{' '}
            <span style={{ color: '#666' }}>Just clean React, deployed fast, and built to last.</span>
          </p>

          <div style={{ height: '0.5px', background: C.bg5, margin: '32px 0' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: C.bg5, border: `0.5px solid ${C.bg5}`, borderRadius: '8px', overflow: 'hidden', marginBottom: '36px' }}>
            {VALUES.map(([lbl, txt]) => (
              <div key={lbl} style={{ background: C.bg2, padding: '18px 20px' }}>
                <div style={{ fontSize: '11px', color: C.teal, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '5px' }}>{lbl}</div>
                <div style={{ fontSize: '13px', color: '#333', lineHeight: 1.5 }}>{txt}</div>
              </div>
            ))}
          </div>

          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 500, color: C.text, border: `0.5px solid ${C.muted5}`, padding: '11px 20px', borderRadius: '6px', background: 'transparent', cursor: 'pointer' }}>
              Start a project <span style={{ color: C.teal }}>→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
