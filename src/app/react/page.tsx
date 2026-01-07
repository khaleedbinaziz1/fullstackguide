'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ReactPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold gradient-text">
              HowThingsWork
            </Link>
            <Link href="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Header */}
          <div className="text-center mb-20 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30 mb-8">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 font-semibold">React.js Visual Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Learn React</span>
              <span className="text-white block">Visually</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Understanding React concepts through interactive visualizations and animations
            </p>
          </div>

          {/* Sections - Following React Docs Structure */}
          <div className="space-y-12">
            {/* 1. Describing the UI */}
            <Section
              title="1. Describing the UI"
              description="Components, JSX, and Props - the building blocks of React"
              isActive={activeSection === 'ui'}
              onToggle={() => setActiveSection(activeSection === 'ui' ? null : 'ui')}
            >
              <DescribingUIVisualization />
            </Section>

            {/* 2. Adding Interactivity */}
            <Section
              title="2. Adding Interactivity"
              description="Event handlers, State, and how React updates the UI"
              isActive={activeSection === 'interactivity'}
              onToggle={() => setActiveSection(activeSection === 'interactivity' ? null : 'interactivity')}
            >
              <InteractivityVisualization />
            </Section>

            {/* 3. Managing State */}
            <Section
              title="3. Managing State"
              description="State structure, lifting state up, and state management patterns"
              isActive={activeSection === 'state'}
              onToggle={() => setActiveSection(activeSection === 'state' ? null : 'state')}
            >
              <StateManagementVisualization />
            </Section>

            {/* 4. Render & Commit */}
            <Section
              title="4. Render & Commit"
              description="How React renders components and updates the DOM"
              isActive={activeSection === 'render'}
              onToggle={() => setActiveSection(activeSection === 'render' ? null : 'render')}
            >
              <RenderCommitVisualization />
            </Section>

            {/* 5. Hooks Deep Dive */}
            <Section
              title="5. Essential Hooks"
              description="useState, useEffect, useContext, useRef, and more"
              isActive={activeSection === 'hooks'}
              onToggle={() => setActiveSection(activeSection === 'hooks' ? null : 'hooks')}
            >
              <HooksVisualization />
            </Section>

            {/* 6. Thinking in React */}
            <Section
              title="6. Thinking in React"
              description="Component structure, data flow, and React patterns"
              isActive={activeSection === 'thinking'}
              onToggle={() => setActiveSection(activeSection === 'thinking' ? null : 'thinking')}
            >
              <ThinkingInReactVisualization />
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}

