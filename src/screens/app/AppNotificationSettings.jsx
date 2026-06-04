function IOSToggle({ on }) {
  return (
    <div style={{ width: '51px', height: '31px', borderRadius: '16px', background: on ? '#34C759' : '#E5E5EA', position: 'relative', flexShrink: 0, cursor: 'pointer' }}>
      <div style={{ position: 'absolute', top: '2px', left: on ? '22px' : '2px', width: '27px', height: '27px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.25)' }} />
    </div>
  )
}

function SectionHeader({ title }) {
  return (
    <div style={{ padding: '20px 20px 8px', fontSize: '13px', fontWeight: 700, color: '#8E8E93', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
      {title}
    </div>
  )
}

function ToggleRow({ label, sublabel, on, last }) {
  return (
    <div style={{ padding: '14px 20px', borderBottom: last ? 'none' : '1px solid #F2F2F7', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
      <div>
        <div style={{ fontSize: '15px', color: '#000', fontWeight: 400 }}>{label}</div>
        {sublabel && <div style={{ fontSize: '12px', color: '#8E8E93', marginTop: '2px' }}>{sublabel}</div>}
      </div>
      <IOSToggle on={on} />
    </div>
  )
}

export default function AppNotificationSettings() {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#F2F2F7', minHeight: '100%', fontSize: '14px', color: '#172B4D' }}>
      {/* Status bar */}
      <div style={{ height: '50px', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '12px' }}>
        <span style={{ fontSize: '15px', fontWeight: 700 }}>9:41</span>
        <div style={{ fontSize: '12px' }}>●●● WiFi 🔋</div>
      </div>

      {/* Nav bar */}
      <div style={{ background: '#F2F2F7', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: '8px' }}>
        <div style={{ position: 'absolute', left: '16px', color: '#007AFF', fontSize: '16px' }}>‹ My Account</div>
        <span style={{ fontWeight: 700, fontSize: '17px' }}>Notifications</span>
      </div>

      {/* Global toggle */}
      <SectionHeader title="In-app notifications" />
      <div style={{ background: '#fff', borderRadius: '12px', margin: '0 0 0 0', overflow: 'hidden' }}>
        <ToggleRow label="Enable in-app notifications" sublabel="Receive alerts within the RAA app" on={true} />
      </div>

      {/* Fuel */}
      <SectionHeader title="Fuel" />
      <div style={{ background: '#fff', overflow: 'hidden' }}>
        <ToggleRow label="Fuel price drops" sublabel="When prices at saved stations fall" on={true} />
        <ToggleRow label="RAA fuel deals" sublabel="New partner station offers" on={true} last />
      </div>

      {/* Deals */}
      <SectionHeader title="Deals" />
      <div style={{ background: '#fff', overflow: 'hidden' }}>
        {[
          ['Dining rewards', true],
          ['Grocery savings', true],
          ['Travel deals', false],
          ['Entertainment', true],
          ['Shopping rewards', false],
          ['Health and wellness', false],
          ['Home and garden', false],
          ['Finance offers', false],
        ].map(([label, on], i, arr) => (
          <ToggleRow key={label} label={label} on={on} last={i === arr.length - 1} />
        ))}
      </div>

      {/* Competitions */}
      <SectionHeader title="Competitions" />
      <div style={{ background: '#fff', overflow: 'hidden' }}>
        <ToggleRow label="New competitions" on={true} />
        <ToggleRow label="Entry reminders" sublabel="Remind me before competitions close" on={true} last />
      </div>

      {/* Device settings */}
      <SectionHeader title="Device settings" />
      <div style={{ background: '#fff', overflow: 'hidden' }}>
        <ToggleRow label="Push notifications" sublabel="Managed in iOS settings" on={true} />
        <ToggleRow label="Email notifications" sublabel="Sent to john.smith@email.com" on={false} last />
      </div>

      <div style={{ height: '40px' }} />
    </div>
  )
}
