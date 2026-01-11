'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiNextdotjs } from "react-icons/si";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CodeExample from "@/components/CodeExample";
import FlowDiagram from "@/components/FlowDiagram";
import ConceptCard from "@/components/ConceptCard";

export default function NextJSPage() {
  const [activeSection, setActiveSection] = useState<string | null>('routing');

  const sections = [
    { id: 'routing', title: 'Routing' },
    { id: 'rendering', title: 'Rendering' },
    { id: 'data-fetching', title: 'Data Fetching' },
    { id: 'caching', title: 'Caching' },
    { id: 'api-routes', title: 'API Routes' },
    { id: 'deployment', title: 'Deployment' },
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-700/20 to-gray-900/20 rounded-full border border-gray-600/30 mb-8">
              <SiNextdotjs className="w-5 h-5 text-gray-300" />
              <span className="text-gray-300 font-semibold">Next.js 14 Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Next.js</span>
              <span className="text-white block text-4xl">The React Framework for Production</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn Next.js 14 with App Router, Server Components, Data Fetching, Caching, and deployment strategies.
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

            {/* Content Area */}
            <div className="col-span-9">
              {activeSection === 'routing' && <RoutingSection />}
              {activeSection === 'rendering' && <RenderingSection />}
              {activeSection === 'data-fetching' && <DataFetchingSection />}
              {activeSection === 'caching' && <CachingSection />}
              {activeSection === 'api-routes' && <APIRoutesSection />}
              {activeSection === 'deployment' && <DeploymentSection />}
              {activeSection === 'challenges' && <NextJSChallengesSection />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Section 1: Routing
function RoutingSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Routing</h2>
        <p className="text-white/60 text-lg mb-8">
          Next.js uses a file-based routing system. Files and folders in the app directory create routes automatically.
        </p>
      </div>

      {/* Fundamental Concept */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-3">🎯 Core Concept: File-Based Routing</h3>
        <p className="text-white/70 leading-relaxed">
          Next.js automatically creates routes based on your file structure. Each <code className="text-purple-300 bg-purple-500/20 px-1.5 py-0.5 rounded">page.tsx</code> file becomes a route. 
          Folders create URL segments, and special file names like <code className="text-purple-300 bg-purple-500/20 px-1.5 py-0.5 rounded">[slug]</code> create dynamic routes.
        </p>
      </div>

      {/* Visual File Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-600/10 border border-gray-600/30 rounded-lg p-6">
          <h3 className="text-gray-300 font-semibold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            File Structure
          </h3>
          <div className="font-mono text-sm space-y-1 text-white/80 bg-black/20 p-4 rounded">
            <div className="text-gray-400">📁 app/</div>
            <div className="ml-4 text-cyan-400 flex items-center gap-2">
              📄 page.tsx 
              <span className="text-white/40">→</span>
              <span className="text-green-400">/</span>
            </div>
            <div className="ml-4 text-gray-400">📁 about/</div>
            <div className="ml-8 text-cyan-400 flex items-center gap-2">
              📄 page.tsx 
              <span className="text-white/40">→</span>
              <span className="text-green-400">/about</span>
            </div>
            <div className="ml-4 text-gray-400">📁 blog/</div>
            <div className="ml-8 text-purple-400 flex items-center gap-2">
              📁 [slug]/
            </div>
            <div className="ml-12 text-cyan-400 flex items-center gap-2">
              📄 page.tsx 
              <span className="text-white/40">→</span>
              <span className="text-green-400">/blog/:slug</span>
            </div>
            <div className="ml-4 text-gray-400">📁 products/</div>
            <div className="ml-8 text-orange-400 flex items-center gap-2">
              📁 [...slug]/
            </div>
            <div className="ml-12 text-cyan-400 flex items-center gap-2">
              📄 page.tsx 
              <span className="text-white/40">→</span>
              <span className="text-green-400">/products/*</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-600/10 border border-gray-600/30 rounded-lg p-6">
          <h3 className="text-gray-300 font-semibold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Route Types
          </h3>
          <div className="space-y-4">
            <ConceptCard
              title="Static Routes"
              description="Fixed URL paths that don't change"
              code="app/page.tsx → /"
              color="from-blue-500 to-cyan-500"
              examples={["/", "/about", "/contact"]}
            />
            <ConceptCard
              title="Dynamic Routes"
              description="Routes with parameters that change"
              code="app/[id]/page.tsx → /:id"
              color="from-purple-500 to-pink-500"
              examples={["/blog/123", "/users/456"]}
            />
            <ConceptCard
              title="Catch-all Routes"
              description="Matches multiple path segments"
              code="app/[...slug]/page.tsx → /*"
              color="from-green-500 to-emerald-500"
              examples={["/docs/a/b/c", "/products/cat/subcat"]}
            />
          </div>
        </div>
      </div>

      {/* Visual Routing Flow */}
      <FlowDiagram
        title="How Next.js Routing Works"
        steps={[
          { 
            label: "User clicks link", 
            description: "Link component triggers navigation",
            color: "from-blue-500 to-cyan-500"
          },
          { 
            label: "Next.js matches URL", 
            description: "Finds matching page.tsx file",
            color: "from-purple-500 to-pink-500"
          },
          { 
            label: "Loads component", 
            description: "Fetches data if needed",
            color: "from-green-500 to-emerald-500"
          },
          { 
            label: "Renders page", 
            description: "Server or client rendering",
            color: "from-orange-500 to-yellow-500"
          },
          { 
            label: "Updates URL", 
            description: "Browser URL changes",
            color: "from-pink-500 to-red-500"
          },
        ]}
      />

      <CodeExample
        language="tsx"
        code={`// app/page.tsx - Home page (/)
export default function HomePage() {
  return <h1>Home Page</h1>;
}

// app/about/page.tsx - About page (/about)
export default function AboutPage() {
  return <h1>About Page</h1>;
}

// app/blog/[slug]/page.tsx - Dynamic route (/blog/hello-world)
interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  return <h1>Blog Post: {params.slug}</h1>;
}

// Navigation with Link component
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/my-post">Blog Post</Link>
    </nav>
  );
}

// Programmatic Navigation
'use client';

import { useRouter } from 'next/navigation';

export default function Button() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/about');
  };
  
  return <button onClick={handleClick}>Go to About</button>;
}`}
      />
    </div>
  );
}

// Section 2: Rendering
function RenderingSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Rendering</h2>
        <p className="text-white/60 text-lg mb-8">
          Next.js supports Server Components (default) and Client Components. Choose the right rendering strategy for your use case.
        </p>
      </div>

      {/* Fundamental Concept */}
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-4 sm:p-6 mb-8 overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-3">🎯 Core Concept: Server vs Client Components</h3>
        <p className="text-white/70 leading-relaxed mb-4">
          Next.js 14 introduces <strong className="text-white">Server Components</strong> (default) that run on the server, and <strong className="text-white">Client Components</strong> (with 'use client') that run in the browser. 
          This hybrid approach gives you the best of both worlds: server performance and client interactivity.
        </p>
        <div className="w-full overflow-x-auto -mx-2 px-2">
          <FlowDiagram
            steps={[
              { 
                label: "Server Component", 
                description: "Rendered on server, sent as HTML",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                label: "Client Component", 
                description: "Rendered in browser, interactive",
                color: "from-purple-500 to-pink-500"
              },
              { 
                label: "Hybrid App", 
                description: "Best of both worlds",
                color: "from-green-500 to-emerald-500"
              },
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <ConceptCard
          title="Server Components"
          description="Default in Next.js 14. These components render on the server and send HTML to the client. They cannot use browser APIs or React hooks."
          code={`// No 'use client' needed
export default async function ServerComponent() {
  const data = await fetch('...');
  return <div>{data}</div>;
}`}
          color="from-blue-500 to-cyan-500"
          whenToUse={[
            "Fetching data from databases",
            "Accessing backend resources",
            "Sensitive information (API keys)",
            "Large dependencies",
            "Components that don't need interactivity"
          ]}
        />

        <ConceptCard
          title="Client Components"
          description="Components that run in the browser. Use 'use client' directive. Can use hooks, event handlers, and browser APIs."
          code={`'use client';

import { useState } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`}
          color="from-purple-500 to-pink-500"
          whenToUse={[
            "Interactive elements (buttons, forms)",
            "Using React hooks (useState, useEffect)",
            "Browser APIs (localStorage, window)",
            "Event handlers (onClick, onChange)",
            "Third-party libraries requiring interactivity"
          ]}
        />
      </div>

      {/* Visual Comparison */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Visual Comparison</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-blue-400 font-semibold mb-3">Server Component Flow</div>
            <FlowDiagram
              direction="vertical"
              steps={[
                { label: "Server", description: "Component renders here" },
                { label: "Fetch Data", description: "Direct database access" },
                { label: "Generate HTML", description: "Server-side rendering" },
                { label: "Send to Browser", description: "HTML streamed" },
              ]}
            />
          </div>
          <div>
            <div className="text-purple-400 font-semibold mb-3">Client Component Flow</div>
            <FlowDiagram
              direction="vertical"
              steps={[
                { label: "Browser", description: "Component renders here" },
                { label: "Load JS Bundle", description: "JavaScript sent" },
                { label: "Hydrate Component", description: "Make interactive" },
                { label: "Handle Events", description: "User interactions" },
              ]}
            />
          </div>
        </div>
      </div>

      <CodeExample
        language="tsx"
        title="Complete Example: Server + Client Components"
        explanation="This example shows how Server and Client Components work together in Next.js."
        code={`// Server Component (default) - app/page.tsx
// Can directly fetch data, no 'use client' needed
async function HomePage() {
  // ✅ Fetch data directly in Server Component
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();

  return (
    <div>
      <h1>Home Page</h1>
      <p>{json.message}</p>
      {/* ✅ Can import and use Client Components */}
      <InteractiveButton />
    </div>
  );
}

// Client Component - components/Button.tsx
'use client'; // ✅ Required for Client Components

import { useState } from 'react';

export default function InteractiveButton() {
  // ✅ Can use React hooks in Client Components
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// Layouts - app/layout.tsx
// ✅ Layouts are Server Components by default
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>Navigation</nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}

// Loading UI - app/loading.tsx
// ✅ Automatically shows while page loads
export default function Loading() {
  return <div>Loading...</div>;
}

// Error Handling - app/error.tsx
'use client'; // ✅ Error boundaries must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}`}
      />
    </div>
  );
}

// Section 3: Data Fetching
function DataFetchingSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Data Fetching</h2>
        <p className="text-white/60 text-lg mb-8">
          Next.js provides several methods for fetching data in Server Components, Client Components, and API Routes.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
          <h3 className="text-green-400 font-semibold mb-3">Server Components</h3>
          <p className="text-white/60 text-sm">Direct async/await in Server Components</p>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
          <h3 className="text-blue-400 font-semibold mb-3">Route Handlers</h3>
          <p className="text-white/60 text-sm">API endpoints for data fetching</p>
        </div>
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-purple-400 font-semibold mb-3">Client Components</h3>
          <p className="text-white/60 text-sm">useEffect or SWR/React Query</p>
        </div>
      </div>

      <CodeExample
        language="tsx"
        code={`// Data Fetching in Server Components
async function BlogPosts() {
  // Direct fetch in Server Component
  const res = await fetch('https://api.example.com/posts', {
    cache: 'no-store', // Always fetch fresh data
    // or
    // next: { revalidate: 3600 } // Revalidate every hour
  });
  
  const posts = await res.json();

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}

// Data Fetching with Route Handlers
// app/api/posts/route.ts
export async function GET() {
  const posts = await fetchPostsFromDatabase();
  return Response.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const post = await createPost(body);
  return Response.json(post, { status: 201 });
}

// Using Route Handler in Client Component
'use client';

import { useEffect, useState } from 'react';

export default function PostsClient() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

// Streaming with Suspense
import { Suspense } from 'react';

function Loading() {
  return <div>Loading posts...</div>;
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <BlogPosts />
    </Suspense>
  );
}`}
      />
    </div>
  );
}

// Section 4: Caching
function CachingSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Caching</h2>
        <p className="text-white/60 text-lg mb-8">
          Next.js provides multiple caching strategies to optimize performance and reduce server load.
        </p>
      </div>

      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 mb-8">
        <h3 className="text-orange-400 font-semibold mb-4">Caching Strategies</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-white font-semibold mb-2">Request Memoization</div>
            <div className="text-white/60">Deduplicates fetch requests during render</div>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Data Cache</div>
            <div className="text-white/60">Persists fetch results across requests</div>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Full Route Cache</div>
            <div className="text-white/60">Caches entire rendered routes</div>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Router Cache</div>
            <div className="text-white/60">Caches route segments in browser</div>
          </div>
        </div>
      </div>

      <CodeExample
        language="tsx"
        code={`// Request Memoization (automatic)
async function Component() {
  // These are automatically deduplicated
  const user1 = await fetch('https://api.example.com/user/1');
  const user2 = await fetch('https://api.example.com/user/1'); // Same request
  
  // Both return the same cached result
}

// Data Cache - Default behavior
async function getData() {
  // This is cached by default
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

// Force Dynamic (no cache)
async function getDynamicData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store', // Don't cache
  });
  return res.json();
}

// Time-based Revalidation
async function getRevalidatedData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 }, // Revalidate every hour
  });
  return res.json();
}

// On-demand Revalidation
// app/api/revalidate/route.ts
export async function POST(request: Request) {
  const { path } = await request.json();
  
  revalidatePath(path);
  // or
  revalidateTag('collection');
  
  return Response.json({ revalidated: true });
}

// Opt out of caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page() {
  // This page will always be dynamically rendered
  const data = await fetchData();
  return <div>{data}</div>;
}`}
      />
    </div>
  );
}

