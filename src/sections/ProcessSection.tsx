import Eyebrow from '../components/Eyebrow'
import { C, s } from '../styles/tokens'

const STEPS = [
  {
    num: '01', name: 'Discovery',
    desc: 'A free 30-min call to understand your business and what you need the site to do.',
    details: ['Free 30-min call', 'Scope document', 'Contract + deposit'],
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="5.5" stroke={C.teal} strokeWidth="1" />
        <path d="M4.5 7h5M7 4.5v5" stroke={C.teal} strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '02', name: 'Design',
    desc: 'Wireframes and a design system built around your brand. You approve before code is written.',
    details: ['Wireframes', 'Design system', 'Client approval'],
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="10" height="10" rx="2" stroke={C.teal} strokeWidth="1" />
        <path d="M4.5 5h5M4.5 7h3" stroke={C.teal} strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03', name: 'Build',
    desc: 'Custom React development. Fast, clean, built to last. No page builders, no bloated plugins.',
    details: ['React + Vite', 'CMS if needed', 'Review round'],
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M3 5l2.5 2L3 9" stroke={C.teal} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 9h3.5" stroke={C.teal} strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '04', name: 'Launch',
    desc: 'Deployed to Vercel, SEO foundations set, performance dialed in. Live and ready to work.',
    details: ['Deployed to Vercel', 'SEO + performance', 'Handoff + support'],
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2.5 7.5l3 3 6-6" stroke={C.teal} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const TIMELINE = [
  ['01', 'Discovery', 'Day 1'],
  ['02', 'Design',    'Days 2–5'],
  ['03', 'Build',     'Days 6–18'],
  ['04', 'Launch',    'Day 21'],
] as const

export default function ProcessSection() {
  return (
    <section style={s.section}>
      <div style={s.secTop}>
        <div>
          <Eyebrow label="How it works" />
          <h2 style={s.secTitle}>Simple process.<br /><span style={{ color: C.dim }}>No surprises.</span></h2>
        </div>
        <p style={s.secNote}>From first call to live site — you'll know where things stand at every step.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: '1px', background: C.bg5, border: `0.5px solid ${C.bg5}`, borderRadius: '10px', overflow: 'hidden' }}>
        {STEPS.map(step => (
          <div key={step.num} style={{ background: C.bg, padding: '36px 24px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
              <span style={{ fontSize: '11px', fontWeight: 500, color: C.teal, letterSpacing: '0.1em' }}>{step.num}</span>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: `0.5px solid ${C.border2}`, display: 'flex', alignItems: 'center', justifyContent: 'center', background: C.bg3 }}>
                {step.icon}
              </div>
            </div>
            <p style={{ fontSize: '17px', fontWeight: 500, color: C.text, margin: '0 0 10px' }}>{step.name}</p>
            <p style={{ fontSize: '13px', color: C.muted3, lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
            <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: `0.5px solid ${C.bg5}`, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {step.details.map(d => (
                <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '12px', color: C.muted2 }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.teal, opacity: 0.5, flexShrink: 0 }} />
                  {d}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', display: 'flex', border: `0.5px solid ${C.bg5}`, borderRadius: '8px', overflow: 'hidden' }}>
        {TIMELINE.map(([num, lbl, time], i) => (
          <div key={num} style={{ flex: 1, padding: '13px 16px', borderRight: i < TIMELINE.length - 1 ? `0.5px solid ${C.bg5}` : 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: 500, color: C.teal, letterSpacing: '0.06em', flexShrink: 0 }}>{num}</span>
            <span style={{ fontSize: '12px', color: '#333' }}>{lbl}</span>
            <span style={{ fontSize: '12px', color: '#222', marginLeft: 'auto', whiteSpace: 'nowrap' }}>{time}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
