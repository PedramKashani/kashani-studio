import { s } from '../styles/tokens'

export default function Eyebrow({ label, center = false }: { label: string; center?: boolean }) {
  return (
    <div style={{ ...s.eyebrow, justifyContent: center ? 'center' : 'flex-start', marginBottom: center ? '28px' : '18px' }}>
      <div style={s.eyeLine} />
      <div style={s.eyeDot} />
      <span style={s.eyeText}>{label}</span>
      {center && <div style={s.eyeLine} />}
    </div>
  )
}
