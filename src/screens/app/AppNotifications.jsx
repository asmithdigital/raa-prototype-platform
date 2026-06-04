export default function AppNotifications() {
  const notifications = [
    { icon: '⛽', title: 'Fuel price alert', body: 'BP Norwood dropped to 178.9¢/L — save 4¢ with your RAA discount.', time: '2h ago', unread: true },
    { icon: '🎁', title: 'New reward unlocked', body: '20% off dining at The German Arms, Hahndorf. Valid until 30 June.', time: 'Yesterday', unread: true },
    { icon: '🏆', title: 'Competition reminder', body: 'Don\'t forget — enter the $5,000 travel voucher draw before Friday.', time: '2 days ago', unread: false },
    { icon: '🚗', title: 'Road service update', body: 'Your membership has been renewed. Your roadside cover is active.', time: '3 days ago', unread: false },
    { icon: '💳', title: 'Savings milestone', body: 'You\'ve now saved over $1,000 with RAA this year. Keep it up!', time: '1 week ago', unread: false },
  ]

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#F5F5F0', minHeight: '100%', fontSize: '14px', color: '#172B4D', display: 'flex', flexDirection: 'column' }}>
      {/* Map/page peek area */}
      <div style={{ background: '#F0F0F0', height: '120px', opacity: 0.5 }} />

      {/* Bottom sheet */}
      <div style={{ background: '#fff', borderRadius: '20px 20px 0 0', flex: 1, marginTop: '-20px', boxShadow: '0 -4px 20px rgba(0,0,0,0.12)' }}>
        {/* Status bar area at top */}
        <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px 0' }}>
          <span style={{ fontSize: '15px', fontWeight: 700 }}>9:41</span>
          <div style={{ fontSize: '12px' }}>●●● WiFi 🔋</div>
        </div>

        {/* Handle */}
        <div style={{ width: '40px', height: '4px', background: '#DFE1E6', borderRadius: '2px', margin: '8px auto 0' }} />

        {/* Header */}
        <div style={{ padding: '16px 20px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: '20px', color: '#000' }}>Notifications</div>
          <div style={{ fontSize: '14px', color: '#0052CC', fontWeight: 500 }}>Mark all read</div>
        </div>

        {/* Notification list */}
        <div>
          {notifications.map((notif, i) => (
            <div key={i} style={{ padding: '14px 20px', borderBottom: '1px solid #F2F2F7', display: 'flex', gap: '14px', alignItems: 'flex-start', background: notif.unread ? '#F8F9FF' : '#fff', position: 'relative' }}>
              {/* Unread dot */}
              {notif.unread && (
                <div style={{ position: 'absolute', top: '18px', right: '16px', width: '8px', height: '8px', borderRadius: '50%', background: '#0052CC' }} />
              )}
              {/* Icon */}
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F4F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                {notif.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: notif.unread ? 700 : 600, fontSize: '14px', color: '#000', marginBottom: '4px' }}>{notif.title}</div>
                <div style={{ fontSize: '13px', color: '#5E6C84', lineHeight: 1.5, marginBottom: '6px' }}>{notif.body}</div>
                <div style={{ fontSize: '12px', color: '#8E8E93' }}>{notif.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab bar */}
        <div style={{ borderTop: '1px solid #E8E8E8', display: 'flex', justifyContent: 'space-around', padding: '10px 0 24px', background: '#fff' }}>
          {[['🏠','Home',false],['⛽','Fuel',false],['🎁','Rewards',false],['👤','Account',false]].map(([icon, label, active]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
              <span style={{ fontSize: '22px' }}>{icon}</span>
              <span style={{ fontSize: '10px', fontWeight: active ? 600 : 400, color: active ? '#FFD100' : '#8993A4' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
