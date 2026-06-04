const s = {
  wrap: { fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '600px', fontSize: '14px', color: '#172B4D' },
  siteHeader: { background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' },
  stepBanner: { background: '#FFD100', padding: '16px 32px' },
  stepLabel: { fontSize: '12px', fontWeight: 600, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' },
  stepTitle: { fontSize: '22px', fontWeight: 700, color: '#172B4D' },
  stepper: { display: 'flex', background: '#fff', borderBottom: '1px solid #DFE1E6', padding: '0 32px' },
  stepItem: (active, done) => ({
    padding: '12px 20px 10px', fontSize: '12px', fontWeight: 600,
    color: active ? '#0052CC' : done ? '#36B37E' : '#8993A4',
    borderBottom: active ? '3px solid #0052CC' : '3px solid transparent',
    display: 'flex', alignItems: 'center', gap: '6px',
  }),
  content: { padding: '32px' },
  accordion: { border: '1px solid #DFE1E6', borderRadius: '6px', marginBottom: '12px' },
  accordionHeader: { padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '14px', fontWeight: 500, color: '#172B4D' },
  radioCard: (selected) => ({
    border: selected ? '2px solid #0052CC' : '1px solid #DFE1E6',
    borderRadius: '8px', padding: '16px 20px', marginBottom: '10px',
    display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer',
    background: selected ? '#F4F8FF' : '#fff',
  }),
  radioCircle: (selected) => ({
    width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
    border: selected ? '6px solid #0052CC' : '2px solid #DFE1E6',
    background: '#fff',
  }),
  btn: { background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '12px 28px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', marginTop: '24px', display: 'inline-block' },
  loginLink: { fontSize: '14px', color: '#0052CC', marginBottom: '20px', display: 'block' },
  sectionLabel: { fontSize: '13px', fontWeight: 700, color: '#5E6C84', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', marginTop: '28px' },
}

const steps = ['General information','Your home','Your contents','Policy holders','Your quote']

export default function QTBGeneralInfo() {
  return (
    <div style={s.wrap}>
      <div style={s.siteHeader}>
        <div style={{ width: '60px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#172B4D' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={s.stepBanner}>
        <div style={s.stepLabel}>Step 1 of 5</div>
        <div style={s.stepTitle}>General information</div>
      </div>
      <div style={s.stepper}>
        {steps.map((step, i) => (
          <div key={step} style={s.stepItem(i === 0, false)}>
            {i === 0 && <span style={{ width: 16, height: 16, borderRadius: '50%', background: '#0052CC', color: '#fff', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i+1}</span>}
            {i > 0 && <span style={{ width: 16, height: 16, borderRadius: '50%', background: '#DFE1E6', color: '#8993A4', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i+1}</span>}
            <span style={{ display: window.innerWidth < 500 ? 'none' : 'block' }}>{step}</span>
          </div>
        ))}
      </div>
      <div style={s.content}>
        <div style={s.accordion}>
          <div style={s.accordionHeader}>
            <span>Our duty of care to you</span>
            <span style={{ color: '#5E6C84', fontSize: 18 }}>+</span>
          </div>
        </div>
        <div style={s.accordion}>
          <div style={s.accordionHeader}>
            <span>Privacy notice</span>
            <span style={{ color: '#5E6C84', fontSize: 18 }}>+</span>
          </div>
        </div>

        <div style={{ background: '#F4F5F7', border: '1px solid #DFE1E6', borderRadius: '6px', padding: '14px 16px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <input type="checkbox" defaultChecked style={{ width: 16, height: 16, accentColor: '#0052CC', flexShrink: 0 }} />
          <span style={{ fontSize: '13px', color: '#172B4D' }}>I confirm I have read and understood the duty of care and privacy notice</span>
        </div>

        <a href="#" style={s.loginLink}>Already have an account? Log in to pre-fill your details →</a>

        <div style={s.sectionLabel}>What would you like to cover?</div>

        {[
          { label: 'Home and Contents', desc: 'Cover for your building and belongings', selected: true },
          { label: 'Home only', desc: 'Building structure only', selected: false },
          { label: 'Contents only', desc: 'Belongings only, no building cover', selected: false },
        ].map(opt => (
          <div key={opt.label} style={s.radioCard(opt.selected)}>
            <div style={s.radioCircle(opt.selected)} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{opt.label}</div>
              <div style={{ fontSize: 13, color: '#42526E', marginTop: 2 }}>{opt.desc}</div>
            </div>
          </div>
        ))}

        <div style={s.btn}>Next →</div>
      </div>
    </div>
  )
}
