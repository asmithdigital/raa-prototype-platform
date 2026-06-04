export default function AppFuelMap() {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#E8F0E8', minHeight: '100%', fontSize: '14px', color: '#172B4D', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {/* Status bar */}
      <div style={{ height: '50px', background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '12px', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
        <span style={{ fontSize: '15px', fontWeight: 700 }}>9:41</span>
        <div style={{ fontSize: '12px' }}>●●● WiFi 🔋</div>
      </div>

      {/* Map background */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #d4e8d4 0%, #b8d0b8 40%, #c8dcc8 70%, #a8c8a0 100%)', position: 'relative', minHeight: '500px', paddingTop: '50px' }}>
        {/* Map roads */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 375 500" preserveAspectRatio="none">
          <line x1="0" y1="200" x2="375" y2="200" stroke="#fff" strokeWidth="8" opacity="0.6" />
          <line x1="0" y1="320" x2="375" y2="320" stroke="#fff" strokeWidth="5" opacity="0.5" />
          <line x1="150" y1="0" x2="150" y2="500" stroke="#fff" strokeWidth="8" opacity="0.6" />
          <line x1="280" y1="0" x2="280" y2="500" stroke="#fff" strokeWidth="5" opacity="0.5" />
        </svg>

        {/* Fuel station pins */}
        {[
          { x: 60, y: 160, price: '188.9', raa: true },
          { x: 180, y: 140, price: '191.5', raa: false },
          { x: 260, y: 230, price: '186.9', raa: true },
          { x: 110, y: 290, price: '193.0', raa: false },
          { x: 310, y: 140, price: '189.9', raa: true },
        ].map((pin, i) => (
          <div key={i} style={{ position: 'absolute', left: `${pin.x}px`, top: `${pin.y + 50}px`, transform: 'translate(-50%, -100%)' }}>
            <div style={{
              background: pin.raa ? '#172B4D' : '#fff',
              color: pin.raa ? '#FFD100' : '#172B4D',
              border: pin.raa ? '2px solid #FFD100' : '2px solid #DFE1E6',
              borderRadius: '8px',
              padding: '4px 8px',
              fontSize: '12px',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}>
              {pin.price}¢
            </div>
            <div style={{ width: '2px', height: '8px', background: pin.raa ? '#172B4D' : '#8993A4', margin: '0 auto' }} />
          </div>
        ))}

        {/* Filter pills */}
        <div style={{ position: 'absolute', top: '64px', left: '12px', right: '12px', display: 'flex', gap: '8px', overflowX: 'auto' }}>
          {[
            { label: '⚙ Filter', active: false },
            { label: '⭐ RAA Discount', active: true },
            { label: '♥ Favourites', active: false },
            { label: 'Unleaded 91 ▾', active: false },
          ].map(pill => (
            <div key={pill.label} style={{
              background: pill.active ? '#172B4D' : '#fff',
              color: pill.active ? '#FFD100' : '#172B4D',
              borderRadius: '20px',
              padding: '7px 14px',
              fontSize: '12px',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              border: pill.active ? '2px solid #172B4D' : '1px solid #DFE1E6',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              flexShrink: 0,
            }}>
              {pill.label}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom sheet */}
      <div style={{ background: '#fff', borderRadius: '20px 20px 0 0', padding: '12px 20px 0', boxShadow: '0 -4px 20px rgba(0,0,0,0.12)', position: 'relative', zIndex: 10 }}>
        {/* Handle */}
        <div style={{ width: '40px', height: '4px', background: '#DFE1E6', borderRadius: '2px', margin: '0 auto 16px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '17px', color: '#000' }}>BP Norwood</div>
            <div style={{ fontSize: '13px', color: '#5E6C84', marginTop: '2px' }}>
              <span style={{ color: '#36B37E', fontWeight: 600 }}>● Open</span>
              {'  '}·{'  '}1.2 km away
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#172B4D' }}>189<span style={{ fontSize: '18px' }}>.9¢</span></div>
            <div style={{ fontSize: '11px', color: '#5E6C84' }}>Unleaded 91</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <div style={{ fontSize: '12px', background: '#FFFAE6', color: '#172B4D', padding: '4px 10px', borderRadius: '12px', fontWeight: 600, border: '1px solid #FFD100' }}>⭐ RAA Discount</div>
          <div style={{ fontSize: '12px', background: '#E3FCEF', color: '#36B37E', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>4¢/L off with RAA</div>
        </div>

        <div style={{ display: 'flex', gap: '10px', padding: '16px 0' }}>
          <button style={{ flex: 1, background: '#172B4D', color: '#FFD100', border: 'none', borderRadius: '10px', padding: '14px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
            Get directions
          </button>
          <button style={{ width: '52px', background: '#F4F5F7', border: 'none', borderRadius: '10px', padding: '14px', fontSize: '20px', cursor: 'pointer' }}>
            ♥
          </button>
        </div>

        {/* Tab bar */}
        <div style={{ borderTop: '1px solid #E8E8E8', display: 'flex', justifyContent: 'space-around', padding: '10px 0 24px' }}>
          {[['🏠','Home',false],['⛽','Fuel',true],['🎁','Rewards',false],['👤','Account',false]].map(([icon, label, active]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
              <span style={{ fontSize: '22px' }}>{icon}</span>
              <span style={{ fontSize: '10px', fontWeight: active ? 600 : 400, color: active ? '#FFD100' : '#8993A4' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
