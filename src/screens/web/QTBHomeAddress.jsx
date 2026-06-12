const STEPS = ['General information','Your home','Your contents','Policy holders','Your quote']

function StepperNav({ active }) {
  return (
    <div style={{ display: 'flex', background: '#fff', borderBottom: '1px solid #DFE1E6', padding: '0 32px', overflowX: 'auto', scrollbarWidth: 'none' }}>
      {STEPS.map((s, i) => {
        const isActive = i === active
        const isDone = i < active
        return (
          <div key={s} style={{ padding: '12px 16px 10px', fontSize: '12px', fontWeight: 600, color: isActive ? '#0052CC' : isDone ? '#36B37E' : '#8993A4', borderBottom: isActive ? '3px solid #0052CC' : '3px solid transparent', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', flexShrink: 0 }}>
            <span style={{ width: 22, height: 22, borderRadius: '50%', background: isActive ? '#0052CC' : isDone ? '#36B37E' : '#DFE1E6', color: isActive || isDone ? '#fff' : '#8993A4', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {isDone ? '✓' : i + 1}
            </span>
            {s}
          </div>
        )
      })}
    </div>
  )
}

export default function QTBHomeAddress({ onNext, onBack }) {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '600px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ minWidth: '48px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 12px', fontSize: '12px', fontWeight: 900, color: '#172B4D', letterSpacing: '0.08em', letterSpacing: '0.05em' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={{ background: '#FFD100', padding: '16px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Step 1 of 5</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D' }}>General information</div>
      </div>
      <StepperNav active={0} />
      <div style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#172B4D' }}>What is the address of the home you want to insure?</h2>
        <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '28px', lineHeight: 1.6 }}>Start typing your address and select it from the list.</p>

        <label style={{ fontSize: '13px', fontWeight: 600, color: '#172B4D', display: 'block', marginBottom: '6px' }}>Home address</label>
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <input
            type="text"
            defaultValue="23 Morialta Road, Burnside SA 5066"
            style={{ width: '100%', padding: '11px 14px', border: '2px solid #0052CC', borderRadius: '4px', fontSize: '14px', color: '#172B4D', outline: 'none', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif' }}
            readOnly
          />
        </div>

        <div style={{ background: '#E3FCEF', border: '1px solid #ABF5D1', borderRadius: '8px', padding: '16px 20px', marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#36B37E', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0, fontWeight: 700 }}>✓</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '14px', color: '#172B4D', marginBottom: '4px' }}>Address confirmed</div>
            <div style={{ fontSize: '13px', color: '#172B4D', marginBottom: '2px' }}>23 Morialta Road, Burnside SA 5066</div>
            <div style={{ fontSize: '12px', color: '#36B37E', fontWeight: 500 }}>This property is eligible for cover</div>
          </div>
        </div>

        <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: '13px', color: '#0052CC', display: 'block', marginBottom: '36px', textDecoration: 'none' }}>
          Can't find your address? Get help →
        </a>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => onBack?.()} style={{ background: '#fff', color: '#172B4D', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '12px 24px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
            ← Back
          </button>
          <button onClick={() => onNext?.()} style={{ background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '6px', padding: '12px 32px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
