export default function PhoneFrame({ children, title, screenId }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
      {title && (
        <p style={{ fontSize: '13px', color: '#5E6C84', fontWeight: 500 }}>
          {title}
        </p>
      )}
      <div style={{
        position: 'relative',
        width: '390px',
        height: '844px',
        background: '#1a1a1a',
        borderRadius: '50px',
        border: '8px solid #1a1a1a',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.1)',
        flexShrink: 0,
      }}>
        {/* Dynamic island */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          height: '34px',
          background: '#000',
          borderRadius: '20px',
          zIndex: 10,
        }} />

        {/* Screen area */}
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '42px',
          overflow: 'hidden',
          background: '#F5F5F0',
          position: 'relative',
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}>
            {children}
          </div>
        </div>

        {/* Home indicator */}
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '134px',
          height: '5px',
          background: 'rgba(255,255,255,0.4)',
          borderRadius: '3px',
          zIndex: 10,
        }} />

        {/* Side buttons */}
        <div style={{
          position: 'absolute',
          left: '-10px',
          top: '100px',
          width: '4px',
          height: '32px',
          background: '#2a2a2a',
          borderRadius: '2px 0 0 2px',
        }} />
        <div style={{
          position: 'absolute',
          left: '-10px',
          top: '148px',
          width: '4px',
          height: '56px',
          background: '#2a2a2a',
          borderRadius: '2px 0 0 2px',
        }} />
        <div style={{
          position: 'absolute',
          left: '-10px',
          top: '218px',
          width: '4px',
          height: '56px',
          background: '#2a2a2a',
          borderRadius: '2px 0 0 2px',
        }} />
        <div style={{
          position: 'absolute',
          right: '-10px',
          top: '140px',
          width: '4px',
          height: '80px',
          background: '#2a2a2a',
          borderRadius: '0 2px 2px 0',
        }} />
      </div>
    </div>
  )
}
