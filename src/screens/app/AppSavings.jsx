export default function AppSavings() {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#F5F5F0', minHeight: '100%', fontSize: '14px', color: '#172B4D' }}>
      {/* Status bar + nav */}
      <div style={{ background: '#FFD100' }}>
        <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '12px' }}>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#172B4D' }}>9:41</span>
          <div style={{ fontSize: '12px', color: '#172B4D' }}>●●● WiFi 🔋</div>
        </div>
        <div style={{ height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '16px', color: '#172B4D', fontSize: '16px' }}>‹</div>
          <span style={{ fontWeight: 700, fontSize: '17px', color: '#172B4D' }}>My savings</span>
        </div>

        {/* Hero */}
        <div style={{ padding: '20px 20px 40px', textAlign: 'center' }}>
          <div style={{ fontSize: '13px', color: '#42526E', marginBottom: '8px' }}>You've saved this year</div>
          <div style={{ fontSize: '52px', fontWeight: 800, color: '#172B4D', lineHeight: 1 }}>$1,243</div>
          <div style={{ fontSize: '13px', color: '#42526E', marginTop: '8px' }}>with RAA benefits and discounts</div>
        </div>
      </div>

      {/* White card that overlaps */}
      <div style={{ background: '#fff', borderRadius: '20px 20px 0 0', marginTop: '-20px', padding: '24px 0 0' }}>

        {/* RAA Rewards section */}
        <div style={{ padding: '0 20px', marginBottom: '8px' }}>
          <div style={{ fontWeight: 700, fontSize: '13px', color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>RAA Rewards</div>
        </div>
        {[
          { name: 'BP Fuel discount', value: '$312.40', icon: '⛽', sub: '8¢/L — 39 transactions' },
          { name: 'Coles savings', value: '$145.00', icon: '🛒', sub: '5% off — 29 transactions' },
          { name: 'Hahndorf dining', value: '$87.60', icon: '🍽️', sub: '20% off — 4 visits' },
          { name: 'Myer purchases', value: '$64.20', icon: '🛍️', sub: '10% off — 3 purchases' },
        ].map((row, i) => (
          <div key={row.name} style={{ padding: '14px 20px', borderTop: i === 0 ? '1px solid #F2F2F7' : '1px solid #F2F2F7', display: 'flex', alignItems: 'center', gap: '14px', background: '#fff' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F4F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{row.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '15px', color: '#000' }}>{row.name}</div>
              <div style={{ fontSize: '12px', color: '#8E8E93', marginTop: '2px' }}>{row.sub}</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '15px', color: '#36B37E' }}>{row.value}</div>
          </div>
        ))}

        {/* Products section */}
        <div style={{ padding: '20px 20px 8px' }}>
          <div style={{ fontWeight: 700, fontSize: '13px', color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>RAA products & policies</div>
        </div>
        {[
          { name: 'Multi-policy discount', value: '$120.00', icon: '🏠', sub: 'Home + Car insurance' },
          { name: 'Member fuel saving', value: '$312.40', icon: '💳', sub: 'RAA membership benefit' },
          { name: 'Roadside assistance', value: '$95.00', icon: '🚗', sub: '1 call-out this year' },
          { name: 'Travel insurance', value: '$106.40', icon: '✈️', sub: 'Member rate savings' },
        ].map((row, i) => (
          <div key={row.name} style={{ padding: '14px 20px', borderTop: '1px solid #F2F2F7', display: 'flex', alignItems: 'center', gap: '14px', background: '#fff' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F4F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{row.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '15px', color: '#000' }}>{row.name}</div>
              <div style={{ fontSize: '12px', color: '#8E8E93', marginTop: '2px' }}>{row.sub}</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '15px', color: '#36B37E' }}>{row.value}</div>
          </div>
        ))}

        {/* Total */}
        <div style={{ padding: '20px', borderTop: '2px solid #F2F2F7', background: '#FFFAE6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '16px 0 0' }}>
          <div style={{ fontWeight: 700, fontSize: '17px', color: '#172B4D' }}>Total saved</div>
          <div style={{ fontWeight: 800, fontSize: '24px', color: '#172B4D' }}>$1,243</div>
        </div>

        {/* Tab bar */}
        <div style={{ background: '#fff', borderTop: '1px solid #E8E8E8', display: 'flex', justifyContent: 'space-around', padding: '10px 0 24px' }}>
          {[['🏠','Home',false],['⛽','Fuel',false],['🎁','Rewards',true],['👤','Account',false]].map(([icon, label, active]) => (
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
