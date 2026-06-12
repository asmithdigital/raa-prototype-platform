const NAV_ITEMS = [
  { id: 'mya-dashboard', label: 'Dashboard', icon: '🏠' },
  { id: 'mya-personal-details', label: 'Personal details', icon: '👤' },
  { id: 'mya-my-products', label: 'My products', icon: '🛡️' },
  { id: 'mya-payment-details', label: 'Payment details', icon: '💳' },
]

function AccountLayout({ activeId, onNavigate, children }) {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F4F5F7', minHeight: '700px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: '#FFD100', color: '#172B4D', padding: '0 12px', height: '28px', borderRadius: '4px', fontWeight: 900, fontSize: '12px', letterSpacing: '0.08em', display: 'flex', alignItems: 'center' }}>RAA</div>
          <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>My account</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ color: '#BDC8D8', fontSize: '13px' }}>Alex Johnson · Member #1234567</span>
          <div style={{ background: '#FFD100', color: '#172B4D', padding: '7px 14px', borderRadius: '4px', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}>Sign out</div>
        </div>
      </div>
      <div style={{ display: 'flex', minHeight: 'calc(700px - 56px)' }}>
        <div style={{ width: '224px', background: '#fff', borderRight: '1px solid #DFE1E6', flexShrink: 0, paddingTop: '16px' }}>
          {NAV_ITEMS.map(item => (
            <div key={item.id} onClick={() => onNavigate?.(item.id)} style={{ padding: '11px 20px', cursor: 'pointer', background: activeId === item.id ? '#DEEBFF' : 'transparent', borderLeft: activeId === item.id ? '3px solid #0052CC' : '3px solid transparent', color: activeId === item.id ? '#0052CC' : '#172B4D', fontWeight: activeId === item.id ? 600 : 400, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: '32px 36px', overflowY: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function MyAccountDashboard({ onNavigate }) {
  return (
    <AccountLayout activeId="mya-dashboard" onNavigate={onNavigate}>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '6px' }}>Welcome back, Alex</h1>
        <p style={{ fontSize: '14px', color: '#42526E' }}>RAA Member since 2018 · Member #1234567</p>
      </div>

      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
        {[
          { icon: '🏠', label: 'Active policies', value: '2', sub: 'Home + Car insurance', color: '#DEEBFF', accent: '#0052CC' },
          { icon: '💰', label: 'Saved this year', value: '$1,243', sub: 'With RAA discounts', color: '#FFFAE6', accent: '#172B4D' },
          { icon: '💳', label: 'Membership', value: 'Premium', sub: 'Renews March 2027', color: '#E3FCEF', accent: '#36B37E' },
        ].map(card => (
          <div key={card.label} style={{ background: card.color, borderRadius: '8px', padding: '20px', border: `1px solid ${card.accent}20` }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>{card.icon}</div>
            <div style={{ fontSize: '12px', color: '#5E6C84', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{card.label}</div>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D', marginBottom: '2px' }}>{card.value}</div>
            <div style={{ fontSize: '12px', color: '#42526E' }}>{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Quick actions</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '32px' }}>
        {[
          { icon: '📝', label: 'Update personal details', desc: 'Name, address, contact info', target: 'mya-personal-details' },
          { icon: '🛡️', label: 'View my products', desc: 'Policies and coverage details', target: 'mya-my-products' },
          { icon: '💳', label: 'Payment details', desc: 'Direct debit and billing', target: 'mya-payment-details' },
          { icon: '🚗', label: 'Pay or renew', desc: 'Roadside membership renewal', target: null },
        ].map(action => (
          <div key={action.label} onClick={() => action.target && onNavigate?.(action.target)} style={{ border: '1px solid #DFE1E6', borderRadius: '8px', padding: '18px 20px', background: '#fff', cursor: action.target ? 'pointer' : 'default', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '24px', flexShrink: 0 }}>{action.icon}</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '3px', color: action.target ? '#0052CC' : '#172B4D' }}>{action.label}</div>
              <div style={{ fontSize: '12px', color: '#5E6C84' }}>{action.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Recent activity</h2>
      <div style={{ background: '#fff', border: '1px solid #DFE1E6', borderRadius: '8px', overflow: 'hidden' }}>
        {[
          { icon: '⛽', desc: 'Fuel discount — BP Norwood', amount: '-4¢/L', date: 'Today' },
          { icon: '🏠', desc: 'Home insurance payment', amount: '$127.50', date: '1 Jun 2026' },
          { icon: '🎁', desc: 'Hahndorf dining reward', amount: '$32.00 saved', date: '28 May 2026' },
          { icon: '🚗', desc: 'Membership auto-renewal', amount: '$149.00', date: '1 May 2026' },
        ].map((item, i) => (
          <div key={i} style={{ padding: '14px 20px', borderBottom: i < 3 ? '1px solid #DFE1E6' : 'none', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#F4F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{item.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', color: '#172B4D', fontWeight: 400 }}>{item.desc}</div>
              <div style={{ fontSize: '12px', color: '#8993A4', marginTop: '2px' }}>{item.date}</div>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#36B37E' }}>{item.amount}</div>
          </div>
        ))}
      </div>
    </AccountLayout>
  )
}
