import { useState } from 'react'

const STEPS = ['General information','Your home','Your contents','Policy holders','Your quote']

function StepperNav({ active }) {
  return (
    <div style={{ display: 'flex', background: '#fff', borderBottom: '1px solid #DFE1E6', padding: '0 32px', overflowX: 'auto', scrollbarWidth: 'none' }}>
      {STEPS.map((s, i) => {
        const isActive = i === active, isDone = i < active
        return (
          <div key={s} style={{ padding: '12px 16px 10px', fontSize: '12px', fontWeight: 600, color: isActive ? '#0052CC' : isDone ? '#36B37E' : '#8993A4', borderBottom: isActive ? '3px solid #0052CC' : '3px solid transparent', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', flexShrink: 0 }}>
            <span style={{ width: 22, height: 22, borderRadius: '50%', background: isActive ? '#0052CC' : isDone ? '#36B37E' : '#DFE1E6', color: isActive || isDone ? '#fff' : '#8993A4', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{isDone ? '✓' : i+1}</span>
            {s}
          </div>
        )
      })}
    </div>
  )
}

function YesNoToggle({ value, onChange }) {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {['Yes', 'No'].map(opt => (
        <div key={opt} onClick={() => onChange(opt)} style={{ border: value === opt ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '6px', padding: '10px 32px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: value === opt ? '#F4F8FF' : '#fff', color: value === opt ? '#0052CC' : '#172B4D' }}>
          {opt}
        </div>
      ))}
    </div>
  )
}

export default function QTBSecurity({ onNext, onBack }) {
  const [condition, setCondition] = useState('Yes')
  const [alarm, setAlarm] = useState('No')
  const [drawerOpen, setDrawerOpen] = useState(true)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '600px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ minWidth: '48px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 12px', fontSize: '12px', fontWeight: 900, color: '#172B4D', letterSpacing: '0.08em' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={{ background: '#FFD100', padding: '16px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Step 2 of 5</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D' }}>Your home</div>
      </div>
      <StepperNav active={1} />
      <div style={{ display: 'flex' }}>
        {/* Main content */}
        <div style={{ flex: 1, padding: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>Security and condition</h2>

          <div style={{ marginBottom: '28px' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '12px', lineHeight: 1.4 }}>
              Is the home in good condition and free from defects?
            </label>
            <YesNoToggle value={condition} onChange={setCondition} />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '4px', lineHeight: 1.4 }}>
              Does the home have a monitored security alarm?{' '}
              <span onClick={() => setDrawerOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, borderRadius: '50%', border: '1.5px solid #0052CC', color: '#0052CC', fontSize: 11, fontWeight: 700, cursor: 'pointer', marginLeft: 4, verticalAlign: 'middle' }}>?</span>
            </label>
            <p style={{ fontSize: '12px', color: '#5E6C84', marginBottom: '12px', lineHeight: 1.5 }}>A monitored alarm may reduce your premium.</p>
            <YesNoToggle value={alarm} onChange={setAlarm} />
            {alarm === 'Yes' && (
              <div style={{ background: '#E3FCEF', border: '1px solid #ABF5D1', borderRadius: '6px', padding: '12px 16px', marginTop: '12px', fontSize: '13px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: '#36B37E', fontWeight: 700 }}>✓</span>
                <span><strong>Discount applied.</strong> Your monitored alarm may reduce your premium by up to 5%.</span>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={() => onBack?.()} style={{ background: '#fff', color: '#172B4D', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '12px 24px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>← Back</button>
            <button onClick={() => onNext?.()} style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '6px', padding: '12px 32px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>Next →</button>
          </div>
        </div>

        {/* Info drawer */}
        {drawerOpen && (
          <div style={{ width: '268px', background: '#F4F5F7', borderLeft: '1px solid #DFE1E6', padding: '24px 20px', flexShrink: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#172B4D', lineHeight: 1.4, flex: 1, paddingRight: '8px' }}>What counts as a monitored alarm?</div>
              <button onClick={() => setDrawerOpen(false)} style={{ background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer', color: '#5E6C84', lineHeight: 1, padding: 0, flexShrink: 0 }}>×</button>
            </div>
            <div style={{ fontSize: '13px', color: '#42526E', lineHeight: 1.7 }}>
              <p style={{ marginBottom: '12px' }}>A monitored security alarm is connected to a professional monitoring centre that alerts emergency services if the alarm is triggered.</p>
              <p style={{ marginBottom: '8px', fontWeight: 600, color: '#172B4D' }}>This includes:</p>
              <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                <li>ADT or similar professionally monitored systems</li>
                <li>Alarm systems with 24/7 monitoring contracts</li>
                <li>Systems connected to security companies</li>
              </ul>
              <p style={{ fontSize: '12px', color: '#5E6C84', lineHeight: 1.6 }}>Self-monitored alarms connected only to your phone do not qualify.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
