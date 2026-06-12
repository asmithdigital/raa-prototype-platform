import { useState } from 'react'

const STEPS = ['General information','Your home','Your contents','Policy holders','Your quote']

function StepperNav({ active }) {
  return (
    <div style={{ width: '200px', flexShrink: 0, borderRight: '1px solid #DFE1E6', background: '#FAFBFC', paddingTop: '8px', alignSelf: 'stretch' }}>
      {STEPS.map((s, i) => {
        const isActive = i === active, isDone = i < active
        return (
          <div key={s} style={{ padding: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px', background: isActive ? '#EBF2FF' : 'transparent', borderLeft: isActive ? '3px solid #0052CC' : '3px solid transparent' }}>
            <span style={{ width: 22, height: 22, borderRadius: '50%', background: isActive ? '#0052CC' : isDone ? '#36B37E' : '#DFE1E6', color: isActive || isDone ? '#fff' : '#8993A4', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
              {isDone ? '✓' : i + 1}
            </span>
            <span style={{ fontSize: '13px', fontWeight: isActive ? 600 : 400, color: isActive ? '#0052CC' : isDone ? '#36B37E' : '#6B778C', lineHeight: 1.4 }}>{s}</span>
          </div>
        )
      })}
    </div>
  )
}

function RadioCard({ label, desc, selected, onClick }) {
  return (
    <div onClick={onClick} style={{ border: selected ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '8px', padding: '16px 20px', marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '14px', cursor: 'pointer', background: selected ? '#F4F8FF' : '#fff' }}>
      <div style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, border: selected ? '6px solid #0052CC' : '2px solid #DFE1E6', background: '#fff', marginTop: 2 }} />
      <div>
        <div style={{ fontWeight: 600, fontSize: 14, color: '#172B4D' }}>{label}</div>
        {desc && <div style={{ fontSize: 13, color: '#42526E', marginTop: 3, lineHeight: 1.5 }}>{desc}</div>}
      </div>
    </div>
  )
}

export default function QTBHomeOccupancy({ onNext, onBack }) {
  const [occupancy, setOccupancy] = useState('I live in it')
  const [occupants, setOccupants] = useState('1-3')

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '600px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ minWidth: '48px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 12px', fontSize: '12px', fontWeight: 900, color: '#172B4D', letterSpacing: '0.08em' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={{ background: '#FFD100', padding: '20px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Step 1 of 5</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D' }}>General information</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <StepperNav active={0} />
        <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>How is the home used?</h2>
        <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '24px', lineHeight: 1.6 }}>Select the option that best describes how you use this property.</p>

        {[
          { label: 'I live in it', desc: 'Your primary place of residence' },
          { label: 'Holiday home', desc: 'Used for holidays or short stays, not your primary home' },
          { label: 'Unoccupied', desc: 'Currently empty — no regular occupants' },
        ].map(opt => (
          <RadioCard key={opt.label} label={opt.label} desc={opt.desc} selected={occupancy === opt.label} onClick={() => setOccupancy(opt.label)} />
        ))}

        {occupancy === 'I live in it' && (
          <div style={{ marginTop: '24px' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '12px' }}>How many unrelated people live in the home?</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['1-3', '4+'].map(opt => (
                <div key={opt} onClick={() => setOccupants(opt)} style={{ border: occupants === opt ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '6px', padding: '10px 28px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: occupants === opt ? '#F4F8FF' : '#fff', color: occupants === opt ? '#0052CC' : '#172B4D' }}>
                  {opt}
                </div>
              ))}
            </div>
          </div>
        )}

        {occupants === '4+' && occupancy === 'I live in it' && (
          <div style={{ background: '#FFEBE6', border: '1px solid #FF8F73', borderRadius: '8px', padding: '14px 18px', marginTop: '20px', display: 'flex', gap: '12px' }}>
            <span style={{ color: '#DE350B', fontSize: '18px', flexShrink: 0 }}>⚠</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#DE350B', marginBottom: '4px' }}>Cover may not be available</div>
              <p style={{ fontSize: '13px', color: '#172B4D', lineHeight: 1.6 }}>Homes with 4 or more unrelated occupants may not be eligible for standard cover. Please call us on <strong>08 8202 4600</strong>.</p>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px' }}>
          <button onClick={() => onBack?.()} style={{ background: '#fff', color: '#172B4D', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '12px 24px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>← Back</button>
          <button onClick={() => onNext?.()} style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '6px', padding: '12px 32px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>Next →</button>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}