import { useParams, Link } from 'react-router-dom'
import prototypes from '../../data/prototypes.json'

const DESIGN_SYSTEM_BASE = 'https://asmithdigital.github.io/design-system-site/components/'

function componentSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-')
}

function formatDate(iso) {
  const [year, month] = iso.split('-')
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return `${months[parseInt(month, 10) - 1]} ${year}`
}

function StatusBadge({ status }) {
  const styles = {
    production: { bg: '#E3FCEF', color: '#006644' },
    prototype:  { bg: '#DEEBFF', color: '#0052CC' },
    archived:   { bg: '#F4F5F7', color: '#5E6C84' },
  }
  const s = styles[status] || styles.archived
  return (
    <span style={{ fontSize: '11px', fontWeight: 600, background: s.bg, color: s.color, padding: '3px 8px', borderRadius: '10px', whiteSpace: 'nowrap' }}>
      ● {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

export default function PrototypeDetailPage() {
  const { id } = useParams()
  const proto = prototypes.prototypes.find(p => p.id === id)

  if (!proto) {
    return (
      <div className="content-inner">
        <h1>Prototype not found</h1>
        <Link to="/" style={{ color: '#0052CC' }}>← Back to home</Link>
      </div>
    )
  }

  const category = prototypes.categories.find(c => c.id === proto.category)
  const orderedScreens = [...proto.screens].sort((a, b) => a.order - b.order)
  const firstScreen = orderedScreens[0]
  const presentAllUrl = firstScreen ? `${import.meta.env.BASE_URL}present${firstScreen.route}` : null

  return (
    <div className="content-inner" style={{ maxWidth: '1100px' }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: '13px', color: '#5E6C84', marginBottom: '24px', display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link to="/" style={{ color: '#5E6C84', textDecoration: 'none' }}>Home</Link>
        <span>›</span>
        {category && (
          <>
            <Link to={`/prototypes/${category.id}`} style={{ color: '#5E6C84', textDecoration: 'none' }}>{category.name}</Link>
            <span>›</span>
          </>
        )}
        <span style={{ color: '#172B4D', fontWeight: 500 }}>{proto.name}</span>
      </div>

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '260px' }}>
          <h1 style={{ marginBottom: '12px', fontSize: '28px' }}>{proto.name}</h1>
          {/* Metadata row */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '16px' }}>
            {category && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: category.color, fontWeight: 600, background: `${category.color}18`, padding: '3px 10px', borderRadius: '10px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: category.color, display: 'inline-block' }} />
                {category.name}
              </span>
            )}
            <StatusBadge status={proto.status} />
            <span style={{ fontSize: '12px', color: '#5E6C84' }}>Updated {formatDate(proto.lastUpdated)}</span>
            {proto.figmaSource && (
              <a href={proto.figmaSource} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: '#0052CC', fontWeight: 500 }}>
                Figma ↗
              </a>
            )}
            {proto.liveUrl && (
              <a href={proto.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: '#0052CC', fontWeight: 500 }}>
                Live site ↗
              </a>
            )}
          </div>
          <p style={{ fontSize: '14px', color: '#42526E', lineHeight: 1.7, margin: 0, maxWidth: '620px' }}>{proto.description}</p>
        </div>

        {presentAllUrl && (
          <a
            href={presentAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#172B4D', color: '#FFD100',
              padding: '11px 20px', borderRadius: '6px',
              fontWeight: 700, fontSize: '14px', textDecoration: 'none',
              flexShrink: 0, whiteSpace: 'nowrap',
            }}
          >
            ▶ Present all screens
          </a>
        )}
      </div>

      <div style={{ borderTop: '1px solid #DFE1E6', marginBottom: '32px' }} />

      {/* Screen grid */}
      <h2 style={{ marginBottom: '20px' }}>{orderedScreens.length} Screen{orderedScreens.length !== 1 ? 's' : ''}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {orderedScreens.map((screen) => {
          const presentUrl = `${import.meta.env.BASE_URL}present${screen.route}`
          return (
            <div
              key={screen.id}
              style={{ border: '1px solid #DFE1E6', borderRadius: '8px', background: '#fff', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
            >
              {/* Card header */}
              <div style={{ padding: '16px 18px 12px', borderBottom: '1px solid #F4F5F7', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#8993A4', background: '#F4F5F7', padding: '2px 7px', borderRadius: '4px' }}>
                      #{screen.order}
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#172B4D' }}>{screen.name}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#5E6C84', lineHeight: 1.5, margin: 0 }}>{screen.description}</p>
                </div>
              </div>

              {/* Components */}
              {screen.components && screen.components.length > 0 && (
                <div style={{ padding: '10px 18px 12px', borderBottom: '1px solid #F4F5F7' }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#8993A4', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '6px' }}>Components</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {screen.components.map(c => (
                      <a
                        key={c}
                        href={`${DESIGN_SYSTEM_BASE}${componentSlug(c)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '11px', background: '#F4F5F7', color: '#42526E',
                          padding: '2px 8px', borderRadius: '4px', border: '1px solid #DFE1E6',
                          textDecoration: 'none', fontFamily: 'monospace',
                        }}
                        title={`View ${c} in Apiary design system`}
                      >
                        {c}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div style={{ padding: '12px 18px', display: 'flex', gap: '8px', marginTop: 'auto' }}>
                <Link
                  to={screen.route}
                  style={{
                    flex: 1, textAlign: 'center', fontSize: '12px', fontWeight: 600,
                    padding: '7px 12px', borderRadius: '4px', background: '#F4F5F7',
                    color: '#172B4D', textDecoration: 'none', border: '1px solid #DFE1E6',
                  }}
                >
                  View
                </Link>
                <a
                  href={presentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1, textAlign: 'center', fontSize: '12px', fontWeight: 700,
                    padding: '7px 12px', borderRadius: '4px', background: '#172B4D',
                    color: '#FFD100', textDecoration: 'none',
                  }}
                >
                  ▶ Present
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
