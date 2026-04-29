import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow'
import { C, s } from '../styles/tokens'

const WORK_STATS = [
  ['3+',   'Industries served'],
  ['100%', 'Custom code, no templates'],
  ['~21d', 'Average time to launch'],
] as const

function MockScreen({ accentColor = C.tealDark }: { accentColor?: string }) {
  return (
    <div style={{ width: '74%', height: '65%', background: C.border, borderRadius: '6px', border: `0.5px solid ${C.border2}`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '20px', background: C.bg5, borderBottom: `0.5px solid ${C.border2}`, display: 'flex', alignItems: 'center', gap: '4px', padding: '0 8px' }}>
        {[1, 2, 3].map(i => <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: C.border2 }} />)}
      </div>
      <div style={{ flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
        <div style={{ height: '9px', background: C.border2, borderRadius: '3px', width: '44%' }} />
        <div style={{ height: '5px', background: C.border2, borderRadius: '3px', width: '72%' }} />
        <div style={{ height: '5px', background: C.border2, borderRadius: '3px', width: '52%' }} />
        <div style={{ height: '5px', background: accentColor, borderRadius: '3px', width: '36%' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', marginTop: '3px' }}>
          {[1, 2, 3, 4].map(i => <div key={i} style={{ height: '28px', background: '#151515', borderRadius: '3px', border: `0.5px solid ${C.border2}` }} />)}
        </div>
      </div>
    </div>
  )
}

function Tag({ label, color = '#333', borderColor = C.border2 }: { label: string; color?: string; borderColor?: string }) {
  return (
    <span style={{ fontSize: '11px', color, border: `0.5px solid ${borderColor}`, padding: '3px 10px', borderRadius: '100px' }}>
      {label}
    </span>
  )
}

const SIDE_PROJECTS = [
  {
    title: 'The Robert A. Hendry Foundation',
    desc: 'Calm, resource-focused site for an anxiety mental health foundation — warm, accessible, easy to navigate.',
    tags: [{ label: 'Nonprofit', color: '#9E6B1D', borderColor: '#3d2a0f' }, { label: 'New Build' }],
    thumbColor: '#2e1f08',
  },
  {
    title: 'GarageVibe',
    desc: 'Bold, fast site for an independent music collective — built to showcase artists and grow their audience.',
    tags: [{ label: 'Music Collective', color: '#7B6FCC', borderColor: '#2a2545' }, { label: 'Redesign' }],
    thumbColor: '#1e1a38',
  },
]

export default function WorkSection({ showViewAll = true }: { showViewAll?: boolean }) {
  return (
    <section id="work" style={s.section}>
      <div style={s.secTop}>
        <div>
          <Eyebrow label="Selected Work" />
          <h2 style={s.secTitle}>Built for businesses<br /><span style={{ color: C.dim }}>that mean business.</span></h2>
        </div>
        {showViewAll && (
          <Link
            to="/work"
            style={{ fontSize: '13px', color: '#333', display: 'flex', alignItems: 'center', gap: '6px', border: `0.5px solid ${C.border2}`, padding: '9px 18px', borderRadius: '6px', textDecoration: 'none' }}
          >
            View all work <span style={{ color: C.teal }}>→</span>
          </Link>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr)', gap: '1px', background: C.bg5, border: `0.5px solid ${C.bg5}`, borderRadius: '10px', overflow: 'hidden', marginBottom: '1px' }}>
        {/* featured */}
        <div style={{ background: C.bg2, position: 'relative', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={{ position: 'absolute', inset: 0, background: C.bg4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MockScreen accentColor={C.tealDark} />
          </div>
          <div style={{ position: 'relative', padding: '20px 24px', borderTop: `0.5px solid ${C.bg5}`, background: C.bg2 }}>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <Tag label="Law Firm" color={C.teal} borderColor={C.tealDark} />
              <Tag label="Redesign" /><Tag label="React" />
            </div>
            <p style={{ fontSize: '16px', fontWeight: 500, color: C.text, margin: '0 0 5px' }}>Reeder McCreary LLP</p>
            <p style={{ fontSize: '13px', color: C.muted3, lineHeight: 1.55, margin: 0 }}>Sharp, credibility-first site for a full-service business litigation firm — built to convert visitors into consultations.</p>
            <span style={{ position: 'absolute', right: '24px', top: '24px', fontSize: '14px', color: '#222' }}>↗</span>
          </div>
        </div>

        {/* side cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: C.bg5 }}>
          {SIDE_PROJECTS.map(proj => (
            <div key={proj.title} style={{ background: C.bg2, padding: '28px 24px', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative' }}>
              <span style={{ position: 'absolute', right: '18px', top: '18px', fontSize: '13px', color: C.border2 }}>↗</span>
              <div style={{ width: '100%', height: '80px', background: C.bg4, borderRadius: '6px', border: `0.5px solid ${C.border2}`, marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                {[0, 1].map(i => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {[36, 28, 40].map((w, j) => (
                      <div key={j} style={{ height: '4px', background: j === 1 ? proj.thumbColor : C.border2, borderRadius: '2px', width: `${w}px` }} />
                    ))}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '5px', marginBottom: '8px', flexWrap: 'wrap' }}>
                {proj.tags.map(t => <Tag key={t.label} label={t.label} color={t.color || '#333'} borderColor={t.borderColor || C.border2} />)}
              </div>
              <p style={{ fontSize: '14px', fontWeight: 500, color: C.text, margin: '0 0 5px' }}>{proj.title}</p>
              <p style={{ fontSize: '12px', color: C.muted3, lineHeight: 1.55, margin: 0 }}>{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* stats bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '1px', background: C.bg5, border: `0.5px solid ${C.bg5}`, borderRadius: '10px', overflow: 'hidden' }}>
        {WORK_STATS.map(([num, lbl], i) => (
          <div key={lbl} style={{ background: C.bg2, padding: '22px 28px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <p style={{ fontSize: '26px', fontWeight: 500, color: C.text, letterSpacing: '-0.02em', margin: 0 }}>{num}</p>
            {i < 2 && <div style={{ width: '1px', height: '28px', background: C.border, flexShrink: 0 }} />}
            <p style={{ fontSize: '12px', color: '#333', lineHeight: 1.5, margin: 0 }}>{lbl}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
