const steps = ['General information','Your home','Your contents','Policy holders','Your quote']

export default function QTBHomeAddress() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '600px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '60px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#172B4D' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={{ background: '#FFD100', padding: '16px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Step 1 of 5</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D' }}>General information</div>
      </div>
      <div style={{ display: 'flex', background: '#fff', borderBottom: '1px solid #DFE1E6', padding: '0 32px', overflowX: 'auto' }}>
        {steps.map((step, i) => (
          <div key={step} style={{ padding: '12px 16px 10px', fontSize: '12px', fontWeight: 600, color: i === 0 ? '#0052CC' : '#8993A4', borderBottom: i === 0 ? '3px solid #0052CC' : '3px solid transparent', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
            <span style={{ width: 16, height: 16, borderRadius: '50%', background: i === 0 ? '#0052CC' : '#DFE1E6', color: i === 0 ? '#fff' : '#8993A4', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i+1}</span>
            {step}
          </div>
        ))}
      </div>
      <div style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>What is the address of the home you want to insure?</h2>
        <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '24px' }}>Start typing your address and select it from the list.</p>

        <label style={{ fontSize: '13px', fontWeight: 600, color: '#172B4D', display: 'block', marginBottom: '6px' }}>Home address</label>
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <input
            type="text"
            defaultValue="23 Morialta Road, Burnside SA 5066"
            style={{ width: '100%', padding: '10px 14px', border: '2px solid #0052CC', borderRadius: '4px', fontSize: '14px', color: '#172B4D', outline: 'none', boxSizing: 'border-box' }}
            readOnly
          />
        </div>

        {/* Address confirmed card */}
        <div style={{ background: '#E3FCEF', border: '1px solid #ABF5D1', borderRadius: '8px', padding: '16px 20px', marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#36B37E', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0, fontWeight: 700 }}>✓</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '14px', color: '#172B4D', marginBottom: '4px' }}>Address confirmed</div>
            <div style={{ fontSize: '13px', color: '#172B4D' }}>23 Morialta Road, Burnside SA 5066</div>
            <div style={{ fontSize: '12px', color: '#36B37E', marginTop: '4px' }}>This property is eligible for cover</div>
          </div>
        </div>

        <a href="#" style={{ fontSize: '13px', color: '#0052CC', display: 'block', marginBottom: '32px' }}>Can't find your address? Get help →</a>

        <button style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '12px 28px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
          Next →
        </button>
      </div>
    </div>
  )
}
