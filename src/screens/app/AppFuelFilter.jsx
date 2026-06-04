function IOSToggle({ on }) {
  return (
    <div style={{ width: '51px', height: '31px', borderRadius: '16px', background: on ? '#34C759' : '#E5E5EA', position: 'relative', flexShrink: 0, cursor: 'pointer' }}>
      <div style={{ position: 'absolute', top: '2px', left: on ? '22px' : '2px', width: '27px', height: '27px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.25)' }} />
    </div>
  )
}

export default function AppFuelFilter() {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#F5F5F0', minHeight: '100%', fontSize: '14px', color: '#172B4D', display: 'flex', flexDirection: 'column' }}>
      {/* Status bar */}
      <div style={{ height: '50px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '12px' }}>
        <span style={{ fontSize: '15px', fontWeight: 700 }}>9:41</span>
        <div style={{ fontSize: '12px', color: '#000' }}>●●● WiFi 🔋</div>
      </div>

      {/* Map peek */}
      <div style={{ background: 'linear-gradient(160deg, #d4e8d4 0%, #b8d0b8 100%)', height: '120px' }} />

      {/* Bottom sheet */}
      <div style={{ background: '#fff', borderRadius: '20px 20px 0 0', flex: 1, padding: '12px 0 0', marginTop: '-20px', boxShadow: '0 -4px 20px rgba(0,0,0,0.12)' }}>
        {/* Handle */}
        <div style={{ width: '40px', height: '4px', background: '#DFE1E6', borderRadius: '2px', margin: '0 auto 16px' }} />

        <div style={{ padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ fontWeight: 700, fontSize: '18px', color: '#000' }}>Filter fuel</div>
          <div style={{ color: '#0052CC', fontSize: '14px', fontWeight: 500 }}>Reset</div>
        </div>

        {/* Toggle rows */}
        {[
          { label: 'RAA Fuel discount', sublabel: 'Show only RAA partner stations', on: true },
          { label: 'Favourites only', sublabel: 'Show only saved stations', on: false },
        ].map(row => (
          <div key={row.label} style={{ padding: '14px 20px', borderBottom: '1px solid #F2F2F7', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '15px', color: '#000' }}>{row.label}</div>
              <div style={{ fontSize: '12px', color: '#8E8E93', marginTop: '2px' }}>{row.sublabel}</div>
            </div>
            <IOSToggle on={row.on} />
          </div>
        ))}

        {/* Fuel type */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F2F2F7' }}>
          <div style={{ fontWeight: 700, fontSize: '13px', color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>Fuel type</div>
          {[
            { label: 'Unleaded 91', selected: true },
            { label: 'Diesel', selected: false },
            { label: 'Premium 95', selected: false },
            { label: 'Premium 98', selected: false },
            { label: 'E10', selected: false },
          ].map(item => (
            <div key={item.label} style={{ padding: '12px 0', borderBottom: '1px solid #F2F2F7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '15px', color: '#000', fontWeight: item.selected ? 600 : 400 }}>{item.label}</span>
              {item.selected && <span style={{ color: '#34C759', fontWeight: 700, fontSize: '18px' }}>✓</span>}
            </div>
          ))}
        </div>

        {/* Price range */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F2F2F7' }}>
          <div style={{ fontWeight: 700, fontSize: '13px', color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>Price range</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', color: '#000' }}>All prices</span>
            <span style={{ color: '#8E8E93', fontSize: '18px' }}>›</span>
          </div>
        </div>

        {/* Done button */}
        <div style={{ padding: '20px 20px 32px' }}>
          <button style={{ width: '100%', background: '#172B4D', color: '#fff', border: 'none', borderRadius: '14px', padding: '16px', fontWeight: 700, fontSize: '17px', cursor: 'pointer' }}>
            Done
          </button>
        </div>
      </div>
    </div>
  )
}
