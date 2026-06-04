function AppNav({ title, back }) {
  return (
    <div style={{ background: '#fff', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', borderBottom: '1px solid #E8E8E8' }}>
      {back && <div style={{ position: 'absolute', left: '16px', color: '#007AFF', fontSize: '16px', fontWeight: 400 }}>‹ Back</div>}
      <span style={{ fontWeight: 700, fontSize: '17px', color: '#000' }}>{title}</span>
    </div>
  )
}

function StatusBar() {
  return (
    <div style={{ height: '50px', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '12px' }}>
      <span style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>9:41</span>
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        <div style={{ fontSize: '12px', color: '#fff' }}>●●●</div>
        <div style={{ fontSize: '12px', color: '#fff' }}>WiFi</div>
        <div style={{ fontSize: '12px', color: '#fff' }}>🔋</div>
      </div>
    </div>
  )
}

export default function AppHome() {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#F5F5F0', minHeight: '100%', fontSize: '14px', color: '#172B4D' }}>
      {/* Yellow diagonal header */}
      <div style={{ background: 'linear-gradient(135deg, #FFD100 60%, #FFC200 100%)', padding: '0 0 32px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Diagonal cut */}
        <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, height: '32px', background: '#F5F5F0', clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />

        <StatusBar />

        {/* Header content */}
        <div style={{ padding: '8px 20px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              {/* RAA Logo */}
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#172B4D', letterSpacing: '0.1em', marginBottom: '4px' }}>
                <span style={{ background: '#172B4D', color: '#FFD100', padding: '2px 8px', borderRadius: '3px', fontSize: '13px', fontWeight: 900 }}>RAA</span>
              </div>
              <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D', marginTop: '12px' }}>Hi Alex 👋</div>
              <div style={{ fontSize: '13px', color: '#42526E', marginTop: '2px' }}>Member #1234567</div>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(23,43,77,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🔔</div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(23,43,77,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>👤</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2x2 Action grid */}
      <div style={{ padding: '0 16px', marginTop: '-8px', marginBottom: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {[
            { icon: '🚗', label: 'Book Road\nService', color: '#172B4D', bg: '#FFD100' },
            { icon: '💳', label: 'Show\nmember card', color: '#fff', bg: '#172B4D' },
            { icon: '⛽', label: 'Search\nfuel prices', color: '#172B4D', bg: '#ffffff' },
            { icon: '🏆', label: 'Enter\ncompetitions', color: '#172B4D', bg: '#ffffff' },
          ].map((tile) => (
            <div key={tile.label} style={{ background: tile.bg, borderRadius: '14px', padding: '18px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: tile.bg === '#ffffff' ? '1px solid #E8E8E8' : 'none' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{tile.icon}</div>
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
        <div style={{ marginLeft: 'auto', color: '#FFD100', fontSize: '20px' }}>›</div>
      </div>

      {/* My savings */}
      <div style={{ margin: '0 16px 16px', background: '#fff', borderRadius: '14px', padding: '16px 20px', border: '1px solid #E8E8E8' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ fontWeight: 700, fontSize: '15px', color: '#172B4D' }}>My savings</div>
          <div style={{ fontSize: '13px', color: '#0052CC', fontWeight: 500 }}>See all →</div>
        </div>
        <div style={{ background: '#FFFAE6', borderRadius: '10px', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#5E6C84', marginBottom: '2px' }}>Saved this year</div>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#172B4D' }}>$1,243</div>
          </div>
          <div style={{ fontSize: '36px' }}>💰</div>
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
            { name: 'BP Fuel', disc: '8¢/L off', color: '#00A650' },
            { name: 'Coles', disc: '5% off', color: '#E21B23' },
            { name: 'Woolworths', disc: '3% off', color: '#00B000' },
            { name: 'Myer', disc: '10% off', color: '#C41230' },
          ].map(r => (
            <div key={r.name} style={{ flexShrink: 0, width: '120px', background: '#fff', borderRadius: '12px', padding: '14px', border: '1px solid #E8E8E8', textAlign: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: r.color, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 700 }}>{r.name.charAt(0)}</div>
              <div style={{ fontWeight: 600, fontSize: '12px', marginBottom: '2px' }}>{r.name}</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#36B37E' }}>{r.disc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div style={{ margin: '0 16px 16px', background: '#E8F0E8', borderRadius: '14px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #c8d8c0 0%, #a8c0a0 100%)' }} />
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '32px' }}>🗺️</div>
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
          ].map(c => (
            <div key={c.title} style={{ flexShrink: 0, width: '200px', background: '#172B4D', borderRadius: '12px', padding: '16px', color: '#fff' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{c.emoji}</div>
              <div style={{ fontWeight: 700, fontSize: '13px', lineHeight: 1.4, marginBottom: '6px' }}>{c.title}</div>
              <div style={{ fontSize: '11px', color: '#BDC8D8' }}>{c.ends}</div>
              <div style={{ marginTop: '10px', background: '#FFD100', color: '#172B4D', borderRadius: '6px', padding: '6px 12px', fontSize: '12px', fontWeight: 700, display: 'inline-block' }}>Enter now</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ height: '16px' }} />
      <div style={{ background: '#fff', borderTop: '1px solid #E8E8E8', display: 'flex', justifyContent: 'space-around', padding: '10px 0 24px' }}>
        {[['🏠','Home',true],['⛽','Fuel',false],['🎁','Rewards',false],['👤','Account',false]].map(([icon, label, active]) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
            <span style={{ fontSize: '22px' }}>{icon}</span>
            <span style={{ fontSize: '10px', fontWeight: active ? 600 : 400, color: active ? '#FFD100' : '#8993A4' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
