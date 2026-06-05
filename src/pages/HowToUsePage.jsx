export default function HowToUsePage() {
  const userTestSteps = [
    { number: '1', title: 'Pick a prototype and open Present mode', content: 'Go to the home page and find the prototype you want to test. Click "▶ Present" — this opens the first screen full-screen in a new tab with no navigation chrome. Share your screen in Zoom, Teams, or with the participant in the room.' },
    { number: '2', title: 'Navigate using keyboard or click', content: 'Use the right arrow key (→) to advance to the next screen, or left arrow (←) to go back. You can also click interactive elements on the screen itself — buttons, tabs, and cards navigate within the prototype. Press Escape or hover bottom-right to exit.' },
    { number: '3', title: 'Observe, don\'t guide', content: 'Give the participant a task ("You\'ve received a quote — what would you do next?") and let them explore. Screens respond to real clicks and taps, so the participant\'s actions feel natural. Take notes on where they hesitate, what they ignore, and what surprises them.' },
    { number: '4', title: 'Switch between flows mid-session', content: 'If you want to test a different scenario, simply switch to another prototype tab. You can open multiple Present mode tabs in advance — one per flow — and switch between them during the session.' },
  ]

  const designSteps = [
    {
      number: '1',
      title: 'Browse existing screens',
      content: (
        <>
          <p style={{ color: '#42526E', lineHeight: 1.7, marginBottom: '12px' }}>
            As a designer, open this site to see what the product currently looks like before you start designing. Every screen here is based on real production — not a wireframe or an interpretation.
          </p>
          <p style={{ color: '#42526E', lineHeight: 1.7 }}>
            Use it as grounding before prompting Claude or opening Figma. Know what exists before designing what's next.
          </p>
        </>
      ),
    },
    {
      number: '2',
      title: 'Design a new feature — Claude Chat workflow',
      content: (
        <>
          <p style={{ color: '#42526E', lineHeight: 1.7, marginBottom: '16px' }}>
            Use Claude Chat (claude.ai) with Figma and Chrome connectors enabled to design accurately using real components.
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Open Claude Chat with Figma and Chrome connectors enabled',
              'Ask Claude to look at the relevant screen in this prototype platform for visual context',
              'Ask Claude to reference the matching component specs in the Figma design system file',
              'Prompt Claude to generate a new prototype screen using only existing components',
              'Review the output as an artifact in chat, then push to Figma if needed',
            ].map((step, i) => (
              <li key={i} style={{ color: '#42526E', fontSize: '14px', lineHeight: 1.6 }}>
                {step}
              </li>
            ))}
          </ol>
        </>
      ),
    },
    {
      number: '3',
      title: 'Update the platform — Claude Code workflow (maintainers)',
      content: (
        <>
          <p style={{ color: '#42526E', lineHeight: 1.7, marginBottom: '16px' }}>
            When a product screen changes, or a new screen needs to be added, update this platform using Claude Code.
          </p>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Open Claude in Chrome and navigate to the live product (online.raa.com.au or the RAA app)',
              'Ask Claude to describe the layout, components, and interactions of the screen you want to capture',
              'Open Claude Chat with Figma MCP connected — ask it to pull exact component specs',
              'Combine both descriptions into a Claude Code prompt that specifies the product, components, layout, and flow position',
              'Run Claude Code inside this repo — paste the prompt and let it build',
              'Commit and push — GitHub Actions deploys to GitHub Pages automatically',
            ].map((step, i) => (
              <li key={i} style={{ color: '#42526E', fontSize: '14px', lineHeight: 1.6 }}>
                {step}
              </li>
            ))}
          </ol>
        </>
      ),
    },
  ]

  return (
    <div className="content-inner">
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ marginBottom: '12px' }}>How to use this platform</h1>
        <p style={{ fontSize: '16px', color: '#42526E', lineHeight: 1.7 }}>
          The prototype platform is the visual source of truth for the EXD team. Here's how to use it for user testing and design work.
        </p>
      </div>

      {/* User Testing Section */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#172B4D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>▶</div>
          <div>
            <h2 style={{ margin: 0, fontSize: '20px' }}>Running a user test</h2>
            <div style={{ fontSize: '13px', color: '#5E6C84', marginTop: '2px' }}>Use Present mode to run research sessions with real participants</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
          {userTestSteps.map((step) => (
            <div key={step.number} style={{ border: '1px solid #DFE1E6', borderRadius: '8px', padding: '24px', background: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#172B4D', color: '#FFD100', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', flexShrink: 0 }}>
                  {step.number}
                </div>
                <div>
                  <h3 style={{ marginBottom: '10px', fontSize: '15px', fontWeight: 600 }}>{step.title}</h3>
                  <p style={{ color: '#42526E', lineHeight: 1.7, fontSize: '14px', margin: 0 }}>{step.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

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

      {/* Design / Maintain Section */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#0052CC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>🎨</div>
          <div>
            <h2 style={{ margin: 0, fontSize: '20px' }}>For designers and maintainers</h2>
            <div style={{ fontSize: '13px', color: '#5E6C84', marginTop: '2px' }}>How to use prototypes in design work and keep them up to date</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {designSteps.map((step) => (
            <div key={step.number} style={{ border: '1px solid #DFE1E6', borderRadius: '8px', padding: '28px 32px', background: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#0052CC', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '16px', flexShrink: 0 }}>
                  {step.number}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ marginBottom: '16px', fontSize: '17px', fontWeight: 600 }}>{step.title}</h3>
                  {step.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Callout */}
      <div style={{ background: '#DEEBFF', border: '1px solid #B3D4FF', borderRadius: '8px', padding: '20px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '32px' }}>
        <div style={{ fontSize: '20px', flexShrink: 0 }}>ℹ️</div>
        <div>
          <div style={{ fontWeight: 600, color: '#0052CC', marginBottom: '6px', fontSize: '14px' }}>
            Keeping it current
          </div>
          <p style={{ fontSize: '14px', color: '#172B4D', lineHeight: 1.6 }}>
            This platform is maintained by the EXD team. If you notice something is out of date or missing, contact the design system lead.
          </p>
        </div>
      </div>

      {/* Data structure note */}
      <div style={{ padding: '24px', background: '#F4F5F7', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '14px' }}>For developers — queryable data</h3>
        <p style={{ fontSize: '13px', color: '#42526E', lineHeight: 1.6, marginBottom: '12px' }}>
          All prototype metadata is stored in <code style={{ background: '#DFE1E6', padding: '2px 6px', borderRadius: '3px', fontSize: '12px', fontFamily: 'monospace' }}>data/prototypes.json</code> and can be queried by the Slack bot or any connected tool. Each screen includes its product reference, component list, journey label, and status.
        </p>
        <p style={{ fontSize: '13px', color: '#5E6C84', lineHeight: 1.6 }}>
          When Claude Code adds a new screen, it updates <code style={{ background: '#DFE1E6', padding: '2px 6px', borderRadius: '3px', fontSize: '12px', fontFamily: 'monospace' }}>prototypes.json</code> first, then creates the screen component — keeping the data and the UI in sync automatically.
        </p>
      </div>
    </div>
  )
}
