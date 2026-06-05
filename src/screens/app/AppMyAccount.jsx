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

function SectionHeader({ title }) {
  return <div style={{ padding: '20px 20px 8px', fontSize: '13px', fontWeight: 700, color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{title}</div>
}

function ListRow({ label, sublabel, external, last, onClick }) {
  return (
    <div onClick={onClick} style={{ padding: '14px 20px', borderBottom: last ? 'none' : '1px solid #F2F2F7', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', cursor: onClick ? 'pointer' : 'default' }}>
      <div>
        <div style={{ fontSize: '15px', color: '#000' }}>{label}</div>
        {sublabel && <div style={{ fontSize: '12px', color: '#8E8E93', marginTop: '2px' }}>{sublabel}</div>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C7C7CC' }}>
        {external && <span style={{ fontSize: '11px' }}>↗</span>}
        <span style={{ fontSize: '20px' }}>›</span>
      </div>
    </div>
  )
}

export default function AppMyAccount({ onNavigate }) {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#F2F2F7', minHeight: '100%', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ height: '50px', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '14px' }}>
        <span style={{ fontSize: '15px', fontWeight: 700 }}>9:41</span>
        <div style={{ fontSize: '12px' }}>●●● WiFi 🔋</div>
      </div>
      <div style={{ background: '#F2F2F7', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
        <span style={{ fontWeight: 700, fontSize: '17px' }}>My Account</span>
      </div>

      {/* Member card */}
      <div style={{ margin: '0 16px 8px', background: '#172B4D', borderRadius: '16px', padding: '20px', color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#BDC8D8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>RAA Member</div>
            <div style={{ fontSize: '18px', fontWeight: 700 }}>Alex Johnson</div>
            <div style={{ fontSize: '13px', color: '#BDC8D8', marginTop: '2px' }}>Member #1234567</div>
          </div>
          <div style={{ background: '#FFD100', color: '#172B4D', padding: '7px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
            Show card
          </div>
        </div>
        <div style={{ marginTop: '16px', display: 'flex', gap: '20px' }}>
          <div><div style={{ fontSize: '11px', color: '#BDC8D8' }}>Member since</div><div style={{ fontSize: '13px', fontWeight: 600, marginTop: '2px' }}>2018</div></div>
          <div><div style={{ fontSize: '11px', color: '#BDC8D8' }}>Renews</div><div style={{ fontSize: '13px', fontWeight: 600, marginTop: '2px' }}>March 2027</div></div>
          <div><div style={{ fontSize: '11px', color: '#BDC8D8' }}>Cover level</div><div style={{ fontSize: '13px', fontWeight: 600, marginTop: '2px' }}>Premium</div></div>
        </div>
      </div>

      <SectionHeader title="My payments" />
      <div style={{ background: '#fff', overflow: 'hidden' }}>
        <ListRow label="Pay or renew" sublabel="raa.com.au — opens in browser" external />
        <ListRow label="Update payment details" sublabel="raa.com.au — opens in browser" external last />
      </div>

      <SectionHeader title="My details" />
      <div style={{ background: '#fff', overflow: 'hidden' }}>
        <ListRow label="Personal details" sublabel="raa.com.au — opens in browser" external />
        <ListRow label="My products" sublabel="raa.com.au — opens in browser" external />
        <ListRow label="My claims" sublabel="raa.com.au — opens in browser" external />
        <ListRow label="My savings" sublabel="View your savings summary" onClick={() => onNavigate?.('savings')} />
        <ListRow label="Notification preferences" sublabel="Manage what you're notified about" onClick={() => onNavigate?.('notification-settings')} last />
      </div>

      <SectionHeader title="RAA" />
      <div style={{ background: '#fff', overflow: 'hidden' }}>
        <ListRow label="Contact us" external />
        <ListRow label="Careers" sublabel="raa.com.au — opens in browser" external last />
      </div>

      <div style={{ margin: '16px' }}>
        <button style={{ width: '100%', background: '#fff', color: '#FF3B30', border: '1px solid #DFE1E6', borderRadius: '12px', padding: '14px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
          Sign out
        </button>
      </div>

      <div style={{ fontSize: '12px', textAlign: 'center', color: '#8E8E93', marginBottom: '8px' }}>Version 4.2.1</div>

      <TabBar active="my-account" onNavigate={onNavigate} />
    </div>
  )
}