function Section({
  title,
  description,
  children,
  isActive,
  onToggle,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/10">
      <button
        onClick={onToggle}
        className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex-1 pr-8">
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-white/60 text-lg">{description}</p>
        </div>
        <div className={`transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {isActive && (
        <div className="p-8 border-t border-white/10 bg-gradient-to-br from-white/5 to-transparent">
          {children}
        </div>
      )}
    </div>
  );
}

// 1. Describing the UI
function DescribingUIVisualization() {
  const [selectedTab, setSelectedTab] = useState<'components' | 'jsx' | 'props'>('components');

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-white/10">
        <button
          onClick={() => setSelectedTab('components')}
          className={`pb-4 px-4 font-semibold transition-colors ${
            selectedTab === 'components' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white/60 hover:text-white'
          }`}
        >
          Components
        </button>
        <button
          onClick={() => setSelectedTab('jsx')}
          className={`pb-4 px-4 font-semibold transition-colors ${
            selectedTab === 'jsx' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white/60 hover:text-white'
          }`}
        >
          JSX
        </button>
        <button
          onClick={() => setSelectedTab('props')}
          className={`pb-4 px-4 font-semibold transition-colors ${
            selectedTab === 'props' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white/60 hover:text-white'
          }`}
        >
          Props
        </button>
      </div>

      {/* Components Tab */}
      {selectedTab === 'components' && (
        <div className="space-y-8 animate-in">
          <div className="grid grid-cols-3 gap-6">
            <ComponentCard name="Button" color="from-blue-500 to-cyan-500" />
            <ComponentCard name="Card" color="from-purple-500 to-pink-500" />
            <ComponentCard name="Input" color="from-green-500 to-emerald-500" />
          </div>
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h4 className="text-white font-semibold mb-4">Component Tree</h4>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-blue-400">&lt;App&gt;</div>
                  <div className="ml-4 text-purple-400">&lt;Header /&gt;</div>
                  <div className="ml-4 text-green-400">&lt;Button label="Click" /&gt;</div>
                  <div className="ml-8 text-cyan-400">&lt;Card title="Hello" /&gt;</div>
                  <div className="text-blue-400">&lt;/App&gt;</div>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white/60 text-sm leading-relaxed">
                  Components are reusable pieces of UI. They accept inputs (props) and return JSX describing what should appear on the screen.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Example Code</h4>
            <CodeExample
              language="jsx"
              code={`// Function Component
function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {label}
    </button>
  );
}

// Using the component
function App() {
  return (
    <div>
      <Button label="Click me" onClick={() => alert('Clicked!')} />
    </div>
  );
}`}
            />
          </div>
        </div>
      )}

      {/* JSX Tab */}
      {selectedTab === 'jsx' && (
        <div className="space-y-6 animate-in">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">JSX Syntax</h4>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 font-mono text-sm">
                <div className="text-purple-300 mb-4">const element = (</div>
                <div className="ml-4 text-green-300">&lt;div className="card"&gt;</div>
                <div className="ml-8 text-cyan-300">&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                <div className="ml-8 text-cyan-300">&lt;p&gt;{'{'}name{'}'}&lt;/p&gt;</div>
                <div className="ml-4 text-green-300">&lt;/div&gt;</div>
                <div className="text-purple-300">);</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Rendered Output</h4>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="card bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                  <h1 className="text-2xl font-bold text-white mb-2">Hello World</h1>
                  <p className="text-white/80">React</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <p className="text-white/60 text-sm">
              💡 JSX looks like HTML but it's JavaScript. React transforms JSX into JavaScript function calls that create React elements.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Example Code</h4>
            <CodeExample
              language="jsx"
              code={`// JSX with variables
const name = "React";
const element = (
  <div className="card">
    <h1>Hello World</h1>
    <p>{name}</p>
  </div>
);

// JSX compiles to:
React.createElement(
  'div',
  { className: 'card' },
  React.createElement('h1', null, 'Hello World'),
  React.createElement('p', null, name)
);`}
            />
          </div>
        </div>
      )}

      {/* Props Tab */}
      {selectedTab === 'props' && (
        <div className="space-y-6 animate-in">
          <PropsFlowVisualization />
        </div>
      )}
    </div>
  );
}

function ComponentCard({ name, color }: { name: string; color: string }) {
  return (
    <div className="glass rounded-xl p-6 border border-white/10 text-center">
      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${color} mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
        {name[0]}
      </div>
      <h4 className="text-white font-semibold">{name}</h4>
    </div>
  );
}

// Code Example Component
function CodeExample({ code, language = 'jsx' }: { code: string; language?: string }) {
  return (
    <div className="bg-[#1e1e1e] rounded-lg border border-white/10 overflow-hidden">
      <div className="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-white/10">
        <span className="text-xs text-white/60 uppercase">{language}</span>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs text-white/60 hover:text-white transition-colors"
        >
          Copy
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-white/90 font-mono">{code}</code>
      </pre>
    </div>
  );
}

function PropsFlowVisualization() {
  const [message, setMessage] = useState('Welcome to React!');

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
          <h4 className="text-purple-400 font-semibold mb-4">Parent Component</h4>
          <div className="space-y-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
              placeholder="Enter message"
            />
            <div className="font-mono text-sm text-purple-300">
              &lt;Child message={'"'}{message}{'"'} /&gt;
            </div>
          </div>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
          <h4 className="text-cyan-400 font-semibold mb-4">Child Component</h4>
          <div className="bg-white/5 rounded-lg p-4">
            <div className="font-mono text-sm text-cyan-300 mb-2">
              function Child({`{ message }`}) {`{`}
            </div>
            <div className="font-mono text-sm text-green-300 ml-4">
              return &lt;div&gt;{`{message}`}&lt;/div&gt;;
            </div>
            <div className="font-mono text-sm text-cyan-300">
              {`}`}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-white/80 font-semibold">Rendered:</div>
              <div className="text-cyan-300 mt-2">{message}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 text-white/60">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span className="text-sm">Props flow down from parent to child (one-way data flow)</span>
      </div>

      <div className="space-y-4">
        <h4 className="text-white font-semibold">Example Code</h4>
        <CodeExample
          language="jsx"
          code={`// Parent Component
function Parent() {
  const message = "Welcome to React!";
  
  return (
    <div>
      <Child message={message} />
    </div>
  );
}

// Child Component receives props
function Child({ message }) {
  return <div>{message}</div>;
}

// Props are read-only in the child component
// Child cannot modify props directly`}
        />
      </div>
    </div>
  );
}

