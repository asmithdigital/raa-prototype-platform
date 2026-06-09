import { useState } from 'react'

function IOSToggle({ on, onClick }) {
  return (
    <div onClick={onClick} style={{ width: '51px', height: '31px', borderRadius: '16px', background: on ? '#0D9488' : '#E5E7EB', position: 'relative', flexShrink: 0, cursor: 'pointer', transition: 'background 0.15s' }}>
      <div style={{ position: 'absolute', top: '2px', left: on ? '22px' : '2px', width: '27px', height: '27px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.25)', transition: 'left 0.15s' }} />
    </div>
  )
}

export default function AppFuelFilter({ onNavigate }) {
  const [raaDiscount, setRaaDiscount] = useState(true)
  const [favOnly, setFavOnly] = useState(false)
  const [fuelType, setFuelType] = useState('Unleaded 91')

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#F5F5F0', minHeight: '100%', fontSize: '14px', color: '#172B4D', display: 'flex', flexDirection: 'column' }}>
      {/* Status bar */}
      <div style={{ height: '50px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '14px' }}>
        <span style={{ fontSize: '15px', fontWeight: 700, color: '#172B4D' }}>9:41</span>
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="#172B4D"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2" width="3" height="10" rx="0.5"/><rect x="13.5" y="0" width="3" height="12" rx="0.5"/></svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="#172B4D"><path d="M8 2.5C10.2 2.5 12.2 3.4 13.6 4.9L15 3.5C13.2 1.7 10.7 0.5 8 0.5C5.3 0.5 2.8 1.7 1 3.5L2.4 4.9C3.8 3.4 5.8 2.5 8 2.5Z"/><path d="M8 5.5C9.5 5.5 10.9 6.1 11.9 7.1L13.3 5.7C12 4.4 10.1 3.5 8 3.5C5.9 3.5 4 4.4 2.7 5.7L4.1 7.1C5.1 6.1 6.5 5.5 8 5.5Z"/><circle cx="8" cy="10" r="1.5"/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="1" width="20" height="10" rx="2" stroke="#172B4D" strokeWidth="1"/><rect x="21.5" y="3.5" width="2.5" height="5" rx="1" fill="#172B4D"/><rect x="2" y="2.5" width="14" height="7" rx="1.5" fill="#172B4D"/></svg>
        </div>
      </div>

      {/* Map peek */}
      <div style={{ background: 'linear-gradient(160deg, #c8dcc0 0%, #b0cca8 100%)', height: '100px' }} />

      {/* Bottom sheet */}
      <div style={{ background: '#fff', borderRadius: '20px 20px 0 0', flex: 1, marginTop: '-20px', boxShadow: '0 -4px 20px rgba(0,0,0,0.12)' }}>
        <div style={{ width: '36px', height: '4px', background: '#E5E7EB', borderRadius: '2px', margin: '12px auto 0' }} />

        <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ fontWeight: 700, fontSize: '18px', color: '#000' }}>Filter fuel</div>
          <div style={{ color: '#0052CC', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Reset</div>
        </div>

        {[
          { label: 'RAA Fuel discount', sublabel: 'Show only RAA partner stations', state: raaDiscount, toggle: () => setRaaDiscount(!raaDiscount) },
          { label: 'Favourites only', sublabel: 'Show only saved stations', state: favOnly, toggle: () => setFavOnly(!favOnly) },
        ].map(row => (
          <div key={row.label} style={{ padding: '14px 20px', borderBottom: '1px solid #F2F2F7', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '15px', color: '#000' }}>{row.label}</div>
              <div style={{ fontSize: '12px', color: '#8E8E93', marginTop: '2px' }}>{row.sublabel}</div>
            </div>
            <IOSToggle on={row.state} onClick={row.toggle} />
          </div>
        ))}

        <div style={{ padding: '16px 20px 0', borderBottom: '1px solid #F2F2F7' }}>
          <div style={{ fontWeight: 700, fontSize: '13px', color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Fuel type</div>
          {['Unleaded 91', 'Diesel', 'Premium 95', 'Premium 98', 'E10'].map(item => (
            <div key={item} onClick={() => setFuelType(item)} style={{ padding: '13px 0', borderBottom: '1px solid #F2F2F7', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
              <span style={{ fontSize: '15px', color: '#000', fontWeight: fuelType === item ? 600 : 400 }}>{item}</span>
              {fuelType === item && <span style={{ color: '#34C759', fontWeight: 700, fontSize: '18px' }}>✓</span>}
            </div>
          ))}
        </div>

        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F2F2F7' }}>
          <div style={{ fontWeight: 700, fontSize: '13px', color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Price range</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', color: '#000' }}>All prices</span>
            <span style={{ color: '#8E8E93', fontSize: '18px' }}>›</span>
          </div>
        </div>

        <div style={{ padding: '20px 20px 32px' }}>
          <button onClick={() => onNavigate?.('fuel-map')} style={{ width: '100%', background: '#172B4D', color: '#fff', border: 'none', borderRadius: '14px', padding: '16px', fontWeight: 700, fontSize: '17px', cursor: 'pointer' }}>
            Done
          </button>
        </div>
      </div>
    </div>
  )
}
