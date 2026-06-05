const CODE = ({ children }) => (
  <code style={{ background: '#DFE1E6', padding: '2px 6px', borderRadius: '3px', fontSize: '12px', fontFamily: 'monospace' }}>
    {children}
  </code>
)

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '48px' }}>
    <h2 style={{ marginBottom: '16px' }}>{title}</h2>
    {children}
  </div>
)

const Card = ({ children, style }) => (
  <div style={{ border: '1px solid #DFE1E6', borderRadius: '8px', padding: '24px', background: '#fff', ...style }}>
    {children}
  </div>
)

export default function HowToUsePage() {
  return (
    <div className="content-inner">
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ marginBottom: '10px' }}>How to use this platform</h1>
        <p style={{ fontSize: '16px', color: '#42526E', lineHeight: 1.7, maxWidth: '620px' }}>
          A technical guide for designers and developers on the EXD team.
        </p>
      </div>

      <Section title="What is this platform">
        <Card>
          <p style={{ fontSize: '15px', color: '#42526E', lineHeight: 1.75, margin: 0 }}>
            The RAA Prototype Platform is a browsable library of real-looking, interactive prototypes for RAA web and app products — built to replace Axure for user testing and design review sessions. It also acts as a structured, Claude-queryable data layer for the EXD team: all screen metadata is stored in a machine-readable JSON file that can be queried via Slack or any connected tool.
          </p>
        </Card>
      </Section>

      <Section title="Adding a new prototype">
        <Card style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '14px', color: '#42526E', lineHeight: 1.7, marginBottom: '20px' }}>
            To add a new prototype, open Claude Code inside this repo and paste a prompt like the one below. Claude will update <CODE>data/prototypes.json</CODE> with the new prototype entry and screens, create the React screen components, wire up routes, and build and push automatically.
          </p>
          <div style={{ background: '#172B4D', borderRadius: '6px', padding: '18px 20px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#8993A4', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '10px' }}>Example prompt</div>
            <pre style={{ margin: 0, fontSize: '13px', color: '#E2E8F0', lineHeight: 1.65, whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>{`Add a new prototype to the RAA Prototype Platform:

Name: Quote to Buy — Car Insurance
Category: raa-web
Status: prototype
Description: 4-step online quote and purchase flow for RAA car insurance.

Screens:
1. Vehicle details — make, model, year, usage type. Dropdowns with validation.
   Components: Stepper Nav, Dropdown Select, Validation Error, Primary Button

2. Driver details — primary driver DOB, licence type, claims history.
   Components: Stepper Nav, Radio Card, Text Input, Mascot Tip, Primary Button

3. Your quote — quote price card with monthly/annual toggle, optional add-ons.
   Components: Stepper Nav, Quote Price Card, Toggle, Cover Option Card, Primary Button

4. Review and buy — policy summary, payment method, T&Cs checkbox.
   Components: Stepper Nav, Summary Card, Checkbox, Primary Button

Add to prototypes.json, create screen components, wire up routes, build and push.`}</pre>
          </div>
        </Card>
        <div style={{ background: '#DEEBFF', border: '1px solid #B3D4FF', borderRadius: '8px', padding: '16px 20px', display: 'flex', gap: '12px' }}>
          <span style={{ fontSize: '16px', flexShrink: 0 }}>ℹ️</span>
          <p style={{ fontSize: '13px', color: '#172B4D', lineHeight: 1.6, margin: 0 }}>
            Claude keeps the JSON and the UI in sync — it always updates <CODE>prototypes.json</CODE> first, then creates the screen components, so the Slack bot data stays accurate.
          </p>
        </div>
      </Section>

      <Section title="Querying via Slack">
        <Card style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '14px', color: '#42526E', lineHeight: 1.7, marginBottom: '20px' }}>
            The Slack bot reads from <CODE>data/prototypes.json</CODE> and can answer questions about prototypes, screens, and components. Try these example queries in Slack:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Do we have any current prototypes?',
              'What screens exist for quote to buy?',
              'What components does the RAA App home screen use?',
              'Show me all production prototypes',
              'Which prototypes are in the RAA Web category?',
              'What\'s the last prototype that was updated?',
            ].map((q, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ background: '#F4F5F7', border: '1px solid #DFE1E6', borderRadius: '4px', padding: '4px 10px', fontSize: '13px', color: '#172B4D', fontFamily: 'monospace', flexShrink: 0 }}>
                  {q}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section title="Data structure">
        <Card>
          <p style={{ fontSize: '14px', color: '#42526E', lineHeight: 1.7, marginBottom: '20px' }}>
            All prototype metadata lives in <CODE>data/prototypes.json</CODE>. The file has three top-level keys:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {[
              { key: 'meta', desc: 'lastUpdated date, description, and instructions for the Slack bot on how to query the file.' },
              { key: 'categories', desc: 'Array of product categories (RAA Web, RAA App, Taskly) with ID, name, description, and hex colour.' },
              { key: 'prototypes', desc: 'Array of prototypes, each with id, name, category, status, dates, description, figmaSource, liveUrl, and a screens array. Each screen has id, name, order, description, components, and route.' },
            ].map(item => (
              <div key={item.key} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CODE>{item.key}</CODE>
                <span style={{ fontSize: '13px', color: '#42526E', lineHeight: 1.6 }}>{item.desc}</span>
              </div>
            ))}
          </div>
          <a
            href="https://raw.githubusercontent.com/asmithdigital/raa-prototype-platform/main/data/prototypes.json"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '13px', color: '#0052CC', fontWeight: 500 }}
          >
            View raw prototypes.json ↗
          </a>
        </Card>
      </Section>

      <Section title="Connected platforms">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {[
            {
              icon: '🧬',
              title: 'Apiary Design System',
              desc: 'Component specs, design tokens, usage guidelines, and Figma sources for all RAA products.',
              link: 'https://asmithdigital.github.io/design-system-site/',
            },
            {
              icon: '📊',
              title: 'Journey Management',
              desc: 'Experience data, journey maps, and research insights for the EXD intelligence layer.',
              link: 'https://asmithdigital.github.io/journey-management-site/',
            },
          ].map(item => (
            <Card key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '28px', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#172B4D', marginBottom: '6px' }}>{item.title}</div>
                <p style={{ fontSize: '13px', color: '#42526E', lineHeight: 1.6, marginBottom: '12px' }}>{item.desc}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: '#0052CC', fontWeight: 500 }}>
                  Open ↗
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Keyboard shortcuts */}
      <div style={{ background: '#172B4D', borderRadius: '8px', padding: '20px 24px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div style={{ fontSize: '28px', flexShrink: 0 }}>⌨️</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, color: '#FFD100', marginBottom: '8px', fontSize: '14px' }}>Keyboard shortcuts in Present mode</div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { key: '→', label: 'Next screen' },
              { key: '←', label: 'Previous screen' },
              { key: 'Esc', label: 'Exit present mode' },
              { key: 'Hover ↘', label: 'Show exit button' },
            ].map(s => (
              <div key={s.key} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <kbd style={{ background: '#fff', color: '#172B4D', padding: '3px 8px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '13px', fontWeight: 700 }}>{s.key}</kbd>
                <span style={{ color: '#BDC8D8', fontSize: '13px' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
