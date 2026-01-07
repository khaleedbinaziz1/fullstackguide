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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/frontend" className="text-2xl font-bold gradient-text">
              FullstackGuide
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

