export default function BrowserFrame({ children, url, title }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', width: '100%' }}>
      {title && (
        <p style={{ fontSize: '13px', color: '#5E6C84', fontWeight: 500 }}>
          {title}
        </p>
      )}
      <div style={{
        width: '100%',
        maxWidth: '860px',
        background: '#ffffff',
        borderRadius: '10px',
        border: '1px solid #DFE1E6',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        overflow: 'hidden',
      }}>
        {/* Browser chrome */}
        <div style={{
          background: '#F4F5F7',
          borderBottom: '1px solid #DFE1E6',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28C840' }} />
          </div>
          {/* Nav buttons */}
          <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#8993A4' }}>‹</div>
            <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#8993A4' }}>›</div>
          </div>
          {/* Address bar */}
          <div style={{
            flex: 1,
            background: '#ffffff',
            border: '1px solid #DFE1E6',
            borderRadius: '6px',
            padding: '5px 12px',
            fontSize: '12px',
            color: '#5E6C84',
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span style={{ color: '#36B37E', fontSize: '11px' }}>🔒</span>
            <span>{url || 'online.raa.com.au'}</span>
          </div>
          {/* Menu dots */}
          <div style={{ color: '#8993A4', fontSize: '16px', letterSpacing: '1px', flexShrink: 0 }}>···</div>
        </div>

        {/* Content area */}
        <div style={{
          background: '#ffffff',
          maxHeight: '680px',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}