// Section 5: API Routes
function APIRoutesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">API Routes</h2>
        <p className="text-white/60 text-lg mb-8">
          Route Handlers allow you to create API endpoints within your Next.js application using the Web Request and Response APIs.
        </p>
      </div>

      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mb-8">
        <h3 className="text-purple-400 font-semibold mb-4">HTTP Methods</h3>
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="text-white/80">GET</div>
          <div className="text-white/80">POST</div>
          <div className="text-white/80">PUT</div>
          <div className="text-white/80">DELETE</div>
          <div className="text-white/80">PATCH</div>
          <div className="text-white/80">HEAD</div>
          <div className="text-white/80">OPTIONS</div>
        </div>
      </div>

      <CodeExample
        language="ts"
        code={`// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

// GET handler
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');

  if (id) {
    const user = await getUserById(id);
    return NextResponse.json(user);
  }

  const users = await getAllUsers();
  return NextResponse.json(users);
}

// POST handler
export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // Validate body
  if (!body.name || !body.email) {
    return NextResponse.json(
      { error: 'Name and email are required' },
      { status: 400 }
    );
  }

  const user = await createUser(body);
  return NextResponse.json(user, { status: 201 });
}

// PUT handler
export async function PUT(request: NextRequest) {
  const body = await request.json();
  const user = await updateUser(body);
  return NextResponse.json(user);
}

// DELETE handler
export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');
  
  await deleteUser(id);
  return NextResponse.json({ success: true });
}

// Dynamic Route Handler
// app/api/users/[id]/route.ts
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await getUserById(params.id);
  
  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}

// Route Segment Config
export const runtime = 'edge'; // Use Edge Runtime
export const dynamic = 'force-dynamic';
export const revalidate = 0;`}
      />
    </div>
  );
}

