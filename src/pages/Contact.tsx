import Eyebrow from '../components/Eyebrow'
import { C, s } from '../styles/tokens'

const INFO = [
  ['Email',          'hello@kashanistudio.com'],
  ['Response time',  'Within 1 business day'],
  ['Availability',   'Taking on new clients'],
] as const

const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  background: C.bg3,
  border: `0.5px solid ${C.border2}`,
  borderRadius: '6px',
  fontSize: '13px',
  color: C.text,
  outline: 'none',
  fontFamily: 'system-ui, -apple-system, sans-serif',
} as const

export default function Contact() {
  return (
    <section style={{ ...s.section, borderTop: 'none' }}>
      <div className="site-shell section-top" style={s.secTop}>
        <div>
          <Eyebrow label="Get in touch" />
          <h1 style={s.secTitle}>Let's build<br /><span style={{ color: C.dim }}>something great.</span></h1>
        </div>
        <p className="section-top-note" style={s.secNote}>We'll get back to you within one business day.</p>
      </div>

      <div className="site-shell contact-main-grid">

        {/* left col */}
        <div>
          <p style={{ fontSize: '15px', color: C.muted3, lineHeight: 1.75, margin: '0 0 36px' }}>
            Book a free 30-minute discovery call. We'll talk through what your business needs and whether we're the right fit.
          </p>
          {INFO.map(([label, value]) => (
            <div key={label} style={{ padding: '16px 0', borderBottom: `0.5px solid ${C.bg5}` }}>
              <div style={{ fontSize: '11px', color: C.teal, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '4px' }}>{label}</div>
              <div style={{ fontSize: '14px', color: '#444' }}>{value}</div>
            </div>
          ))}
        </div>

        {/* form */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '14px' }} onSubmit={e => e.preventDefault()}>
          <div className="contact-name-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="contact-name" style={{ fontSize: '11px', color: '#444', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Name</label>
              <input id="contact-name" name="name" style={inputStyle} type="text" placeholder="Your name" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="contact-email" style={{ fontSize: '11px', color: '#444', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Email</label>
              <input id="contact-email" name="email" style={inputStyle} type="email" placeholder="you@company.com" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="contact-business" style={{ fontSize: '11px', color: '#444', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Business</label>
            <input id="contact-business" name="business" style={inputStyle} type="text" placeholder="Your business or website URL" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="contact-message" style={{ fontSize: '11px', color: '#444', letterSpacing: '0.06em', textTransform: 'uppercase' }}>What do you need?</label>
            <textarea
              id="contact-message"
              name="message"
              style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
              placeholder="Tell us about your project — what you have, what you want, and when you need it."
            />
          </div>
          <button
            type="submit"
            style={{ background: C.text, color: C.bg, fontSize: '14px', fontWeight: 500, padding: '14px 32px', borderRadius: '6px', border: 'none', cursor: 'pointer', marginTop: '4px' }}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
