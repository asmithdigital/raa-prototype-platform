function StatusBar({ dark }) {
  const c = dark ? '#fff' : '#172B4D'
  return (
    <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '14px' }}>
      <span style={{ fontSize: '15px', fontWeight: 700, color: c }}>9:41</span>
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <svg width="16" height="12" viewBox="0 0 16 12" fill={c}><rect x="0" y="3" width="3" height="9" rx="1"/><rect x="4.5" y="2" width="3" height="10" rx="1"/><rect x="9" y="0" width="3" height="12" rx="1"/><rect x="13.5" y="0" width="2.5" height="12" rx="1"/></svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill={c}><path d="M8 2.5C10.2 2.5 12.2 3.4 13.6 4.9L15 3.5C13.2 1.7 10.7 0.5 8 0.5C5.3 0.5 2.8 1.7 1 3.5L2.4 4.9C3.8 3.4 5.8 2.5 8 2.5Z"/><path d="M8 5.5C9.5 5.5 10.9 6.1 11.9 7.1L13.3 5.7C12 4.4 10.1 3.5 8 3.5C5.9 3.5 4 4.4 2.7 5.7L4.1 7.1C5.1 6.1 6.5 5.5 8 5.5Z"/><circle cx="8" cy="10" r="1.5"/></svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="1" width="20" height="10" rx="2" stroke={c} strokeWidth="1"/><rect x="21.5" y="3.5" width="2.5" height="5" rx="1" fill={c}/><rect x="2" y="2.5" width="14" height="7" rx="1.5" fill={c}/></svg>
      </div>
    </div>
  )
}

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

