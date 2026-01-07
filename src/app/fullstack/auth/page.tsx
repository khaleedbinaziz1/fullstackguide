'use client';

import Link from "next/link";
import { SiFirebase, SiStripe } from "react-icons/si";
import { FaLock, FaUserShield } from "react-icons/fa";

export default function AuthPage() {
  const technologies = [
    {
      id: 'clerk',
      title: 'Clerk',
      icon: FaUserShield,
      description: 'Complete authentication solution. User management, social logins, MFA, and session management.',
      color: 'gray',
      gradient: 'from-gray-700 to-gray-900',
      href: '/fullstack/auth/clerk'
    },
    {
      id: 'firebase-auth',
      title: 'Firebase Auth',
      icon: SiFirebase,
      description: 'Google Firebase authentication. Email/password, social providers, phone auth, and security rules.',
      color: 'orange',
      gradient: 'from-orange-500 to-yellow-500',
      href: '/fullstack/auth/firebase'
    },
    {
      id: 'stripe',
      title: 'Stripe',
      icon: SiStripe,
      description: 'Payment processing platform. Accept payments, subscriptions, invoicing, and payment methods.',
      color: 'indigo',
      gradient: 'from-indigo-600 to-purple-600',
      href: '/fullstack/auth/stripe'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Open Stack JS
            </Link>
            <Link href="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-500/30 mb-8">
              <FaLock className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-400 font-semibold">Authentication & Payments</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Auth & Payments</span>
              <span className="text-white block">Complete Guide</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Master Clerk, Firebase Auth, and Stripe. Implement secure authentication and payment processing in your applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <Link key={tech.id} href={tech.href}>
                  <div className="glass rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 cursor-pointer h-full flex flex-col border border-white/10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white mb-6`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                    <p className="text-white/60 mb-6 flex-grow">{tech.description}</p>
                    <div className="text-white/60 text-sm flex items-center gap-2">
                      Explore Guide
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

