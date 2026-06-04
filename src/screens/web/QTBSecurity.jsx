const steps = ['General information','Your home','Your contents','Policy holders','Your quote']

export default function QTBSecurity() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '600px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '60px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#172B4D' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={{ background: '#FFD100', padding: '16px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Step 2 of 5</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D' }}>Your home</div>
      </div>
      <div style={{ display: 'flex', background: '#fff', borderBottom: '1px solid #DFE1E6', padding: '0 32px', overflowX: 'auto' }}>
        {steps.map((step, i) => (
          <div key={step} style={{ padding: '12px 16px 10px', fontSize: '12px', fontWeight: 600, color: i === 1 ? '#0052CC' : i === 0 ? '#36B37E' : '#8993A4', borderBottom: i === 1 ? '3px solid #0052CC' : '3px solid transparent', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
            <span style={{ width: 16, height: 16, borderRadius: '50%', background: i === 1 ? '#0052CC' : i === 0 ? '#36B37E' : '#DFE1E6', color: '#fff', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i === 0 ? '✓' : i+1}</span>
            {step}
          </div>
        ))}
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'flex', gap: '0' }}>
        <div style={{ flex: 1, padding: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>Security and condition</h2>

          <div style={{ marginBottom: '28px' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
              Is the home in good condition and free from defects?
            </label>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[{l:'Yes', sel: true},{l:'No', sel: false}].map(opt => (
                <div key={opt.l} style={{ border: opt.sel ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '6px', padding: '10px 28px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: opt.sel ? '#F4F8FF' : '#fff', color: opt.sel ? '#0052CC' : '#172B4D' }}>
                  {opt.l}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '28px' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
              Does the home have a monitored security alarm?{' '}
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, borderRadius: '50%', border: '1px solid #0052CC', color: '#0052CC', fontSize: 11, fontWeight: 700, cursor: 'pointer', marginLeft: 4 }}>?</span>
            </label>
            <p style={{ fontSize: '12px', color: '#5E6C84', marginBottom: '12px' }}>A monitored alarm may reduce your premium.</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[{l:'Yes', sel: false},{l:'No', sel: true}].map(opt => (
                <div key={opt.l} style={{ border: opt.sel ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '6px', padding: '10px 28px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: opt.sel ? '#F4F8FF' : '#fff', color: opt.sel ? '#0052CC' : '#172B4D' }}>
                  {opt.l}
                </div>
              ))}
            </div>
          </div>

          <button style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '12px 28px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
            Next →
          </button>
        </div>

        {/* Drawer panel */}
        <div style={{ width: '260px', background: '#F4F5F7', borderLeft: '1px solid #DFE1E6', padding: '24px 20px', flexShrink: 0 }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#172B4D', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>What counts as a monitored alarm?</span>
            <span style={{ fontSize: '18px', cursor: 'pointer', color: '#5E6C84' }}>×</span>
          </div>
          <div style={{ fontSize: '13px', color: '#42526E', lineHeight: 1.7 }}>
            <p style={{ marginBottom: '12px' }}>A monitored security alarm is connected to a professional monitoring centre that alerts emergency services if the alarm is triggered.</p>
            <p style={{ marginBottom: '12px' }}>This includes:</p>
            <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>ADT or similar professionally monitored systems</li>
              <li>Alarm systems with 24/7 monitoring contracts</li>
              <li>Systems connected to security companies</li>
            </ul>
            <p style={{ marginTop: '12px', fontSize: '12px', color: '#5E6C84' }}>Self-monitored alarms (like those connected to your phone only) do not qualify.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