export default function AppHome({ onNavigate }) {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#F5F5F0', minHeight: '100%', fontSize: '14px', color: '#172B4D' }}>
      {/* Yellow diagonal header */}
      <div style={{ background: 'linear-gradient(140deg, #FFD100 55%, #FFC000 100%)', padding: '0 0 36px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, height: '36px', background: '#F5F5F0', clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <StatusBar dark />
        <div style={{ padding: '4px 20px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ background: '#172B4D', color: '#FFD100', padding: '0 10px', height: '26px', borderRadius: '4px', fontSize: '12px', fontWeight: 900, display: 'inline-flex', alignItems: 'center', letterSpacing: '0.08em' }}>RAA</div>
              <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D', marginTop: '12px' }}>Hi Alex 👋</div>
              <div style={{ fontSize: '13px', color: '#42526E', marginTop: '2px' }}>Member #1234567</div>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
              <div onClick={() => onNavigate?.('notifications')} style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(23,43,77,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', cursor: 'pointer' }}>🔔</div>
              <div onClick={() => onNavigate?.('my-account')} style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(23,43,77,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', cursor: 'pointer' }}>👤</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2x2 Action grid */}
      <div style={{ padding: '0 16px', marginTop: '-8px', marginBottom: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {[
            { icon: '🚗', label: 'Book Road\nService', color: '#172B4D', bg: '#FFD100', id: null },
            { icon: '💳', label: 'Show\nmember card', color: '#FFD100', bg: '#172B4D', id: null },
            { icon: '⛽', label: 'Search\nfuel prices', color: '#172B4D', bg: '#ffffff', id: 'fuel-map' },
            { icon: '🏆', label: 'Enter\ncompetitions', color: '#172B4D', bg: '#ffffff', id: null },
          ].map(tile => (
            <div key={tile.label} onClick={() => tile.id && onNavigate?.(tile.id)} style={{ background: tile.bg, borderRadius: '16px', padding: '20px 16px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', border: tile.bg === '#ffffff' ? '1px solid #E8E8E8' : 'none', cursor: tile.id ? 'pointer' : 'default' }}>
              <div style={{ fontSize: '30px', marginBottom: '8px' }}>{tile.icon}</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: tile.color, whiteSpace: 'pre-line', lineHeight: 1.3 }}>{tile.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Promo banner */}
      <div style={{ margin: '0 16px 16px', background: '#172B4D', borderRadius: '14px', padding: '16px 20px', display: 'flex', gap: '14px', alignItems: 'center' }}>
        <div style={{ fontSize: '32px' }}>🎁</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '14px', color: '#FFD100' }}>New rewards available</div>
          <div style={{ fontSize: '12px', color: '#BDC8D8', marginTop: '2px' }}>20% off dining at Hahndorf this weekend</div>
        </div>
        <div style={{ marginLeft: 'auto', color: '#FFD100', fontSize: '22px' }}>›</div>
      </div>

      {/* My savings */}
      <div style={{ margin: '0 16px 16px', background: '#fff', borderRadius: '14px', padding: '16px 20px', border: '1px solid #E8E8E8' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ fontWeight: 700, fontSize: '15px', color: '#172B4D' }}>My savings</div>
          <div onClick={() => onNavigate?.('savings')} style={{ fontSize: '13px', color: '#0052CC', fontWeight: 500, cursor: 'pointer' }}>See all →</div>
        </div>
        <div style={{ background: '#FFFAE6', borderRadius: '10px', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#5E6C84', marginBottom: '2px' }}>Saved this year</div>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#172B4D' }}>$1,243</div>
          </div>
          <div style={{ fontSize: '40px' }}>💰</div>
        </div>
      </div>

      {/* RAA Rewards */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', marginBottom: '10px' }}>
          <div style={{ fontWeight: 700, fontSize: '15px' }}>RAA Rewards</div>
          <div style={{ fontSize: '13px', color: '#0052CC' }}>See all →</div>
        </div>
        <div style={{ display: 'flex', gap: '12px', paddingLeft: '16px', overflowX: 'auto', paddingBottom: '4px' }}>
          {[
            { name: 'BP Fuel', disc: '8¢/L off', color: '#006B3C' },
            { name: 'Coles', disc: '5% off', color: '#E21B23' },
            { name: 'Woolworths', disc: '3% off', color: '#007B40' },
            { name: 'Myer', disc: '10% off', color: '#C41230' },
            { name: 'OTR', disc: '4¢/L off', color: '#E8640A' },
          ].map(r => (
            <div key={r.name} style={{ flexShrink: 0, width: '116px', background: '#fff', borderRadius: '12px', padding: '14px', border: '1px solid #E8E8E8', textAlign: 'center' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: r.color, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 800 }}>{r.name.charAt(0)}</div>
              <div style={{ fontWeight: 600, fontSize: '12px', marginBottom: '2px', color: '#172B4D' }}>{r.name}</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#36B37E' }}>{r.disc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Map area */}
      <div style={{ margin: '0 16px 16px', background: '#E8F0E8', borderRadius: '14px', height: '156px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #c8d8b8 0%, #a0bc98 50%, #b8d0a8 100%)' }} />
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }} viewBox="0 0 343 156">
          <line x1="0" y1="78" x2="343" y2="78" stroke="#fff" strokeWidth="6"/>
          <line x1="0" y1="110" x2="343" y2="110" stroke="#fff" strokeWidth="4"/>
          <line x1="120" y1="0" x2="120" y2="156" stroke="#fff" strokeWidth="6"/>
          <line x1="240" y1="0" x2="240" y2="156" stroke="#fff" strokeWidth="4"/>
        </svg>
        <div style={{ position: 'relative', textAlign: 'center', paddingTop: '44px' }}>
          <div style={{ fontSize: '28px' }}>🗺️</div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#2B5329', marginTop: '4px' }}>Dining & rewards near you</div>
        </div>
      </div>

      {/* Competitions */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', marginBottom: '10px' }}>
          <div style={{ fontWeight: 700, fontSize: '15px' }}>Competitions</div>
          <div style={{ fontSize: '13px', color: '#0052CC' }}>See all →</div>
        </div>
        <div style={{ display: 'flex', gap: '12px', paddingLeft: '16px', overflowX: 'auto', paddingBottom: '4px' }}>
          {[
            { title: 'Win a $5,000 travel voucher', ends: 'Ends 30 June', emoji: '✈️' },
            { title: 'Adelaide Crows double pass', ends: 'Ends 15 July', emoji: '🏉' },
            { title: 'Win a weekend getaway', ends: 'Ends 31 July', emoji: '🏖️' },
          ].map(c => (
            <div key={c.title} style={{ flexShrink: 0, width: '200px', background: '#172B4D', borderRadius: '14px', padding: '18px 16px', color: '#fff' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{c.emoji}</div>
              <div style={{ fontWeight: 700, fontSize: '13px', lineHeight: 1.4, marginBottom: '6px' }}>{c.title}</div>
              <div style={{ fontSize: '11px', color: '#BDC8D8', marginBottom: '12px' }}>{c.ends}</div>
              <div style={{ background: '#FFD100', color: '#172B4D', borderRadius: '6px', padding: '6px 12px', fontSize: '12px', fontWeight: 700, display: 'inline-block' }}>Enter now</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: '8px' }} />
      <TabBar active="home" onNavigate={onNavigate} />
    </div>
  )
}
