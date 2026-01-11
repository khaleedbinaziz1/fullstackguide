'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiTailwindcss } from "react-icons/si";

export default function TailwindPage() {
  const [activeSection, setActiveSection] = useState<string | null>('utility-first');

  const sections = [
    { id: 'utility-first', title: 'Utility-First' },
    { id: 'customization', title: 'Customization' },
    { id: 'responsive', title: 'Responsive Design' },
    { id: 'dark-mode', title: 'Dark Mode' },
    { id: 'components', title: 'Components' },
    { id: 'plugins', title: 'Plugins' },
    { id: 'challenges', title: 'Coding Challenges' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/frontend" className="text-2xl font-bold gradient-text">
              Open Stack JS
            </Link>
            <Link href="/fullstack/frontend" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Frontend
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Header */}
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full border border-teal-500/30 mb-8">
              <SiTailwindcss className="w-5 h-5 text-teal-400" />
              <span className="text-teal-400 font-semibold">Tailwind CSS Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Tailwind CSS</span>
              <span className="text-white block text-4xl">Rapidly Build Modern Websites</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              A utility-first CSS framework packed with classes to build custom designs without leaving your HTML.
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
                          ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
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
              {activeSection === 'utility-first' && <UtilityFirstSection />}
              {activeSection === 'customization' && <CustomizationSection />}
              {activeSection === 'responsive' && <ResponsiveSection />}
              {activeSection === 'dark-mode' && <DarkModeSection />}
              {activeSection === 'components' && <ComponentsSection />}
              {activeSection === 'plugins' && <PluginsSection />}
              {activeSection === 'challenges' && <TailwindChallengesSection />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Section 1: Utility-First
function UtilityFirstSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Utility-First Fundamentals</h2>
        <p className="text-white/60 text-lg mb-8">
          Instead of writing custom CSS, Tailwind provides utility classes that you compose to build custom designs.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-6">
          <h3 className="text-teal-400 font-semibold mb-4">Traditional CSS</h3>
          <div className="font-mono text-sm text-white/80 space-y-2">
            <div>.card {'{'}</div>
            <div className="ml-4">padding: 1.5rem;</div>
            <div className="ml-4">background: white;</div>
            <div className="ml-4">border-radius: 0.5rem;</div>
            <div className="ml-4">box-shadow: 0 1px 3px rgba(0,0,0,0.1);</div>
            <div>{'}'}</div>
          </div>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
          <h3 className="text-cyan-400 font-semibold mb-4">Tailwind CSS</h3>
          <div className="font-mono text-sm text-white/80">
            <div>&lt;div className="p-6 bg-white rounded-lg shadow"&gt;</div>
            <div className="ml-4">Card Content</div>
            <div>&lt;/div&gt;</div>
          </div>
        </div>
      </div>

      <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-6">
        <h3 className="text-teal-400 font-semibold mb-4">Common Utility Classes</h3>
        <div className="grid grid-cols-4 gap-4 text-sm">
          <UtilityClass name="flex items-center" description="Flexbox utilities" />
          <UtilityClass name="p-4 m-2" description="Spacing (padding/margin)" />
          <UtilityClass name="bg-blue-500" description="Background colors" />
          <UtilityClass name="text-white" description="Text colors" />
          <UtilityClass name="rounded-lg" description="Border radius" />
          <UtilityClass name="hover:scale-105" description="State variants" />
          <UtilityClass name="shadow-lg" description="Box shadows" />
          <UtilityClass name="font-bold" description="Typography" />
        </div>
      </div>

      <CodeExample
        language="jsx"
        code={`// Utility-First Approach
function Card() {
  return (
    <div className="
      p-6 
      bg-white 
      rounded-lg 
      shadow-lg 
      hover:shadow-xl 
      transition-shadow
    ">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Card Title
      </h2>
      <p className="text-gray-600">
        Card content goes here
      </p>
      <button className="
        mt-4 
        px-4 
        py-2 
        bg-blue-500 
        text-white 
        rounded 
        hover:bg-blue-600 
        transition-colors
      ">
        Click Me
      </button>
    </div>
  );
}

// Spacing Scale
// p-0 = 0px, p-1 = 0.25rem (4px), p-2 = 0.5rem (8px)
// p-4 = 1rem (16px), p-6 = 1.5rem (24px), p-8 = 2rem (32px)

// Color Palette
// bg-red-500, bg-blue-500, bg-green-500
// text-gray-900, text-gray-600, text-gray-400
// border-blue-500, border-gray-300`}
      />
    </div>
  );
}

// Section 2: Customization
function CustomizationSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Customization</h2>
        <p className="text-white/60 text-lg mb-8">
          Tailwind is designed to be customized. Extend the default configuration to match your design system.
        </p>
      </div>

      <CodeExample
        language="js"
        code={`// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        brand: '#your-brand-color',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

// Using Custom Colors
<div className="bg-primary-500 text-white">
  Using custom primary color
</div>

<div className="bg-brand text-white">
  Using custom brand color
</div>`}
      />
    </div>
  );
}

