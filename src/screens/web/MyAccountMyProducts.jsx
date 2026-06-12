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

const PRODUCTS = [
  {
    icon: '🏠',
    name: 'Home and Contents Insurance',
    policyNumber: 'POL-2024-HCI-00234',
    status: 'active',
    renews: '15 September 2026',
    premium: '$127.50/month',
    highlights: ['Building: $500,000', 'Contents: $65,000', 'Accidental Damage: $5,000', '8¢/L fuel discount included'],
  },
  {
    icon: '🚗',
    name: 'Roadside Assistance Membership',
    policyNumber: 'MEM-2018-RA-789012',
    status: 'active',
    renews: '1 March 2027',
    premium: '$149.00/year',
    highlights: ['Premium cover', 'Unlimited call-outs', 'Towing up to 100km', 'Interstate travel cover'],
  },
  {
    icon: '🚙',
    name: 'Comprehensive Car Insurance',
    policyNumber: 'POL-2023-CAR-04567',
    status: 'active',
    renews: '3 November 2026',
    premium: '$89.00/month',
    highlights: ['2021 Toyota RAV4 SE', 'Agreed value: $38,000', 'Excess: $700', 'RAA member multi-policy discount applied'],
  },
]

export default function MyAccountMyProducts({ onNavigate }) {
  return (
    <AccountLayout activeId="mya-my-products" onNavigate={onNavigate}>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '6px' }}>My products</h1>
        <p style={{ fontSize: '14px', color: '#42526E' }}>Your active RAA insurance policies and membership.</p>
      </div>

      {PRODUCTS.map(product => (
        <div key={product.name} style={{ background: '#fff', border: '1px solid #DFE1E6', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px' }}>
          <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', borderBottom: '1px solid #DFE1E6' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#FFFAE6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                {product.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>{product.name}</h3>
                <div style={{ fontSize: '12px', color: '#5E6C84', fontFamily: 'monospace' }}>Policy: {product.policyNumber}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
              <span style={{ background: '#E3FCEF', color: '#36B37E', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '12px' }}>● Active</span>
            </div>
          </div>
          <div style={{ padding: '20px 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#5E6C84', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Renews</div>
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#172B4D' }}>{product.renews}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#5E6C84', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Premium</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#172B4D' }}>{product.premium}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#5E6C84', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Multi-policy</div>
                <div style={{ fontSize: '14px', color: '#36B37E', fontWeight: 500 }}>✓ Discount applied</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {product.highlights.map(h => (
                <span key={h} style={{ fontSize: '12px', background: '#F4F5F7', color: '#42526E', padding: '4px 10px', borderRadius: '4px', border: '1px solid #DFE1E6' }}>{h}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '9px 18px', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}>Manage policy ↗</button>
              <button style={{ background: '#fff', color: '#172B4D', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '9px 18px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Make a claim</button>
            </div>
          </div>
        </div>
      ))}

      <div style={{ background: '#DEEBFF', border: '1px solid #B3D4FF', borderRadius: '8px', padding: '20px 24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '24px' }}>➕</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: '14px', color: '#0052CC', marginBottom: '4px' }}>Add another product</div>
          <p style={{ fontSize: '13px', color: '#172B4D', lineHeight: 1.5 }}>Get a quote for home, car, travel, or life insurance — and save with our multi-policy discount.</p>
        </div>
        <button style={{ background: '#0052CC', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px 18px', fontWeight: 600, fontSize: '13px', cursor: 'pointer', whiteSpace: 'nowrap' }}>Get a quote</button>
      </div>
    </AccountLayout>
  )
}
