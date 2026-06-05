import { useState } from 'react'

const STEPS = ['General information','Your home','Your contents','Policy holders','Your quote']

function StepperNav({ active }) {
  return (
    <div style={{ display: 'flex', background: '#fff', borderBottom: '1px solid #DFE1E6', padding: '0 32px', overflowX: 'auto' }}>
      {STEPS.map((s, i) => {
        const isActive = i === active
        const isDone = i < active
        return (
          <div key={s} style={{ padding: '12px 16px 10px', fontSize: '12px', fontWeight: 600, color: isActive ? '#0052CC' : isDone ? '#36B37E' : '#8993A4', borderBottom: isActive ? '3px solid #0052CC' : '3px solid transparent', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', flexShrink: 0 }}>
            <span style={{ width: 16, height: 16, borderRadius: '50%', background: isActive ? '#0052CC' : isDone ? '#36B37E' : '#DFE1E6', color: isActive || isDone ? '#fff' : '#8993A4', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {isDone ? '✓' : i + 1}
            </span>
            {s}
          </div>
        )
      })}
    </div>
  )
}

function RadioCard({ label, desc, selected, onClick }) {
  return (
    <div onClick={onClick} style={{ border: selected ? '2px solid #0052CC' : '1px solid #DFE1E6', borderRadius: '8px', padding: '16px 20px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer', background: selected ? '#F4F8FF' : '#fff', transition: 'border-color 0.1s' }}>
      <div style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, border: selected ? '6px solid #0052CC' : '2px solid #DFE1E6', background: '#fff', transition: 'border 0.1s' }} />
      <div>
        <div style={{ fontWeight: 600, fontSize: 14, color: '#172B4D' }}>{label}</div>
        {desc && <div style={{ fontSize: 13, color: '#42526E', marginTop: 2 }}>{desc}</div>}
      </div>
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
      {open && (
        <div style={{ padding: '0 16px 16px', fontSize: '13px', color: '#42526E', lineHeight: 1.7, borderTop: '1px solid #F4F5F7' }}>
          {children}
        </div>
      )}
    </div>
  )
}

export default function QTBGeneralInfo({ onNext }) {
  const [coverType, setCoverType] = useState('Home and Contents')
  const [agreed, setAgreed] = useState(true)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '600px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '60px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 900, color: '#172B4D', letterSpacing: '0.05em' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={{ background: '#FFD100', padding: '16px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Step 1 of 5</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D' }}>General information</div>
      </div>
      <StepperNav active={0} />
      <div style={{ padding: '32px' }}>
        <Accordion title="Our duty of care to you">
          <p>We are required to inform you that this is a general advice product only and does not take into account your individual objectives, financial situation or needs. Before making a decision, you should consider whether the product is appropriate for you and read the Product Disclosure Statement (PDS).</p>
        </Accordion>
        <Accordion title="Privacy notice">
          <p>RAA collects your personal information to process your application and provide insurance services. Your information may be shared with third parties as outlined in our Privacy Policy. You have the right to access and correct your personal information.</p>
        </Accordion>

        <div onClick={() => setAgreed(!agreed)} style={{ background: '#F4F5F7', border: agreed ? '1px solid #ABF5D1' : '1px solid #DFE1E6', borderRadius: '6px', padding: '14px 16px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
          <div style={{ width: 18, height: 18, borderRadius: '4px', background: agreed ? '#36B37E' : '#fff', border: agreed ? 'none' : '2px solid #C1C7D0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            {agreed && <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>✓</span>}
          </div>
          <span style={{ fontSize: '13px', color: '#172B4D', lineHeight: 1.5 }}>I confirm I have read and understood the duty of care and privacy notice</span>
        </div>

        <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: '14px', color: '#0052CC', marginBottom: '28px', display: 'block', textDecoration: 'none' }}>
          Already have an account? Log in to pre-fill your details →
        </a>

        <div style={{ fontSize: '13px', fontWeight: 700, color: '#5E6C84', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', marginTop: '4px' }}>
          What would you like to cover?
        </div>

        {[
          { label: 'Home and Contents', desc: 'Cover for your building and belongings' },
          { label: 'Home only', desc: 'Building structure only, no contents cover' },
          { label: 'Contents only', desc: 'Belongings only, no building cover' },
        ].map(opt => (
          <RadioCard key={opt.label} label={opt.label} desc={opt.desc} selected={coverType === opt.label} onClick={() => setCoverType(opt.label)} />
        ))}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '28px' }}>
          <button onClick={() => onNext?.()} style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '12px 32px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