// Section 3: Responsive Design
function ResponsiveSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Responsive Design</h2>
        <p className="text-white/60 text-lg mb-8">
          Build responsive designs using Tailwind's breakpoint prefixes. Mobile-first approach by default.
        </p>
      </div>

      <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-6 mb-8">
        <h3 className="text-teal-400 font-semibold mb-4">Breakpoints</h3>
        <div className="grid grid-cols-5 gap-4 text-sm">
          <Breakpoint name="sm" size="640px" />
          <Breakpoint name="md" size="768px" />
          <Breakpoint name="lg" size="1024px" />
          <Breakpoint name="xl" size="1280px" />
          <Breakpoint name="2xl" size="1536px" />
        </div>
      </div>

      <CodeExample
        language="jsx"
        code={`// Mobile-First Responsive Design
function ResponsiveGrid() {
  return (
    <div className="
      grid 
      grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4 
      gap-4
    ">
      <div className="bg-blue-500 p-4">Item 1</div>
      <div className="bg-blue-500 p-4">Item 2</div>
      <div className="bg-blue-500 p-4">Item 3</div>
      <div className="bg-blue-500 p-4">Item 4</div>
    </div>
  );
}

// Responsive Typography
<h1 className="
  text-2xl 
  md:text-4xl 
  lg:text-5xl 
  xl:text-6xl 
  font-bold
">
  Responsive Heading
</h1>

// Responsive Spacing
<div className="
  p-4 
  md:p-6 
  lg:p-8 
  xl:p-10
">
  Responsive padding
</div>

// Hide/Show at Breakpoints
<div className="hidden md:block">
  Visible on medium screens and up
</div>

<div className="block md:hidden">
  Visible only on mobile
</div>

// Responsive Flex Direction
<div className="
  flex 
  flex-col 
  md:flex-row 
  items-center 
  gap-4
">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}
      />
    </div>
  );
}

// Section 4: Dark Mode
function DarkModeSection() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Dark Mode</h2>
        <p className="text-white/60 text-lg mb-8">
          Tailwind includes dark mode support. Use the dark: prefix to apply styles when dark mode is enabled.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-6">
          <h3 className="text-teal-400 font-semibold mb-4">Light Mode</h3>
          <div className="bg-white text-gray-900 p-4 rounded">
            <div className="font-semibold mb-2">Card Title</div>
            <div className="text-gray-600">Light mode content</div>
          </div>
        </div>

        <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-6">
          <h3 className="text-teal-400 font-semibold mb-4">Dark Mode</h3>
          <div className="bg-gray-800 text-white p-4 rounded">
            <div className="font-semibold mb-2">Card Title</div>
            <div className="text-gray-300">Dark mode content</div>
          </div>
        </div>
      </div>

      <CodeExample
        language="jsx"
        code={`// Dark Mode Classes
<div className="
  bg-white 
  dark:bg-gray-800 
  text-gray-900 
  dark:text-white
">
  Content that adapts to dark mode
</div>

// Dark Mode Configuration
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' for system preference
  // ...rest of config
};

// Toggle Dark Mode (JavaScript)
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}

// Using with Next.js
'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        px-4 
        py-2 
        bg-gray-200 
        dark:bg-gray-700 
        text-gray-900 
        dark:text-white 
        rounded
      "
    >
      Toggle Dark Mode
    </button>
  );
}

// Dark Mode Examples
<button className="
  bg-blue-500 
  hover:bg-blue-600 
  dark:bg-blue-600 
  dark:hover:bg-blue-700 
  text-white
">
  Button
</button>

