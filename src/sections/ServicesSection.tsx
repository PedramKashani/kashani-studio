import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow'
import { C, s } from '../styles/tokens'

function CheckIcon({ on }: { on: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}>
      <circle cx="7" cy="7" r="6" stroke={on ? C.teal : '#222'} strokeWidth="1" />
      {on && <path d="M4.5 7l2 2 3-3" stroke={C.teal} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  )
}

const PACKAGES = [
  {
    tag: 'Starter', featured: false,
    name: 'Starter Website',
    best: 'Solo professionals, small orgs, businesses just getting online.',
    price: 'From $1,500', priceNote: 'Or finance from $500 down + monthly',
    features: [
      { label: '1–3 pages', on: true },
      { label: 'Mobile responsive', on: true },
      { label: 'Contact form', on: true },
      { label: 'Basic SEO setup', on: true },
      { label: 'Deployed to Vercel', on: true },
      { label: 'CMS integration', on: false },
      { label: 'Custom components', on: false },
    ],
    cta: 'Get started',
  },
  {
    tag: 'Most popular', featured: true,
    name: 'Professional Website',
    best: 'Firms, nonprofits, and service businesses that need a complete presence.',
    price: 'From $3,500', priceNote: 'Or finance from $500 down + monthly',
    features: [
      { label: '5–8 pages', on: true },
      { label: 'Polished design system', on: true },
      { label: 'Reusable sections', on: true },
      { label: 'CMS-ready areas', on: true },
      { label: 'Launch optimization', on: true },
      { label: 'Performance & SEO setup', on: true },
      { label: 'Advanced components', on: false },
    ],
    cta: 'Start a project',
  },
  {
    tag: 'Custom', featured: false,
    name: 'Custom Website System',
    best: 'Organizations needing complex architecture, integrations, or structured content.',
    price: 'Custom scope', priceNote: 'Scoped after discovery call',
    features: [
      { label: 'Everything in Professional', on: true },
      { label: 'Full CMS integration', on: true },
      { label: 'Custom components', on: true },
      { label: 'Advanced forms & workflows', on: true },
      { label: 'Larger site architecture', on: true },
      { label: 'Scalability planning', on: true },
      { label: 'Priority support', on: true },
    ],
    cta: 'Book a discovery call',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" style={s.section}>
      <div className="site-shell section-top section-top--services" style={s.secTop}>
        <div>
          <Eyebrow label="Website Packages" />
          <h2 style={s.secTitle}>Everything you need.<br /><span style={{ color: C.titleSoft }}>Nothing you don't.</span></h2>
        </div>
        <p className="section-top-note" style={s.secNote}>Flexible packages built around where your business actually is — not where an agency wants it to be.</p>
      </div>

      <div className="site-shell services-grid" style={s.cardGrid}>
        {PACKAGES.map(pkg => (
          <div key={pkg.name} className={`service-card${pkg.featured ? ' service-card--featured' : ''}`} style={pkg.featured ? s.cardFeat : s.card}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: pkg.featured ? C.teal : C.muted2, marginBottom: '24px' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: pkg.featured ? C.teal : C.muted2 }} />
              {pkg.tag}
            </div>
            <p style={{ fontSize: '18px', fontWeight: 500, color: C.text, margin: '0 0 9px', letterSpacing: '-0.01em' }}>{pkg.name}</p>
            <p style={{ fontSize: '13px', color: pkg.featured ? C.prose : C.muted1, margin: '0 0 22px', lineHeight: 1.6 }}>{pkg.best}</p>
            <p style={{ fontSize: '28px', fontWeight: 500, color: C.text, letterSpacing: '-0.02em', margin: '0 0 4px' }}>{pkg.price}</p>
            <p style={{ fontSize: '12px', color: pkg.featured ? C.muted2 : C.proseMuted, margin: '0 0 24px' }}>{pkg.priceNote}</p>
            <div style={{ height: '1px', background: '#161616', marginBottom: '22px' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 auto' }}>
              {pkg.features.map(f => (
                <li key={f.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: f.on ? C.muted1 : C.muted2, padding: '5px 0', lineHeight: 1.45 }}>
                  <CheckIcon on={f.on} />
                  {f.label}
                </li>
              ))}
            </ul>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ marginTop: '32px', fontSize: '13px', fontWeight: 500, padding: '11px 0', textAlign: 'center', borderRadius: '6px', border: pkg.featured ? 'none' : `0.5px solid ${C.muted5}`, color: pkg.featured ? '#fff' : C.muted2, background: pkg.featured ? C.teal : 'transparent', cursor: 'pointer', width: '100%' }}>
                {pkg.cta}
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="site-shell" style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px 24px', border: `0.5px solid ${C.border}`, borderRadius: '8px', flexWrap: 'wrap' }}>
        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.teal, flexShrink: 0 }} />
        <p style={{ fontSize: '13px', color: '#333', margin: 0, minWidth: 0 }}>
          Flexible financing available — <span style={{ color: C.muted1 }}>start from $500 down, pay the rest monthly.</span> Site ownership transfers on final payment.
        </p>
        </div>
      </div>
    </section>
  )
}
