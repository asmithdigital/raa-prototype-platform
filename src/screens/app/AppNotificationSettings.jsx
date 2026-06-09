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
        <span style={{ fontSize: '15px', fontWeight: 700, color: '#172B4D' }}>9:41</span>
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="#172B4D"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2" width="3" height="10" rx="0.5"/><rect x="13.5" y="0" width="3" height="12" rx="0.5"/></svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="#172B4D"><path d="M8 2.5C10.2 2.5 12.2 3.4 13.6 4.9L15 3.5C13.2 1.7 10.7 0.5 8 0.5C5.3 0.5 2.8 1.7 1 3.5L2.4 4.9C3.8 3.4 5.8 2.5 8 2.5Z"/><path d="M8 5.5C9.5 5.5 10.9 6.1 11.9 7.1L13.3 5.7C12 4.4 10.1 3.5 8 3.5C5.9 3.5 4 4.4 2.7 5.7L4.1 7.1C5.1 6.1 6.5 5.5 8 5.5Z"/><circle cx="8" cy="10" r="1.5"/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="1" width="20" height="10" rx="2" stroke="#172B4D" strokeWidth="1"/><rect x="21.5" y="3.5" width="2.5" height="5" rx="1" fill="#172B4D"/><rect x="2" y="2.5" width="14" height="7" rx="1.5" fill="#172B4D"/></svg>
        </div>
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
