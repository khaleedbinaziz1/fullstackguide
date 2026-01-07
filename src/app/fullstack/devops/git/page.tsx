'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiGithub } from "react-icons/si";

export default function GitPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'branching', title: 'Branching' },
    { id: 'collaboration', title: 'Collaboration' },
    { id: 'github', title: 'GitHub' },
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-700/20 to-gray-900/20 rounded-full border border-gray-700/30 mb-8">
              <SiGithub className="w-5 h-5 text-gray-300" />
              <span className="text-gray-300 font-semibold">Git & GitHub Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Git & GitHub</span>
              <span className="text-white block text-4xl">Version Control</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn Git commands, branching strategies, pull requests, GitHub workflows, and collaborative development.
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
              {activeSection === 'branching' && <BranchingSection />}
              {activeSection === 'collaboration' && <CollaborationSection />}
              {activeSection === 'github' && <GitHubSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Git Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Git is a distributed version control system. Track changes, create branches, and collaborate on code.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Initialize Repository
git init

# Configure User
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Basic Commands
git status              # Check status
git add .               # Stage all changes
git commit -m "Message" # Commit changes
git log                 # View history

# Clone Repository
git clone https://github.com/user/repo.git

# Remote Repositories
git remote add origin https://github.com/user/repo.git
git push -u origin main
git pull`}
      />
    </div>
  );
}

function BranchingSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Branching</h2>
        <p className="text-white/60 text-lg mb-8">
          Create branches for features, fixes, and experiments. Merge branches to integrate changes.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Create Branch
git branch feature-branch
git checkout feature-branch
# or
git checkout -b feature-branch

# List Branches
git branch

# Switch Branch
git checkout main

# Merge Branch
git checkout main
git merge feature-branch

# Delete Branch
git branch -d feature-branch

# Rebase (alternative to merge)
git checkout feature-branch
git rebase main`}
      />
    </div>
  );
}

function CollaborationSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Collaboration</h2>
        <p className="text-white/60 text-lg mb-8">
          Work with others using pull requests, code reviews, and conflict resolution.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Fetch Changes
git fetch origin

# Pull Changes
git pull origin main

# Push Changes
git push origin main

# Resolve Conflicts
# Edit conflicted files
git add .
git commit -m "Resolve conflicts"

# Stash Changes
git stash              # Save changes temporarily
git stash pop          # Restore changes

# Cherry-pick Commit
git cherry-pick <commit-hash>`}
      />
    </div>
  );
}

function GitHubSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">GitHub</h2>
        <p className="text-white/60 text-lg mb-8">
          GitHub hosts Git repositories. Use pull requests, issues, actions, and GitHub Pages.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Fork Repository
# Click Fork button on GitHub

# Create Pull Request
# 1. Push branch to GitHub
git push origin feature-branch

# 2. Open PR on GitHub
# Click "Compare & pull request"

# Clone Fork
git clone https://github.com/yourusername/repo.git

# Add Upstream
git remote add upstream https://github.com/original/repo.git

# Sync Fork
git fetch upstream
git checkout main
git merge upstream/main`}
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
          Follow these patterns for maintainable Git workflows and clean commit history.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Commit Messages
# Good: "Add user authentication"
# Bad: "fix stuff"

# .gitignore
# node_modules/
# .env
# dist/
# *.log

# Branch Naming
# feature/user-authentication
# bugfix/login-error
# hotfix/security-patch

# Small, Focused Commits
git add file1.js
git commit -m "Add validation logic"

# Regular Commits
# Commit often, push regularly

# Pull Before Push
git pull origin main
git push origin main`}
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

