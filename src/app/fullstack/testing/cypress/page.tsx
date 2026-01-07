'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiCypress } from "react-icons/si";

export default function CypressPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'commands', title: 'Commands' },
    { id: 'assertions', title: 'Assertions' },
    { id: 'fixtures', title: 'Fixtures' },
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-700/20 to-gray-900/20 rounded-full border border-gray-700/30 mb-8">
              <SiCypress className="w-5 h-5 text-gray-300" />
              <span className="text-gray-300 font-semibold">Cypress Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Cypress</span>
              <span className="text-white block text-4xl">End-to-End Testing</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn browser automation, time-travel debugging, and writing reliable end-to-end tests with Cypress.
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
                          ? 'bg-gray-600/20 text-gray-300 border border-gray-500/30'
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
              {activeSection === 'commands' && <CommandsSection />}
              {activeSection === 'assertions' && <AssertionsSection />}
              {activeSection === 'fixtures' && <FixturesSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Cypress Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Cypress is a JavaScript end-to-end testing framework. It runs in the browser and provides time-travel debugging.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Installation
npm install --save-dev cypress

# Open Cypress
npx cypress open

# Run headless
npx cypress run`}
      />

      <CodeExample
        language="javascript"
        code={`// Basic Test (cypress/e2e/example.cy.js)
describe('Login Page', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    cy.get('[data-cy=email]').type('user@example.com');
    cy.get('[data-cy=password]').type('password123');
    cy.get('[data-cy=submit]').click();
    cy.url().should('include', '/dashboard');
  });
});

// Visit a page
cy.visit('https://example.com');

// Query elements
cy.get('button');
cy.get('.class-name');
cy.get('#id');
cy.get('[data-cy=submit]'); // Recommended`}
      />
    </div>
  );
}

function CommandsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Commands</h2>
        <p className="text-white/60 text-lg mb-8">
          Cypress provides commands for interacting with elements, waiting, and navigation.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Clicking
cy.get('button').click();
cy.get('button').dblclick();

// Typing
cy.get('input').type('Hello World');
cy.get('input').clear().type('New text');

// Selecting
cy.get('select').select('option1');

// Checkboxes and Radio
cy.get('[type=checkbox]').check();
cy.get('[type=radio]').check('radio1');

// File Upload
cy.get('input[type=file]').selectFile('path/to/file.jpg');

// Waiting
cy.wait(1000); // Wait for milliseconds
cy.get('.loading').should('not.exist');

// Navigation
cy.go('back');
cy.go('forward');
cy.reload();

// Aliases
cy.get('button').as('submitBtn');
cy.get('@submitBtn').click();`}
      />
    </div>
  );
}

function AssertionsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Assertions</h2>
        <p className="text-white/60 text-lg mb-8">
          Cypress assertions verify the state of your application. Use should() and expect().
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Should Assertions
cy.get('button').should('be.visible');
cy.get('input').should('have.value', 'text');
cy.get('.error').should('not.exist');
cy.get('h1').should('contain', 'Welcome');

// URL Assertions
cy.url().should('include', '/dashboard');
cy.url().should('eq', 'https://example.com/dashboard');

// Request/Response Assertions
cy.request('GET', '/api/users').then((response) => {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.property('users');
});

// Custom Assertions
cy.get('.user-count').should(($el) => {
  expect(parseInt($el.text())).to.be.greaterThan(0);
});`}
      />
    </div>
  );
}

function FixturesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Fixtures</h2>
        <p className="text-white/60 text-lg mb-8">
          Fixtures provide test data. Store JSON files and load them in tests.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// fixtures/users.json
{
  "user": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}

// Use Fixtures
cy.fixture('users').then((users) => {
  cy.get('[data-cy=email]').type(users.user.email);
});

// Or using alias
cy.fixture('users').as('users');
cy.get('@users').then((users) => {
  // Use users
});

// API Mocking
cy.intercept('GET', '/api/users', { fixture: 'users.json' }).as('getUsers');
cy.visit('/users');
cy.wait('@getUsers');`}
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
          Follow these patterns for maintainable and reliable Cypress tests.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Use data-cy attributes
cy.get('[data-cy=submit-button]'); // Better than .submit-btn

// Custom Commands (cypress/support/commands.js)
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('[data-cy=email]').type(email);
  cy.get('[data-cy=password]').type(password);
  cy.get('[data-cy=submit]').click();
});

// Use it
cy.login('user@example.com', 'password');

// Page Object Pattern
class LoginPage {
  visit() {
    cy.visit('/login');
  }
  
  fillEmail(email) {
    cy.get('[data-cy=email]').type(email);
  }
  
  submit() {
    cy.get('[data-cy=submit]').click();
  }
}

const loginPage = new LoginPage();
loginPage.visit();
loginPage.fillEmail('user@example.com');`}
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