// 2. Adding Interactivity
function InteractivityVisualization() {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-blue-400">Event Handlers</h4>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
            <button
              onClick={() => setCount(count + 1)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold text-lg transition-all ${
                isHovered ? 'scale-105 shadow-2xl' : ''
              }`}
            >
              Click me! (Count: {count})
            </button>
            <div className="mt-4 font-mono text-sm text-blue-300">
              onClick={'{'}() =&gt; setCount(count + 1){'}'}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-purple-400">State Updates</h4>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
            <div className="space-y-4">
              <div className="text-5xl font-bold text-white text-center">{count}</div>
              <div className="flex gap-3">
                <button
                  onClick={() => setCount(count - 1)}
                  className="flex-1 px-4 py-3 bg-purple-600 rounded-lg text-white font-bold hover:scale-105 transition-transform"
                >
                  -
                </button>
                <button
                  onClick={() => setCount(count + 1)}
                  className="flex-1 px-4 py-3 bg-purple-600 rounded-lg text-white font-bold hover:scale-105 transition-transform"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <h4 className="text-white font-semibold mb-4">How State Updates Work</h4>
        <div className="space-y-3 text-sm text-white/60">
          <div className="flex items-start gap-3">
            <span className="text-green-400">1.</span>
            <span>User clicks button → Event handler runs</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400">2.</span>
            <span>State setter function (setCount) is called with new value</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400">3.</span>
            <span>React schedules a re-render with the new state</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400">4.</span>
            <span>Component re-renders, showing updated UI</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-white font-semibold">Example Code</h4>
        <CodeExample
          language="jsx"
          code={`import { useState } from 'react';

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0);

  // Event handler
  const handleClick = () => {
    setCount(count + 1); // Update state
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

// Arrow function syntax also works:
// const handleClick = () => setCount(count + 1);`}
        />
      </div>
    </div>
  );
}

