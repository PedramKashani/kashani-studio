import { useState } from 'react'
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
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section style={{ ...s.section, padding: '96px clamp(20px, 5vw, 48px) 112px' }}>
      <header style={{ marginBottom: '56px', maxWidth: 'min(560px, 100%)' }}>
        <Eyebrow label="How it works" />
        <h2 style={s.secTitle}>
          Simple process.
          <br />
          <span style={{ color: C.titleSoft }}>No surprises.</span>
        </h2>
        <p
          style={{
            margin: '18px 0 0',
            fontSize: '15px',
            lineHeight: 1.65,
            color: C.prose,
            fontWeight: 400,
          }}
        >
          From first call to live site — you&apos;ll know where things stand at every step.
        </p>
      </header>

      <div className="process-grid" role="list">
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            role="listitem"
            className={`process-step${activeStep === i ? ' process-step--highlight' : ''}`}
            onMouseEnter={() => setActiveStep(i)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: C.teal, letterSpacing: '0.12em' }}>{step.num}</span>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: `0.5px solid ${C.border2}`, display: 'flex', alignItems: 'center', justifyContent: 'center', background: C.bg3 }}>
                {step.icon}
              </div>
            </div>
            <p style={{ fontSize: '18px', fontWeight: 500, color: C.text, margin: 0, letterSpacing: '-0.02em' }}>{step.name}</p>
            <p style={{ fontSize: '14px', color: C.prose, lineHeight: 1.62, margin: '14px 0 0' }}>{step.desc}</p>
            <div style={{ marginTop: '32px', paddingTop: '26px', borderTop: `0.5px solid ${C.bg5}`, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {step.details.map(d => (
                <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: C.proseMuted, lineHeight: 1.45 }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.teal, marginTop: '5px', flexShrink: 0 }} />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="process-timeline" aria-label="Typical project timeline">
        {TIMELINE.map(([num, lbl, time], i) => (
          <div
            key={num}
            className={`process-timeline-seg${activeStep === i ? ' process-timeline-seg--highlight' : ''}`}
            onMouseEnter={() => setActiveStep(i)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <span style={{ fontSize: '11px', fontWeight: 600, color: C.teal, letterSpacing: '0.08em', flexShrink: 0 }}>{num}</span>
            <span style={{ fontSize: '13px', color: C.muted1, letterSpacing: '-0.01em' }}>{lbl}</span>
            <span style={{ fontSize: '13px', fontWeight: 500, color: C.text, marginLeft: 'auto', whiteSpace: 'nowrap', letterSpacing: '-0.02em' }}>{time}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
