'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaUserShield } from "react-icons/fa";

export default function ClerkPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'authentication', title: 'Authentication' },
    { id: 'users', title: 'User Management' },
    { id: 'webhooks', title: 'Webhooks' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/auth" className="text-2xl font-bold gradient-text">
              Open Stack JS
            </Link>
            <Link href="/fullstack/auth" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Auth
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-700/20 to-gray-900/20 rounded-full border border-gray-700/30 mb-8">
              <FaUserShield className="w-5 h-5 text-gray-300" />
              <span className="text-gray-300 font-semibold">Clerk Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Clerk</span>
              <span className="text-white block text-4xl">Complete Authentication</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn Clerk authentication, user management, social logins, MFA, and session management.
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
              {activeSection === 'authentication' && <AuthenticationSection />}
              {activeSection === 'users' && <UsersSection />}
              {activeSection === 'webhooks' && <WebhooksSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Clerk Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Clerk provides complete authentication and user management. Handle sign-up, sign-in, social providers, and sessions.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Installation (Next.js)
npm install @clerk/nextjs`}
      />

      <CodeExample
        language="javascript"
        code={`// app/layout.tsx (Next.js App Router)
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
}

// Environment Variables
// NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
// CLERK_SECRET_KEY=sk_test_...`}
      />
    </div>
  );
}

function AuthenticationSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Authentication</h2>
        <p className="text-white/60 text-lg mb-8">
          Implement sign-up, sign-in, and social authentication with Clerk components and hooks.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Sign Up Component
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return <SignUp />;
}

// Sign In Component
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return <SignIn />;
}

// Protected Route (Middleware)
import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/'],
});

// Use Auth Hook
import { useAuth } from '@clerk/nextjs';

function Profile() {
  const { userId, isSignedIn } = useAuth();
  
  if (!isSignedIn) {
    return <div>Please sign in</div>;
  }
  
  return <div>User ID: {userId}</div>;
}`}
      />
    </div>
  );
}

function UsersSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">User Management</h2>
        <p className="text-white/60 text-lg mb-8">
          Access user data, update profiles, and manage user sessions with Clerk's user management API.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Get Current User
import { currentUser } from '@clerk/nextjs';

export default async function ProfilePage() {
  const user = await currentUser();
  
  return (
    <div>
      <h1>{user.firstName} {user.lastName}</h1>
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}

// Server-side User Access
import { auth } from '@clerk/nextjs';

export default async function ApiRoute() {
  const { userId } = auth();
  
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  // Use userId to fetch user data
}`}
      />
    </div>
  );
}

function WebhooksSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Webhooks</h2>
        <p className="text-white/60 text-lg mb-8">
          Receive events from Clerk using webhooks. Sync user data and handle authentication events.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Webhook Handler (Next.js)
import { Webhook } from 'svix';
import { headers } from 'next/headers';

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
  
  const headerPayload = headers();
  const svixHeaders = {
    'svix-id': headerPayload.get('svix-id'),
    'svix-timestamp': headerPayload.get('svix-timestamp'),
    'svix-signature': headerPayload.get('svix-signature'),
  };
  
  const payload = await req.json();
  const body = JSON.stringify(payload);
  
  const wh = new Webhook(WEBHOOK_SECRET);
  
  let evt;
  try {
    evt = wh.verify(body, svixHeaders);
  } catch (err) {
    return new Response('Error', { status: 400 });
  }
  
  // Handle event
  if (evt.type === 'user.created') {
    // User created
  }
  
  return new Response('', { status: 200 });
}`}
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
          Follow these patterns for secure and maintainable Clerk implementations.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Protect API Routes
import { auth } from '@clerk/nextjs';

export async function GET() {
  const { userId } = auth();
  
  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // Handle request
}

// Use Environment Variables
// Store keys securely
// Never commit secrets

// Configure Social Providers
// In Clerk Dashboard
// Enable OAuth providers (Google, GitHub, etc.)

// Customize UI
// Use Clerk's theming options
// Match your brand colors`}
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

