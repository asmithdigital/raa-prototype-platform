const steps = ['General information','Your home','Your contents','Policy holders','Your quote']

export default function QTBHomeOccupancy() {
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
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>How is the home used?</h2>

        {[
          { label: 'I live in it', desc: 'Your primary residence', selected: true },
          { label: 'Holiday home', desc: 'Used occasionally for holidays', selected: false },
          { label: 'Unoccupied', desc: 'Not currently occupied', selected: false },
        ].map(opt => (
          <div key={opt.label} style={{
            border: opt.selected ? '2px solid #0052CC' : '1px solid #DFE1E6',
            borderRadius: '8px', padding: '16px 20px', marginBottom: '10px',
            display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer',
            background: opt.selected ? '#F4F8FF' : '#fff',
          }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, border: opt.selected ? '6px solid #0052CC' : '2px solid #DFE1E6', background: '#fff' }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{opt.label}</div>
              <div style={{ fontSize: 13, color: '#42526E', marginTop: 2 }}>{opt.desc}</div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: '24px', marginBottom: '24px' }}>
          <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
            How many unrelated people live in the home?
          </label>
          <select style={{ padding: '10px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', color: '#172B4D', width: '180px', background: '#fff' }}>
            <option>1 person</option>
            <option>2 people</option>
            <option>3 people</option>
            <option>4+ people</option>
          </select>
        </div>

        {/* Alert banner example */}
        <div style={{ background: '#FFFAE6', border: '1px solid #FFD100', borderRadius: '6px', padding: '14px 16px', marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '18px', flexShrink: 0 }}>⚠️</span>
          <div style={{ fontSize: '13px', color: '#172B4D' }}>
            <strong>Additional information required</strong>
            <div style={{ marginTop: '4px', color: '#42526E' }}>If 4 or more unrelated people live in the property, please call us on <strong>08 8202 4600</strong> to discuss your options.</div>
          </div>
        </div>

        <button style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '12px 28px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
          Next →
        </button>
      </div>
    </div>
  )
}
