import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import HomePage from './pages/HomePage.jsx'
import HowToUsePage from './pages/HowToUsePage.jsx'
import PrototypeScreen from './pages/PrototypeScreen.jsx'
import PresentMode from './pages/PresentMode.jsx'

function BeehiveIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#FFD100"/>
      <path d="M20 8L26 12V20L20 24L14 20V12L20 8Z" fill="#172B4D"/>
      <path d="M14 20L8 24V32L14 36L20 32V24L14 20Z" fill="#172B4D"/>
      <path d="M26 20L32 24V32L26 36L20 32V24L26 20Z" fill="#172B4D"/>
    </svg>
  )
}

function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-layout">
      <header className="header">
        <button
          className="hamburger-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle navigation"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect y="3" width="20" height="2" rx="1" fill="#172B4D"/>
            <rect y="9" width="20" height="2" rx="1" fill="#172B4D"/>
            <rect y="15" width="20" height="2" rx="1" fill="#172B4D"/>
          </svg>
        </button>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <BeehiveIcon />
          <span style={{ fontWeight: 700, fontSize: '15px', color: '#172B4D', letterSpacing: '-0.01em' }}>
            Prototype Platform
          </span>
        </Link>
        <div style={{ flex: 1 }} />
        <a
          href="https://asmithdigital.github.io/design-system-site/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '13px', color: '#5E6C84', textDecoration: 'none',
            padding: '6px 12px', borderRadius: '4px', border: '1px solid #DFE1E6',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}
        >
          <span>Apiary Design System</span>
          <span style={{ fontSize: '11px' }}>↗</span>
        </a>
      </header>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 99,
            display: 'none',
          }}
          className="mobile-overlay"
        />
      )}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-to-use" element={<HowToUsePage />} />
          <Route path="/web/:screenId" element={<PrototypeScreen product="raa-web" />} />
          <Route path="/app/:screenId" element={<PrototypeScreen product="raa-app" />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/present/web/:screenId" element={<PresentMode product="raa-web" />} />
      <Route path="/present/app/:screenId" element={<PresentMode product="raa-app" />} />
      <Route path="/*" element={<AppShell />} />
    </Routes>
  )
}
