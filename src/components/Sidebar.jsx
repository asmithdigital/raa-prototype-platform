import { NavLink, useLocation } from 'react-router-dom'
import prototypes from '../../data/prototypes.json'

const sectionHeader = {
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#5E6C84',
  padding: '20px 16px 6px',
}

const navLinkStyle = (isActive) => ({
  display: 'block',
  fontSize: '13px',
  color: isActive ? '#0052CC' : '#172B4D',
  padding: '7px 16px',
  background: isActive ? '#DEEBFF' : 'transparent',
  borderLeft: isActive ? '3px solid #0052CC' : '3px solid transparent',
  textDecoration: 'none',
  lineHeight: '1.4',
})

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation()

  const categoryMap = Object.fromEntries(prototypes.categories.map(c => [c.id, c]))
  const byCategory = prototypes.categories.map(cat => ({
    category: cat,
    items: prototypes.prototypes.filter(p => p.category === cat.id),
  }))

  return (
    <nav className={`sidebar${isOpen ? ' open' : ''}`} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div style={sectionHeader}>Overview</div>
        <NavLink to="/" end style={({ isActive }) => navLinkStyle(isActive)}>Home</NavLink>
        <NavLink to="/how-to-use" style={({ isActive }) => navLinkStyle(isActive)}>How to use</NavLink>

        <div style={sectionHeader}>Prototypes</div>

        {byCategory.map(({ category, items }) => (
          <div key={category.id}>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: category.color,
              padding: '12px 16px 4px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: category.color, display: 'inline-block', flexShrink: 0 }} />
              {category.name}
            </div>

            {items.length === 0 && (
              <div style={{ fontSize: '13px', color: '#8993A4', padding: '6px 16px 6px 28px', fontStyle: 'italic' }}>
                No prototypes yet
              </div>
            )}

            {items.map((proto) => {
              const isActive = location.pathname === `/prototypes/${proto.id}`
              return (
                <NavLink
                  key={proto.id}
                  to={`/prototypes/${proto.id}`}
                  style={() => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    color: isActive ? '#0052CC' : '#172B4D',
                    padding: '6px 16px 6px 24px',
                    background: isActive ? '#DEEBFF' : 'transparent',
                    borderLeft: isActive ? '3px solid #0052CC' : '3px solid transparent',
                    textDecoration: 'none',
                    lineHeight: '1.4',
                  })}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: category.color, flexShrink: 0, opacity: 0.7 }} />
                  {proto.name}
                </NavLink>
              )
            })}
          </div>
        ))}

        <div style={{ height: '40px' }} />
      </div>
    </nav>
  )
}
