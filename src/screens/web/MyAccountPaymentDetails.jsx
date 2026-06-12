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

const UPCOMING = [
  { product: 'Home and Contents Insurance', amount: '$127.50', date: '15 Jul 2026', method: 'Direct debit' },
  { product: 'Comprehensive Car Insurance', amount: '$89.00', date: '3 Jul 2026', method: 'Direct debit' },
  { product: 'Roadside Membership', amount: '$149.00', date: '1 Mar 2027', method: 'Direct debit' },
]

export default function MyAccountPaymentDetails({ onNavigate }) {
  return (
    <AccountLayout activeId="mya-payment-details" onNavigate={onNavigate}>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '6px' }}>Payment details</h1>
        <p style={{ fontSize: '14px', color: '#42526E' }}>Your saved payment method and upcoming payments.</p>
      </div>

      {/* Payment method */}
      <div style={{ background: '#fff', border: '1px solid #DFE1E6', borderRadius: '8px', padding: '24px 28px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600 }}>Payment method</h3>
          <button style={{ background: 'none', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '6px 14px', fontSize: '13px', fontWeight: 600, color: '#0052CC', cursor: 'pointer' }}>Update</button>
        </div>
        {/* Card mockup */}
        <div style={{ background: 'linear-gradient(135deg, #172B4D 0%, #253858 100%)', borderRadius: '12px', padding: '24px 28px', color: '#fff', maxWidth: '340px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
            <div style={{ background: '#FFD100', color: '#172B4D', padding: '3px 10px', borderRadius: '3px', fontSize: '12px', fontWeight: 900, letterSpacing: '0.05em' }}>RAA</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ width: '28px', height: '18px', borderRadius: '4px', background: '#e8a020', opacity: 0.85 }} />
              <div style={{ width: '28px', height: '18px', borderRadius: '4px', background: '#e8a020', opacity: 0.5, marginLeft: '-10px' }} />
            </div>
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '18px', letterSpacing: '0.15em', marginBottom: '16px' }}>•••• •••• •••• 4782</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', marginBottom: '2px' }}>CARD HOLDER</div>
              <div style={{ fontSize: '13px', fontWeight: 600 }}>ALEX JOHNSON</div>
            </div>
            <div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', marginBottom: '2px' }}>EXPIRES</div>
              <div style={{ fontSize: '13px', fontWeight: 600 }}>08/28</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ background: '#E3FCEF', color: '#36B37E', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '12px' }}>✓ Direct debit active</span>
          <span style={{ fontSize: '12px', color: '#5E6C84' }}>Debit auto-payments for all active products</span>
        </div>
      </div>

      {/* Upcoming payments */}
      <div style={{ background: '#fff', border: '1px solid #DFE1E6', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
        <div style={{ padding: '16px 24px', borderBottom: '1px solid #DFE1E6', background: '#F4F5F7' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600 }}>Upcoming payments</h3>
        </div>
        {UPCOMING.map((payment, i) => (
          <div key={i} style={{ padding: '16px 24px', borderBottom: i < UPCOMING.length - 1 ? '1px solid #DFE1E6' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#172B4D', marginBottom: '3px' }}>{payment.product}</div>
              <div style={{ fontSize: '12px', color: '#5E6C84' }}>{payment.date} · {payment.method}</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '16px', color: '#172B4D' }}>{payment.amount}</div>
          </div>
        ))}
        <div style={{ padding: '14px 24px', background: '#FFFAE6', borderTop: '2px solid #DFE1E6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 600, fontSize: '14px', color: '#172B4D' }}>Next payment</div>
          <div style={{ fontWeight: 700, fontSize: '16px', color: '#172B4D' }}>$89.00 on 3 Jul 2026</div>
        </div>
      </div>

      {/* Billing address */}
      <div style={{ background: '#fff', border: '1px solid #DFE1E6', borderRadius: '8px', padding: '24px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600 }}>Billing address</h3>
          <button style={{ background: 'none', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '6px 14px', fontSize: '13px', fontWeight: 600, color: '#0052CC', cursor: 'pointer' }}>Edit</button>
        </div>
        <div style={{ fontSize: '14px', color: '#172B4D', lineHeight: 1.7 }}>
          <div>23 Morialta Road</div>
          <div>Burnside SA 5066</div>
          <div>Australia</div>
        </div>
      </div>
    </AccountLayout>
  )
}
