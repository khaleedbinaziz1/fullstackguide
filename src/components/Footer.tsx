'use client';

import Link from 'next/link';
import { SiGithub, SiLinkedin, SiDiscord } from 'react-icons/si';
import { FaRocket, FaCode, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    learn: [
      { name: 'Frontend', href: '/fullstack/frontend' },
      { name: 'Backend', href: '/fullstack/backend' },
      { name: 'Database', href: '/fullstack/database' },
      { name: 'Testing', href: '/fullstack/testing' },
      { name: 'DevOps', href: '/fullstack/devops' },
    ],
    resources: [
      { name: 'Stack Builder', href: '/#stack-builder' },
      { name: 'Learning Path', href: '/#learning-path' },
      { name: 'Technologies', href: '/#explore' },
    ],
    technologies: [
      { name: 'Next.js', href: '/fullstack/frontend/nextjs' },
      { name: 'React', href: '/fullstack/frontend/react' },
      { name: 'TypeScript', href: '/fullstack/frontend/typescript' },
      { name: 'Node.js', href: '/fullstack/backend/nodejs' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', icon: SiGithub, href: 'https://github.com/khaleedbinaziz1/openstackjs', color: 'hover:text-gray-300' },
    { name: 'X (Twitter)', icon: FaXTwitter, href: 'https://twitter.com', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: SiLinkedin, href: 'https://linkedin.com', color: 'hover:text-blue-500' },
    { name: 'Discord', icon: SiDiscord, href: 'https://discord.com', color: 'hover:text-indigo-400' },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Glare/Glass Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Glass border with glow */}
      <div className="relative border-t border-white/10 backdrop-blur-xl bg-black/20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                    <FaCode className="w-6 h-6" />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-50 blur-xl group-hover:opacity-75 transition-opacity -z-10"></div>
                </div>
                <span className="text-2xl font-bold gradient-text">Open Stack JS</span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-md">
                Master fullstack web development with visual guides, interactive examples, and comprehensive documentation. 
                Learn how technologies work together.
              </p>
              <div className="mb-6">
                <a
                  href="https://github.com/khaleedbinaziz1/openstackjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/70 hover:text-white text-sm font-medium"
                >
                  <SiGithub className="w-4 h-4" />
                  <span>Open Source on GitHub</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 ${social.color} transition-all hover:bg-white/10 hover:border-white/20 hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Learn Section */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <FaRocket className="w-4 h-4 text-purple-400" />
                Learn
              </h3>
              <ul className="space-y-3">
                {footerLinks.learn.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all group-hover:mr-2"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all group-hover:mr-2"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Section */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Popular
              </h3>
              <ul className="space-y-3">
                {footerLinks.technologies.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all group-hover:mr-2"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white/40 text-sm">
                <p>
                  © {currentYear} Open Stack JS. Open Source under MIT License.
                </p>
                <p className="mt-1">
                  Built with Next.js, React, and Tailwind CSS
                </p>
                <p className="mt-1">
                  <a href="https://github.com/khaleedbinaziz1/openstackjs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">
                    Contribute on GitHub
                  </a>
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <Link href="/" className="text-white/40 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/" className="text-white/40 hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="/" className="text-white/40 hover:text-white transition-colors">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional glow effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
    </footer>
  );
}

