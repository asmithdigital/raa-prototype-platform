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

function SelectField({ label, options, value, onChange, error }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px', color: '#172B4D' }}>{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ padding: '11px 14px', width: '100%', border: error ? '2px solid #DE350B' : value ? '1px solid #DFE1E6' : '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', color: value ? '#172B4D' : '#8993A4', background: '#fff', boxSizing: 'border-box', appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'8\' viewBox=\'0 0 12 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L6 6L11 1\' stroke=\'%235E6C84\' stroke-width=\'1.5\' stroke-linecap=\'round\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: '36px' }}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <div style={{ fontSize: '12px', color: '#DE350B', marginTop: '5px', display: 'flex', gap: '4px', alignItems: 'center' }}><span>⚠</span> Please select a {label.toLowerCase()}</div>}
    </div>
  )
}

export default function QTBYourHome({ onNext, onBack }) {
  const [buildingType, setBuildingType] = useState('House')
  const [wallMaterial, setWallMaterial] = useState('')
  const [roofMaterial, setRoofMaterial] = useState('Terracotta tiles')
  const [strata, setStrata] = useState('No')
  const [yearBuilt] = useState('1985')
  const [submitted, setSubmitted] = useState(false)

  const handleNext = () => {
    setSubmitted(true)
    if (wallMaterial) onNext?.()
  }

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
      <div style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>Tell us about your home</h2>

        <SelectField label="Building type" options={['House', 'Townhouse / villa', 'Apartment / unit', 'Other']} value={buildingType} onChange={setBuildingType} />
        <SelectField label="External wall material" options={['Brick', 'Brick veneer', 'Timber', 'Fibro / asbestos', 'Other']} value={wallMaterial} onChange={setWallMaterial} error={submitted && !wallMaterial} />
        <SelectField label="Roof material" options={['Terracotta tiles', 'Concrete tiles', 'Colorbond / zincalume', 'Slate', 'Other']} value={roofMaterial} onChange={setRoofMaterial} />

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '10px', color: '#172B4D' }}>Is the property under a strata title?</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['Yes', 'No'].map(opt => (
              <div key={opt} onClick={() => setStrata(opt)} style={{ border: strata === opt ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '6px', padding: '10px 28px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: strata === opt ? '#F4F8FF' : '#fff', color: strata === opt ? '#0052CC' : '#172B4D' }}>
                {opt}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px', color: '#172B4D' }}>Year the home was built</label>
          <input type="text" defaultValue={yearBuilt} style={{ padding: '11px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', width: '160px', color: '#172B4D', fontFamily: 'Inter, sans-serif' }} readOnly />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => onBack?.()} style={{ background: '#fff', color: '#172B4D', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '12px 24px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>← Back</button>
          <button onClick={handleNext} style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '6px', padding: '12px 32px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>Next →</button>
        </div>
      </div>
    </div>
  )
}
