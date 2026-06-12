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

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ border: '1px solid #DFE1E6', borderRadius: '6px', marginBottom: '10px' }}>
      <div onClick={() => setOpen(!open)} style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '14px', fontWeight: 500, color: '#172B4D', userSelect: 'none' }}>
        <span>{title}</span>
        <span style={{ color: '#5E6C84', fontSize: 20, lineHeight: 1 }}>{open ? '−' : '+'}</span>
      </div>
      {open && <div style={{ padding: '0 16px 16px', fontSize: '13px', color: '#42526E', lineHeight: 1.7, borderTop: '1px solid #F4F5F7' }}>{children}</div>}
    </div>
  )
}

export default function QTBContents({ onNext, onBack }) {
  const [accidentalCover, setAccidentalCover] = useState('$5,000')
  const [hasSpecifiedItems, setHasSpecifiedItems] = useState(false)

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
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, padding: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Optional covers</h2>
          <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '24px', lineHeight: 1.6 }}>Add extra protection to your contents cover.</p>

          {/* Accidental Damage */}
          <div style={{ border: '1px solid #DFE1E6', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
            <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '8px', color: '#172B4D' }}>Accidental Damage Cover</div>
            <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '16px', lineHeight: 1.6 }}>
              Covers accidental damage to your contents caused by sudden and unexpected events — like spilling a drink on a laptop or knocking over a TV.
            </p>
            <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: '#172B4D' }}>Select cover limit:</div>
            {[
              { label: 'No Accidental Damage Cover', price: 'Included', selected: false },
              { label: '$2,000 cover limit', price: '+$2.40/mo', selected: false },
              { label: '$5,000 cover limit', price: '+$4.80/mo', selected: true },
            ].map(opt => {
              const isSelected = accidentalCover === opt.label
              return (
                <div key={opt.label} onClick={() => setAccidentalCover(opt.label)} style={{ border: isSelected ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '8px', padding: '12px 16px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px', background: isSelected ? '#F4F8FF' : '#fff', cursor: 'pointer' }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', flexShrink: 0, border: isSelected ? '5px solid #0052CC' : '2px solid #DFE1E6', background: '#fff' }} />
                  <div style={{ flex: 1, fontWeight: isSelected ? 600 : 400, color: '#172B4D' }}>{opt.label}</div>
                  <div style={{ fontSize: '13px', color: isSelected ? '#0052CC' : '#5E6C84', fontWeight: 600 }}>{opt.price}</div>
                </div>
              )
            })}
          </div>

          {/* Specified items */}
          <div style={{ border: '1px solid #DFE1E6', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#172B4D' }}>Specified valuable items</div>
              <div onClick={() => setHasSpecifiedItems(!hasSpecifiedItems)} style={{ background: hasSpecifiedItems ? '#F4F8FF' : '#fff', border: hasSpecifiedItems ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '4px', padding: '4px 12px', fontSize: '13px', color: hasSpecifiedItems ? '#0052CC' : '#172B4D', fontWeight: 600, cursor: 'pointer' }}>
                {hasSpecifiedItems ? '✓ Added' : 'Add'}
              </div>
            </div>
            <p style={{ fontSize: '13px', color: '#42526E', lineHeight: 1.6 }}>
              Insure high-value items like jewellery, cameras, or musical instruments for their full replacement value.
            </p>
          </div>

          <Accordion title="Key policy information">
            <p>Your contents cover protects your belongings against events like fire, theft, storm, and accidental damage (if selected). Items are covered at their replacement cost, not their depreciated value. Exclusions apply — see the PDS for full details.</p>
          </Accordion>
          <Accordion title="What's covered">
            <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {['Furniture and appliances','Clothing and personal items','Electronics and computers','Jewellery (up to $2,000 per item without specification)','Sporting equipment'].map(i => <li key={i}>{i}</li>)}
            </ul>
          </Accordion>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
            <button onClick={() => onBack?.()} style={{ background: '#fff', color: '#172B4D', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '12px 24px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>← Back</button>
            <button onClick={() => onNext?.()} style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '6px', padding: '12px 32px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>Next →</button>
          </div>
        </div>

        {/* Mascot tip */}
        <div style={{ width: '220px', flexShrink: 0, padding: '32px 20px 32px 0' }}>
          <div style={{ background: '#FFFAE6', border: '1px solid #FFE27D', borderRadius: '12px', padding: '20px', position: 'sticky', top: '16px' }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🐝</div>
            <div style={{ fontWeight: 700, fontSize: '14px', color: '#172B4D', marginBottom: '8px' }}>Tip from RAA</div>
            <p style={{ fontSize: '13px', color: '#42526E', lineHeight: 1.6 }}>The $5,000 Accidental Damage cover is our most popular choice — it covers the most common accidents at home.</p>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}