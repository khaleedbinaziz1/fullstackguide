'use client';

import Link from "next/link";
import { 
  SiNodedotjs, SiExpress, SiPhp, SiGraphql, SiSocketdotio, SiPrisma, SiFastapi 
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

export default function BackendPage() {
  const technologies = [
    {
      id: 'nodejs',
      title: 'Node.js 20',
      icon: SiNodedotjs,
      description: 'JavaScript runtime for building server-side applications. Learn event loop, streams, and async patterns.',
      color: 'green',
      gradient: 'from-green-600 to-emerald-400',
      href: '/fullstack/backend/nodejs'
    },
    {
      id: 'express',
      title: 'Express.js',
      icon: SiExpress,
      description: 'Fast, unopinionated web framework for Node.js. Build APIs and web servers with routing and middleware.',
      color: 'gray',
      gradient: 'from-gray-600 to-gray-800',
      href: '/fullstack/backend/express'
    },
    {
      id: 'php',
      title: 'PHP',
      icon: SiPhp,
      description: 'Server-side scripting language. Learn PHP fundamentals, OOP, and building dynamic web applications.',
      color: 'indigo',
      gradient: 'from-indigo-600 to-purple-600',
      href: '/fullstack/backend/php'
    },
    {
      id: 'graphql',
      title: 'GraphQL',
      icon: SiGraphql,
      description: 'Query language for APIs. Learn schemas, resolvers, queries, mutations, and subscriptions.',
      color: 'pink',
      gradient: 'from-pink-600 to-red-600',
      href: '/fullstack/backend/graphql'
    },
    {
      id: 'socketio',
      title: 'Socket.io',
      icon: SiSocketdotio,
      description: 'Real-time bidirectional event-based communication. Build chat apps, live updates, and real-time features.',
      color: 'black',
      gradient: 'from-black to-gray-800',
      href: '/fullstack/backend/socketio'
    },
    {
      id: 'prisma',
      title: 'Prisma ORM',
      icon: SiPrisma,
      description: 'Next-generation ORM for Node.js and TypeScript. Type-safe database access and migrations.',
      color: 'cyan',
      gradient: 'from-cyan-600 to-blue-600',
      href: '/fullstack/backend/prisma'
    },
    {
      id: 'fastapi',
      title: 'FastAPI',
      icon: SiFastapi,
      description: 'Modern Python web framework for APIs. Fast, automatic documentation, and type hints.',
      color: 'teal',
      gradient: 'from-teal-600 to-green-600',
      href: '/fullstack/backend/fastapi'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold gradient-text">
              FullstackGuide
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 mb-8">
              <FaServer className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Backend & APIs</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Backend Technologies</span>
              <span className="text-white block">Complete Guide</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Master backend development with Node.js, Express, PHP, GraphQL, Socket.io, Prisma, and FastAPI.
            </p>
          </div>

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

