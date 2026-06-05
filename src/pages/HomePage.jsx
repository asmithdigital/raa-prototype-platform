import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import prototypes from '../../data/prototypes.json'

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

export default function HomePage() {
  const navigate = useNavigate()
  const categoryRefs = useRef({})

  const categoryMap = Object.fromEntries(prototypes.categories.map(c => [c.id, c]))

  const sorted = [...prototypes.prototypes].sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated))

  const totalScreens = prototypes.prototypes.reduce((n, p) => n + p.screens.length, 0)

  function scrollToCategory(id) {
    const el = categoryRefs.current[id]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="content-inner" style={{ maxWidth: '1100px' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ marginBottom: '10px', fontSize: '30px' }}>RAA Prototype Platform</h1>
        <p style={{ fontSize: '16px', color: '#42526E', lineHeight: 1.7, maxWidth: '600px', marginBottom: '24px' }}>
          Browse and present real-looking prototypes of RAA products. Built to replace Axure.
        </p>

        {/* Category pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {prototypes.categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: '#F4F5F7', border: '1px solid #DFE1E6',
                borderRadius: '20px', padding: '6px 14px',
                fontSize: '13px', fontWeight: 600, color: '#172B4D',
                cursor: 'pointer',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: cat.color, display: 'inline-block' }} />
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {[
          { label: 'Total screens', value: totalScreens },
          { label: 'Prototypes', value: prototypes.prototypes.length },
          { label: 'Last updated', value: formatDate(prototypes.meta.lastUpdated) },
        ].map(stat => (
          <div key={stat.label} style={{ background: '#F4F5F7', borderRadius: '8px', padding: '18px 24px', flex: '1', minWidth: '140px' }}>
            <div style={{ fontSize: '11px', color: '#5E6C84', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: '26px', fontWeight: 700, color: '#172B4D', lineHeight: 1 }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* All prototypes table */}
      <div style={{ marginBottom: '56px' }}>
        <h2 style={{ marginBottom: '16px' }}>Latest Prototypes</h2>
        <div style={{ border: '1px solid #DFE1E6', borderRadius: '8px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#F4F5F7', borderBottom: '1px solid #DFE1E6' }}>
                {['Name', 'Product', 'Status', 'Last Updated', 'Screens', 'Actions'].map(col => (
                  <th key={col} style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, color: '#42526E', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((proto, i) => {
                const cat = categoryMap[proto.category]
                const firstScreen = [...proto.screens].sort((a, b) => a.order - b.order)[0]
                const presentUrl = firstScreen ? `${import.meta.env.BASE_URL}present${firstScreen.route}` : null
                return (
                  <tr key={proto.id} style={{ borderBottom: i < sorted.length - 1 ? '1px solid #DFE1E6' : 'none', background: '#fff' }}>
                    <td style={{ padding: '12px 16px' }}>
                      <Link to={`/prototypes/${proto.id}`} style={{ fontWeight: 600, color: '#172B4D', textDecoration: 'none' }}>
                        {proto.name}
                      </Link>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      {cat && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: cat.color, fontWeight: 600 }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.color, display: 'inline-block' }} />
                          {cat.name}
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <StatusBadge status={proto.status} />
                    </td>
                    <td style={{ padding: '12px 16px', color: '#42526E', whiteSpace: 'nowrap' }}>
                      {formatDate(proto.lastUpdated)}
                    </td>
                    <td style={{ padding: '12px 16px', color: '#42526E' }}>
                      {proto.screens.length}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <Link
                          to={`/prototypes/${proto.id}`}
                          style={{ fontSize: '12px', fontWeight: 600, padding: '5px 12px', borderRadius: '4px', background: '#F4F5F7', color: '#172B4D', textDecoration: 'none', border: '1px solid #DFE1E6', whiteSpace: 'nowrap' }}
                        >
                          Browse
                        </Link>
                        {presentUrl && (
                          <a
                            href={presentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '12px', fontWeight: 700, padding: '5px 12px', borderRadius: '4px', background: '#172B4D', color: '#FFD100', textDecoration: 'none', whiteSpace: 'nowrap' }}
                          >
                            ▶ Present
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Category sections */}
      {prototypes.categories.map(cat => {
        const items = prototypes.prototypes.filter(p => p.category === cat.id)
        return (
          <div
            key={cat.id}
            ref={el => { categoryRefs.current[cat.id] = el }}
            style={{ marginBottom: '48px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: cat.color, display: 'inline-block' }} />
              <h2 style={{ margin: 0 }}>{cat.name}</h2>
              <span style={{ fontSize: '12px', color: '#5E6C84', fontWeight: 500 }}>{cat.description}</span>
            </div>

            {items.length === 0 ? (
              <div style={{ border: '1px dashed #DFE1E6', borderRadius: '8px', padding: '32px', textAlign: 'center', color: '#8993A4', fontSize: '14px' }}>
                No prototypes in this category yet.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {items.map(proto => {
                  const firstScreen = [...proto.screens].sort((a, b) => a.order - b.order)[0]
                  const presentUrl = firstScreen ? `${import.meta.env.BASE_URL}present${firstScreen.route}` : null
                  return (
                    <div key={proto.id} style={{ border: '1px solid #DFE1E6', borderRadius: '8px', background: '#fff', display: 'flex', overflow: 'hidden' }}>
                      <div style={{ width: '4px', background: cat.color, flexShrink: 0 }} />
                      <div style={{ padding: '20px 24px', flex: 1, display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                            <Link to={`/prototypes/${proto.id}`} style={{ fontSize: '15px', fontWeight: 700, color: '#172B4D', textDecoration: 'none' }}>
                              {proto.name}
                            </Link>
                            <StatusBadge status={proto.status} />
                          </div>
                          <div style={{ fontSize: '13px', color: '#42526E', lineHeight: 1.5 }}>{proto.description}</div>
                          <div style={{ fontSize: '12px', color: '#5E6C84', marginTop: '4px' }}>{proto.screens.length} screens · Updated {formatDate(proto.lastUpdated)}</div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                          <Link
                            to={`/prototypes/${proto.id}`}
                            style={{ fontSize: '13px', fontWeight: 600, padding: '8px 16px', borderRadius: '4px', background: '#F4F5F7', color: '#172B4D', textDecoration: 'none', border: '1px solid #DFE1E6', whiteSpace: 'nowrap' }}
                          >
                            Browse
                          </Link>
                          {presentUrl && (
                            <a
                              href={presentUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ fontSize: '13px', fontWeight: 700, padding: '8px 16px', borderRadius: '4px', background: '#172B4D', color: '#FFD100', textDecoration: 'none', whiteSpace: 'nowrap' }}
                            >
                              ▶ Present
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}

      {/* Connected platforms */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '1px solid #DFE1E6', borderRadius: '8px', overflow: 'hidden', marginBottom: '48px' }}>
        {[
          {
            icon: '🧬',
            title: 'Design System',
            subtitle: 'Component specs and tokens',
            link: 'https://asmithdigital.github.io/design-system-site/',
            isCurrent: false,
            comingSoon: false,
          },
          {
            icon: '🖼️',
            title: 'Prototype Platform',
            subtitle: 'Visual source of truth',
            link: null,
            isCurrent: true,
            comingSoon: false,
          },
          {
            icon: '📊',
            title: 'Journey Management',
            subtitle: 'Experience data and insights',
            link: 'https://asmithdigital.github.io/journey-management-site/',
            isCurrent: false,
            comingSoon: false,
          },
        ].map((item, i) => (
          <div key={i} style={{
            padding: '28px 24px',
            borderLeft: i > 0 ? '1px solid #DFE1E6' : 'none',
            background: item.isCurrent ? '#FFFAE6' : '#ffffff',
            borderTop: item.isCurrent ? '3px solid #FFD100' : '3px solid transparent',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#172B4D', marginBottom: '6px' }}>{item.title}</div>
            <div style={{ fontSize: '13px', color: '#42526E', marginBottom: '12px' }}>{item.subtitle}</div>
            {item.isCurrent && (
              <div style={{ fontSize: '11px', background: '#FFD100', color: '#172B4D', padding: '3px 8px', borderRadius: '4px', display: 'inline-block', fontWeight: 600 }}>
                YOU ARE HERE
              </div>
            )}
            {item.link && !item.isCurrent && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: '#0052CC', fontWeight: 500 }}>
                Open ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
