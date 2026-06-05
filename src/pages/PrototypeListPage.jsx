import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
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

export default function PrototypeListPage() {
  const { id } = useParams()
  const [sortField, setSortField] = useState('lastUpdated')
  const [sortDir, setSortDir] = useState('desc')
  const [filterStatus, setFilterStatus] = useState('all')

  const category = prototypes.categories.find(c => c.id === id)
  const items = prototypes.prototypes.filter(p => p.category === id)

  if (!category) {
    return (
      <div className="content-inner">
        <h1>Category not found</h1>
        <Link to="/" style={{ color: '#0052CC' }}>← Back to home</Link>
      </div>
    )
  }

  const statuses = ['all', ...new Set(items.map(p => p.status))]

  let displayed = filterStatus === 'all' ? items : items.filter(p => p.status === filterStatus)
  displayed = [...displayed].sort((a, b) => {
    const aVal = sortField === 'name' ? a.name : a.lastUpdated
    const bVal = sortField === 'name' ? b.name : b.lastUpdated
    const cmp = aVal.localeCompare(bVal)
    return sortDir === 'asc' ? cmp : -cmp
  })

  function toggleSort(field) {
    if (sortField === field) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDir('asc')
    }
  }

  function SortIcon({ field }) {
    if (sortField !== field) return <span style={{ color: '#C1C7D0', marginLeft: '4px' }}>↕</span>
    return <span style={{ color: category.color, marginLeft: '4px' }}>{sortDir === 'asc' ? '↑' : '↓'}</span>
  }

  return (
    <div className="content-inner" style={{ maxWidth: '1000px' }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: '13px', color: '#5E6C84', marginBottom: '24px', display: 'flex', gap: '6px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#5E6C84', textDecoration: 'none' }}>Home</Link>
        <span>›</span>
        <span style={{ color: '#172B4D', fontWeight: 500 }}>{category.name}</span>
      </div>

      {/* Heading */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: category.color, display: 'inline-block' }} />
          <h1 style={{ margin: 0 }}>{category.name} Prototypes</h1>
        </div>
        <p style={{ fontSize: '15px', color: '#42526E', margin: 0 }}>{category.description}</p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: '#5E6C84', fontWeight: 600 }}>Filter:</span>
        {statuses.map(s => (
          <button
            key={s}
            onClick={() => setFilterStatus(s)}
            style={{
              fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '4px',
              border: filterStatus === s ? `1px solid ${category.color}` : '1px solid #DFE1E6',
              background: filterStatus === s ? category.color : '#F4F5F7',
              color: filterStatus === s ? '#fff' : '#42526E',
              cursor: 'pointer',
            }}
          >
            {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
        <span style={{ fontSize: '12px', color: '#5E6C84', marginLeft: '8px' }}>{displayed.length} prototype{displayed.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Table */}
      <div style={{ border: '1px solid #DFE1E6', borderRadius: '8px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: '#F4F5F7', borderBottom: '1px solid #DFE1E6' }}>
              <th
                onClick={() => toggleSort('name')}
                style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, color: '#42526E', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }}
              >
                Name <SortIcon field="name" />
              </th>
              <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, color: '#42526E', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Status
              </th>
              <th
                onClick={() => toggleSort('lastUpdated')}
                style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, color: '#42526E', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }}
              >
                Last Updated <SortIcon field="lastUpdated" />
              </th>
              <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, color: '#42526E', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Screens
              </th>
              <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, color: '#42526E', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {displayed.length === 0 && (
              <tr>
                <td colSpan={5} style={{ padding: '32px', textAlign: 'center', color: '#8993A4' }}>No prototypes match this filter.</td>
              </tr>
            )}
            {displayed.map((proto, i) => {
              const firstScreen = [...proto.screens].sort((a, b) => a.order - b.order)[0]
              const presentUrl = firstScreen ? `${import.meta.env.BASE_URL}present${firstScreen.route}` : null
              return (
                <tr key={proto.id} style={{ borderBottom: i < displayed.length - 1 ? '1px solid #DFE1E6' : 'none', background: '#fff' }}>
                  <td style={{ padding: '14px 16px' }}>
                    <Link to={`/prototypes/${proto.id}`} style={{ fontWeight: 600, color: '#172B4D', textDecoration: 'none' }}>
                      {proto.name}
                    </Link>
                    {proto.description && (
                      <div style={{ fontSize: '12px', color: '#5E6C84', marginTop: '2px', maxWidth: '360px' }}>{proto.description}</div>
                    )}
                  </td>
                  <td style={{ padding: '14px 16px' }}><StatusBadge status={proto.status} /></td>
                  <td style={{ padding: '14px 16px', color: '#42526E', whiteSpace: 'nowrap' }}>{formatDate(proto.lastUpdated)}</td>
                  <td style={{ padding: '14px 16px', color: '#42526E' }}>{proto.screens.length}</td>
                  <td style={{ padding: '14px 16px' }}>
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
  )
}
