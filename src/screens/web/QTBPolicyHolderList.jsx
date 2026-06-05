import { useState } from 'react'

const STEPS = ['General information','Your home','Your contents','Policy holders','Your quote']

function StepperNav({ active }) {
  return (
    <div style={{ display: 'flex', background: '#fff', borderBottom: '1px solid #DFE1E6', padding: '0 32px', overflowX: 'auto' }}>
      {STEPS.map((s, i) => {
        const isActive = i === active, isDone = i < active
        return (
          <div key={s} style={{ padding: '12px 16px 10px', fontSize: '12px', fontWeight: 600, color: isActive ? '#0052CC' : isDone ? '#36B37E' : '#8993A4', borderBottom: isActive ? '3px solid #0052CC' : '3px solid transparent', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', flexShrink: 0 }}>
            <span style={{ width: 16, height: 16, borderRadius: '50%', background: isActive ? '#0052CC' : isDone ? '#36B37E' : '#DFE1E6', color: '#fff', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{isDone ? '✓' : i+1}</span>
            {s}
          </div>
        )
      })}
    </div>
  )
}

export default function QTBPolicyHolderList({ onNext, onBack }) {
  const [addMore, setAddMore] = useState('No')
  const [holders] = useState([
    { name: 'John Smith', role: 'Primary holder', member: 'RAA Member #1234567' },
    { name: 'Sarah Smith', role: 'Additional holder', member: '' },
  ])

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '600px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '60px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 900, color: '#172B4D' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={{ background: '#FFD100', padding: '16px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Step 4 of 5</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D' }}>Policy holders</div>
      </div>
      <StepperNav active={3} />
      <div style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Policy holders</h2>
        <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '24px', lineHeight: 1.6 }}>The following people will be listed on this policy.</p>

        {holders.map(person => (
          <div key={person.name} style={{ border: '1px solid #DFE1E6', borderRadius: '8px', padding: '20px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#DEEBFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#0052CC', fontSize: '17px', flexShrink: 0 }}>
                {person.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: '#172B4D' }}>{person.name}</div>
                <div style={{ fontSize: '12px', color: '#5E6C84', marginTop: '2px' }}>{person.role}</div>
                {person.member && <div style={{ fontSize: '12px', color: '#36B37E', marginTop: '3px', fontWeight: 500 }}>✓ {person.member}</div>}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ background: 'none', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '7px 14px', fontSize: '13px', fontWeight: 600, color: '#172B4D', cursor: 'pointer' }}>Edit</button>
              {person.role !== 'Primary holder' && (
                <button style={{ background: 'none', border: '1px solid #FF8F73', borderRadius: '4px', padding: '7px 14px', fontSize: '13px', fontWeight: 600, color: '#DE350B', cursor: 'pointer' }}>Remove</button>
              )}
            </div>
          </div>
        ))}

        <div style={{ marginTop: '28px', marginBottom: '28px' }}>
          <label style={{ fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '14px' }}>Would you like to add another policy holder?</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['Yes', 'No'].map(opt => (
              <div key={opt} onClick={() => setAddMore(opt)} style={{ border: addMore === opt ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '6px', padding: '10px 28px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: addMore === opt ? '#F4F8FF' : '#fff', color: addMore === opt ? '#0052CC' : '#172B4D' }}>
                {opt}
              </div>
            ))}
          </div>
          {addMore === 'Yes' && (
            <div style={{ marginTop: '16px', background: '#F4F5F7', borderRadius: '8px', padding: '16px 20px', border: '1px dashed #DFE1E6', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#DFE1E6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#5E6C84' }}>+</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: '#172B4D' }}>Add a policy holder</div>
                <div style={{ fontSize: '12px', color: '#5E6C84', marginTop: '2px' }}>Fill in their personal details</div>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => onBack?.()} style={{ background: '#fff', color: '#172B4D', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '12px 24px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>← Back</button>
          <button onClick={() => onNext?.()} style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '12px 32px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>Next →</button>
        </div>
      </div>
    </div>
  )
}
