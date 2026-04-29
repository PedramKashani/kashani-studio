import type { CSSProperties } from 'react'

export const C = {
  bg:       '#080808',
  bg2:      '#0A0A0A',
  bg3:      '#0D0D0D',
  bg4:      '#0f0f0f',
  bg5:      '#111111',
  border:   '#141414',
  border2:  '#1a1a1a',
  border3:  '#2a2a2a',
  teal:     '#1D9E75',
  tealDark: '#0f3d2a',
  text:     '#EFEFEF',
  muted1:   '#888888',
  muted2:   '#555555',
  muted3:   '#3a3a3a',
  muted4:   '#2a2a2a',
  muted5:   '#1e1e1e',
  dim:      '#242424',
  fade:     '#282828',
}

export const s: Record<string, CSSProperties> = {
  section:  { background: C.bg, padding: '96px 48px', borderTop: `0.5px solid ${C.border}`, fontFamily: 'system-ui, -apple-system, sans-serif' },
  secTop:   { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' },
  secTitle: { fontSize: '38px', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em', color: C.text, margin: 0 },
  secNote:  { fontSize: '14px', color: C.muted3, lineHeight: 1.6, maxWidth: '240px', textAlign: 'right' },
  eyebrow:  { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' },
  eyeLine:  { width: '24px', height: '1px', background: C.border3 },
  eyeDot:   { width: '5px', height: '5px', borderRadius: '50%', background: C.teal },
  eyeText:  { fontSize: '11px', color: '#444', letterSpacing: '0.08em', textTransform: 'uppercase' },
  cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '1px', background: C.border, border: `0.5px solid ${C.border}`, borderRadius: '10px', overflow: 'hidden' },
  card:     { background: C.bg3, padding: '36px 28px 40px', display: 'flex', flexDirection: 'column' },
  cardFeat: { background: '#0f1a16', padding: '36px 28px 40px', display: 'flex', flexDirection: 'column' },
}
