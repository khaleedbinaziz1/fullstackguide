'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiVercel } from "react-icons/si";

export default function VercelPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'deployment', title: 'Deployment' },
    { id: 'environments', title: 'Environments' },
    { id: 'domains', title: 'Domains' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/devops" className="text-2xl font-bold gradient-text">
              FullstackGuide
            </Link>
            <Link href="/fullstack/devops" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to DevOps
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-black/20 to-gray-800/20 rounded-full border border-gray-700/30 mb-8">
              <SiVercel className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Vercel Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Vercel</span>
              <span className="text-white block text-4xl">Frontend Deployment Platform</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Deploy Next.js, React, and static sites with zero configuration. Learn deployment, previews, and edge functions.
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
                          ? 'bg-gray-600/20 text-white border border-gray-500/30'
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
              {activeSection === 'deployment' && <DeploymentSection />}
              {activeSection === 'environments' && <EnvironmentsSection />}
              {activeSection === 'domains' && <DomainsSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Vercel Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Vercel is a platform for frontend frameworks. Deploy Next.js, React, Vue, and static sites with automatic optimizations.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod`}
      />

      <CodeExample
        language="json"
        code={`// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "DATABASE_URL": "@database-url"
  }
}`}
      />
    </div>
  );
}

function DeploymentSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Deployment</h2>
        <p className="text-white/60 text-lg mb-8">
          Deploy projects from Git repositories. Automatic deployments on push, preview deployments for pull requests.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Connect to Git
# Push to GitHub/GitLab/Bitbucket
# Vercel automatically deploys

# Manual Deployment
vercel

# Production Deployment
vercel --prod

# Deploy specific directory
vercel --cwd ./apps/web

# View deployments
vercel ls`}
      />
    </div>
  );
}

function EnvironmentsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Environments</h2>
        <p className="text-white/60 text-lg mb-8">
          Configure environment variables for production, preview, and development environments.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Set Environment Variables
# Via Dashboard or CLI

vercel env add DATABASE_URL production
vercel env add API_KEY preview

# Environment Variable Priority
# 1. Production (production deployments)
# 2. Preview (preview deployments)
# 3. Development (local development)

# Use in Code
process.env.DATABASE_URL`}
      />
    </div>
  );
}

function DomainsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Custom Domains</h2>
        <p className="text-white/60 text-lg mb-8">
          Add custom domains to your deployments. Automatic SSL certificates and DNS configuration.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Add Domain via CLI
vercel domains add example.com

# Via Dashboard
# Project Settings > Domains > Add Domain

# Automatic SSL
# Vercel automatically provisions SSL certificates

# DNS Configuration
# Add CNAME or A record as shown in dashboard`}
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
          Follow these patterns for optimal Vercel deployments and performance.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Use Environment Variables
// Store secrets in Vercel dashboard
// Never commit .env files

// Optimize Builds
// Use .vercelignore for unnecessary files
// node_modules
// .git

// Next.js Optimization
// Enable Image Optimization
// Use ISR (Incremental Static Regeneration)
// Enable Edge Functions for low latency

// Monitoring
// Use Vercel Analytics
// Monitor deployment logs
// Set up alerts`}
      />
    </div>
  );
}

function CodeExample({ code, language = 'bash' }: { code: string; language?: string }) {
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