// Section 6: Deployment
function DeploymentSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Deployment</h2>
        <p className="text-white/60 text-lg mb-8">
          Next.js applications can be deployed to various platforms. Vercel provides the best Next.js experience.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
          <h3 className="text-green-400 font-semibold mb-4">Vercel (Recommended)</h3>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>✓ Zero configuration</li>
            <li>✓ Automatic optimizations</li>
            <li>✓ Edge network</li>
            <li>✓ Serverless functions</li>
            <li>✓ Preview deployments</li>
          </ul>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
          <h3 className="text-blue-400 font-semibold mb-4">Other Platforms</h3>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>• Docker containers</li>
            <li>• Node.js servers</li>
            <li>• Static exports</li>
            <li>• Custom servers</li>
          </ul>
        </div>
      </div>

      <CodeExample
        language="bash"
        code={`# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Deploy to production
vercel --prod

# Environment Variables
# .env.local (local development)
DATABASE_URL=postgresql://...
API_KEY=your-api-key

# next.config.js
module.exports = {
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

# Static Export
// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

# Docker Deployment
# Dockerfile
FROM node:18-alpine AS base
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]`}
      />
    </div>
  );
}

// Challenges Section
function NextJSChallengesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Next.js Coding Challenges</h2>
        <p className="text-white/60 text-lg mb-8">
          Practice Next.js 14 with App Router, Server Components, and API Routes through these challenges.
        </p>
      </div>

      <ChallengeCard
        level="Beginner"
        title="Challenge 1: Dynamic Routes"
        description="Create a blog system with dynamic routes for individual blog posts."
        requirements={[
          "Create app/blog/[slug]/page.tsx for dynamic routes",
          "Fetch blog post data based on slug parameter",
          "Display post title, content, and date",
          "Handle 404 for non-existent posts"
        ]}
        starterCode={`// app/blog/[slug]/page.tsx
interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: PageProps) {
  // TODO: Fetch and display blog post
  return <div>{/* Blog post content */}</div>;
}`}
        solution={`// app/blog/[slug]/page.tsx
interface PageProps {
  params: {
    slug: string;
  };
}

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  date: string;
}

export default async function BlogPost({ params }: PageProps) {
  // In real app, fetch from database or API
  const post: BlogPost | null = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-6">{post.date}</p>
      <div className="prose">{post.content}</div>
    </article>
  );
}

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Mock data - replace with actual API call
  const posts: BlogPost[] = [
    {
      slug: 'hello-world',
      title: 'Hello World',
      content: 'This is my first blog post...',
      date: '2024-01-01'
    }
  ];
  return posts.find(p => p.slug === slug) || null;
}`}
      />

      <ChallengeCard
        level="Beginner"
        title="Challenge 2: Server Component Data Fetching"
        description="Create a products page that fetches data in a Server Component."
        requirements={[
          "Create app/products/page.tsx as Server Component",
          "Fetch products from an API",
          "Display products in a grid layout",
          "Add loading.tsx for loading state"
        ]}
        starterCode={`// app/products/page.tsx
export default async function ProductsPage() {
  // TODO: Fetch products
  return <div>{/* Products grid */}</div>;
}`}
        solution={`// app/products/page.tsx
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default async function ProductsPage() {
  const products = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 } // Revalidate every hour
  }).then(res => res.json());

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-2xl font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// app/products/loading.tsx
export default function Loading() {
  return (
    <div className="container mx-auto p-6">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="border rounded-lg p-4">
              <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`}
      />

      <ChallengeCard
        level="Intermediate"
        title="Challenge 3: API Route Handler"
        description="Create a RESTful API for managing todos using Next.js Route Handlers."
        requirements={[
          "Create app/api/todos/route.ts with GET and POST handlers",
          "Create app/api/todos/[id]/route.ts with PUT and DELETE handlers",
          "Use proper HTTP status codes",
          "Validate request data"
        ]}
        starterCode={`// app/api/todos/route.ts
import { NextRequest, NextResponse } from 'next/server';

// TODO: Implement GET and POST handlers
export async function GET(request: NextRequest) {
  // Return all todos
}

export async function POST(request: NextRequest) {
  // Create new todo
}`}
        solution={`// app/api/todos/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// In-memory store (use database in production)
let todos: Todo[] = [
  { id: 1, text: 'Learn Next.js', completed: false },
  { id: 2, text: 'Build an app', completed: false }
];

export async function GET(request: NextRequest) {
  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.text || typeof body.text !== 'string') {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: body.text,
      completed: false
    };

    todos.push(newTodo);
    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

// app/api/todos/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return NextResponse.json(
      { error: 'Todo not found' },
      { status: 404 }
    );
  }

  const body = await request.json();
  Object.assign(todo, body);

  return NextResponse.json(todo);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: 'Todo not found' },
      { status: 404 }
    );
  }

  todos.splice(index, 1);
  return NextResponse.json({ success: true });
}`}
      />

      <ChallengeCard
        level="Intermediate"
        title="Challenge 4: Client & Server Components"
        description="Build a page that combines Server Components for data fetching and Client Components for interactivity."
        requirements={[
          "Create Server Component that fetches data",
          "Create Client Component for interactive features",
          "Pass data from Server to Client Component",
          "Use proper 'use client' directive"
        ]}
        starterCode={`// app/dashboard/page.tsx (Server Component)
export default async function DashboardPage() {
  // TODO: Fetch data and render Client Component
  return <div>{/* Dashboard */}</div>;
}

// components/InteractiveChart.tsx (Client Component)
'use client';
// TODO: Create interactive chart component`}
        solution={`// app/dashboard/page.tsx (Server Component)
import InteractiveChart from '@/components/InteractiveChart';

interface DashboardData {
  sales: number[];
  labels: string[];
}

export default async function DashboardPage() {
  // Fetch data in Server Component
  const data: DashboardData = await fetch('https://api.example.com/dashboard', {
    cache: 'no-store'
  }).then(res => res.json());

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      {/* Pass data to Client Component */}
      <InteractiveChart data={data} />
    </div>
  );
}

// components/InteractiveChart.tsx (Client Component)
'use client';

import { useState } from 'react';

interface DashboardData {
  sales: number[];
  labels: string[];
}

export default function InteractiveChart({ data }: { data: DashboardData }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sales Chart</h2>
      <div className="flex items-end gap-2 h-64">
        {data.sales.map((value, index) => (
          <div
            key={index}
            className="flex-1 bg-blue-500 rounded-t cursor-pointer hover:bg-blue-600 transition-colors"
            style={{ height: \`\${(value / Math.max(...data.sales)) * 100}%\` }}
            onClick={() => setSelectedIndex(index)}
            onMouseEnter={() => setSelectedIndex(index)}
            onMouseLeave={() => setSelectedIndex(null)}
          >
            {selectedIndex === index && (
              <div className="text-center text-white font-bold">
                {data.labels[index]}: ${value}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}`}
      />

      <ChallengeCard
        level="Advanced"
        title="Challenge 5: Middleware & Authentication"
        description="Create middleware to protect routes and implement authentication flow."
        requirements={[
          "Create middleware.ts to protect routes",
          "Create login page with form",
          "Create API route for authentication",
          "Use cookies to manage session",
          "Redirect based on auth status"
        ]}
        starterCode={`// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // TODO: Implement route protection
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};`}
        solution={`// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redirect authenticated users away from login
  if (request.nextUrl.pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};

// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  // Validate credentials (replace with actual auth logic)
  if (email === 'user@example.com' && password === 'password') {
    const cookieStore = await cookies();
    cookieStore.set('auth-token', 'valid-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { error: 'Invalid credentials' },
    { status: 401 }
  );
}

// app/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded mb-4"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}`}
      />
    </div>
  );
}

// Challenge Card Component (same as React challenges)
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
              <span className="text-gray-300 mt-1">•</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-3">Starter Code:</h4>
        <CodeExample language="tsx" code={starterCode} />
      </div>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="mb-4 px-4 py-2 bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 rounded-lg transition-colors"
      >
        {showSolution ? 'Hide Solution' : 'Show Solution'}
      </button>

      {showSolution && (
        <div>
          <h4 className="text-white font-semibold mb-3">Solution:</h4>
          <CodeExample language="tsx" code={solution} />
        </div>
      )}
    </div>
  );
}

// Reusable Components