// 3. Managing State
function StateManagementVisualization() {
  const [selectedPattern, setSelectedPattern] = useState<'structure' | 'lifting' | 'sharing'>('structure');

  return (
    <div className="space-y-8">
      <div className="flex gap-4 border-b border-white/10">
        <button
          onClick={() => setSelectedPattern('structure')}
          className={`pb-4 px-4 font-semibold transition-colors ${
            selectedPattern === 'structure' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-white/60'
          }`}
        >
          State Structure
        </button>
        <button
          onClick={() => setSelectedPattern('lifting')}
          className={`pb-4 px-4 font-semibold transition-colors ${
            selectedPattern === 'lifting' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-white/60'
          }`}
        >
          Lifting State Up
        </button>
        <button
          onClick={() => setSelectedPattern('sharing')}
          className={`pb-4 px-4 font-semibold transition-colors ${
            selectedPattern === 'sharing' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-white/60'
          }`}
        >
          Sharing State
        </button>
      </div>

      {selectedPattern === 'structure' && (
        <div className="space-y-6 animate-in">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-4">State Structure Principles</h4>
            <div className="space-y-4 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <span className="text-purple-400">✓</span>
                <div>
                  <strong className="text-white">Group related state:</strong> If you always update two or more state variables together, consider merging them into a single object.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400">✓</span>
                <div>
                  <strong className="text-white">Avoid contradictions:</strong> Avoid state that contradicts each other (e.g., isOpen and isClosed).
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400">✓</span>
                <div>
                  <strong className="text-white">Avoid redundant state:</strong> If you can calculate something from props or existing state, don't put it in state.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedPattern === 'lifting' && (
        <LiftingStateVisualization />
      )}

      {selectedPattern === 'sharing' && (
        <SharingStateVisualization />
      )}

      <div className="space-y-4 pt-6 border-t border-white/10">
        <h4 className="text-white font-semibold">State Management Code Examples</h4>
        <CodeExample
          language="jsx"
          code={`// ❌ Bad: Multiple related states
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

// ✅ Good: Group related state
const [person, setPerson] = useState({
  firstName: '',
  lastName: ''
});

// Updating state
setPerson({ ...person, firstName: 'John' });

// ❌ Bad: Redundant state (can be calculated)
const [fullName, setFullName] = useState('');
const [firstName, setFirstName] = useState('John');
const [lastName, setLastName] = useState('Doe');

// ✅ Good: Calculate from existing state
const firstName = 'John';
const lastName = 'Doe';
const fullName = \`\${firstName} \${lastName}\`;`}
        />
      </div>
    </div>
  );
}

function LiftingStateVisualization() {
  const [temperature, setTemperature] = useState(20);

  return (
    <div className="space-y-6 animate-in">
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
        <h4 className="text-white font-semibold mb-4">Lifting State Up</h4>
        <p className="text-white/60 text-sm mb-6">
          When multiple components need to share state, lift it to their closest common ancestor.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-white/80">Temperature: {temperature}°C</span>
            <div className="flex gap-2">
              <button
                onClick={() => setTemperature(Math.max(0, temperature - 1))}
                className="px-4 py-2 bg-purple-600 rounded-lg text-white hover:scale-105 transition-transform"
              >
                -
              </button>
              <button
                onClick={() => setTemperature(Math.min(100, temperature + 1))}
                className="px-4 py-2 bg-purple-600 rounded-lg text-white hover:scale-105 transition-transform"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🌡️</div>
              <div className="text-white font-semibold">{temperature}°C</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">💧</div>
              <div className="text-white font-semibold">{temperature > 0 ? 'Liquid' : 'Solid'}</div>
            </div>
          </div>
        </div>
      </div>

      <CodeExample
        language="jsx"
        code={`// State lifted to common parent
function App() {
  const [temperature, setTemperature] = useState(20);

  return (
    <div>
      <TemperatureDisplay temp={temperature} />
      <WaterState temp={temperature} />
      <TemperatureControls 
        temp={temperature}
        onIncrease={() => setTemperature(temp + 1)}
        onDecrease={() => setTemperature(temp - 1)}
      />
    </div>
  );
}

// Child components receive state via props
function TemperatureDisplay({ temp }) {
  return <div>Temperature: {temp}°C</div>;
}

function WaterState({ temp }) {
  return <div>State: {temp > 0 ? 'Liquid' : 'Solid'}</div>;
}`}
      />
    </div>
  );
}

