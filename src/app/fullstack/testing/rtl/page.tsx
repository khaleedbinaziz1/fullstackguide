'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiTestinglibrary } from "react-icons/si";

export default function RTLPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'queries', title: 'Queries' },
    { id: 'user-events', title: 'User Events' },
    { id: 'async', title: 'Async Testing' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/testing" className="text-2xl font-bold gradient-text">
              Open Stack JS
            </Link>
            <Link href="/fullstack/testing" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Testing
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600/20 to-red-600/20 rounded-full border border-pink-500/30 mb-8">
              <SiTestinglibrary className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 font-semibold">React Testing Library Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">React Testing Library</span>
              <span className="text-white block text-4xl">Test Like a User</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Simple and complete testing utilities for React. Test components the way users interact with them.
            </p>
          </div>

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
                          ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="col-span-9">
              {activeSection === 'basics' && <BasicsSection />}
              {activeSection === 'queries' && <QueriesSection />}
              {activeSection === 'user-events' && <UserEventsSection />}
              {activeSection === 'async' && <AsyncSection />}
              {activeSection === 'best-practices' && <BestPracticesSection />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function BasicsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">React Testing Library Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          React Testing Library focuses on testing components from the user's perspective. It encourages accessible queries.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Installation
npm install --save-dev @testing-library/react @testing-library/jest-dom`}
      />

      <CodeExample
        language="javascript"
        code={`// Basic Test
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button', () => {
  render(<Button>Click me</Button>);
  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toBeInTheDocument();
});

// Component Test
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

test('displays user name', () => {
  const user = { name: 'John Doe', email: 'john@example.com' };
  render(<UserProfile user={user} />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});`}
      />
    </div>
  );
}

function QueriesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Queries</h2>
        <p className="text-white/60 text-lg mb-8">
          Query elements by accessibility roles, text content, labels, and test IDs. Prefer accessible queries.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// getByRole (Recommended)
screen.getByRole('button', { name: /submit/i });
screen.getByRole('textbox', { name: /email/i });

// getByLabelText (Recommended)
screen.getByLabelText(/email address/i);

// getByPlaceholderText
screen.getByPlaceholderText(/enter email/i);

// getByText
screen.getByText(/welcome/i);

// getByDisplayValue
screen.getByDisplayValue('john@example.com');

// getByTestId (Last resort)
screen.getByTestId('submit-button');

// Query All
const buttons = screen.getAllByRole('button');

// Query with options
screen.getByRole('button', { 
  name: /submit/i,
  hidden: true // Include hidden elements
});

// Find queries (async)
const button = await screen.findByRole('button');

// Query by accessible name
screen.getByRole('button', { name: /submit form/i });`}
      />
    </div>
  );
}

function UserEventsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">User Events</h2>
        <p className="text-white/60 text-lg mb-8">
          Simulate user interactions with user-event library. More realistic than fireEvent.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('user can type in input', async () => {
  const user = userEvent.setup();
  render(<input />);
  const input = screen.getByRole('textbox');
  
  await user.type(input, 'Hello World');
  expect(input).toHaveValue('Hello World');
});

// Click
await user.click(screen.getByRole('button'));

// Type
await user.type(screen.getByRole('textbox'), 'text');

// Clear
await user.clear(screen.getByRole('textbox'));

// Select Options
await user.selectOptions(screen.getByRole('combobox'), 'option1');

// Upload File
const file = new File(['hello'], 'hello.png', { type: 'image/png' });
await user.upload(screen.getByLabelText(/upload/i), file);

// Keyboard
await user.keyboard('{Enter}');
await user.keyboard('{Tab}');`}
      />
    </div>
  );
}

function AsyncSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Async Testing</h2>
        <p className="text-white/60 text-lg mb-8">
          Wait for async operations to complete using waitFor, findBy queries, and async utilities.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`import { waitFor } from '@testing-library/react';

// Wait for element
await waitFor(() => {
  expect(screen.getByText('Success')).toBeInTheDocument();
});

// Wait for with options
await waitFor(
  () => {
    expect(screen.getByText('Success')).toBeInTheDocument();
  },
  { timeout: 3000 }
);

// Find by queries (automatically wait)
const message = await screen.findByText('Success');

// Wait for element to disappear
await waitFor(() => {
  expect(screen.queryByText('Loading')).not.toBeInTheDocument();
});

// waitForElementToBeRemoved
import { waitForElementToBeRemoved } from '@testing-library/react';

await waitForElementToBeRemoved(() => screen.getByText('Loading'));`}
      />
    </div>
  );
}

function BestPracticesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Best Practices</h2>
        <p className="text-white/60 text-lg mb-8">
          Follow these patterns to write accessible and maintainable tests.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Query Priority
// 1. getByRole (most accessible)
// 2. getByLabelText
// 3. getByPlaceholderText
// 4. getByText
// 5. getByDisplayValue
// 6. getByTestId (last resort)

// Test user interactions, not implementation
// Good
test('submits form', async () => {
  const user = userEvent.setup();
  render(<Form />);
  await user.type(screen.getByLabelText(/email/i), 'test@example.com');
  await user.click(screen.getByRole('button', { name: /submit/i }));
  expect(await screen.findByText(/success/i)).toBeInTheDocument();
});

// Bad (testing implementation)
test('calls onSubmit', () => {
  const onSubmit = jest.fn();
  render(<Form onSubmit={onSubmit} />);
  // Testing internal implementation
});

// Use data-testid sparingly
// Only when no other query works

// Mock modules
jest.mock('./api');
import * as api from './api';
api.fetchUser.mockResolvedValue({ name: 'John' });`}
      />
    </div>
  );
}

function CodeExample({ code, language = 'javascript' }: { code: string; language?: string }) {
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

