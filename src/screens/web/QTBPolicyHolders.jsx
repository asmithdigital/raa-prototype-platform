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

export default function QTBPolicyHolders({ onNext, onBack }) {
  const [title, setTitle] = useState('Mr')
  const [isMember, setIsMember] = useState('Yes')
  const [postalAddress, setPostalAddress] = useState('Same as insured property')
  const [gender, setGender] = useState('Male')

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
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, padding: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>Primary policy holder details</h2>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '10px' }}>Title</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['Mr', 'Mrs', 'Ms', 'Dr', 'Other'].map(t => (
                <div key={t} onClick={() => setTitle(t)} style={{ padding: '7px 16px', border: title === t ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '4px', cursor: 'pointer', fontWeight: title === t ? 600 : 400, fontSize: '14px', background: title === t ? '#F4F8FF' : '#fff', color: title === t ? '#0052CC' : '#172B4D' }}>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            {[['First name', 'John'], ['Last name', 'Smith']].map(([lbl, val]) => (
              <div key={lbl}>
                <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>{lbl}</label>
                <input defaultValue={val} style={{ width: '100%', padding: '11px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', color: '#172B4D', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif' }} readOnly />
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Date of birth</label>
              <input defaultValue="12 / 03 / 1978" style={{ width: '100%', padding: '11px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', color: '#172B4D', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif' }} readOnly />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Gender</label>
              <select value={gender} onChange={e => setGender(e.target.value)} style={{ width: '100%', padding: '11px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', color: '#172B4D', background: '#fff', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif' }}>
                {['Male', 'Female', 'Non-binary', 'Prefer not to say'].map(g => <option key={g}>{g}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '10px' }}>Are you an RAA member?</label>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
              {['Yes', 'No'].map(opt => (
                <div key={opt} onClick={() => setIsMember(opt)} style={{ border: isMember === opt ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '6px', padding: '10px 28px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: isMember === opt ? '#F4F8FF' : '#fff', color: isMember === opt ? '#0052CC' : '#172B4D' }}>
                  {opt}
                </div>
              ))}
            </div>
            {isMember === 'Yes' && (
              <div style={{ background: '#E3FCEF', border: '1px solid #ABF5D1', borderRadius: '6px', padding: '12px 16px', fontSize: '13px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: '#36B37E', fontWeight: 700 }}>✓</span>
                <span><strong>RAA member discount applied.</strong> You'll save up to 10% on your premium.</span>
              </div>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '10px' }}>Postal address</label>
            {['Same as insured property', 'Different address'].map(opt => (
              <div key={opt} onClick={() => setPostalAddress(opt)} style={{ border: postalAddress === opt ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '8px', padding: '14px 18px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', background: postalAddress === opt ? '#F4F8FF' : '#fff' }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', flexShrink: 0, border: postalAddress === opt ? '5px solid #0052CC' : '2px solid #DFE1E6', background: '#fff' }} />
                <span style={{ fontSize: '14px', fontWeight: postalAddress === opt ? 600 : 400 }}>{opt}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
            {[['Mobile', '0412 345 678'], ['Email', 'john.smith@email.com']].map(([lbl, val]) => (
              <div key={lbl}>
                <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>{lbl}</label>
                <input defaultValue={val} style={{ width: '100%', padding: '11px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', color: '#172B4D', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif' }} readOnly />
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={() => onBack?.()} style={{ background: '#fff', color: '#172B4D', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '12px 24px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>← Back</button>
            <button onClick={() => onNext?.()} style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '12px 32px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>Next →</button>
          </div>
        </div>

        <div style={{ width: '200px', flexShrink: 0, padding: '32px 20px 32px 0' }}>
          <div style={{ background: '#FFFAE6', border: '1px solid #FFE27D', borderRadius: '12px', padding: '20px', position: 'sticky', top: '16px' }}>
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>🐝</div>
            <div style={{ fontWeight: 700, fontSize: '14px', color: '#172B4D', marginBottom: '8px' }}>RAA members save</div>
            <p style={{ fontSize: '13px', color: '#42526E', lineHeight: 1.6 }}>Existing RAA members get up to 10% off their home insurance premium — automatically applied.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
