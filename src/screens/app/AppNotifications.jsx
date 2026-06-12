const NOTIFICATIONS = [
  { icon: '⛽', title: 'Fuel price alert', body: 'BP Norwood dropped to 178.9¢/L — save 4¢ with your RAA discount.', time: '2h ago', unread: true },
  { icon: '🎁', title: 'New reward unlocked', body: '20% off dining at The German Arms, Hahndorf. Valid until 30 June.', time: 'Yesterday', unread: true },
  { icon: '🏆', title: 'Competition reminder', body: "Don't forget — enter the $5,000 travel voucher draw before Friday.", time: '2 days ago', unread: false },
  { icon: '🚗', title: 'Road service update', body: 'Your membership has been renewed. Your roadside cover is active.', time: '3 days ago', unread: false },
  { icon: '💳', title: 'Savings milestone', body: "You've now saved over $1,000 with RAA this year. Keep it up!", time: '1 week ago', unread: false },
]

export default function AppNotifications({ onNavigate }) {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', background: '#F5F5F0', minHeight: '100%', fontSize: '14px', color: '#172B4D', display: 'flex', flexDirection: 'column' }}>
      {/* Dimmed background peek */}
      <div style={{ background: '#D8D8D0', height: '100px', opacity: 0.7 }} />

      {/* Bottom sheet */}
      <div style={{ background: '#fff', borderRadius: '20px 20px 0 0', flex: 1, marginTop: '-20px', boxShadow: '0 -4px 20px rgba(0,0,0,0.12)' }}>
        <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px 0' }}>
          <span style={{ fontSize: '15px', fontWeight: 700 }}>9:41</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="#172B4D"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2" width="3" height="10" rx="0.5"/><rect x="13.5" y="0" width="3" height="12" rx="0.5"/></svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="#172B4D"><path d="M8 2.5C10.2 2.5 12.2 3.4 13.6 4.9L15 3.5C13.2 1.7 10.7 0.5 8 0.5C5.3 0.5 2.8 1.7 1 3.5L2.4 4.9C3.8 3.4 5.8 2.5 8 2.5Z"/><path d="M8 5.5C9.5 5.5 10.9 6.1 11.9 7.1L13.3 5.7C12 4.4 10.1 3.5 8 3.5C5.9 3.5 4 4.4 2.7 5.7L4.1 7.1C5.1 6.1 6.5 5.5 8 5.5Z"/><circle cx="8" cy="10" r="1.5"/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="1" width="20" height="10" rx="2" stroke="#172B4D" strokeWidth="1"/><rect x="21.5" y="3.5" width="2.5" height="5" rx="1" fill="#172B4D"/><rect x="2" y="2.5" width="14" height="7" rx="1.5" fill="#172B4D"/></svg>
        </div>
        </div>
        <div style={{ width: '36px', height: '4px', background: '#E5E7EB', borderRadius: '2px', margin: '10px auto 0' }} />

        <div style={{ padding: '14px 20px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: '20px', color: '#000' }}>Notifications</div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ fontSize: '14px', color: '#0052CC', fontWeight: 500, cursor: 'pointer' }}>Mark all read</div>
            <div onClick={() => onNavigate?.('notification-settings')} style={{ fontSize: '14px', color: '#5E6C84', cursor: 'pointer' }}>⚙️</div>
          </div>
        </div>

        {NOTIFICATIONS.map((notif, i) => (
          <div key={i} style={{ padding: '14px 20px', borderBottom: '1px solid #F2F2F7', display: 'flex', gap: '14px', alignItems: 'flex-start', background: notif.unread ? '#F8F9FF' : '#fff', position: 'relative' }}>
            {notif.unread && <div style={{ position: 'absolute', top: '18px', right: '16px', width: '8px', height: '8px', borderRadius: '50%', background: '#0052CC' }} />}
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: notif.unread ? '#EEF2FF' : '#F4F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
              {notif.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: notif.unread ? 700 : 600, fontSize: '14px', color: '#000', marginBottom: '4px' }}>{notif.title}</div>
              <div style={{ fontSize: '13px', color: '#5E6C84', lineHeight: 1.5, marginBottom: '5px' }}>{notif.body}</div>
              <div style={{ fontSize: '12px', color: '#8E8E93' }}>{notif.time}</div>
            </div>
          </div>
        ))}

        <div style={{ borderTop: '1px solid #E8E8E8', display: 'flex', justifyContent: 'space-around', padding: '8px 0 20px', background: '#fff' }}>
          {[
            { id: 'home', label: 'Home', icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill={c}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg> },
            { id: 'fuel-map', label: 'Fuel', icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill={c}><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6V18H4V5h8v13H8z"/></svg> },
            { id: 'savings', label: 'Rewards', icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill={c}><path d="M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.5 15.5 0 12.46 0c-1.86 0-3.52.97-4.46 2.44L7 4H4C2.34 4 1 5.34 1 7v11c0 1.66 1.34 3 3 3h16c1.66 0 3-1.34 3-3V9c0-1.66-1.34-3-3-3zm-7.54-4c1.55 0 2.54.98 2.54 2.64 0 .58-.42 1-.96 1H8.18L10 3.35C10.58 2.5 11.49 2 12.46 2zM21 18c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2.6L5.5 8H5v2h14V8h-.5L17.4 6H20c.55 0 1 .45 1 1v11z"/></svg> },
            { id: 'my-account', label: 'Account', icon: (c) => <svg width="22" height="22" viewBox="0 0 24 24" fill={c}><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> },
          ].map(({ id, label, icon }) => (
            <div key={label} onClick={() => onNavigate?.(id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', cursor: 'pointer', flex: 1 }}>
              {icon('#8993A4')}
              <span style={{ fontSize: '10px', fontWeight: 400, color: '#8993A4' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
