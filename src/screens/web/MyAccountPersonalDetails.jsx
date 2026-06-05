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
          <div style={{ background: '#FFD100', color: '#172B4D', padding: '4px 12px', borderRadius: '4px', fontWeight: 900, fontSize: '14px', letterSpacing: '0.05em' }}>RAA</div>
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

function Field({ label, value }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ fontSize: '12px', fontWeight: 600, color: '#5E6C84', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>{label}</div>
      <div style={{ padding: '11px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', background: '#F4F5F7', fontSize: '14px', color: '#172B4D' }}>{value}</div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #DFE1E6', borderRadius: '8px', padding: '24px 28px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#172B4D' }}>{title}</h3>
        <button style={{ background: 'none', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '6px 14px', fontSize: '13px', fontWeight: 600, color: '#0052CC', cursor: 'pointer' }}>Edit</button>
      </div>
      {children}
    </div>
  )
}

export default function MyAccountPersonalDetails({ onNavigate }) {
  return (
    <AccountLayout activeId="mya-personal-details" onNavigate={onNavigate}>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '6px' }}>Personal details</h1>
        <p style={{ fontSize: '14px', color: '#42526E' }}>Your name, contact information, and address as recorded with RAA.</p>
      </div>

      <Section title="Name and date of birth">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Field label="First name" value="Alex" />
          <Field label="Last name" value="Johnson" />
          <Field label="Date of birth" value="12 March 1978" />
          <Field label="Gender" value="Male" />
        </div>
      </Section>

      <Section title="Contact information">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Field label="Mobile" value="0412 345 678" />
          <Field label="Home phone" value="Not provided" />
        </div>
        <Field label="Email address" value="alex.johnson@email.com" />
      </Section>

      <Section title="Home address">
        <Field label="Street address" value="23 Morialta Road" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
          <Field label="Suburb" value="Burnside" />
          <Field label="State" value="SA" />
          <Field label="Postcode" value="5066" />
        </div>
      </Section>

      <Section title="Postal address">
        <div style={{ background: '#E3FCEF', border: '1px solid #ABF5D1', borderRadius: '6px', padding: '12px 16px', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ color: '#36B37E', fontWeight: 700 }}>✓</span>
          <span style={{ fontSize: '13px', color: '#172B4D' }}>Same as home address — 23 Morialta Road, Burnside SA 5066</span>
        </div>
      </Section>

      <div style={{ background: '#FFFAE6', border: '1px solid #FFE27D', borderRadius: '8px', padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '18px', flexShrink: 0 }}>ℹ️</span>
        <div>
          <div style={{ fontWeight: 600, fontSize: '13px', color: '#172B4D', marginBottom: '4px' }}>Need to change your name?</div>
          <p style={{ fontSize: '13px', color: '#42526E', lineHeight: 1.6 }}>Name changes require ID verification. Please call us on <strong>08 8202 4600</strong> or visit an RAA branch.</p>
        </div>
      </div>
    </AccountLayout>
  )
}
