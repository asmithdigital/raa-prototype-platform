const steps = ['General information','Your home','Your contents','Policy holders','Your quote']

export default function QTBContents() {
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

      <div style={{ display: 'flex', gap: '0' }}>
        <div style={{ flex: 1, padding: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Optional covers</h2>
          <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '24px' }}>Add extra protection to your contents cover.</p>

          {/* Accidental Damage */}
          <div style={{ border: '1px solid #DFE1E6', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
            <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>Accidental Damage Cover</div>
            <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '16px', lineHeight: 1.6 }}>
              Covers accidental damage to your contents caused by sudden and unexpected events.
            </p>
            <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '10px' }}>Select cover limit:</div>
            {[
              { label: '$2,000 cover limit', price: '+$2.40/mo', selected: false },
              { label: '$5,000 cover limit', price: '+$4.80/mo', selected: true },
            ].map(opt => (
              <div key={opt.label} style={{ border: opt.selected ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '8px', padding: '12px 16px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px', background: opt.selected ? '#F4F8FF' : '#fff', cursor: 'pointer' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, border: opt.selected ? '6px solid #0052CC' : '2px solid #DFE1E6', background: '#fff' }} />
                <div style={{ flex: 1, fontWeight: 500 }}>{opt.label}</div>
                <div style={{ fontSize: '13px', color: '#0052CC', fontWeight: 600 }}>{opt.price}</div>
              </div>
            ))}
          </div>

          {/* Specific items */}
          <div style={{ border: '1px solid #DFE1E6', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
            <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>Specified valuable items</div>
            <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '16px', lineHeight: 1.6 }}>
              Insure high-value items like jewellery, cameras, or musical instruments for their full value.
            </p>
            <button style={{ background: '#fff', color: '#0052CC', border: '1px solid #0052CC', borderRadius: '4px', padding: '8px 16px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
              + Add a valuable item
            </button>
          </div>

          {/* Key info accordion */}
          <div style={{ border: '1px solid #DFE1E6', borderRadius: '6px', marginBottom: '12px' }}>
            <div style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}>
              <span>Key policy information</span>
              <span style={{ color: '#5E6C84' }}>+</span>
            </div>
          </div>

          <button style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '12px 28px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
            Next →
          </button>
        </div>

        {/* Mascot tip */}
        <div style={{ width: '220px', flexShrink: 0, padding: '32px 20px 32px 0' }}>
          <div style={{ background: '#FFFAE6', border: '1px solid #FFD100', borderRadius: '12px', padding: '16px', position: 'relative' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🐝</div>
            <div style={{ fontSize: '13px', color: '#172B4D', lineHeight: 1.6 }}>
              <strong>Tip from RAA</strong>
              <p style={{ marginTop: '6px', color: '#42526E' }}>The $5,000 Accidental Damage cover is our most popular choice — it covers most common accidents at home.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
