const steps = ['General information','Your home','Your contents','Policy holders','Your quote']

function Toggle({ on }) {
  return (
    <div style={{ width: '44px', height: '24px', borderRadius: '12px', background: on ? '#36B37E' : '#DFE1E6', position: 'relative', cursor: 'pointer', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: '2px', left: on ? '22px' : '2px', width: '20px', height: '20px', borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', transition: 'left 0.15s' }} />
    </div>
  )
}

export default function QTBYourQuote() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '700px', fontSize: '14px', color: '#172B4D' }}>
      <div style={{ background: '#172B4D', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '60px', height: '28px', background: '#FFD100', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#172B4D' }}>RAA</div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Home insurance quote</span>
      </div>
      <div style={{ background: '#FFD100', padding: '16px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Step 5 of 5</div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#172B4D' }}>Your quote</div>
      </div>
      <div style={{ display: 'flex', background: '#fff', borderBottom: '1px solid #DFE1E6', padding: '0 32px', overflowX: 'auto' }}>
        {steps.map((step, i) => (
          <div key={step} style={{ padding: '12px 16px 10px', fontSize: '12px', fontWeight: 600, color: i === 4 ? '#0052CC' : '#36B37E', borderBottom: i === 4 ? '3px solid #0052CC' : '3px solid transparent', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
            <span style={{ width: 16, height: 16, borderRadius: '50%', background: i === 4 ? '#0052CC' : '#36B37E', color: '#fff', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i === 4 ? '5' : '✓'}</span>
            {step}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start' }}>
        {/* Left: details */}
        <div style={{ flex: 1, padding: '32px', minWidth: 0 }}>

          {/* Promo banner */}
          <div style={{ background: '#FFFAE6', border: '1px solid #FFD100', borderRadius: '8px', padding: '14px 20px', marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '24px' }}>⛽</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px' }}>Fuel discount included</div>
              <div style={{ fontSize: '13px', color: '#42526E' }}>Save up to 8¢/L at participating BP and Puma service stations — included with your RAA insurance.</div>
            </div>
          </div>

          {/* Cover sections */}
          {[
            { title: 'Home cover', icon: '🏠', items: [['Sum insured', '$500,000'], ['Basic excess', '$1,000'], ['Optional excess reduction', 'Not selected']] },
            { title: 'Contents cover', icon: '📦', items: [['Sum insured', '$65,000'], ['Accidental Damage Cover', '$5,000 ✓'], ['Basic excess', '$500']] },
          ].map(section => (
            <div key={section.title} style={{ border: '1px solid #DFE1E6', borderRadius: '8px', marginBottom: '16px', overflow: 'hidden' }}>
              <div style={{ background: '#F4F5F7', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700 }}>
                <span>{section.icon}</span> {section.title}
              </div>
              {section.items.map(([k, v]) => (
                <div key={k} style={{ padding: '12px 20px', borderTop: '1px solid #DFE1E6', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#42526E' }}>{k}</span>
                  <span style={{ fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          ))}

          {/* Optional add-ons */}
          <div style={{ border: '1px solid #DFE1E6', borderRadius: '8px', marginBottom: '24px', overflow: 'hidden' }}>
            <div style={{ background: '#F4F5F7', padding: '14px 20px', fontWeight: 700 }}>Optional extras</div>
            {[
              { name: 'Home excess reduction', price: '+$8.50/mo', on: false },
              { name: 'Motor burnout cover', price: '+$3.20/mo', on: true },
              { name: 'Portable contents cover', price: '+$5.00/mo', on: false },
            ].map(item => (
              <div key={item.name} style={{ padding: '14px 20px', borderTop: '1px solid #DFE1E6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 500 }}>{item.name}</div>
                  <div style={{ fontSize: '12px', color: '#0052CC', marginTop: '2px' }}>{item.price}</div>
                </div>
                <Toggle on={item.on} />
              </div>
            ))}
          </div>

          {/* What's included grid */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '16px' }}>What's included as standard</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {['Storm and hail', 'Theft and burglary', 'Fire and explosion', 'Flood cover', 'Legal liability', 'Temporary accommodation', 'Accidental glass breakage', 'Fusion of motors'].map(item => (
                <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px' }}>
                  <span style={{ color: '#36B37E', fontWeight: 700 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accordion */}
          <div style={{ border: '1px solid #DFE1E6', borderRadius: '6px', marginBottom: '12px' }}>
            <div style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', fontWeight: 500, cursor: 'pointer' }}>
              <span>What you've told us</span><span style={{ color: '#5E6C84' }}>+</span>
            </div>
          </div>

          {/* Email quote */}
          <div style={{ background: '#F4F5F7', borderRadius: '8px', padding: '20px', marginTop: '24px' }}>
            <div style={{ fontWeight: 600, marginBottom: '8px' }}>Save this quote</div>
            <p style={{ fontSize: '13px', color: '#42526E', marginBottom: '12px' }}>We'll email your quote so you can come back to it later.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input type="email" defaultValue="john.smith@email.com" style={{ flex: 1, padding: '10px 14px', border: '1px solid #DFE1E6', borderRadius: '4px', fontSize: '14px' }} readOnly />
              <button style={{ background: '#fff', border: '1px solid #0052CC', color: '#0052CC', borderRadius: '4px', padding: '10px 16px', fontWeight: 600, fontSize: '13px', cursor: 'pointer', whiteSpace: 'nowrap' }}>Send quote</button>
            </div>
          </div>
        </div>

        {/* Right: sticky price card */}
        <div style={{ width: '280px', flexShrink: 0, padding: '32px 32px 32px 0' }}>
          <div style={{ border: '2px solid #FFD100', borderRadius: '12px', overflow: 'hidden', position: 'sticky', top: '16px' }}>
            <div style={{ background: '#FFD100', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#172B4D', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Your premium</div>
              <div style={{ fontSize: '36px', fontWeight: 700, color: '#172B4D' }}>$127<span style={{ fontSize: '20px' }}>.50</span></div>
              <div style={{ fontSize: '13px', color: '#42526E' }}>per month</div>
              <div style={{ fontSize: '12px', color: '#5E6C84', marginTop: '4px' }}>$1,365 / year · 10% RAA discount applied</div>
            </div>
            <div style={{ padding: '20px', background: '#fff' }}>
              <button style={{ width: '100%', background: '#FFD100', color: '#172B4D', border: 'none', borderRadius: '4px', padding: '14px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', marginBottom: '10px' }}>
                Buy now
              </button>
              <button style={{ width: '100%', background: '#fff', color: '#172B4D', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '12px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
                Save quote
              </button>
              <div style={{ fontSize: '12px', color: '#5E6C84', textAlign: 'center', marginTop: '12px' }}>
                Quote valid until 4 July 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
