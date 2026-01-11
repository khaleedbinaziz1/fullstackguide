'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SiReact } from "react-icons/si";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CodeExample from "@/components/CodeExample";
import FlowDiagram from "@/components/FlowDiagram";
import ConceptCard from "@/components/ConceptCard";

export default function ReactPage() {
  const [activeSection, setActiveSection] = useState<string | null>('describing-ui');

  const sections = [
    { id: 'describing-ui', title: 'Describing the UI' },
    { id: 'adding-interactivity', title: 'Adding Interactivity' },
    { id: 'managing-state', title: 'Managing State' },
    { id: 'escape-hatches', title: 'Escape Hatches' },
    { id: 'thinking-react', title: 'Thinking in React' },
    { id: 'challenges', title: 'Coding Challenges' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <Navigation showBackButton backHref="/fullstack/frontend" backLabel="Back to Frontend" />

      {/* Main Content */}
      <main id="main-content" className="pt-24 pb-20" role="main">
        <div className="container mx-auto max-w-7xl px-6">
          <Breadcrumbs />
          
          {/* Header */}
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-8">
              <SiReact className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">React 18 Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">React</span>
              <span className="text-white block text-4xl">A JavaScript Library for Building User Interfaces</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn React through interactive visualizations and code examples. Build components, manage state, and create dynamic user interfaces.
            </p>
          </div>

          {/* Sidebar Navigation */}
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3">
              <div className="glass rounded-2xl p-6 border border-white/10 sticky top-28">
                <h3 className="text-white font-semibold mb-4">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="col-span-9">
              {activeSection === 'describing-ui' && <DescribingUISection />}
              {activeSection === 'adding-interactivity' && <AddingInteractivitySection />}
              {activeSection === 'managing-state' && <ManagingStateSection />}
              {activeSection === 'escape-hatches' && <EscapeHatchesSection />}
              {activeSection === 'thinking-react' && <ThinkingReactSection />}
              {activeSection === 'challenges' && <ReactChallengesSection />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Section 1: Describing the UI
function DescribingUISection() {
  const [selectedTab, setSelectedTab] = useState<'components' | 'jsx' | 'props'>('components');

  return (
    <div className="space-y-12">
      {/* Fundamental Concept */}
      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-4 sm:p-6 mb-8 overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-3">🎯 Core Concept: Components & JSX</h3>
        <p className="text-white/70 leading-relaxed mb-4">
          React components are <strong className="text-white">reusable pieces of UI</strong> built with JavaScript functions. 
          JSX is a syntax extension that lets you write HTML-like code in JavaScript. Components accept inputs (props) and return JSX describing what should appear on screen.
        </p>
        <div className="w-full overflow-x-auto -mx-2 px-2">
          <FlowDiagram
            steps={[
              { label: "Component", description: "JavaScript function", color: "from-cyan-500 to-blue-500" },
              { label: "Props", description: "Input data", color: "from-purple-500 to-pink-500" },
              { label: "JSX", description: "UI markup", color: "from-green-500 to-emerald-500" },
              { label: "DOM", description: "Rendered output", color: "from-orange-500 to-yellow-500" },
            ]}
          />
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Describing the UI</h2>
        <p className="text-white/60 text-lg mb-8">
          Learn how to build reusable UI pieces using components, JSX syntax, and props for data flow.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-white/10">
        <button
          onClick={() => setSelectedTab('components')}
          className={`pb-4 px-4 font-semibold transition-colors ${
            selectedTab === 'components' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-white/60 hover:text-white'
          }`}
        >
          Components
        </button>
        <button
          onClick={() => setSelectedTab('jsx')}
          className={`pb-4 px-4 font-semibold transition-colors ${
            selectedTab === 'jsx' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-white/60 hover:text-white'
          }`}
        >
          JSX
        </button>
        <button
          onClick={() => setSelectedTab('props')}
          className={`pb-4 px-4 font-semibold transition-colors ${
            selectedTab === 'props' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-white/60 hover:text-white'
          }`}
        >
          Props
        </button>
      </div>

      {selectedTab === 'components' && (
        <div className="space-y-8 animate-in">
          <div className="grid grid-cols-3 gap-6">
            <ComponentCard name="Button" color="from-blue-500 to-cyan-500" />
            <ComponentCard name="Card" color="from-purple-500 to-pink-500" />
            <ComponentCard name="Input" color="from-green-500 to-emerald-500" />
          </div>
          
          {/* Enhanced Component Tree Visualization */}
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              Component Tree Structure
            </h3>
            <div className="bg-black/20 rounded-lg p-6 mb-4">
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* App Component */}
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 text-white font-bold mb-4 shadow-lg">
                    &lt;App&gt;
                  </div>
                  
                  {/* Children */}
                  <div className="flex gap-4 justify-center">
                    <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-3 text-white font-semibold text-sm mb-2">
                        &lt;Header /&gt;
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg p-3 text-white font-semibold text-sm mb-2">
                        &lt;Button label="Click" /&gt;
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg p-3 text-white font-semibold text-sm mb-2">
                        &lt;Card title="Hello" /&gt;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Components compose together to form a <strong className="text-white">component tree</strong>. 
              Parent components render child components, passing data down through props. This creates a hierarchy where each component is responsible for its own piece of the UI.
            </p>
          </div>

          <CodeExample
            language="jsx"
            title="Building Components"
            explanation="Components are the building blocks of React applications. They can be function declarations or arrow functions."
            code={`// Function Component
function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {label}
    </button>
  );
}

// Arrow Function Component (modern style)
const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

// Component Composition
// Components can render other components
function App() {
  return (
    <div>
      <Header />
      <Card title="Welcome" content="Hello World" />
      <Button label="Click Me" onClick={() => alert('Clicked!')} />
    </div>
  );
}

// Component Reusability
// Same component, different props
function Page() {
  return (
    <div>
      <Card title="First Card" content="Content 1" />
      <Card title="Second Card" content="Content 2" />
      <Card title="Third Card" content="Content 3" />
    </div>
  );
}`}
          />
        </div>
      )}

      {selectedTab === 'jsx' && (
        <div className="space-y-8 animate-in">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">JSX Syntax</h3>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 font-mono text-sm">
                <div className="text-cyan-300 mb-2">const element = (</div>
                <div className="ml-4 text-green-300">&lt;div className="card"&gt;</div>
                <div className="ml-8 text-white">&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                <div className="ml-8 text-yellow-300">&lt;p&gt;{'{'}name{'}'}&lt;/p&gt;</div>
                <div className="ml-4 text-green-300">&lt;/div&gt;</div>
                <div className="text-cyan-300">);</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Rendered Output</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="card bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-lg p-4">
                  <h1 className="text-2xl font-bold text-white mb-2">Hello World</h1>
                  <p className="text-white/80">React</p>
                </div>
              </div>
            </div>
          </div>

          <CodeExample
            language="jsx"
            code={`// JSX with JavaScript expressions
const name = "React";
const element = (
  <div className="card">
    <h1>Hello World</h1>
    <p>{name}</p>
  </div>
);

// JSX compiles to React.createElement calls
// The above compiles to:
React.createElement(
  'div',
  { className: 'card' },
  React.createElement('h1', null, 'Hello World'),
  React.createElement('p', null, name)
);

// Conditional Rendering
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <WelcomeMessage /> : <LoginForm />}
    </div>
  );
}

// Lists and Keys
function TodoList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}`}
          />
        </div>
      )}

      {selectedTab === 'props' && (
        <div className="space-y-8">
          {/* Fundamental Props Concept */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-4 sm:p-6 overflow-hidden">
            <h3 className="text-xl font-bold text-white mb-3">🎯 Core Concept: Props (Properties)</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Props are how you pass data from parent to child components. They are <strong className="text-white">read-only</strong> and flow down the component tree. 
              Props make components reusable by allowing them to accept different data.
            </p>
            <div className="w-full overflow-x-auto -mx-2 px-2">
              <FlowDiagram
                steps={[
                  { label: "Parent Component", description: "Has the data", color: "from-blue-500 to-cyan-500" },
                  { label: "Pass Props", description: "Send data down", color: "from-purple-500 to-pink-500" },
                  { label: "Child Component", description: "Receives props", color: "from-green-500 to-emerald-500" },
                  { label: "Render UI", description: "Use props in JSX", color: "from-orange-500 to-yellow-500" },
                ]}
              />
            </div>
          </div>
          <PropsTabContent />
        </div>
      )}
    </div>
  );
}

function PropsTabContent() {
  const [message, setMessage] = useState('Hello from Parent!');

  return (
    <div className="space-y-8 animate-in">
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-purple-400 font-semibold mb-4">Parent Component</h3>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white mb-4"
            placeholder="Enter message"
          />
          <div className="font-mono text-sm text-purple-300">
            &lt;ChildComponent message={'"'}{message}{'"'} /&gt;
          </div>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
          <h3 className="text-cyan-400 font-semibold mb-4">Child Component</h3>
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

      <ConceptCard
        title="Props Flow"
        description="Data flows unidirectionally from parent to child. Props are immutable in the child component."
        color="from-purple-500 to-pink-500"
        visual={
          <div className="flex items-center gap-4 justify-center py-4">
            <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30">
              <div className="text-blue-300 text-xs mb-1">Parent</div>
              <div className="text-white text-sm">message="Hello"</div>
            </div>
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-500/30">
              <div className="text-purple-300 text-xs mb-1">Child</div>
              <div className="text-white text-sm">{"{ message }"}</div>
            </div>
          </div>
        }
      />

      <CodeExample
        language="jsx"
        title="Props in Action"
        explanation="Props allow parent components to pass data to children. They are read-only and enable component reusability."
        code={`// Passing Props (Parent Component)
function Parent() {
  const message = "Hello from Parent!";
  const user = { name: "John", age: 30 };
  
  return (
    <div>
      {/* Pass simple props */}
      <Child message={message} />
      
      {/* Pass object props */}
      <UserCard user={user} />
      
      {/* Pass multiple props */}
      <Button label="Click" variant="primary" onClick={() => alert('Hi!')} />
    </div>
  );
}

// Receiving Props (Child Component)
function Child({ message }) {
  return <div>{message}</div>;
}

// Destructuring Props
function UserCard({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
    </div>
  );
}

// Default Props
function Button({ label, variant = 'primary', onClick }) {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// ⚠️ Props are Read-Only
function Counter({ count }) {
  // ❌ Error: Cannot modify props
  // count = count + 1;
  
  // ✅ Correct: Use state for mutable values
  const [localCount, setLocalCount] = useState(count);
  
  return (
    <button onClick={() => setLocalCount(localCount + 1)}>
      {localCount}
    </button>
  );
}`}
      />
    </div>
  );
}

// Section 2: Adding Interactivity
function AddingInteractivitySection() {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Adding Interactivity</h2>
        <p className="text-white/60 text-lg mb-8">
          React components use event handlers to respond to user interactions like clicks, hover, and form input.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-cyan-400">Event Handlers</h3>
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
            <button
              onClick={() => setCount(count + 1)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-semibold text-lg transition-all ${
                isHovered ? 'scale-105 shadow-2xl' : ''
              }`}
            >
              Click me! (Count: {count})
            </button>
            <div className="mt-4 font-mono text-sm text-cyan-300">
              onClick={'{'}() =&gt; setCount(count + 1){'}'}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-purple-400">State Updates</h3>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
            <div className="text-5xl font-bold text-white mb-4 text-center">{count}</div>
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

      <CodeExample
        language="jsx"
        code={`import { useState } from 'react';

function Counter() {
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

// Multiple Event Handlers
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
      />
    </div>
  );
}

// Section 3: Managing State
function ManagingStateSection() {
  const [temperature, setTemperature] = useState(20);

  return (
    <div className="space-y-12">
      {/* Fundamental Concept */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-4 sm:p-6 mb-8 overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-3">🎯 Core Concept: State Management</h3>
        <p className="text-white/70 leading-relaxed mb-4">
          State allows components to <strong className="text-white">remember and update data</strong> over time. 
          When state changes, React automatically re-renders the component. State is private to the component that declares it, 
          but can be shared by "lifting state up" to a common ancestor.
        </p>
        <div className="w-full overflow-x-auto -mx-2 px-2">
          <FlowDiagram
            steps={[
              { label: "Component renders", description: "Initial state set", color: "from-blue-500 to-cyan-500" },
              { label: "User interaction", description: "Event triggered", color: "from-purple-500 to-pink-500" },
              { label: "State updates", description: "setState called", color: "from-green-500 to-emerald-500" },
              { label: "Re-render", description: "UI updates", color: "from-orange-500 to-yellow-500" },
            ]}
          />
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Managing State</h2>
        <p className="text-white/60 text-lg mb-8">
          Learn how to use state to make components interactive and how to share state between components.
        </p>
      </div>

      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-purple-400 font-semibold mb-4">Lifting State Up</h3>
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
              <div className="text-white font-semibold text-2xl mb-2">{temperature}°C</div>
              <div className="text-white/60 text-sm">Temperature</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-white font-semibold text-2xl mb-2">{temperature > 0 ? 'Liquid' : 'Solid'}</div>
              <div className="text-white/60 text-sm">State</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ConceptCard
          title="Local State"
          description="State that belongs to a single component. Used when only that component needs the data."
          code="const [count, setCount] = useState(0);"
          color="from-blue-500 to-cyan-500"
          examples={[
            "Form input values",
            "Toggle states (open/closed)",
            "Counter values",
            "UI state (loading, error)"
          ]}
        />
        <ConceptCard
          title="Shared State"
          description="State lifted to a common parent. Multiple components can read and update it."
          code="// State in parent, props to children"
          color="from-purple-500 to-pink-500"
          examples={[
            "Shopping cart items",
            "User authentication status",
            "Theme preferences",
            "Shared form data"
          ]}
        />
      </div>

      <CodeExample
        language="jsx"
        title="State Patterns"
        explanation="Use useState for component-level state. Lift state up when multiple components need the same data."
        code={`// Local State - Component owns its state
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

// Lifting State Up - Shared state
// When multiple components need the same state,
// lift it to their closest common ancestor

function App() {
  // State lives in parent
  const [temperature, setTemperature] = useState(20);

  return (
    <div>
      {/* Pass state down as props */}
      <TemperatureDisplay temp={temperature} />
      <WaterState temp={temperature} />
      
      {/* Pass updater functions down */}
      <TemperatureControls 
        temp={temperature}
        onIncrease={() => setTemperature(temperature + 1)}
        onDecrease={() => setTemperature(temperature - 1)}
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
}

function TemperatureControls({ temp, onIncrease, onDecrease }) {
  return (
    <div>
      <button onClick={onDecrease}>-</button>
      <span>{temp}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}

// Multiple State Variables
function Form() {
  // Option 1: Separate state variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Option 2: Group related state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  // Update grouped state
  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form>
      <input 
        value={formData.firstName}
        onChange={(e) => handleChange('firstName', e.target.value)}
      />
    </form>
  );
}`}
      />
    </div>
  );
}

// Section 4: Escape Hatches
function EscapeHatchesSection() {
  const [selectedHook, setSelectedHook] = useState<'useEffect' | 'useRef' | 'useContext'>('useEffect');

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Escape Hatches</h2>
        <p className="text-white/60 text-lg mb-8">
          Sometimes you need to "step outside" React to work with external systems or browser APIs.
        </p>
      </div>

      <div className="flex gap-4 border-b border-white/10">
        <button
          onClick={() => setSelectedHook('useEffect')}
          className={`pb-4 px-4 font-semibold transition-colors ${
            selectedHook === 'useEffect' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-white/60'
          }`}
        >
          useEffect
        </button>
        <button
          onClick={() => setSelectedHook('useRef')}
          className={`pb-4 px-4 font-semibold transition-colors ${
            selectedHook === 'useRef' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-white/60'
          }`}
        >
          useRef
        </button>
        <button
          onClick={() => setSelectedHook('useContext')}
          className={`pb-4 px-4 font-semibold transition-colors ${
            selectedHook === 'useContext' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-white/60'
          }`}
        >
          useContext
        </button>
      </div>

      {selectedHook === 'useEffect' && (
        <UseEffectContent />
      )}
      {selectedHook === 'useRef' && (
        <UseRefContent />
      )}
      {selectedHook === 'useContext' && (
        <UseContextContent />
      )}
    </div>
  );
}

function UseEffectContent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(`Component rendered ${count} times`);
  }, [count]);

  return (
    <div className="space-y-8 animate-in">
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
        <div className="text-4xl font-bold text-white mb-4 text-center">{count}</div>
        <button
          onClick={() => setCount(count + 1)}
          className="w-full px-4 py-3 bg-cyan-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform mb-4"
        >
          Increment
        </button>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="text-cyan-300 text-sm font-mono mb-2">Effect Message:</div>
          <div className="text-white/80">{message}</div>
        </div>
      </div>

      <CodeExample
        language="jsx"
        code={`import { useState, useEffect } from 'react';

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

function UseRefContent() {
  return (
    <div className="space-y-8 animate-in">
      <CodeExample
        language="jsx"
        code={`import { useRef, useEffect } from 'react';

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

function UseContextContent() {
  return (
    <div className="space-y-8 animate-in">
      <CodeExample
        language="jsx"
        code={`import { createContext, useContext, useState } from 'react';

// 1. Create context
const ThemeContext = createContext('light');

// 2. Provide context value
function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
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

// Section 5: Thinking in React
function ThinkingReactSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Thinking in React</h2>
        <p className="text-white/60 text-lg mb-8">
          Follow these steps to build React applications: break UI into components, build a static version, add state, and connect everything.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-purple-400 font-semibold mb-4">Step 1: Break UI into Components</h3>
          <ul className="space-y-2 text-white/60">
            <li>Single Responsibility Principle</li>
            <li>Identify reusable pieces</li>
            <li>Name components clearly</li>
          </ul>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
          <h3 className="text-cyan-400 font-semibold mb-4">Step 2: Build Static Version</h3>
          <ul className="space-y-2 text-white/60">
            <li>No interactivity yet</li>
            <li>Props for data flow</li>
            <li>Don't use state yet</li>
          </ul>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
          <h3 className="text-green-400 font-semibold mb-4">Step 3: Identify State</h3>
          <ul className="space-y-2 text-white/60">
            <li>Does it change over time?</li>
            <li>Can it be computed from props?</li>
            <li>Is it needed by siblings?</li>
          </ul>
        </div>

        <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-6">
          <h3 className="text-pink-400 font-semibold mb-4">Step 4: Data Flow</h3>
          <ul className="space-y-2 text-white/60">
            <li>State flows down (props)</li>
            <li>Events flow up (callbacks)</li>
            <li>Lift state to common ancestor</li>
          </ul>
        </div>
      </div>

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
  );
}

// Challenges Section
function ReactChallengesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">React Coding Challenges</h2>
        <p className="text-white/60 text-lg mb-8">
          Practice React with these hands-on challenges. Build real components and learn React patterns.
        </p>
      </div>

      <ChallengeCard
        level="Beginner"
        title="Challenge 1: Counter Component"
        description="Create a counter component with increment, decrement, and reset functionality."
        requirements={[
          "Use useState hook to manage count state",
          "Add three buttons: Increment, Decrement, Reset",
          "Display the current count value",
          "Add visual feedback on button clicks"
        ]}
        starterCode={`import { useState } from 'react';

function Counter() {
  // TODO: Add state and handlers
  
  return (
    <div>
      {/* Your counter UI here */}
    </div>
  );
}`}
        solution={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-4">Count: {count}</h2>
      <div className="flex gap-4 justify-center">
        <button 
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment
        </button>
        <button 
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
        <button 
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}`}
      />

      <ChallengeCard
        level="Beginner"
        title="Challenge 2: Todo List"
        description="Build a simple todo list where users can add and remove tasks."
        requirements={[
          "Use useState to manage list of todos",
          "Create input field to add new todos",
          "Display list of todos",
          "Add delete button for each todo",
          "Prevent adding empty todos"
        ]}
        starterCode={`import { useState } from 'react';

function TodoList() {
  // TODO: Implement todo list
  
  return (
    <div>
      {/* Your todo list UI here */}
    </div>
  );
}`}
        solution={`import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          className="flex-1 px-4 py-2 border rounded"
          placeholder="Add a todo..."
        />
        <button 
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li 
            key={todo.id}
            className="flex items-center justify-between p-2 bg-gray-100 rounded"
          >
            <span>{todo.text}</span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="px-3 py-1 bg-red-500 text-white rounded text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
      />

      <ChallengeCard
        level="Intermediate"
        title="Challenge 3: Form with Validation"
        description="Create a registration form with validation for name, email, and password."
        requirements={[
          "Use useState for form fields",
          "Add validation for email format",
          "Password must be at least 8 characters",
          "Show error messages for invalid fields",
          "Disable submit button when form is invalid"
        ]}
        starterCode={`import { useState } from 'react';

function RegistrationForm() {
  // TODO: Implement form with validation
  
  return (
    <form>
      {/* Your form fields here */}
    </form>
  );
}`}
        solution={`import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };

  const isFormValid = formData.name && validateEmail(formData.email) && formData.password.length >= 8;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>
      
      <button
        type="submit"
        disabled={!isFormValid}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        Register
      </button>
    </form>
  );
}`}
      />

      <ChallengeCard
        level="Intermediate"
        title="Challenge 4: Custom Hook"
        description="Create a custom hook for fetching data from an API and use it in a component."
        requirements={[
          "Create useFetch custom hook",
          "Handle loading, error, and data states",
          "Use useEffect for API calls",
          "Create a component that uses the hook",
          "Display loading and error states"
        ]}
        starterCode={`import { useState, useEffect } from 'react';

// TODO: Create useFetch hook
function useFetch(url: string) {
  // Your hook implementation
}

// TODO: Use the hook in a component
function UserProfile() {
  // Use the hook here
  return <div>{/* Display user data */}</div>;
}`}
        solution={`import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Using the hook
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  const { data, loading, error } = useFetch<User>('https://api.example.com/user/1');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
      <p className="text-gray-600">{data.email}</p>
    </div>
  );
}`}
      />

      <ChallengeCard
        level="Advanced"
        title="Challenge 5: Context API"
        description="Create a theme context and use it to toggle between light and dark modes across multiple components."
        requirements={[
          "Create ThemeContext with createContext",
          "Create ThemeProvider component",
          "Implement theme toggle functionality",
          "Use useContext in child components",
          "Persist theme preference in localStorage"
        ]}
        starterCode={`import { createContext, useContext, useState, useEffect } from 'react';

// TODO: Create ThemeContext and Provider
// TODO: Create components that use the theme

function App() {
  return (
    <div>
      {/* Your app with theme provider */}
    </div>
  );
}`}
        solution={`import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Using the theme
function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={\`p-4 \${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}\`}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Header />
      <div className="p-6">
        {/* Your app content */}
      </div>
    </ThemeProvider>
  );
}`}
      />

      <ChallengeCard
        level="Advanced"
        title="Challenge 6: Memoization & Performance"
        description="Optimize a component that renders a large list using React.memo, useMemo, and useCallback."
        requirements={[
          "Create a component that renders a large list (1000+ items)",
          "Use React.memo to prevent unnecessary re-renders",
          "Use useMemo for expensive calculations",
          "Use useCallback for event handlers",
          "Measure performance improvements"
        ]}
        starterCode={`import { useState, useMemo, useCallback } from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
}

function ItemList({ items }: { items: Item[] }) {
  // TODO: Optimize this component
  const total = items.reduce((sum, item) => sum + item.price, 0);
  
  return (
    <div>
      <p>Total: ${total}</p>
      <ul>
        {items.map(item => (
          <ItemComponent key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function ItemComponent({ item }: { item: Item }) {
  // TODO: Memoize this component
  return <li>{item.name} - ${item.price}</li>;
}`}
        solution={`import { useState, useMemo, useCallback, memo } from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
}

function ItemList({ items }: { items: Item[] }) {
  // Memoize expensive calculation
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  // Memoize callback
  const handleItemClick = useCallback((id: number) => {
    console.log('Item clicked:', id);
  }, []);

  return (
    <div className="p-6">
      <p className="text-xl font-bold mb-4">Total: ${total.toFixed(2)}</p>
      <ul className="space-y-2">
        {items.map(item => (
          <MemoizedItemComponent 
            key={item.id} 
            item={item} 
            onClick={handleItemClick}
          />
        ))}
      </ul>
    </div>
  );
}

// Memoize component to prevent unnecessary re-renders
const MemoizedItemComponent = memo(function ItemComponent({ 
  item, 
  onClick 
}: { 
  item: Item; 
  onClick: (id: number) => void;
}) {
  return (
    <li 
      onClick={() => onClick(item.id)}
      className="p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
    >
      {item.name} - ${item.price.toFixed(2)}
    </li>
  );
});

// Usage
function App() {
  const [items] = useState<Item[]>(() => 
    Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: \`Item \${i + 1}\`,
      price: Math.random() * 100
    }))
  );

  return <ItemList items={items} />;
}`}
      />
    </div>
  );
}

// Challenge Card Component
function ChallengeCard({ 
  level, 
  title, 
  description, 
  requirements, 
  starterCode, 
  solution 
}: {
  level: string;
  title: string;
  description: string;
  requirements: string[];
  starterCode: string;
  solution: string;
}) {
  const [showSolution, setShowSolution] = useState(false);
  const levelColors = {
    Beginner: 'from-green-500 to-emerald-500',
    Intermediate: 'from-yellow-500 to-orange-500',
    Advanced: 'from-red-500 to-pink-500',
  };

  return (
    <div className="glass rounded-2xl p-6 border border-white/10">
      <div className="flex items-center gap-4 mb-4">
        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${levelColors[level as keyof typeof levelColors]} text-white text-sm font-semibold`}>
          {level}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-white/70 mb-6">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
        <ul className="space-y-2">
          {requirements.map((req, idx) => (
            <li key={idx} className="text-white/60 flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-3">Starter Code:</h4>
        <CodeExample language="jsx" code={starterCode} />
      </div>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="mb-4 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-colors"
      >
        {showSolution ? 'Hide Solution' : 'Show Solution'}
      </button>

      {showSolution && (
        <div>
          <h4 className="text-white font-semibold mb-3">Solution:</h4>
          <CodeExample language="jsx" code={solution} />
        </div>
      )}
    </div>
  );
}

// Reusable Components
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


