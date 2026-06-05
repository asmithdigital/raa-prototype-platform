import { useState } from 'react'

function IOSToggle({ on, onClick }) {
  return (
    <div onClick={onClick} style={{ width: '51px', height: '31px', borderRadius: '16px', background: on ? '#0D9488' : '#E5E7EB', position: 'relative', flexShrink: 0, cursor: 'pointer', transition: 'background 0.15s' }}>
      <div style={{ position: 'absolute', top: '2px', left: on ? '22px' : '2px', width: '27px', height: '27px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.25)', transition: 'left 0.15s' }} />
    </div>
  )
}

function SectionHeader({ title }) {
  return <div style={{ padding: '20px 20px 8px', fontSize: '11px', fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', background: '#F5F5F0' }}>{title}</div>
}

export default function AppNotificationSettings({ onNavigate, onBack }) {
  const [toggles, setToggles] = useState({
    globalEnabled: true, fuelDrops: true, raaDeals: true, dining: true, grocery: true, travel: false,
    entertainment: true, shopping: false, health: false, home: false, finance: false,
    newCompetitions: true, entryReminders: true, pushNotif: true, emailNotif: false,
  })
  const toggle = (key) => setToggles(prev => ({ ...prev, [key]: !prev[key] }))

  function Row({ label, sublabel, k, last }) {
    return (
      <div style={{ padding: '14px 20px', borderBottom: last ? 'none' : '1px solid #F2F2F7', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
        <div>
          <div style={{ fontSize: '15px', color: '#000', fontWeight: 400 }}>{label}</div>
          {sublabel && <div style={{ fontSize: '12px', color: '#8E8E93', marginTop: '2px' }}>{sublabel}</div>}
        </div>
        <IOSToggle on={toggles[k]} onClick={() => toggle(k)} />
      </div>
    )
  }

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#F2F2F7', minHeight: '100%', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ height: '50px', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: '14px' }}>
        <span style={{ fontSize: '15px', fontWeight: 700 }}>9:41</span>
        <div style={{ fontSize: '12px' }}>●●● WiFi 🔋</div>
      </div>
      <div style={{ background: '#F2F2F7', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: '8px' }}>
        <div onClick={() => onBack?.() || onNavigate?.('notifications')} style={{ position: 'absolute', left: '16px', color: '#007AFF', fontSize: '16px', cursor: 'pointer' }}>‹ Notifications</div>
        <span style={{ fontWeight: 700, fontSize: '17px' }}>Preferences</span>
      </div>

      <SectionHeader title="In-app notifications" />
      <div style={{ background: '#fff', overflow: 'hidden' }}>
        <Row label="Enable in-app notifications" sublabel="Receive alerts within the RAA app" k="globalEnabled" last />
      </div>

      <SectionHeader title="Fuel" />
      <div style={{ background: '#fff', overflow: 'hidden' }}>
        <Row label="Fuel price drops" sublabel="When prices at saved stations fall" k="fuelDrops" />
        <Row label="RAA fuel deals" sublabel="New partner station offers" k="raaDeals" last />
      </div>

      <SectionHeader title="Deals" />
      <div style={{ background: '#fff', overflow: 'hidden' }}>
        <Row label="Dining rewards" k="dining" />
        <Row label="Grocery savings" k="grocery" />
        <Row label="Travel deals" k="travel" />
        <Row label="Entertainment" k="entertainment" />
        <Row label="Shopping rewards" k="shopping" />
        <Row label="Health and wellness" k="health" />
        <Row label="Home and garden" k="home" />
        <Row label="Finance offers" k="finance" last />
      </div>

      <SectionHeader title="Competitions" />
      <div style={{ background: '#fff', overflow: 'hidden' }}>
        <Row label="New competitions" k="newCompetitions" />
        <Row label="Entry reminders" sublabel="Remind me before competitions close" k="entryReminders" last />
      </div>

      <SectionHeader title="Device settings" />
      <div style={{ background: '#fff', overflow: 'hidden' }}>
        <Row label="Push notifications" sublabel="Managed in iOS settings" k="pushNotif" />
        <Row label="Email notifications" sublabel="Sent to john.smith@email.com" k="emailNotif" last />
      </div>

      <div style={{ height: '40px' }} />
    </div>
  )
}
