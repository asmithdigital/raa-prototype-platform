const steps = ['General information','Your home','Your contents','Policy holders','Your quote']

export default function QTBPolicyHolders() {
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

      <div style={{ display: 'flex', gap: 0 }}>
        <div style={{ flex: 1, padding: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>Primary policy holder details</h2>

          {/* Title */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Title</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['Mr', 'Mrs', 'Ms', 'Dr', 'Other'].map(t => (
                <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input type="radio" name="title" defaultChecked={t === 'Mr'} style={{ accentColor: '#0052CC' }} />
                  <span style={{ fontSize: '14px' }}>{t}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Name fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            {[['First name', 'John'], ['Last name', 'Smith']].map(([lbl, val]) => (
              <div key={lbl}>
                <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>{lbl}</label>
                <input type="text" defaultValue={val} style={{ width: '100%', padding: '10px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', color: '#172B4D', boxSizing: 'border-box' }} readOnly />
              </div>
            ))}
          </div>

          {/* DOB / Gender */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Date of birth</label>
              <input type="text" defaultValue="12 / 03 / 1978" style={{ width: '100%', padding: '10px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', color: '#172B4D', boxSizing: 'border-box' }} readOnly />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Gender</label>
              <select style={{ width: '100%', padding: '10px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', color: '#172B4D', background: '#fff', boxSizing: 'border-box' }}>
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>

          {/* RAA Member */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Are you an RAA member?</label>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
              {[{l:'Yes', sel: true},{l:'No', sel: false}].map(opt => (
                <div key={opt.l} style={{ border: opt.sel ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '6px', padding: '10px 28px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: opt.sel ? '#F4F8FF' : '#fff', color: opt.sel ? '#0052CC' : '#172B4D' }}>
                  {opt.l}
                </div>
              ))}
            </div>
            <div style={{ background: '#E3FCEF', border: '1px solid #ABF5D1', borderRadius: '6px', padding: '12px 16px', fontSize: '13px', display: 'flex', gap: '8px' }}>
              <span>✓</span>
              <span><strong>RAA member discount applied.</strong> You'll save up to 10% on your premium.</span>
            </div>
          </div>

          {/* Contact */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }}>
            {[['Mobile', '0412 345 678'], ['Email', 'john.smith@email.com']].map(([lbl, val]) => (
              <div key={lbl}>
                <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>{lbl}</label>
                <input type="text" defaultValue={val} style={{ width: '100%', padding: '10px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', color: '#172B4D', boxSizing: 'border-box' }} readOnly />
              </div>
            ))}
          </div>

          <button style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '12px 28px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
            Next →
          </button>
        </div>

        {/* Mascot tip */}
        <div style={{ width: '200px', flexShrink: 0, padding: '32px 20px 32px 0' }}>
          <div style={{ background: '#FFFAE6', border: '1px solid #FFD100', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🐝</div>
            <div style={{ fontSize: '13px', color: '#172B4D', lineHeight: 1.6 }}>
              <strong>RAA members save</strong>
              <p style={{ marginTop: '6px', color: '#42526E' }}>Existing RAA members get up to 10% off their home insurance premium.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
