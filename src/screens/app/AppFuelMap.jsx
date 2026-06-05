function TabBar({ active, onNavigate }) {
  return (
    <div style={{ background: '#fff', borderTop: '1px solid #E8E8E8', display: 'flex', justifyContent: 'space-around', padding: '8px 0 20px' }}>
      {[['🏠','Home','home'],['⛽','Fuel','fuel-map'],['🎁','Rewards','savings'],['👤','Account','my-account']].map(([icon, label, id]) => (
        <div key={label} onClick={() => id !== active && onNavigate?.(id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', cursor: 'pointer' }}>
          <span style={{ fontSize: '22px' }}>{icon}</span>
          <span style={{ fontSize: '10px', fontWeight: id === active ? 700 : 400, color: id === active ? '#172B4D' : '#8993A4' }}>{label}</span>
        </div>
      ))}
    </div>
  )
}

export default function AppFuelMap({ onNavigate }) {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#E8F0E8', minHeight: '100%', fontSize: '14px', color: '#172B4D', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {/* Status bar */}
      <div style={{ height: '50px', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '14px', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
        <span style={{ fontSize: '15px', fontWeight: 700 }}>9:41</span>
        <div style={{ fontSize: '12px' }}>●●● WiFi 🔋</div>
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
