'use client';

import Link from "next/link";
import { 
  SiPostgresql, SiMongodb, SiFirebase, SiMysql 
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

export default function DatabasePage() {
  const technologies = [
    {
      id: 'postgresql',
      title: 'PostgreSQL',
      icon: SiPostgresql,
      description: 'Advanced open-source relational database. Learn SQL, queries, indexes, transactions, and advanced features.',
      color: 'blue',
      gradient: 'from-blue-600 to-indigo-600',
      href: '/fullstack/database/postgresql'
    },
    {
      id: 'mongodb',
      title: 'MongoDB',
      icon: SiMongodb,
      description: 'NoSQL document database. Master documents, collections, queries, aggregation, and indexing.',
      color: 'green',
      gradient: 'from-green-600 to-emerald-600',
      href: '/fullstack/database/mongodb'
    },
    {
      id: 'firebase',
      title: 'Firestore',
      icon: SiFirebase,
      description: 'NoSQL cloud database from Google. Real-time sync, offline support, and scalable backend.',
      color: 'orange',
      gradient: 'from-orange-500 to-yellow-500',
      href: '/fullstack/database/firestore'
    },
    {
      id: 'mysql',
      title: 'MySQL',
      icon: SiMysql,
      description: 'Popular open-source relational database. Learn SQL, joins, transactions, and performance optimization.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      href: '/fullstack/database/mysql'
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-500/30 mb-8">
              <FaDatabase className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Database & Storage</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Database Technologies</span>
              <span className="text-white block">Complete Guide</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Master PostgreSQL, MongoDB, Firestore, and MySQL. Learn data modeling, queries, optimization, and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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

