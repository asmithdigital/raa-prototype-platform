import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

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

const subNavLinkStyle = (isActive) => ({
  display: 'block',
  fontSize: '13px',
  color: isActive ? '#0052CC' : '#42526E',
  padding: '6px 16px 6px 28px',
  background: isActive ? '#DEEBFF' : 'transparent',
  borderLeft: isActive ? '3px solid #0052CC' : '3px solid transparent',
  textDecoration: 'none',
  lineHeight: '1.4',
})

const qtbScreens = [
  { id: 'qtb-general-info', label: 'General info — Start' },
  { id: 'qtb-home-address', label: 'General info — Address' },
  { id: 'qtb-home-occupancy', label: 'General info — Occupancy' },
  { id: 'qtb-your-home', label: 'Your home — Building' },
  { id: 'qtb-security', label: 'Your home — Security' },
  { id: 'qtb-contents', label: 'Your contents — Options' },
  { id: 'qtb-contents-summary', label: 'Your contents — Summary' },
  { id: 'qtb-policy-holders', label: 'Policy holders — Details' },
  { id: 'qtb-policy-holder-list', label: 'Policy holders — List' },
  { id: 'qtb-your-quote', label: 'Your quote' },
]

const appScreens = [
  { id: 'app-home', label: 'Home screen', path: 'home' },
  { id: 'app-fuel-map', label: 'Fuel prices — Map', path: 'fuel-map' },
  { id: 'app-fuel-filter', label: 'Fuel prices — Filter', path: 'fuel-filter' },
  { id: 'app-savings', label: 'My savings', path: 'savings' },
  { id: 'app-notifications', label: 'Notifications', path: 'notifications' },
  { id: 'app-notification-settings', label: 'Notification settings', path: 'notification-settings' },
  { id: 'app-my-account', label: 'My Account', path: 'my-account' },
]

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation()
  const [qtbOpen, setQtbOpen] = useState(location.pathname.startsWith('/web'))

  return (
    <nav className={`sidebar${isOpen ? ' open' : ''}`} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div style={sectionHeader}>Overview</div>
        <NavLink to="/" end style={({ isActive }) => navLinkStyle(isActive)}>Home</NavLink>
        <NavLink to="/how-to-use" style={({ isActive }) => navLinkStyle(isActive)}>How to use</NavLink>

        <div style={sectionHeader}>RAA Web</div>
        <div
          onClick={() => setQtbOpen(!qtbOpen)}
          style={{
            ...navLinkStyle(location.pathname.startsWith('/web')),
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            userSelect: 'none',
          }}
        >
          <span>Quote to Buy</span>
          <span style={{ fontSize: '10px', color: '#5E6C84', marginRight: '4px' }}>
            {qtbOpen ? '▲' : '▼'}
          </span>
        </div>
        {qtbOpen && qtbScreens.map((screen) => {
          const screenPath = `/web/${screen.id.replace('qtb-', '')}`
          const isActive = location.pathname === screenPath || location.pathname === `/web/${screen.id}`
          return (
            <NavLink
              key={screen.id}
              to={`/web/${screen.id}`}
              style={({ isActive }) => subNavLinkStyle(isActive)}
            >
              {screen.label}
            </NavLink>
          )
        })}

        <div style={sectionHeader}>RAA App</div>
        {appScreens.map((screen) => (
          <NavLink
            key={screen.id}
            to={`/app/${screen.path}`}
            style={({ isActive }) => navLinkStyle(isActive)}
          >
            {screen.label}
          </NavLink>
        ))}

        <div style={{ height: '40px' }} />
      </div>
    </nav>
  )
}
