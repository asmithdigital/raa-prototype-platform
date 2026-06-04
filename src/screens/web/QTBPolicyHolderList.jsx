const steps = ['General information','Your home','Your contents','Policy holders','Your quote']

export default function QTBPolicyHolderList() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '600px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '60px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#172B4D' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={{ background: '#FFD100', padding: '16px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Step 4 of 5</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D' }}>Policy holders</div>
      </div>
      <div style={{ display: 'flex', background: '#fff', borderBottom: '1px solid #DFE1E6', padding: '0 32px', overflowX: 'auto' }}>
        {steps.map((step, i) => (
          <div key={step} style={{ padding: '12px 16px 10px', fontSize: '12px', fontWeight: 600, color: i === 3 ? '#0052CC' : i < 3 ? '#36B37E' : '#8993A4', borderBottom: i === 3 ? '3px solid #0052CC' : '3px solid transparent', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
            <span style={{ width: 16, height: 16, borderRadius: '50%', background: i === 3 ? '#0052CC' : i < 3 ? '#36B37E' : '#DFE1E6', color: '#fff', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i < 3 ? '✓' : i+1}</span>
            {step}
          </div>
        ))}
      </div>
      <div style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Policy holders</h2>
        <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '24px' }}>The following people will be listed on this policy.</p>

        {/* Person card */}
        {[
          { name: 'John Smith', role: 'Primary holder', member: 'RAA Member #1234567' },
          { name: 'Sarah Smith', role: 'Additional holder', member: '' },
        ].map((person) => (
          <div key={person.name} style={{ border: '1px solid #DFE1E6', borderRadius: '8px', padding: '20px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#DEEBFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#0052CC', fontSize: '16px' }}>
                {person.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>{person.name}</div>
                <div style={{ fontSize: '12px', color: '#5E6C84' }}>{person.role}</div>
                {person.member && <div style={{ fontSize: '12px', color: '#36B37E', marginTop: '2px' }}>✓ {person.member}</div>}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ background: 'none', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '6px 12px', fontSize: '12px', fontWeight: 600, color: '#172B4D', cursor: 'pointer' }}>Edit</button>
              <button style={{ background: 'none', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '6px 12px', fontSize: '12px', fontWeight: 600, color: '#DE350B', cursor: 'pointer' }}>Remove</button>
            </div>
          </div>
        ))}

        <div style={{ marginTop: '28px', marginBottom: '24px' }}>
          <label style={{ fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
            Would you like to add another policy holder?
          </label>
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
    </div>
  )
}