<div className="
  border 
  border-gray-300 
  dark:border-gray-600 
  rounded-lg 
  p-4
">
  Card with dark mode border
</div>`}
      />
    </div>
  );
}

// Section 5: Components
function ComponentsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Building Components</h2>
        <p className="text-white/60 text-lg mb-8">
          Combine utility classes to build reusable components. Use @apply directive for repeated patterns.
        </p>
      </div>

      <CodeExample
        language="css"
        code={`/* Using @apply Directive */
/* styles/components.css */

.btn {
  @apply px-4 py-2 rounded font-semibold transition-colors;
}

.btn-primary {
  @apply bg-blue-500 text-white hover:bg-blue-600;
}

.btn-secondary {
  @apply bg-gray-200 text-gray-900 hover:bg-gray-300;
}

.card {
  @apply bg-white rounded-lg shadow-lg p-6;
}

/* Using in JSX */
<button className="btn btn-primary">
  Primary Button
</button>

<button className="btn btn-secondary">
  Secondary Button
</button>

<div className="card">
  Card Content
</div>`}
      />

      <CodeExample
        language="jsx"
        code={`// Component Examples

// Button Component
function Button({ children, variant = 'primary' }) {
  const baseClasses = 'px-4 py-2 rounded font-semibold transition-colors';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button className={\`\${baseClasses} \${variantClasses[variant]}\`}>
      {children}
    </button>
  );
}

// Card Component
function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      {title && (
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
      )}
      <div className="text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}

// Input Component
function Input({ label, ...props }) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        className="
          w-full 
          px-3 
          py-2 
          border 
          border-gray-300 
          dark:border-gray-600 
          rounded-md 
          bg-white 
          dark:bg-gray-700 
          text-gray-900 
          dark:text-white
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500
        "
        {...props}
      />
    </div>
  );
}`}
      />
    </div>
  );
}

// Section 6: Plugins
function PluginsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Plugins</h2>
        <p className="text-white/60 text-lg mb-8">
          Extend Tailwind with plugins for additional functionality and utilities.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <PluginCard
          name="Forms"
          description="Form element styling"
          example="@tailwindcss/forms"
        />
        <PluginCard
          name="Typography"
          description="Typography plugin"
          example="@tailwindcss/typography"
        />
        <PluginCard
          name="Aspect Ratio"
          description="Aspect ratio utilities"
          example="@tailwindcss/aspect-ratio"
        />
      </div>

      <CodeExample
        language="js"
        code={`// Installing Plugins
npm install @tailwindcss/forms @tailwindcss/typography

// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

// Using Form Plugin
<input
  type="text"
  className="
    block 
    w-full 
    rounded-md 
    border-gray-300 
    shadow-sm 
    focus:border-indigo-500 
    focus:ring-indigo-500
  "
  placeholder="Enter text"
/>

// Using Typography Plugin
<article className="prose prose-lg dark:prose-invert">
  <h1>Article Title</h1>
  <p>Article content with beautiful typography...</p>
</article>

// Custom Plugin
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
      });
    }),
  ],
};`}
      />
    </div>
  );
}

// Reusable Components
function UtilityClass({ name, description }: { name: string; description: string }) {
  return (
    <div className="bg-white/5 rounded p-3">
      <div className="text-teal-300 font-mono text-xs mb-1">{name}</div>
      <div className="text-white/60 text-xs">{description}</div>
    </div>
  );
}

function Breakpoint({ name, size }: { name: string; size: string }) {
  return (
    <div className="text-center">
      <div className="text-teal-400 font-mono font-semibold">{name}</div>
      <div className="text-white/60 text-xs mt-1">{size}</div>
    </div>
  );
}

function PluginCard({ name, description, example }: { name: string; description: string; example: string }) {
  return (
    <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-4">
      <h4 className="text-teal-400 font-semibold mb-2">{name}</h4>
      <p className="text-white/60 text-sm mb-2">{description}</p>
      <code className="text-xs text-teal-300 font-mono">{example}</code>
    </div>
  );
}

