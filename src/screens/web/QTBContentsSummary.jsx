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

export default function QTBContentsSummary({ onNext, onBack }) {
  const [sumInsured, setSumInsured] = useState('60,000')

  const total = parseInt(sumInsured.replace(/,/g, '')) + 5000
  const totalFormatted = total.toLocaleString()

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '600px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ minWidth: '48px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 12px', fontSize: '12px', fontWeight: 900, color: '#172B4D', letterSpacing: '0.08em' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={{ background: '#FFD100', padding: '20px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Step 3 of 5</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D' }}>Your contents</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <StepperNav active={2} />
        <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Contents summary</h2>
        <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '28px', lineHeight: 1.6 }}>How much would it cost to replace all of your contents at today's prices?</p>

        <div style={{ marginBottom: '28px' }}>
          <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Contents sum insured</label>
          <div style={{ display: 'flex', alignItems: 'center', border: '2px solid #0052CC', borderRadius: '4px', overflow: 'hidden', width: '240px' }}>
            <span style={{ padding: '11px 14px', background: '#F4F5F7', borderRight: '1px solid #DFE1E6', fontSize: '14px', fontWeight: 700, color: '#42526E' }}>$</span>
            <input
              type="text"
              value={sumInsured}
              onChange={e => setSumInsured(e.target.value)}
              style={{ padding: '11px 14px', border: 'none', outline: 'none', fontSize: '14px', color: '#172B4D', width: '100%', fontFamily: 'Inter, sans-serif' }}
            />
          </div>
          <div style={{ fontSize: '12px', color: '#5E6C84', marginTop: '6px' }}>Estimated replacement value of all your belongings</div>
        </div>

        <div style={{ border: '1px solid #DFE1E6', borderRadius: '8px', overflow: 'hidden', marginBottom: '32px', maxWidth: '420px' }}>
          <div style={{ background: '#F4F5F7', padding: '12px 20px', fontWeight: 700, fontSize: '13px', color: '#5E6C84', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Contents cover summary
          </div>
          {[
            { label: 'Accidental Damage Cover', value: '$5,000', check: true },
            { label: 'Contents sum insured', value: `$${sumInsured}`, check: false },
            { label: 'Specified items', value: 'None', check: false },
          ].map(row => (
            <div key={row.label} style={{ padding: '14px 20px', borderTop: '1px solid #DFE1E6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
              <div style={{ fontSize: '14px', color: '#172B4D', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {row.check && <span style={{ color: '#36B37E', fontWeight: 700 }}>✓</span>}
                {row.label}
              </div>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>{row.value}</div>
            </div>
          ))}
          <div style={{ padding: '14px 20px', borderTop: '2px solid #DFE1E6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFAE6' }}>
            <div style={{ fontWeight: 700, fontSize: '15px' }}>Total sum insured</div>
            <div style={{ fontWeight: 700, fontSize: '18px', color: '#172B4D' }}>${totalFormatted}</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => onBack?.()} style={{ background: '#fff', color: '#172B4D', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '12px 24px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>← Back</button>
          <button onClick={() => onNext?.()} style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '6px', padding: '12px 32px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '16px' }}>✓</span> Confirm and continue
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}