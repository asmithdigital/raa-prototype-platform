const steps = ['General information','Your home','Your contents','Policy holders','Your quote']

export default function QTBContentsSummary() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '600px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '60px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#172B4D' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={{ background: '#FFD100', padding: '16px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Step 3 of 5</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D' }}>Your contents</div>
      </div>
      <div style={{ display: 'flex', background: '#fff', borderBottom: '1px solid #DFE1E6', padding: '0 32px', overflowX: 'auto' }}>
        {steps.map((step, i) => (
          <div key={step} style={{ padding: '12px 16px 10px', fontSize: '12px', fontWeight: 600, color: i === 2 ? '#0052CC' : i < 2 ? '#36B37E' : '#8993A4', borderBottom: i === 2 ? '3px solid #0052CC' : '3px solid transparent', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
            <span style={{ width: 16, height: 16, borderRadius: '50%', background: i === 2 ? '#0052CC' : i < 2 ? '#36B37E' : '#DFE1E6', color: '#fff', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i < 2 ? '✓' : i+1}</span>
            {step}
          </div>
        ))}
      </div>
      <div style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Contents summary</h2>
        <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '28px' }}>How much would it cost to replace all of your contents?</p>

        <div style={{ marginBottom: '28px' }}>
          <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Contents sum insured</label>
          <div style={{ display: 'flex', alignItems: 'center', border: '2px solid #0052CC', borderRadius: '4px', overflow: 'hidden', width: '240px' }}>
            <span style={{ padding: '10px 14px', background: '#F4F5F7', borderRight: '1px solid #DFE1E6', fontSize: '14px', fontWeight: 600, color: '#42526E' }}>$</span>
            <input type="text" defaultValue="60,000" style={{ padding: '10px 14px', border: 'none', outline: 'none', fontSize: '14px', color: '#172B4D', width: '100%' }} readOnly />
          </div>
          <div style={{ fontSize: '12px', color: '#5E6C84', marginTop: '6px' }}>Estimated replacement value of all your belongings</div>
        </div>

        {/* Summary card */}
        <div style={{ border: '1px solid #DFE1E6', borderRadius: '8px', overflow: 'hidden', marginBottom: '28px', maxWidth: '400px' }}>
          <div style={{ background: '#F4F5F7', padding: '12px 20px', fontWeight: 700, fontSize: '13px', color: '#5E6C84', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Contents cover summary
          </div>
          {[
            { label: 'Accidental Damage Cover', value: '$5,000', check: true },
            { label: 'Contents sum insured', value: '$60,000', check: false },
            { label: 'Specified items', value: 'None', check: false },
          ].map((row, i) => (
            <div key={row.label} style={{ padding: '14px 20px', borderTop: '1px solid #DFE1E6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
              <div style={{ fontSize: '14px', color: '#172B4D', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {row.check && <span style={{ color: '#36B37E', fontWeight: 700 }}>✓</span>}
                {row.label}
              </div>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>{row.value}</div>
            </div>
          ))}
          <div style={{ padding: '14px 20px', borderTop: '2px solid #DFE1E6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F4F5F7' }}>
            <div style={{ fontWeight: 700, fontSize: '15px' }}>Total sum insured</div>
            <div style={{ fontWeight: 700, fontSize: '18px', color: '#172B4D' }}>$65,000</div>
          </div>
        </div>

        <button style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '12px 28px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>✓</span> Confirm and continue
        </button>
      </div>
    </div>
  )
}
