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

export default function AppSavings({ onNavigate, onBack }) {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#F5F5F0', minHeight: '100%', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#FFD100' }}>
        <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '14px' }}>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#172B4D' }}>9:41</span>
          <div style={{ fontSize: '12px', color: '#172B4D' }}>●●● WiFi 🔋</div>
        </div>
        <div style={{ height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div onClick={() => onBack?.() || onNavigate?.('my-account')} style={{ position: 'absolute', left: '16px', color: '#172B4D', fontSize: '16px', fontWeight: 400, cursor: 'pointer' }}>‹</div>
          <span style={{ fontWeight: 700, fontSize: '17px', color: '#172B4D' }}>My savings</span>
        </div>
        <div style={{ padding: '20px 20px 44px', textAlign: 'center' }}>
          <div style={{ fontSize: '13px', color: '#42526E', marginBottom: '8px' }}>You've saved this year</div>
          <div style={{ fontSize: '54px', fontWeight: 800, color: '#172B4D', lineHeight: 1 }}>$1,243</div>
          <div style={{ fontSize: '13px', color: '#42526E', marginTop: '8px' }}>with RAA benefits and discounts</div>
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: '20px 20px 0 0', marginTop: '-24px' }}>
        <div style={{ padding: '24px 20px 8px' }}>
          <div style={{ fontWeight: 700, fontSize: '13px', color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.06em' }}>RAA Rewards</div>
        </div>
        {[
          { name: 'BP Fuel discount', value: '$312.40', icon: '⛽', sub: '8¢/L — 39 transactions' },
          { name: 'Coles savings', value: '$145.00', icon: '🛒', sub: '5% off — 29 transactions' },
          { name: 'Hahndorf dining', value: '$87.60', icon: '🍽️', sub: '20% off — 4 visits' },
          { name: 'Myer purchases', value: '$64.20', icon: '🛍️', sub: '10% off — 3 purchases' },
        ].map(row => (
          <div key={row.name} style={{ padding: '14px 20px', borderTop: '1px solid #F2F2F7', display: 'flex', alignItems: 'center', gap: '14px', background: '#fff' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#F4F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{row.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '15px', color: '#000' }}>{row.name}</div>
              <div style={{ fontSize: '12px', color: '#8E8E93', marginTop: '2px' }}>{row.sub}</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '15px', color: '#36B37E' }}>{row.value}</div>
          </div>
        ))}

        <div style={{ padding: '20px 20px 8px', marginTop: '8px' }}>
          <div style={{ fontWeight: 700, fontSize: '13px', color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.06em' }}>RAA products & policies</div>
        </div>
        {[
          { name: 'Multi-policy discount', value: '$120.00', icon: '🏠', sub: 'Home + Car insurance' },
          { name: 'Member fuel saving', value: '$312.40', icon: '💳', sub: 'RAA membership benefit' },
          { name: 'Roadside assistance', value: '$95.00', icon: '🚗', sub: '1 call-out this year' },
          { name: 'Travel insurance', value: '$106.40', icon: '✈️', sub: 'Member rate savings' },
        ].map(row => (
          <div key={row.name} style={{ padding: '14px 20px', borderTop: '1px solid #F2F2F7', display: 'flex', alignItems: 'center', gap: '14px', background: '#fff' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#F4F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{row.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '15px', color: '#000' }}>{row.name}</div>
              <div style={{ fontSize: '12px', color: '#8E8E93', marginTop: '2px' }}>{row.sub}</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '15px', color: '#36B37E' }}>{row.value}</div>
          </div>
        ))}

        <div style={{ padding: '20px', borderTop: '2px solid #F2F2F7', background: '#FFFAE6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '16px 0 0' }}>
          <div style={{ fontWeight: 700, fontSize: '17px', color: '#172B4D' }}>Total saved</div>
          <div style={{ fontWeight: 800, fontSize: '24px', color: '#172B4D' }}>$1,243</div>
        </div>

        <TabBar active="savings" onNavigate={onNavigate} />
      </div>
    </div>
  )
}
