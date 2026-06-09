function TabIcon({ id, color: c }) {
  if (id === 'home') return <svg width="22" height="22" viewBox="0 0 24 24" fill={c}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
  if (id === 'fuel-map') return <svg width="22" height="22" viewBox="0 0 24 24" fill={c}><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6V18H4V5h8v13H8z"/></svg>
  if (id === 'savings') return <svg width="22" height="22" viewBox="0 0 24 24" fill={c}><path d="M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.5 15.5 0 12.46 0c-1.86 0-3.52.97-4.46 2.44L7 4H4C2.34 4 1 5.34 1 7v11c0 1.66 1.34 3 3 3h16c1.66 0 3-1.34 3-3V9c0-1.66-1.34-3-3-3zm-7.54-4c1.55 0 2.54.98 2.54 2.64 0 .58-.42 1-.96 1H8.18L10 3.35C10.58 2.5 11.49 2 12.46 2zM21 18c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2.6L5.5 8H5v2h14V8h-.5L17.4 6H20c.55 0 1 .45 1 1v11z"/></svg>
  return <svg width="22" height="22" viewBox="0 0 24 24" fill={c}><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
}

function TabBar({ active, onNavigate }) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'fuel-map', label: 'Fuel' },
    { id: 'savings', label: 'Rewards' },
    { id: 'my-account', label: 'Account' },
  ]
  return (
    <div style={{ background: '#fff', borderTop: '1px solid #E8E8E8', display: 'flex', justifyContent: 'space-around', padding: '8px 0 20px' }}>
      {tabs.map(({ id, label }) => {
        const isActive = id === active
        const c = isActive ? '#172B4D' : '#8993A4'
        return (
          <div key={label} onClick={() => id !== active && onNavigate?.(id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', cursor: 'pointer', flex: 1 }}>
            <TabIcon id={id} color={c} />
            <span style={{ fontSize: '10px', fontWeight: isActive ? 600 : 400, color: c }}>{label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default function AppFuelMap({ onNavigate }) {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#E8F0E8', minHeight: '100%', fontSize: '14px', color: '#172B4D', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {/* Status bar */}
      <div style={{ height: '50px', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '14px', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
        <span style={{ fontSize: '15px', fontWeight: 700 }}>9:41</span>
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="#172B4D"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2" width="3" height="10" rx="0.5"/><rect x="13.5" y="0" width="3" height="12" rx="0.5"/></svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="#172B4D"><path d="M8 2.5C10.2 2.5 12.2 3.4 13.6 4.9L15 3.5C13.2 1.7 10.7 0.5 8 0.5C5.3 0.5 2.8 1.7 1 3.5L2.4 4.9C3.8 3.4 5.8 2.5 8 2.5Z"/><path d="M8 5.5C9.5 5.5 10.9 6.1 11.9 7.1L13.3 5.7C12 4.4 10.1 3.5 8 3.5C5.9 3.5 4 4.4 2.7 5.7L4.1 7.1C5.1 6.1 6.5 5.5 8 5.5Z"/><circle cx="8" cy="10" r="1.5"/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="1" width="20" height="10" rx="2" stroke="#172B4D" strokeWidth="1"/><rect x="21.5" y="3.5" width="2.5" height="5" rx="1" fill="#172B4D"/><rect x="2" y="2.5" width="14" height="7" rx="1.5" fill="#172B4D"/></svg>
        </div>
      </div>

      {/* Back button */}
      <div onClick={() => onNavigate?.('home')} style={{ position: 'absolute', top: '58px', left: '14px', zIndex: 20, background: '#fff', borderRadius: '20px', padding: '7px 14px', fontSize: '14px', color: '#007AFF', fontWeight: 400, boxShadow: '0 2px 8px rgba(0,0,0,0.15)', cursor: 'pointer' }}>‹ Home</div>

      {/* Map */}
      <div style={{ flex: 1, position: 'relative', minHeight: '400px', paddingTop: '50px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #c8dcc0 0%, #b0cca8 40%, #c0d8b8 70%, #a8c4a0 100%)' }} />
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 375 420" preserveAspectRatio="none">
          <line x1="0" y1="180" x2="375" y2="200" stroke="#fff" strokeWidth="10" opacity="0.7"/>
          <line x1="0" y1="300" x2="375" y2="320" stroke="#fff" strokeWidth="7" opacity="0.6"/>
          <line x1="140" y1="0" x2="155" y2="420" stroke="#fff" strokeWidth="10" opacity="0.7"/>
          <line x1="270" y1="0" x2="260" y2="420" stroke="#fff" strokeWidth="7" opacity="0.6"/>
          <line x1="0" y1="100" x2="375" y2="110" stroke="#e8e0d0" strokeWidth="4" opacity="0.5"/>
          <line x1="60" y1="0" x2="55" y2="420" stroke="#e8e0d0" strokeWidth="4" opacity="0.5"/>
        </svg>

        {/* Fuel pins */}
        {[
          { x: 68, y: 155, price: '188.9', raa: true, cheapest: false },
          { x: 190, y: 135, price: '191.5', raa: false, cheapest: false },
          { x: 265, y: 225, price: '186.9', raa: true, cheapest: true },
          { x: 115, y: 285, price: '193.0', raa: false, cheapest: false },
          { x: 315, y: 140, price: '189.9', raa: true, cheapest: false },
        ].map((pin, i) => (
          <div key={i} style={{ position: 'absolute', left: `${pin.x}px`, top: `${pin.y + 50}px`, transform: `translate(-50%, -100%) ${pin.cheapest ? 'scale(1.05)' : 'scale(1)'}`, zIndex: pin.cheapest ? 8 : 5 }}>
            <div style={{
              background: pin.cheapest ? '#FFD100' : '#FFFFFF',
              color: '#1A1A1A',
              border: pin.cheapest ? '2px solid #1A1A1A' : '1.5px solid #9CA3AF',
              borderRadius: '10px', padding: '5px 9px', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap',
              boxShadow: pin.cheapest ? '0 3px 12px rgba(0,0,0,0.25)' : '0 2px 6px rgba(0,0,0,0.14)',
            }}>
              {pin.price}¢
            </div>
            <div style={{ width: '2px', height: '8px', background: '#9CA3AF', margin: '0 auto' }} />
          </div>
        ))}

        {/* Filter pills */}
        <div style={{ position: 'absolute', top: '60px', left: '12px', right: '12px', display: 'flex', gap: '8px', overflowX: 'auto', zIndex: 10 }}>
          <div onClick={() => onNavigate?.('fuel-filter')} style={{ background: '#fff', color: '#172B4D', borderRadius: '20px', padding: '7px 14px', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap', border: '1px solid #DFE1E6', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', flexShrink: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            ⚙ Filter
          </div>
          {[
            { label: 'RAA Discount', active: true },
            { label: '♥ Favourites', active: false },
            { label: 'Unleaded 91 ▾', active: false },
          ].map(pill => (
            <div key={pill.label} style={{ background: pill.active ? '#FFD100' : '#fff', color: '#172B4D', borderRadius: '20px', padding: '7px 14px', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap', border: pill.active ? '1px solid #E5E7EB' : '1px solid #E5E7EB', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', flexShrink: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              {pill.active && <span style={{ color: '#0D9488', fontWeight: 700 }}>✓</span>}
              {pill.label}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom sheet */}
      <div style={{ background: '#fff', borderRadius: '20px 20px 0 0', padding: '12px 20px 0', boxShadow: '0 -4px 20px rgba(0,0,0,0.12)', position: 'relative', zIndex: 10 }}>
        <div style={{ width: '36px', height: '4px', background: '#E5E7EB', borderRadius: '2px', margin: '10px auto 16px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '17px', color: '#000' }}>BP Klemzig</div>
            <div style={{ fontSize: '13px', color: '#5E6C84', marginTop: '3px' }}>
              <span style={{ color: '#36B37E', fontWeight: 600 }}>● Open</span>{'  ·  '}1.2 km away
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#172B4D', lineHeight: 1 }}>186<span style={{ fontSize: '17px' }}>.9¢</span></div>
            <div style={{ fontSize: '11px', color: '#5E6C84' }}>Unleaded 91</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          <div style={{ fontSize: '12px', background: '#FFFAE6', color: '#172B4D', padding: '4px 10px', borderRadius: '12px', fontWeight: 600, border: '1px solid #FFE27D' }}>⭐ RAA Discount</div>
          <div style={{ fontSize: '12px', background: '#E3FCEF', color: '#36B37E', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>4¢/L off with RAA</div>
        </div>
        <div style={{ display: 'flex', gap: '10px', paddingBottom: '4px' }}>
          <button style={{ flex: 1, background: '#172B4D', color: '#FFD100', border: 'none', borderRadius: '12px', padding: '14px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>Get directions</button>
          <button style={{ width: '52px', background: '#F4F5F7', border: 'none', borderRadius: '12px', padding: '14px', fontSize: '20px', cursor: 'pointer' }}>♥</button>
        </div>
        <TabBar active="fuel-map" onNavigate={onNavigate} />
      </div>
    </div>
  )
}
