import { C } from '../styles/tokens'

export default function Logo({ muted = false }: { muted?: boolean }) {
  return (
    <span style={{ fontSize: '14px', fontWeight: 500, color: muted ? C.muted4 : C.text }}>
      kashani <span style={{ color: C.teal }}>studio</span>
    </span>
  )
}
