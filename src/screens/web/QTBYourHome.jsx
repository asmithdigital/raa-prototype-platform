const steps = ['General information','Your home','Your contents','Policy holders','Your quote']

export default function QTBYourHome() {
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
      <div style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>Tell us about your home</h2>

        {[
          { label: 'Building type', options: ['House', 'Townhouse / villa', 'Apartment / unit', 'Other'], value: 'House', error: false },
          { label: 'External wall material', options: ['Brick', 'Brick veneer', 'Timber', 'Fibro / asbestos', 'Other'], value: '', error: true },
          { label: 'Roof material', options: ['Terracotta tiles', 'Concrete tiles', 'Colorbond / zincalume', 'Slate', 'Other'], value: 'Terracotta tiles', error: false },
        ].map(field => (
          <div key={field.label} style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>{field.label}</label>
            <select style={{
              padding: '10px 14px', width: '100%',
              border: field.error ? '2px solid #DE350B' : '1px solid #DFE1E6',
              borderRadius: '4px', fontSize: '14px', color: field.value ? '#172B4D' : '#8993A4',
              background: '#fff', boxSizing: 'border-box',
            }}>
              <option value="">{field.value || `Select ${field.label.toLowerCase()}`}</option>
              {field.options.map(o => <option key={o}>{o}</option>)}
            </select>
            {field.error && (
              <div style={{ fontSize: '12px', color: '#DE350B', marginTop: '4px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                <span>⚠</span> Please select a wall material
              </div>
            )}
          </div>
        ))}

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Is the property under a strata title?</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['Yes', 'No'].map(opt => (
              <div key={opt} style={{ border: opt === 'No' ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '6px', padding: '10px 24px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: opt === 'No' ? '#F4F8FF' : '#fff', color: opt === 'No' ? '#0052CC' : '#172B4D' }}>
                {opt}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Year the home was built</label>
          <input type="text" defaultValue="1985" style={{ padding: '10px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', width: '160px', color: '#172B4D' }} readOnly />
        </div>

        <button style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '12px 28px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
          Next →
        </button>
      </div>
    </div>
  )
}
