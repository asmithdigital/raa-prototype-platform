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

export default function AppSavings({ onNavigate, onBack }) {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#F5F5F0', minHeight: '100%', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: 'linear-gradient(140deg, #FFD100 55%, #FFC000 100%)', position: 'relative', overflow: 'hidden', paddingBottom: '36px' }}>
        <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, height: '36px', background: '#F5F5F0', clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '14px' }}>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#172B4D' }}>9:41</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="#172B4D"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2" width="3" height="10" rx="0.5"/><rect x="13.5" y="0" width="3" height="12" rx="0.5"/></svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="#172B4D"><path d="M8 2.5C10.2 2.5 12.2 3.4 13.6 4.9L15 3.5C13.2 1.7 10.7 0.5 8 0.5C5.3 0.5 2.8 1.7 1 3.5L2.4 4.9C3.8 3.4 5.8 2.5 8 2.5Z"/><path d="M8 5.5C9.5 5.5 10.9 6.1 11.9 7.1L13.3 5.7C12 4.4 10.1 3.5 8 3.5C5.9 3.5 4 4.4 2.7 5.7L4.1 7.1C5.1 6.1 6.5 5.5 8 5.5Z"/><circle cx="8" cy="10" r="1.5"/></svg>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="1" width="20" height="10" rx="2" stroke="#172B4D" strokeWidth="1"/><rect x="21.5" y="3.5" width="2.5" height="5" rx="1" fill="#172B4D"/><rect x="2" y="2.5" width="14" height="7" rx="1.5" fill="#172B4D"/></svg>
          </div>
        </div>
        <div style={{ height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div onClick={() => onBack?.() || onNavigate?.('my-account')} style={{ position: 'absolute', left: '16px', color: '#172B4D', fontSize: '16px', fontWeight: 400, cursor: 'pointer' }}>‹</div>
          <span style={{ fontWeight: 700, fontSize: '17px', color: '#172B4D' }}>My savings</span>
        </div>
        <div style={{ padding: '20px 20px 28px', textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: '13px', color: '#42526E', marginBottom: '8px' }}>You've saved this year</div>
          <div style={{ fontSize: '54px', fontWeight: 800, color: '#172B4D', lineHeight: 1 }}>$1,243</div>
          <div style={{ fontSize: '13px', color: '#42526E', marginTop: '8px' }}>with RAA benefits and discounts</div>
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: '20px 20px 0 0', marginTop: '-8px' }}>
        <div style={{ padding: '24px 20px 8px' }}>
          <div style={{ fontWeight: 600, fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>RAA Rewards</div>
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
          <div style={{ fontWeight: 600, fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>RAA products & policies</div>
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