function SharingStateVisualization() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="space-y-6 animate-in">
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
        <h4 className="text-white font-semibold mb-4">Sharing State Between Components</h4>
        <div className="space-y-4">
          <div className="flex gap-2 border-b border-white/10">
            {['tab1', 'tab2', 'tab3'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-4 font-semibold transition-colors ${
                  activeTab === tab ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-white/60'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="bg-white/5 rounded-lg p-6 min-h-[100px] flex items-center justify-center">
            <div className="text-cyan-300 font-semibold">Content for {activeTab}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. Render & Commit
function RenderCommitVisualization() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const colorClasses = {
    blue: {
      border: 'border-blue-500',
      bg: 'bg-blue-500/20',
      buttonBg: 'bg-blue-600',
    },
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-500/20',
      buttonBg: 'bg-purple-600',
    },
    green: {
      border: 'border-green-500',
      bg: 'bg-green-500/20',
      buttonBg: 'bg-green-600',
    },
  };

  const steps = [
    {
      title: 'Trigger',
      description: 'Initial render or state update triggers the process',
      color: 'blue' as keyof typeof colorClasses,
      action: () => setStep(0),
    },
    {
      title: 'Render',
      description: 'React calls your components to figure out what to display',
      color: 'purple' as keyof typeof colorClasses,
      action: () => setStep(1),
    },
    {
      title: 'Commit',
      description: 'React applies changes to the DOM',
      color: 'green' as keyof typeof colorClasses,
      action: () => setStep(2),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-6 mb-8">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => {
              s.action();
              if (i === 2) setCount(count + 1);
            }}
            className={`glass rounded-xl p-6 text-left border-2 transition-all ${
              step === i
                ? `${colorClasses[s.color].border} ${colorClasses[s.color].bg}`
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div className={`w-10 h-10 rounded-full ${colorClasses[s.color].buttonBg} flex items-center justify-center text-white font-bold mb-4`}>
              {i + 1}
            </div>
            <h4 className="text-white font-semibold mb-2">{s.title}</h4>
            <p className="text-white/60 text-sm">{s.description}</p>
          </button>
        ))}
      </div>

      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-white font-semibold">Live Example</h4>
          <div className="text-3xl font-bold text-white">{count}</div>
        </div>
        <button
          onClick={() => setCount(count + 1)}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
        >
          Update Count (Trigger Render)
        </button>
        <div className="mt-4 text-sm text-white/60">
          Each click triggers: Trigger → Render → Commit → Browser paints
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-white font-semibold">Render & Commit Process</h4>
        <CodeExample
          language="jsx"
          code={`function Counter() {
  const [count, setCount] = useState(0);

  // 1. TRIGGER: User clicks button
  const handleClick = () => {
    setCount(count + 1); // State update triggers render
  };

  // 2. RENDER: React calls this function
  //    - Calculates what should be on screen
  //    - Compares with previous render
  console.log('Rendering with count:', count);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );

  // 3. COMMIT: React updates the DOM
  //    - Applies the differences
  //    - Browser paints the screen
}

// React batches multiple state updates
function FastCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // Batched together
    setCount(count + 1); // Only final result renders
    setCount(count + 1); // Count increases by 1, not 3
  };

  // Use function updater for multiple updates
  const handleClickCorrect = () => {
    setCount(c => c + 1); // c => c + 1
    setCount(c => c + 1); // c => c + 1
    setCount(c => c + 1); // Count increases by 3
  };
}`}
        />
      </div>
    </div>
  );
}

// 5. Essential Hooks
function HooksVisualization() {
  const [selectedHook, setSelectedHook] = useState<'useState' | 'useEffect' | 'useContext' | 'useRef'>('useState');

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-4 gap-4">
        {(['useState', 'useEffect', 'useContext', 'useRef'] as const).map((hook) => (
          <button
            key={hook}
            onClick={() => setSelectedHook(hook)}
            className={`glass rounded-lg p-4 text-center border-2 transition-all ${
              selectedHook === hook ? 'border-blue-500 bg-blue-500/20' : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div className="text-blue-400 font-mono text-sm font-semibold">{hook}</div>
          </button>
        ))}
      </div>

      {selectedHook === 'useState' && <UseStateDemo />}
      {selectedHook === 'useEffect' && <UseEffectDemo />}
      {selectedHook === 'useContext' && <UseContextDemo />}
      {selectedHook === 'useRef' && <UseRefDemo />}
    </div>
  );
}

