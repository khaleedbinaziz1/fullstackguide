'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiJest } from "react-icons/si";

export default function JestPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'matchers', title: 'Matchers' },
    { id: 'async', title: 'Async Testing' },
    { id: 'mocking', title: 'Mocking' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/testing" className="text-2xl font-bold gradient-text">
              FullstackGuide
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full border border-orange-500/30 mb-8">
              <SiJest className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-semibold">Jest Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Jest</span>
              <span className="text-white block text-4xl">JavaScript Testing Framework</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn unit testing, mocking, async testing, snapshots, and building reliable test suites with Jest.
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
                          ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
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
              {activeSection === 'matchers' && <MatchersSection />}
              {activeSection === 'async' && <AsyncSection />}
              {activeSection === 'mocking' && <MockingSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Jest Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Jest is a JavaScript testing framework. Write tests with describe, test/it, and expect assertions.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Installation
npm install --save-dev jest

# Run Tests
npm test
npx jest`}
      />

      <CodeExample
        language="javascript"
        code={`// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

// math.test.js
const { add, subtract } = require('./math');

describe('Math functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});

// Using it instead of test
it('should add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});`}
      />
    </div>
  );
}

function MatchersSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Matchers</h2>
        <p className="text-white/60 text-lg mb-8">
          Jest provides many matchers to test different values. Learn equality, truthiness, numbers, strings, and more.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Equality
expect(value).toBe(4); // Exact equality
expect(value).toEqual({ name: 'John' }); // Deep equality

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();

// Numbers
expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3.5);
expect(value).toBeLessThan(5);
expect(value).toBeLessThanOrEqual(4.5);
expect(0.1 + 0.2).toBeCloseTo(0.3);

// Strings
expect('team').toMatch(/ea/);
expect('team').not.toMatch(/i/);

// Arrays
expect(['apple', 'banana']).toContain('apple');

// Objects
expect({ name: 'John' }).toHaveProperty('name');
expect({ name: 'John', age: 30 }).toMatchObject({ name: 'John' });

// Exceptions
expect(() => {
  throw new Error('Error');
}).toThrow();
expect(() => {
  throw new Error('Error');
}).toThrow('Error');`}
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
          Test asynchronous code using Promises, async/await, and callbacks. Handle timing and async operations.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Promises
test('fetches user data', () => {
  return fetchUser().then(data => {
    expect(data).toHaveProperty('name');
  });
});

// Async/Await
test('fetches user data', async () => {
  const data = await fetchUser();
  expect(data).toHaveProperty('name');
});

// Async with resolves/rejects
test('fetches user data', async () => {
  await expect(fetchUser()).resolves.toHaveProperty('name');
});

test('handles error', async () => {
  await expect(fetchUser('invalid')).rejects.toThrow();
});

// Callbacks
test('calls callback', (done) => {
  function callback(data) {
    expect(data).toBe('success');
    done();
  }
  fetchData(callback);
});

// Timers
jest.useFakeTimers();
test('waits 1 second', () => {
  setTimeout(() => {
    expect(true).toBe(true);
  }, 1000);
  
  jest.advanceTimersByTime(1000);
});`}
      />
    </div>
  );
}

function MockingSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Mocking</h2>
        <p className="text-white/60 text-lg mb-8">
          Mock functions and modules to isolate code under test. Control return values and verify function calls.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Mock Functions
const mockFn = jest.fn();
mockFn('arg1', 'arg2');
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
expect(mockFn).toHaveBeenCalledTimes(1);

// Mock Return Values
const mockFn = jest.fn();
mockFn.mockReturnValue(42);
expect(mockFn()).toBe(42);

mockFn.mockResolvedValue({ id: 1, name: 'John' });
await expect(mockFn()).resolves.toEqual({ id: 1, name: 'John' });

// Mock Modules
jest.mock('./api');
const api = require('./api');
api.fetchUser.mockResolvedValue({ name: 'John' });

// Spy on Methods
const obj = {
  method: () => 'original'
};
const spy = jest.spyOn(obj, 'method');
obj.method();
expect(spy).toHaveBeenCalled();

// Restore
spy.mockRestore();

// Clear Mocks
mockFn.mockClear(); // Clears call history
jest.clearAllMocks(); // Clears all mocks`}
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
          Follow these patterns for maintainable and reliable test suites.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Arrange-Act-Assert Pattern
test('calculates total', () => {
  // Arrange
  const items = [{ price: 10 }, { price: 20 }];
  
  // Act
  const total = calculateTotal(items);
  
  // Assert
  expect(total).toBe(30);
});

// Test Isolation
beforeEach(() => {
  // Reset state before each test
});

afterEach(() => {
  // Cleanup after each test
});

// Descriptive Test Names
test('should return error when email is invalid', () => {
  // ...
});

// Test One Thing
test('validates email format', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('invalid')).toBe(false);
});

// Coverage
// jest --coverage

// Setup Files
// jest.config.js
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'node',
};`}
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

