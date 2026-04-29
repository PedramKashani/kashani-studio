import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow'
import { C, s, pagePadX } from '../styles/tokens'

export default function CTASection() {
  return (
    <section style={{ ...s.section, padding: `112px ${pagePadX}`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,158,117,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="site-shell" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Eyebrow label="Let's work together" center />
        <h2 style={{ fontSize: 'clamp(34px, 8vw, 52px)', fontWeight: 500, lineHeight: 1.06, letterSpacing: '-0.03em', color: C.text, margin: '0 0 24px', maxWidth: '520px' }}>
          Your site should be
          <br className="cta-headline-break" />
          your <span style={{ color: C.teal }}>best</span> <span style={{ color: C.dim }}>sales</span>person.
        </h2>
        <p style={{ fontSize: '15px', color: C.muted3, lineHeight: 1.65, maxWidth: '360px', margin: '0 0 44px' }}>
          If your current website isn't bringing in business — or you don't have one yet — let's fix that. Fill out a quick brief and we'll come back with a clear scope and proposal.
        </p>
        <div className="cta-actions">
          <Link to="/intake" style={{ textDecoration: 'none' }}>
            <button style={{ background: C.text, color: C.bg, fontSize: '14px', fontWeight: 500, padding: '14px 32px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
              Start your brief
            </button>
          </Link>
          <Link to="/services" style={{ textDecoration: 'none' }}>
            <button style={{ fontSize: '14px', color: '#444', border: `0.5px solid ${C.muted5}`, padding: '14px 24px', borderRadius: '6px', background: 'transparent', cursor: 'pointer' }}>
              View packages
            </button>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginTop: '22px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.teal, boxShadow: '0 0 0 3px rgba(29,158,117,0.12)' }} />
          <span style={{ fontSize: '12px', color: '#2e2e2e' }}>Currently taking on new clients</span>
        </div>
      </div>
    </section>
  )
}
