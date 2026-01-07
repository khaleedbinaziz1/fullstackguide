'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiGithub } from "react-icons/si";

interface NavigationProps {
  showBackButton?: boolean;
  backHref?: string;
  backLabel?: string;
}

export default function Navigation({ 
  showBackButton = false, 
  backHref = "/", 
  backLabel = "Back to Home" 
}: NavigationProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg bg-black/40"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg px-2"
            aria-label="Open Stack JS Home"
          >
            Open Stack JS
          </Link>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/khaleedbinaziz1/openstackjs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="View on GitHub"
              title="Open Source on GitHub"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            
            {!isHomePage && (
              <Link 
                href="/" 
                className="text-white/80 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg px-2"
                aria-label="Go to home page"
              >
                Home
              </Link>
            )}
            
            {showBackButton ? (
              <Link 
                href={backHref}
                className="text-white/80 hover:text-white transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg px-2"
                aria-label={backLabel}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {backLabel}
              </Link>
            ) : (
              <Link 
                href="/fullstack/frontend" 
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-white hover:from-purple-600/30 hover:to-pink-600/30 transition-all font-medium focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Start learning fullstack development"
              >
                Start Learning
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

