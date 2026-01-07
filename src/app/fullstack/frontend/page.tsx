'use client';

import Link from "next/link";
import { 
  SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiFramer 
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function FrontendPage() {
  const technologies = [
    {
      id: 'typescript',
      title: 'TypeScript',
      icon: SiTypescript,
      description: 'JavaScript with syntax for types. Learn type annotations, interfaces, generics, and advanced type features.',
      color: 'blue',
      gradient: 'from-blue-600 to-blue-400',
      href: '/fullstack/frontend/typescript'
    },
    {
      id: 'react',
      title: 'React 18',
      icon: SiReact,
      description: 'A JavaScript library for building user interfaces. Master components, hooks, state management, and React patterns.',
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-500',
      href: '/fullstack/frontend/react'
    },
    {
      id: 'nextjs',
      title: 'Next.js 14',
      icon: SiNextdotjs,
      description: 'The React framework for production. Learn App Router, Server Components, API Routes, and deployment.',
      color: 'gray',
      gradient: 'from-gray-700 to-gray-900',
      href: '/fullstack/frontend/nextjs'
    },
    {
      id: 'tailwind',
      title: 'Tailwind CSS',
      icon: SiTailwindcss,
      description: 'Utility-first CSS framework. Build modern designs with utility classes, responsive design, and customization.',
      color: 'teal',
      gradient: 'from-teal-500 to-cyan-500',
      href: '/fullstack/frontend/tailwind'
    },
    {
      id: 'redux',
      title: 'Redux Toolkit',
      icon: SiRedux,
      description: 'State management for React applications. Learn stores, actions, reducers, and modern Redux patterns.',
      color: 'purple',
      gradient: 'from-purple-600 to-purple-400',
      href: '/fullstack/frontend/redux'
    },
    {
      id: 'framer',
      title: 'Framer Motion',
      icon: SiFramer,
      description: 'Motion library for React. Create animations, gestures, and scroll-triggered effects with ease.',
      color: 'pink',
      gradient: 'from-pink-600 to-purple-600',
      href: '/fullstack/frontend/framer'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <Navigation showBackButton backHref="/" backLabel="Back to Home" />

      {/* Main Content */}
      <main id="main-content" className="pt-24 pb-20" role="main">
        <div className="container mx-auto max-w-7xl px-6">
          <Breadcrumbs />
          
          {/* Header */}
          <div className="text-center mb-20 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30 mb-8">
              <FaCode className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Frontend Development</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Frontend Technologies</span>
              <span className="text-white block">Complete Guide</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Master frontend development with in-depth guides for TypeScript, React, Next.js, Tailwind CSS, Redux, and Framer Motion.
              Each guide includes visual explanations and code examples.
            </p>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
