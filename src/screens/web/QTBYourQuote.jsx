import { useState } from 'react'

const STEPS = ['General information','Your home','Your contents','Policy holders','Your quote']

function StepperNav({ active }) {
  return (
    <div style={{ display: 'flex', background: '#fff', borderBottom: '1px solid #DFE1E6', padding: '0 32px', overflowX: 'auto' }}>
      {STEPS.map((s, i) => {
        const isActive = i === active, isDone = i < active
        return (
          <div key={s} style={{ padding: '12px 16px 10px', fontSize: '12px', fontWeight: 600, color: isActive ? '#0052CC' : isDone ? '#36B37E' : '#8993A4', borderBottom: isActive ? '3px solid #0052CC' : '3px solid transparent', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', flexShrink: 0 }}>
            <span style={{ width: 16, height: 16, borderRadius: '50%', background: isActive ? '#0052CC' : isDone ? '#36B37E' : '#DFE1E6', color: isActive || isDone ? '#fff' : '#8993A4', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{isDone ? '✓' : i+1}</span>
            {s}
          </div>
        )
      })}
    </div>
  )
}

function Toggle({ on, onClick }) {
  return (
    <div onClick={onClick} style={{ width: '44px', height: '24px', borderRadius: '12px', background: on ? '#36B37E' : '#DFE1E6', position: 'relative', cursor: 'pointer', flexShrink: 0, transition: 'background 0.15s' }}>
      <div style={{ position: 'absolute', top: '2px', left: on ? '22px' : '2px', width: '20px', height: '20px', borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', transition: 'left 0.15s' }} />
    </div>
  )
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ border: '1px solid #DFE1E6', borderRadius: '6px', marginBottom: '12px' }}>
      <div onClick={() => setOpen(!open)} style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '14px', fontWeight: 500, userSelect: 'none' }}>
        <span>{title}</span>
        <span style={{ color: '#5E6C84', fontSize: 18 }}>{open ? '−' : '+'}</span>
      </div>
      {open && <div style={{ padding: '0 16px 16px', fontSize: '13px', color: '#42526E', lineHeight: 1.7, borderTop: '1px solid #F4F5F7' }}>{children}</div>}
    </div>
  )
}

export default function QTBYourQuote({ onBack }) {
  const [extras, setExtras] = useState({ homeExcess: false, motorBurnout: true, portableContents: false })
  const basePrice = 127.50
  const motorCost = extras.motorBurnout ? 3.20 : 0
  const homeExcessCost = extras.homeExcess ? 8.50 : 0
  const portableCost = extras.portableContents ? 5.00 : 0
  const totalMonthly = (basePrice + motorCost + homeExcessCost + portableCost).toFixed(2)

  const toggleExtra = (key) => setExtras(prev => ({ ...prev, [key]: !prev[key] }))

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '700px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '60px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 900, color: '#172B4D' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={{ background: '#FFD100', padding: '16px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Step 5 of 5</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D' }}>Your quote</div>
      </div>
      <StepperNav active={4} />

      <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start' }}>
        {/* Left: details */}
        <div style={{ flex: 1, padding: '32px', minWidth: 0 }}>
          {/* Fuel promo banner */}
          <div style={{ background: '#FFFAE6', border: '1px solid #FFE27D', borderRadius: '8px', padding: '16px 20px', marginBottom: '28px', display: 'flex', gap: '14px', alignItems: 'center' }}>
            <span style={{ fontSize: '28px', flexShrink: 0 }}>⛽</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#172B4D' }}>Fuel discount included</div>
              <div style={{ fontSize: '13px', color: '#42526E', marginTop: '2px', lineHeight: 1.5 }}>Save up to 8¢/L at participating BP and Puma service stations — included with your RAA insurance.</div>
            </div>
          </div>

          {/* Cover sections */}
          {[
            { title: 'Home cover', icon: '🏠', items: [['Sum insured', '$500,000'], ['Basic excess', '$1,000'], ['Optional excess reduction', 'Not selected']] },
            { title: 'Contents cover', icon: '📦', items: [['Sum insured', '$65,000'], ['Accidental Damage Cover', '$5,000 ✓'], ['Basic excess', '$500']] },
          ].map(section => (
            <div key={section.title} style={{ border: '1px solid #DFE1E6', borderRadius: '8px', marginBottom: '16px', overflow: 'hidden' }}>
              <div style={{ background: '#F4F5F7', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, fontSize: '15px' }}>
                <span>{section.icon}</span> {section.title}
              </div>
              {section.items.map(([k, v]) => (
                <div key={k} style={{ padding: '13px 20px', borderTop: '1px solid #DFE1E6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#42526E', fontSize: '13px' }}>{k}</span>
                  <span style={{ fontWeight: 500, color: v.includes('✓') ? '#36B37E' : '#172B4D' }}>{v}</span>
                </div>
              ))}
            </div>
          ))}

          {/* Optional extras */}
          <div style={{ border: '1px solid #DFE1E6', borderRadius: '8px', marginBottom: '28px', overflow: 'hidden' }}>
            <div style={{ background: '#F4F5F7', padding: '14px 20px', fontWeight: 700, fontSize: '15px' }}>Optional extras</div>
            {[
              { key: 'homeExcess', name: 'Home excess reduction', desc: 'Reduce your home excess from $1,000 to $500', price: '+$8.50/mo' },
              { key: 'motorBurnout', name: 'Motor burnout cover', desc: 'Covers the cost of burnt-out motors on appliances', price: '+$3.20/mo' },
              { key: 'portableContents', name: 'Portable contents cover', desc: 'Cover items away from home, like your laptop or phone', price: '+$5.00/mo' },
            ].map(item => (
              <div key={item.key} style={{ padding: '16px 20px', borderTop: '1px solid #DFE1E6', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: '#172B4D' }}>{item.name}</div>
                  <div style={{ fontSize: '12px', color: '#5E6C84', marginTop: '2px' }}>{item.desc}</div>
                  <div style={{ fontSize: '13px', color: '#0052CC', marginTop: '4px', fontWeight: 600 }}>{item.price}</div>
                </div>
                <Toggle on={extras[item.key]} onClick={() => toggleExtra(item.key)} />
              </div>
            ))}
          </div>

          {/* What's included */}
          <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '16px' }}>What's included as standard</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '28px' }}>
            {['Storm and hail','Theft and burglary','Fire and explosion','Flood cover','Legal liability','Temporary accommodation','Accidental glass breakage','Fusion of motors'].map(item => (
              <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: '#172B4D' }}>
                <span style={{ color: '#36B37E', fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Accordion title="What you've told us">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[['Address','23 Morialta Road, Burnside SA 5066'],['Cover type','Home and Contents'],['Building type','House'],['Wall material','Brick'],['Year built','1985'],['Occupancy','Primary residence'],['Security alarm','No'],['Policy holder','John Smith']].map(([k,v]) => (
                <div key={k} style={{ padding: '8px 0' }}>
                  <div style={{ fontSize: '11px', color: '#5E6C84', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>{k}</div>
                  <div style={{ fontSize: '13px', color: '#172B4D', fontWeight: 500 }}>{v}</div>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Email quote */}
          <div style={{ background: '#F4F5F7', borderRadius: '8px', padding: '20px', marginTop: '24px' }}>
            <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '6px' }}>Save this quote</div>
            <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '14px', lineHeight: 1.5 }}>We'll email your quote so you can come back to it later.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input type="email" defaultValue="john.smith@email.com" style={{ flex: 1, padding: '11px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px', fontFamily: 'Inter, sans-serif' }} readOnly />
              <button style={{ background: '#fff', border: '1px solid #0052CC', color: '#0052CC', borderRadius: '4px', padding: '11px 16px', fontWeight: 600, fontSize: '13px', cursor: 'pointer', whiteSpace: 'nowrap' }}>Send quote</button>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <button onClick={() => onBack?.()} style={{ background: '#fff', color: '#172B4D', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '12px 24px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>← Back</button>
          </div>
        </div>

        {/* Right: sticky price card */}
        <div style={{ width: '288px', flexShrink: 0, padding: '32px 32px 32px 0' }}>
          <div style={{ border: '2px solid #FFD100', borderRadius: '12px', overflow: 'hidden', position: 'sticky', top: '16px' }}>
            <div style={{ background: '#FFD100', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Your premium</div>
              <div style={{ fontSize: '40px', fontWeight: 800, color: '#172B4D', lineHeight: 1 }}>${totalMonthly.split('.')[0]}<span style={{ fontSize: '22px' }}>.{totalMonthly.split('.')[1]}</span></div>
              <div style={{ fontSize: '13px', color: '#42526E', marginTop: '4px' }}>per month</div>
              <div style={{ fontSize: '12px', color: '#5E6C84', marginTop: '6px' }}>10% RAA member discount applied</div>
            </div>
            <div style={{ padding: '20px', background: '#fff' }}>
              <button style={{ width: '100%', background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '6px', padding: '14px', fontWeight: 700, fontSize: '16px', cursor: 'pointer', marginBottom: '10px' }}>
                Buy now
              </button>
              <button style={{ width: '100%', background: '#fff', color: '#172B4D', border: '1px solid #DFE1E6', borderRadius: '6px', padding: '12px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
                Save quote
              </button>
              <div style={{ fontSize: '12px', color: '#5E6C84', textAlign: 'center', marginTop: '14px', lineHeight: 1.5 }}>
                Quote valid until 4 July 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