// Challenges Section
function TailwindChallengesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Tailwind CSS Coding Challenges</h2>
        <p className="text-white/60 text-lg mb-8">
          Practice building beautiful UIs with Tailwind CSS utility classes. Create responsive, modern designs.
        </p>
      </div>

      <ChallengeCard
        level="Beginner"
        title="Challenge 1: Card Component"
        description="Create a beautiful card component with hover effects using only Tailwind classes."
        requirements={[
          "Card should have rounded corners, shadow, and padding",
          "Add hover effect that scales and changes shadow",
          "Include image, title, description, and button",
          "Use gradient background"
        ]}
        starterCode={`<div>
  {/* Create a card component with Tailwind classes */}
  <div>
    {/* Image */}
    {/* Title */}
    {/* Description */}
    {/* Button */}
  </div>
</div>`}
        solution={`<div className="p-6">
  <div className="
    max-w-sm 
    mx-auto 
    bg-gradient-to-br 
    from-blue-500 
    to-purple-600 
    rounded-xl 
    shadow-lg 
    overflow-hidden
    transform 
    transition-all 
    duration-300 
    hover:scale-105 
    hover:shadow-2xl
  ">
    <img 
      src="https://via.placeholder.com/400x200" 
      alt="Card"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">
        Card Title
      </h3>
      <p className="text-white/80 mb-4">
        This is a beautiful card component built with Tailwind CSS. 
        It has smooth hover effects and a gradient background.
      </p>
      <button className="
        px-6 
        py-2 
        bg-white 
        text-purple-600 
        rounded-lg 
        font-semibold 
        hover:bg-gray-100 
        transition-colors
      ">
        Learn More
      </button>
    </div>
  </div>
</div>`}
      />

      <ChallengeCard
        level="Beginner"
        title="Challenge 2: Responsive Navigation"
        description="Build a responsive navigation bar that collapses on mobile devices."
        requirements={[
          "Horizontal navigation on desktop",
          "Hamburger menu on mobile",
          "Smooth transitions",
          "Sticky positioning"
        ]}
        starterCode={`<nav>
  {/* Create responsive navigation */}
</nav>`}
        solution={`<nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center py-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        Logo
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
          About
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
          Services
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
          Contact
        </a>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    
    {/* Mobile Menu */}
    <div className="md:hidden pb-4">
      <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
        Home
      </a>
      <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
        About
      </a>
      <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
        Services
      </a>
      <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
        Contact
      </a>
    </div>
  </div>
</nav>`}
      />

      <ChallengeCard
        level="Intermediate"
        title="Challenge 3: Dashboard Layout"
        description="Create a dashboard layout with sidebar, header, and main content area."
        requirements={[
          "Sidebar with navigation items",
          "Header with user info",
          "Main content area with grid layout",
          "Responsive design (sidebar collapses on mobile)"
        ]}
        starterCode={`<div>
  {/* Create dashboard layout */}
</div>`}
        solution={`<div className="flex h-screen bg-gray-100">
  {/* Sidebar */}
  <aside className="
    w-64 
    bg-gray-800 
    text-white 
    hidden 
    md:block
  ">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="space-y-2">
        <a href="#" className="
          block 
          px-4 
          py-2 
          bg-blue-600 
          rounded-lg 
          hover:bg-blue-700 
          transition-colors
        ">
          Dashboard
        </a>
        <a href="#" className="
          block 
          px-4 
          py-2 
          hover:bg-gray-700 
          rounded-lg 
          transition-colors
        ">
          Analytics
        </a>
        <a href="#" className="
          block 
          px-4 
          py-2 
          hover:bg-gray-700 
          rounded-lg 
          transition-colors
        ">
          Settings
        </a>
      </nav>
    </div>
  </aside>
  
  {/* Main Content */}
  <div className="flex-1 flex flex-col overflow-hidden">
    {/* Header */}
    <header className="bg-white shadow-sm p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            JD
          </div>
        </div>
      </div>
    </header>
    
    {/* Content Area */}
    <main className="flex-1 overflow-y-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-green-600">$12,345</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Orders</h3>
          <p className="text-3xl font-bold text-purple-600">567</p>
        </div>
      </div>
    </main>
  </div>
</div>`}
      />

      <ChallengeCard
        level="Intermediate"
        title="Challenge 4: Form with Validation States"
        description="Build a form with different validation states using Tailwind classes."
        requirements={[
          "Input fields with focus states",
          "Error states with red borders and messages",
          "Success states with green indicators",
          "Disabled states"
        ]}
        starterCode={`<form>
  {/* Create form with validation states */}
</form>`}
        solution={`<form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
  
  {/* Name Input - Success State */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Name
    </label>
    <input
      type="text"
      value="John Doe"
      className="
        w-full 
        px-4 
        py-2 
        border-2 
        border-green-500 
        rounded-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-green-500
      "
    />
    <p className="text-green-600 text-sm mt-1">✓ Valid name</p>
  </div>
  
  {/* Email Input - Error State */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Email
    </label>
    <input
      type="email"
      value="invalid-email"
      className="
        w-full 
        px-4 
        py-2 
        border-2 
        border-red-500 
        rounded-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-red-500
      "
    />
    <p className="text-red-600 text-sm mt-1">✗ Please enter a valid email</p>
  </div>
  
  {/* Password Input - Default State */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Password
    </label>
    <input
      type="password"
      placeholder="Enter password"
      className="
        w-full 
        px-4 
        py-2 
        border-2 
        border-gray-300 
        rounded-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        focus:border-blue-500
      "
    />
  </div>
  
  {/* Disabled Input */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-500 mb-2">
      Disabled Field
    </label>
    <input
      type="text"
      value="Cannot edit"
      disabled
      className="
        w-full 
        px-4 
        py-2 
        border-2 
        border-gray-200 
        rounded-lg 
        bg-gray-100 
        text-gray-500 
        cursor-not-allowed
      "
    />
  </div>
  
  <button
    type="submit"
    className="
      w-full 
      px-4 
      py-2 
      bg-blue-600 
      text-white 
      rounded-lg 
      font-semibold 
      hover:bg-blue-700 
      focus:outline-none 
      focus:ring-2 
      focus:ring-blue-500 
      transition-colors
    "
  >
    Submit
  </button>
</form>`}
      />

      <ChallengeCard
        level="Advanced"
        title="Challenge 5: Animated Modal"
        description="Create a modal component with smooth animations using Tailwind's transition utilities."
        requirements={[
          "Backdrop with blur effect",
          "Modal that slides in from center",
          "Close button with hover effects",
          "Responsive sizing"
        ]}
        starterCode={`<div>
  {/* Create animated modal */}
</div>`}
        solution={`<div className="fixed inset-0 z-50 flex items-center justify-center">
  {/* Backdrop */}
  <div className="
    absolute 
    inset-0 
    bg-black/50 
    backdrop-blur-sm
    animate-fadeIn
  "></div>
  
  {/* Modal */}
  <div className="
    relative 
    bg-white 
    rounded-xl 
    shadow-2xl 
    max-w-md 
    w-full 
    mx-4 
    p-6
    transform 
    transition-all 
    duration-300
    animate-slideUp
  ">
    {/* Close Button */}
    <button className="
      absolute 
      top-4 
      right-4 
      text-gray-400 
      hover:text-gray-600 
      transition-colors
    ">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    
    {/* Modal Content */}
    <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
    <p className="text-gray-600 mb-6">
      This is a beautiful animated modal built with Tailwind CSS. 
      It includes smooth transitions and backdrop blur effects.
    </p>
    
    <div className="flex gap-4">
      <button className="
        flex-1 
        px-4 
        py-2 
        bg-gray-200 
        text-gray-800 
        rounded-lg 
        hover:bg-gray-300 
        transition-colors
      ">
        Cancel
      </button>
      <button className="
        flex-1 
        px-4 
        py-2 
        bg-blue-600 
        text-white 
        rounded-lg 
        hover:bg-blue-700 
        transition-colors
      ">
        Confirm
      </button>
    </div>
  </div>
</div>

<style jsx>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
  
  .animate-slideUp {
    animation: slideUp 0.3s ease-out;
  }
`}</style>`}
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
              <span className="text-teal-400 mt-1">•</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-3">Starter Code:</h4>
        <CodeExample language="html" code={starterCode} />
      </div>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="mb-4 px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 rounded-lg transition-colors"
      >
        {showSolution ? 'Hide Solution' : 'Show Solution'}
      </button>

      {showSolution && (
        <div>
          <h4 className="text-white font-semibold mb-3">Solution:</h4>
          <CodeExample language="html" code={solution} />
        </div>
      )}
    </div>
  );
}

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
        <code className="text-sm text-white/90 font-mono leading-relaxed">{code}</code>
      </pre>
    </div>
  );
}