function UseStateDemo() {
  const [name, setName] = useState('React');
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-6 animate-in">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
          <h4 className="text-blue-400 font-semibold mb-4">String State</h4>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white mb-4"
            placeholder="Enter name"
          />
          <div className="text-white/80">Hello, {name}!</div>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
          <h4 className="text-purple-400 font-semibold mb-4">Number State</h4>
          <div className="text-4xl font-bold text-white mb-4 text-center">{count}</div>
          <div className="flex gap-2">
            <button
              onClick={() => setCount(count - 1)}
              className="flex-1 px-4 py-2 bg-purple-600 rounded-lg text-white hover:scale-105 transition-transform"
            >
              -
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="flex-1 px-4 py-2 bg-purple-600 rounded-lg text-white hover:scale-105 transition-transform"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <code className="text-sm text-blue-300 font-mono">
          const [state, setState] = useState(initialValue);
        </code>
      </div>

      <CodeExample
        language="jsx"
        code={`// useState Hook
import { useState } from 'react';

function Example() {
  // String state
  const [name, setName] = useState('React');
  
  // Number state
  const [count, setCount] = useState(0);
  
  // Boolean state
  const [isVisible, setIsVisible] = useState(true);
  
  // Object state
  const [user, setUser] = useState({ name: 'John', age: 30 });
  
  // Array state
  const [items, setItems] = useState(['apple', 'banana']);

  // Update state
  setName('New Name');
  setCount(count + 1);
  setUser({ ...user, age: 31 }); // Spread operator for objects
  setItems([...items, 'orange']); // Spread operator for arrays

  return <div>{name}</div>;
}`}
      />
    </div>
  );
}

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(`Component rendered ${count} times`);
    
    // Cleanup function (runs before next effect or unmount)
    return () => {
      // Cleanup code here
    };
  }, [count]);

  return (
    <div className="space-y-6 animate-in">
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
        <div className="text-4xl font-bold text-white mb-4 text-center">{count}</div>
        <button
          onClick={() => setCount(count + 1)}
          className="w-full px-4 py-3 bg-green-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform mb-4"
        >
          Increment
        </button>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="text-green-300 text-sm font-mono mb-2">Effect Message:</div>
          <div className="text-white/80">{message}</div>
        </div>
      </div>
      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <code className="text-sm text-green-300 font-mono">
          useEffect(() =&gt; {'{'}{'}'}, [dependencies]);
        </code>
      </div>

      <CodeExample
        language="jsx"
        code={`// useEffect Hook
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Runs after every render (no dependencies)
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  });

  // Runs only on mount (empty dependencies)
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted'); // Cleanup
    };
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]); // Dependency array

  // Cleanup function example
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return <div>Count: {count}</div>;
}`}
      />
    </div>
  );
}

function UseContextDemo() {
  return (
    <div className="space-y-6 animate-in">
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
        <h4 className="text-cyan-400 font-semibold mb-4">Context Pattern</h4>
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-cyan-300 font-mono text-sm mb-2">Provider (Top Level)</div>
            <div className="text-white/60 text-sm">&lt;ThemeContext.Provider value="dark"&gt;</div>
          </div>
          <div className="flex justify-center text-cyan-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-cyan-300 font-mono text-sm mb-2">Consumer (Any Level)</div>
            <div className="text-white/60 text-sm">const theme = useContext(ThemeContext);</div>
          </div>
        </div>
      </div>

      <CodeExample
        language="jsx"
        code={`// useContext Hook
import { createContext, useContext, useState } from 'react';

// 1. Create context
const ThemeContext = createContext('light');

// 2. Provide context value
function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 3. Consume context (any nested level)
function Toolbar() {
  return <Button />;
}

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}`}
      />
    </div>
  );
}

