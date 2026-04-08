import { ImageResponse } from 'next/og'

export const alt = 'Billboard - Tworzymy strony, które sprzedają'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #050505, #11111a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 240, marginBottom: 40 }}>🌍</div>
        <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
          KT & LB
        </div>
        <div style={{ fontSize: 36, opacity: 0.8, color: '#a0a0a0' }}>
          Skuteczne strony dla branży OOH
        </div>
      </div>
    ),
    { ...size }
  )
}