function UseRefDemo() {
  const [count, setCount] = useState(0);
  const inputRef = useState({ current: null })[0];

  return (
    <div className="space-y-6 animate-in">
      <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-6">
        <h4 className="text-pink-400 font-semibold mb-4">Refs for DOM Access</h4>
        <input
          ref={inputRef as any}
          type="text"
          placeholder="Click button to focus"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white mb-4"
        />
        <button
          onClick={() => {
            if (inputRef.current) (inputRef.current as HTMLInputElement).focus();
          }}
          className="w-full px-4 py-3 bg-pink-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
        >
          Focus Input
        </button>
      </div>
      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <code className="text-sm text-pink-300 font-mono">
          const ref = useRef(initialValue);
        </code>
      </div>

      <CodeExample
        language="jsx"
        code={`// useRef Hook
import { useRef, useEffect } from 'react';

function Example() {
  // DOM reference
  const inputRef = useRef(null);

  // Mutable value that persists across renders
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  const focusInput = () => {
    inputRef.current.focus(); // Access DOM element
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <p>Rendered {renderCount.current} times</p>
    </div>
  );
}

// Ref doesn't trigger re-render when value changes
// Use state if you need re-render on change`}
      />
    </div>
  );
}

// 6. Thinking in React
function ThinkingInReactVisualization() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
          <h4 className="text-purple-400 font-semibold mb-4">Step 1: Break UI into Components</h4>
          <div className="space-y-3 text-sm text-white/60">
            <div>✓ Single Responsibility Principle</div>
            <div>✓ Identify reusable pieces</div>
            <div>✓ Name components clearly</div>
          </div>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
          <h4 className="text-cyan-400 font-semibold mb-4">Step 2: Build Static Version</h4>
          <div className="space-y-3 text-sm text-white/60">
            <div>✓ No interactivity yet</div>
            <div>✓ Props for data flow</div>
            <div>✓ Don't use state yet</div>
          </div>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
          <h4 className="text-green-400 font-semibold mb-4">Step 3: Identify State</h4>
          <div className="space-y-3 text-sm text-white/60">
            <div>✓ Does it change over time?</div>
            <div>✓ Can it be computed from props?</div>
            <div>✓ Is it needed by siblings?</div>
          </div>
        </div>

        <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-6">
          <h4 className="text-pink-400 font-semibold mb-4">Step 4: Data Flow</h4>
          <div className="space-y-3 text-sm text-white/60">
            <div>✓ State flows down (props)</div>
            <div>✓ Events flow up (callbacks)</div>
            <div>✓ Lift state to common ancestor</div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <h4 className="text-white font-semibold mb-4">Component Hierarchy Example</h4>
        <div className="font-mono text-sm space-y-2">
          <div className="text-blue-400">&lt;App&gt; <span className="text-white/40">(State: user, products)</span></div>
          <div className="ml-4 text-purple-400">&lt;Header user={'{'}user{'}'} /&gt;</div>
          <div className="ml-4 text-green-400">&lt;ProductList products={'{'}products{'}'} /&gt;</div>
          <div className="ml-8 text-cyan-400">&lt;ProductCard product={'{'}product{'}'} /&gt;</div>
          <div className="text-blue-400">&lt;/App&gt;</div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-white font-semibold">Complete Example: Thinking in React</h4>
        <CodeExample
          language="jsx"
          code={`// Step 1: Break UI into Components
// Step 2: Build Static Version (no state yet)
function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// Step 3: Identify State (what changes?)
// - products (comes from API)
// - cart (user interactions)
// - searchQuery (user input)

// Step 4: Determine where state lives
function App() {
  // State that multiple components need
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Lift state up - keep it in common ancestor
  return (
    <div>
      <SearchBar 
        query={searchQuery}
        onChange={setSearchQuery}
      />
      <ProductList 
        products={filteredProducts}
        onAddToCart={(product) => 
          setCart([...cart, product])
        }
      />
      <Cart cart={cart} />
    </div>
  );
}

// Data flows down via props
// Events flow up via callbacks`}
        />
      </div>
    </div>
  );
}
