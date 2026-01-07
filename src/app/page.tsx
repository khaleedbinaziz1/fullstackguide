'use client';

import { useState } from 'react';
import Link from "next/link";
import type { IconType } from 'react-icons';
import { 
  SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiFramer,
  SiNodedotjs, SiExpress, SiPhp, SiGraphql, SiSocketdotio, SiPrisma, SiFastapi,
  SiPostgresql, SiMongodb, SiFirebase, SiMysql,
  SiJest, SiCypress, SiTestinglibrary,
  SiDocker, SiAmazon, SiVercel, SiNginx, SiGithub,
  SiStripe
} from "react-icons/si";
import { FaCode, FaServer, FaDatabase, FaFlask, FaCloud, FaLock, FaUserShield, FaLayerGroup, FaRocket } from "react-icons/fa";
import Navigation from "@/components/Navigation";

interface Tech {
  name: string;
  icon: IconType;
  color: string;
}

interface Category {
  title: string;
  icon: IconType;
  technologies: Tech[];
  gradient: string;
  href: string;
  level: string;
}


interface TechWithCategory extends Tech {
  category: string;
  description: string;
  compatibility: Record<string, { score: number; notes: string; benefits?: string[]; conflicts?: string[] }>;
  useCases: string[];
  packageName?: string; // npm package name
  isDevDependency?: boolean; // if true, install as dev dependency
  isFullstack?: boolean; // if true, can be in both frontend and backend (like Next.js)
  isBoth?: boolean; // if true, works in both categories (like TypeScript)
}

export default function Home() {
  const [showStackBuilder, setShowStackBuilder] = useState(false);

  const categories: Category[] = [
    {
      title: "Frontend Development",
      icon: FaCode,
      technologies: [
        { name: "TypeScript", icon: SiTypescript, color: "from-blue-600 to-blue-400" },
        { name: "React 18", icon: SiReact, color: "from-cyan-500 to-blue-500" },
        { name: "Next.js 14", icon: SiNextdotjs, color: "from-gray-700 to-gray-900" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-teal-500 to-cyan-500" },
        { name: "Redux Toolkit", icon: SiRedux, color: "from-purple-600 to-purple-400" },
        { name: "Framer Motion", icon: SiFramer, color: "from-pink-600 to-purple-600" },
      ],
      gradient: "from-blue-500 to-cyan-500",
      href: "/fullstack/frontend",
      level: "Beginner to Intermediate"
    },
    {
      title: "Backend Development",
      icon: FaServer,
      technologies: [
        { name: "Node.js 20", icon: SiNodedotjs, color: "from-green-600 to-emerald-400" },
        { name: "Express.js", icon: SiExpress, color: "from-gray-600 to-gray-800" },
        { name: "PHP", icon: SiPhp, color: "from-indigo-600 to-purple-600" },
        { name: "GraphQL", icon: SiGraphql, color: "from-pink-600 to-red-600" },
        { name: "Socket.io", icon: SiSocketdotio, color: "from-black to-gray-800" },
        { name: "Prisma ORM", icon: SiPrisma, color: "from-cyan-600 to-blue-600" },
        { name: "FastAPI", icon: SiFastapi, color: "from-teal-600 to-green-600" },
      ],
      gradient: "from-green-500 to-emerald-500",
      href: "/fullstack/backend",
      level: "Intermediate"
    },
    {
      title: "Database Management",
      icon: FaDatabase,
      technologies: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "from-blue-700 to-blue-500" },
        { name: "MongoDB", icon: SiMongodb, color: "from-green-600 to-emerald-400" },
        { name: "Firestore", icon: SiFirebase, color: "from-orange-500 to-yellow-500" },
        { name: "MySQL", icon: SiMysql, color: "from-blue-600 to-cyan-500" },
      ],
      gradient: "from-orange-500 to-yellow-500",
      href: "/fullstack/database",
      level: "Beginner to Intermediate"
    },
    {
      title: "Authentication & Payments",
      icon: FaLock,
      technologies: [
        { name: "Clerk", icon: FaUserShield, color: "from-gray-700 to-gray-900" },
        { name: "Firebase Auth", icon: SiFirebase, color: "from-orange-500 to-yellow-500" },
        { name: "Stripe", icon: SiStripe, color: "from-indigo-600 to-purple-600" },
      ],
      gradient: "from-indigo-500 to-purple-500",
      href: "/fullstack/auth",
      level: "Intermediate"
    },
    {
      title: "Testing & DevOps",
      icon: FaCloud,
      technologies: [
        { name: "Jest", icon: SiJest, color: "from-orange-600 to-red-600" },
        { name: "Cypress", icon: SiCypress, color: "from-gray-700 to-gray-900" },
        { name: "React Testing Library", icon: SiTestinglibrary, color: "from-pink-600 to-red-600" },
        { name: "Docker", icon: SiDocker, color: "from-blue-600 to-cyan-500" },
        { name: "AWS", icon: SiAmazon, color: "from-orange-500 to-yellow-500" },
        { name: "Vercel", icon: SiVercel, color: "from-black to-gray-800" },
        { name: "Nginx", icon: SiNginx, color: "from-green-600 to-green-400" },
        { name: "Git/GitHub", icon: SiGithub, color: "from-gray-700 to-gray-900" },
      ],
      gradient: "from-purple-500 to-indigo-500",
      href: "/fullstack/devops",
      level: "Intermediate to Advanced"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <Navigation />

      {/* Main Content */}
      <main id="main-content" className="pt-24 pb-20" role="main">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Hero Section - Strategic Color & Better UX */}
          <div className="relative flex flex-col items-center justify-center text-center min-h-[75vh] mb-40">
            {/* Gradient background accents */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-6">
              <div className="mb-6 opacity-0 animate-fadeIn">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium tracking-wider">
                  ✨ Visual Learning Platform
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <span className="text-white block mb-2">Fullstack</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">Web Development</span>
          </h1>
              
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                Master production-ready development with visual guides, interactive examples, and hands-on learning paths
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <Link 
                  href="/fullstack/frontend"
                  className="group relative px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Learning
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <button
                  onClick={() => {
                    setShowStackBuilder(true);
                    setTimeout(() => {
                      document.getElementById('stack-builder')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm hover:bg-white/15 hover:border-white/30 transition-all duration-200"
                  aria-label="Open interactive stack builder"
                >
                  Build Your Stack
                </button>
              </div>
              
              {/* Stats with color accents */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1.5 font-mono">5</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-medium">Categories</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1.5 font-mono">30+</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-medium">Technologies</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1.5 font-mono">100+</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-medium">Guides</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-1.5 font-mono">∞</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-medium">Paths</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies Section - Better Organization */}
          <div className="mb-40">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">Technologies</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent via-purple-500/50 to-transparent"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Explore by Category
              </h2>
              <p className="text-base text-white/50 max-w-xl mx-auto">
                Comprehensive guides organized by technology stack
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {categories.map((category, index) => (
                <CategoryCard key={category.title} category={category} index={index} />
              ))}
            </div>
          </div>

          {/* Stack Builder Section - Enhanced UX */}
          <div id="stack-builder" className="mb-40 scroll-mt-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                <span className="text-xs font-medium text-purple-400 uppercase tracking-widest">Interactive Tool</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent via-pink-500/50 to-transparent"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Stack Builder
              </h2>
              <p className="text-base text-white/50 max-w-xl mx-auto mb-8">
                Combine technologies, analyze compatibility, and get installation commands
              </p>
              <button
                onClick={() => setShowStackBuilder(!showStackBuilder)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-lg text-white font-medium text-sm hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-500/50 transition-all duration-200 shadow-lg shadow-purple-500/10"
              >
                <FaLayerGroup className="w-4 h-4" />
                <span>{showStackBuilder ? 'Close' : 'Open'} Builder</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${showStackBuilder ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {showStackBuilder && (
              <div className="animate-in">
                <StackBuilder />
              </div>
            )}
          </div>

          {/* Getting Started - Enhanced with Color & Better Flow */}
          <div className="mb-40">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
                  <span className="text-xs font-medium text-green-400 uppercase tracking-widest">Learning Path</span>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent via-blue-500/50 to-transparent"></div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Your Learning Journey</h3>
                <p className="text-base text-white/50 max-w-xl mx-auto">
                  Follow a structured path from fundamentals to advanced deployment
          </p>
        </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Link 
                  href="/fullstack/frontend"
                  className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-lg group-hover:scale-110 transition-transform">
                      1
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 uppercase tracking-wider font-medium">Start</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Frontend Fundamentals</h4>
                  <p className="text-sm text-white/60 mb-5 leading-relaxed">
                    Learn TypeScript, React, and Next.js with visual guides and interactive examples
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                    <span>Start Learning</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>

                <button
                  onClick={() => {
                    setShowStackBuilder(true);
                    document.getElementById('stack-builder')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 text-left"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-lg group-hover:scale-110 transition-transform">
                      2
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-wider font-medium">Build</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Combine Technologies</h4>
                  <p className="text-sm text-white/60 mb-5 leading-relaxed">
                    Use the Stack Builder to see how technologies work together and get installation commands
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                    <FaLayerGroup className="w-4 h-4" />
                    <span>Open Builder</span>
                  </div>
                </button>

                <Link
                  href="/fullstack/backend"
                  className="group relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-lg group-hover:scale-110 transition-transform">
                      3
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 uppercase tracking-wider font-medium">Deploy</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Backend & DevOps</h4>
                  <p className="text-sm text-white/60 mb-5 leading-relaxed">
                    Master server-side development, databases, testing, and production deployment
                  </p>
                  <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                    <span>Explore</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function CategoryCard({ category, index }: { category: Category; index: number }) {
  const IconComponent = category.icon;
  
  // Get category-specific color theme
  const getCategoryColor = (title: string) => {
    if (title.includes("Frontend")) return {
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
      border: "border-blue-500/20 group-hover:border-blue-400/40",
      iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
      iconColor: "text-blue-400",
      accent: "text-blue-400",
      badgeBg: "bg-blue-500/10 border-blue-500/20",
      badgeText: "text-blue-300"
    };
    if (title.includes("Backend")) return {
      gradient: "from-green-500/20 via-emerald-500/20 to-green-500/20",
      border: "border-green-500/20 group-hover:border-green-400/40",
      iconBg: "bg-green-500/10 group-hover:bg-green-500/20",
      iconColor: "text-green-400",
      accent: "text-green-400",
      badgeBg: "bg-green-500/10 border-green-500/20",
      badgeText: "text-green-300"
    };
    if (title.includes("Database")) return {
      gradient: "from-orange-500/20 via-yellow-500/20 to-orange-500/20",
      border: "border-orange-500/20 group-hover:border-orange-400/40",
      iconBg: "bg-orange-500/10 group-hover:bg-orange-500/20",
      iconColor: "text-orange-400",
      accent: "text-orange-400",
      badgeBg: "bg-orange-500/10 border-orange-500/20",
      badgeText: "text-orange-300"
    };
    if (title.includes("Authentication")) return {
      gradient: "from-indigo-500/20 via-purple-500/20 to-indigo-500/20",
      border: "border-indigo-500/20 group-hover:border-indigo-400/40",
      iconBg: "bg-indigo-500/10 group-hover:bg-indigo-500/20",
      iconColor: "text-indigo-400",
      accent: "text-indigo-400",
      badgeBg: "bg-indigo-500/10 border-indigo-500/20",
      badgeText: "text-indigo-300"
    };
    return {
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-500/20",
      border: "border-purple-500/20 group-hover:border-purple-400/40",
      iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
      iconColor: "text-purple-400",
      accent: "text-purple-400",
      badgeBg: "bg-purple-500/10 border-purple-500/20",
      badgeText: "text-purple-300"
    };
  };
  
  const colors = getCategoryColor(category.title);
  
  return (
    <Link href={category.href} className="group block h-full">
      <div className={`relative h-full bg-gradient-to-br ${colors.gradient} backdrop-blur-sm border ${colors.border} rounded-xl p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:20px_20px]"></div>
        </div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className={`w-12 h-12 rounded-xl ${colors.iconBg} border ${colors.border} flex items-center justify-center ${colors.iconColor} transition-all duration-300 group-hover:scale-110`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <span className={`text-[10px] px-2.5 py-1 rounded-full border ${colors.badgeBg} ${colors.badgeText} uppercase tracking-wider font-medium`}>
              {category.level.split(' ')[0]}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
            {category.title}
          </h3>
          
          <div className="flex items-center gap-2 mb-6">
            <div className={`h-px flex-1 bg-gradient-to-r ${colors.border.replace('border-', 'from-').replace('/20', '/40')} to-transparent`}></div>
            <span className={`text-xs ${colors.accent} font-medium`}>
              {category.technologies.length} techs
            </span>
          </div>
          
          {/* Technologies with color accents */}
          <div className="flex flex-wrap gap-2 mb-6">
            {category.technologies.slice(0, 6).map((tech) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <TechIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-xs font-medium truncate max-w-[75px]">
                    {tech.name.split(' ')[0]}
                  </span>
                </div>
              );
            })}
            {category.technologies.length > 6 && (
              <div className={`flex items-center px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 ${colors.accent} text-xs`}>
                +{category.technologies.length - 6}
              </div>
            )}
          </div>
          
          {/* Footer with accent */}
          <div className={`flex items-center justify-between pt-4 border-t ${colors.border}`}>
            <span className={`text-sm ${colors.accent} font-medium group-hover:opacity-80 transition-opacity`}>
              Explore Guide
            </span>
            <svg className={`w-4 h-4 ${colors.iconColor} group-hover:translate-x-1 transition-all duration-200`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Advanced Stack Builder Component
function StackBuilder() {
  const [selectedStack, setSelectedStack] = useState<{
    frontend: TechWithCategory[];
    backend: TechWithCategory[];
  }>({
    frontend: [],
    backend: [],
  });

  const [draggedTech, setDraggedTech] = useState<TechWithCategory | null>(null);
  const [selectedTech, setSelectedTech] = useState<TechWithCategory | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  // Package name mappings
  const packageMap: Record<string, { package: string; dev?: boolean }> = {
    "React 18": { package: "react@^18.3.1" },
    "Next.js 14": { package: "next@^14.2.0" },
    "TypeScript": { package: "typescript", dev: true },
    "Tailwind CSS": { package: "tailwindcss", dev: true },
    "Redux Toolkit": { package: "@reduxjs/toolkit" },
    "Framer Motion": { package: "framer-motion" },
    "Node.js 20": { package: "" }, // Runtime, not a package
    "Express.js": { package: "express" },
    "Prisma ORM": { package: "@prisma/client" },
    "PostgreSQL": { package: "pg" },
    "MongoDB": { package: "mongodb" },
    "Clerk": { package: "@clerk/nextjs" },
    "Stripe": { package: "stripe" },
    "Socket.io": { package: "socket.io" },
    "GraphQL": { package: "graphql" },
    "FastAPI": { package: "" }, // Python, not npm
    "PHP": { package: "" }, // Not npm
    "Firestore": { package: "@firebase/firestore" },
    "MySQL": { package: "mysql2" },
    "Jest": { package: "jest", dev: true },
    "Cypress": { package: "cypress", dev: true },
    "React Testing Library": { package: "@testing-library/react", dev: true },
    "Docker": { package: "" }, // Not npm
    "Vercel": { package: "vercel", dev: true },
    "Nginx": { package: "" }, // Not npm
  };

  // Enhanced tech library - Frontend and Backend only
  // Next.js can appear in both categories since it handles both frontend and backend
  const allTechnologies: TechWithCategory[] = [
    // Frontend Technologies
    { name: "React 18", icon: SiReact, color: "from-cyan-500 to-blue-500", category: "frontend", description: "Client-side UI library - requires separate backend", useCases: ["SPAs", "Component-based UIs", "Client-side rendering"], packageName: "react@^18.3.1", compatibility: {
      "TypeScript": { score: 95, notes: "Perfect TypeScript support", benefits: ["Type safety", "Better IDE support"] },
      "Node.js": { score: 90, notes: "Needs Node.js backend", benefits: ["REST APIs", "Express.js"] },
      "Redux Toolkit": { score: 90, notes: "Official Redux solution", benefits: ["State management", "DevTools"] },
      "Tailwind CSS": { score: 95, notes: "Works seamlessly", benefits: ["Utility classes", "Fast styling"] },
    }},
    { name: "Next.js 14", icon: SiNextdotjs, color: "from-gray-700 to-gray-900", category: "frontend", description: "Full-stack React framework - includes both frontend & backend", useCases: ["Full-stack apps", "SSR/SSG", "API routes", "Server components"], packageName: "next@^14.2.0", compatibility: {
      "React 18": { score: 100, notes: "Built on React", benefits: ["Server Components", "SSR"] },
      "TypeScript": { score: 95, notes: "First-class TS support", benefits: ["Type-safe APIs", "Better DX"] },
      "Prisma ORM": { score: 90, notes: "Great integration", benefits: ["Type-safe queries", "Auto-generated types"] },
      "PostgreSQL": { score: 85, notes: "Works via API routes", benefits: ["Server-side queries"] },
    }, isFullstack: true}, // Special flag for Next.js
    { name: "TypeScript", icon: SiTypescript, color: "from-blue-600 to-blue-400", category: "frontend", description: "Typed JavaScript - works in both frontend and backend", useCases: ["Type safety", "Better IDE support", "Full-stack TypeScript"], packageName: "typescript", isDevDependency: true, compatibility: {
      "React 18": { score: 95, notes: "Excellent support", benefits: ["Component types", "Props validation"] },
      "Node.js": { score: 100, notes: "Native TS support", benefits: ["Type-safe APIs", "Shared types"] },
      "Prisma ORM": { score: 95, notes: "Auto-generated types", benefits: ["Database types", "Type-safe queries"] },
    }, isBoth: true}, // Can be used in both
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-teal-500 to-cyan-500", category: "frontend", description: "Utility-first CSS framework", useCases: ["Rapid styling", "Responsive design", "Custom themes"], packageName: "tailwindcss", isDevDependency: true, compatibility: {
      "React 18": { score: 95, notes: "Works seamlessly", benefits: ["Utility classes", "Fast styling"] },
      "Next.js 14": { score: 100, notes: "Official integration", benefits: ["Zero config", "Optimized"] },
    }},
    { name: "Redux Toolkit", icon: SiRedux, color: "from-purple-600 to-purple-400", category: "frontend", description: "State management library", useCases: ["Global state", "Complex apps", "Time-travel debugging"], packageName: "@reduxjs/toolkit", compatibility: {
      "React 18": { score: 90, notes: "Official Redux solution", benefits: ["State management", "DevTools"] },
    }},
    { name: "Framer Motion", icon: SiFramer, color: "from-pink-600 to-purple-600", category: "frontend", description: "Animation library for React", useCases: ["Animations", "Gestures", "Layout animations"], packageName: "framer-motion", compatibility: {
      "React 18": { score: 100, notes: "Built for React", benefits: ["Smooth animations", "Declarative API"] },
    }},
    
    // Backend Technologies
    { name: "Next.js 14", icon: SiNextdotjs, color: "from-gray-700 to-gray-900", category: "backend", description: "Full-stack framework - API routes & server components", useCases: ["API routes", "Server components", "Full-stack apps", "Middleware"], packageName: "next@^14.2.0", compatibility: {
      "React 18": { score: 100, notes: "Built on React", benefits: ["Unified framework"] },
      "Prisma ORM": { score: 90, notes: "Great integration", benefits: ["Type-safe queries", "API routes"] },
      "PostgreSQL": { score: 85, notes: "Works via API routes", benefits: ["Server-side queries"] },
      "Clerk": { score: 100, notes: "First-class support", benefits: ["Middleware", "Server components"] },
    }, isFullstack: true}, // Same tech, different category
    { name: "Node.js 20", icon: SiNodedotjs, color: "from-green-600 to-emerald-400", category: "backend", description: "JavaScript runtime - required for React apps backend", useCases: ["APIs", "Real-time apps", "Microservices", "Backend for React"], compatibility: {
      "Express.js": { score: 100, notes: "Standard combo", benefits: ["Mature ecosystem", "Large community"] },
      "React 18": { score: 95, notes: "Perfect backend for React", benefits: ["REST APIs", "Same language"] },
      "TypeScript": { score: 100, notes: "Native support", benefits: ["Type safety", "Better tooling"] },
      "MongoDB": { score: 90, notes: "Great NoSQL option", benefits: ["JSON-like data", "Flexible schema"] },
      "PostgreSQL": { score: 90, notes: "Excellent drivers", benefits: ["ACID compliance", "Complex queries"] },
    }},
    { name: "Express.js", icon: SiExpress, color: "from-gray-600 to-gray-800", category: "backend", description: "Web framework for Node.js - backend for React apps", useCases: ["REST APIs", "Middleware", "Routing", "React backend"], packageName: "express", compatibility: {
      "Node.js": { score: 100, notes: "Perfect match", benefits: ["Minimal setup", "Flexible"] },
      "React 18": { score: 95, notes: "Common backend for React", benefits: ["REST API", "CORS handling"] },
      "Prisma ORM": { score: 90, notes: "Works well together", benefits: ["Type-safe DB access", "Migrations"] },
      "Socket.io": { score: 85, notes: "Can integrate", benefits: ["Real-time features"] },
    }},
    { name: "Prisma ORM", icon: SiPrisma, color: "from-cyan-600 to-blue-600", category: "backend", description: "Type-safe ORM for databases", useCases: ["Type-safe queries", "Migrations", "Database management"], packageName: "@prisma/client", compatibility: {
      "PostgreSQL": { score: 100, notes: "Excellent support", benefits: ["Full feature support", "Performance"] },
      "MySQL": { score: 95, notes: "Great support", benefits: ["Type generation", "Migrations"] },
      "Next.js 14": { score: 90, notes: "Great integration", benefits: ["API routes", "Type sharing"] },
      "Express.js": { score: 90, notes: "Works well together", benefits: ["Type-safe DB access"] },
      "TypeScript": { score: 100, notes: "Built for TS", benefits: ["Auto-generated types"] },
    }},
    { name: "PostgreSQL", icon: SiPostgresql, color: "from-blue-700 to-blue-500", category: "backend", description: "Advanced relational database", useCases: ["Complex queries", "ACID compliance", "Enterprise apps"], packageName: "pg", compatibility: {
      "Prisma ORM": { score: 100, notes: "Best support", benefits: ["Full feature set", "Migrations"] },
      "Node.js": { score: 90, notes: "Great drivers", benefits: ["pg library", "Connection pooling"] },
      "Next.js 14": { score: 85, notes: "Works via API routes", benefits: ["Server-side queries"] },
      "Express.js": { score: 85, notes: "Common combo", benefits: ["REST API"] },
    }},
    { name: "MongoDB", icon: SiMongodb, color: "from-green-600 to-emerald-400", category: "backend", description: "NoSQL document database", useCases: ["Flexible schema", "JSON storage", "Scalability"], packageName: "mongodb", compatibility: {
      "Node.js": { score: 90, notes: "Native support", benefits: ["Mongoose ODM", "Easy integration"] },
      "Express.js": { score: 85, notes: "Common combo", benefits: ["Mongoose middleware"] },
    }},
    { name: "MySQL", icon: SiMysql, color: "from-blue-600 to-cyan-500", category: "backend", description: "Popular relational database", useCases: ["Web apps", "Content management", "E-commerce"], packageName: "mysql2", compatibility: {
      "Prisma ORM": { score: 95, notes: "Great support", benefits: ["Type generation", "Migrations"] },
      "Node.js": { score: 90, notes: "Excellent drivers", benefits: ["mysql2 library"] },
    }},
    { name: "Socket.io", icon: SiSocketdotio, color: "from-black to-gray-800", category: "backend", description: "Real-time communication", useCases: ["Chat apps", "Live updates", "WebSockets"], packageName: "socket.io", compatibility: {
      "Node.js": { score: 95, notes: "Perfect for real-time", benefits: ["WebSocket support", "Fallbacks"] },
      "Express.js": { score: 85, notes: "Can integrate", benefits: ["Real-time features"] },
    }},
    { name: "Clerk", icon: FaUserShield, color: "from-gray-700 to-gray-900", category: "backend", description: "Complete authentication solution", useCases: ["User management", "Social logins", "MFA"], packageName: "@clerk/nextjs", compatibility: {
      "Next.js 14": { score: 100, notes: "First-class support", benefits: ["Middleware", "Server components"] },
      "React 18": { score: 95, notes: "Works with React", benefits: ["useAuth hook", "Protected routes"] },
    }},
    { name: "Stripe", icon: SiStripe, color: "from-indigo-600 to-purple-600", category: "backend", description: "Payment processing", useCases: ["Payments", "Subscriptions", "Billing"], packageName: "stripe", compatibility: {
      "Node.js": { score: 95, notes: "Great SDK", benefits: ["Webhooks", "Idempotency"] },
      "Express.js": { score: 90, notes: "Easy integration", benefits: ["Payment routes", "Webhook handling"] },
      "Next.js 14": { score: 90, notes: "API routes integration", benefits: ["Server-side payments"] },
    }},
    { name: "GraphQL", icon: SiGraphql, color: "from-pink-600 to-red-600", category: "backend", description: "Query language for APIs", useCases: ["Flexible APIs", "Single endpoint", "Efficient data fetching"], packageName: "graphql", compatibility: {
      "Node.js": { score: 95, notes: "Great support", benefits: ["Apollo Server", "GraphQL tools"] },
      "Express.js": { score: 90, notes: "Common integration", benefits: ["GraphQL middleware"] },
    }},
  ];

  const handleDragStart = (e: React.DragEvent, tech: TechWithCategory) => {
    setDraggedTech(tech);
    e.dataTransfer.effectAllowed = 'move';
    if (e.dataTransfer) {
      e.dataTransfer.setData('text/plain', tech.name);
    }
  };

  const handleDragOver = (e: React.DragEvent, zone: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setHoveredZone(zone);
  };

  const handleDrop = (e: React.DragEvent, zone: string) => {
    e.preventDefault();
    if (draggedTech) {
      // Allow drop if:
      // 1. Category matches the zone
      // 2. Tech is fullstack (Next.js) and zone is frontend or backend
      // 3. Tech works in both (TypeScript) and zone is frontend or backend
      const canDrop = draggedTech.category === zone || 
                      (draggedTech.isFullstack && (zone === 'frontend' || zone === 'backend')) ||
                      (draggedTech.isBoth && (zone === 'frontend' || zone === 'backend'));
      
      if (canDrop) {
        setSelectedStack(prev => ({
          ...prev,
          [zone]: [...prev[zone as keyof typeof prev].filter(t => t.name !== draggedTech.name), draggedTech],
        }));
      }
    }
    setDraggedTech(null);
    setHoveredZone(null);
  };

  const removeTech = (zone: string, techName: string) => {
    setSelectedStack(prev => ({
      ...prev,
      [zone]: prev[zone as keyof typeof prev].filter(t => t.name !== techName),
    }));
  };

  const getCompatibilityAnalysis = () => {
    const allSelected = [
      ...selectedStack.frontend,
      ...selectedStack.backend,
    ];

    if (allSelected.length < 2) return null;

    const analyses: Array<{ tech1: string; tech2: string; score: number; notes: string; benefits?: string[]; conflicts?: string[] }> = [];

    allSelected.forEach(tech1 => {
      allSelected.forEach(tech2 => {
        if (tech1.name !== tech2.name && tech1.compatibility[tech2.name]) {
          analyses.push({
            tech1: tech1.name,
            tech2: tech2.name,
            ...tech1.compatibility[tech2.name],
          });
        }
      });
    });

    return analyses;
  };

  const compatibilityData = getCompatibilityAnalysis();
  const avgScore = compatibilityData && compatibilityData.length > 0
    ? Math.round(compatibilityData.reduce((sum, a) => sum + a.score, 0) / compatibilityData.length)
    : null;

  // Generate installation commands - separated by frontend and backend
  const getInstallationCommands = () => {
    // Frontend packages
    const frontendPackages: string[] = [];
    const frontendDevPackages: string[] = [];
    const frontendUnique = new Map<string, boolean>();
    
    selectedStack.frontend.forEach(tech => {
      if (tech.packageName && !frontendUnique.has(tech.packageName)) {
        frontendUnique.set(tech.packageName, true);
        if (tech.isDevDependency) {
          frontendDevPackages.push(tech.packageName);
        } else {
          frontendPackages.push(tech.packageName);
        }
      }
    });

    // Backend packages
    const backendPackages: string[] = [];
    const backendDevPackages: string[] = [];
    const backendUnique = new Map<string, boolean>();
    
    selectedStack.backend.forEach(tech => {
      if (tech.packageName && !backendUnique.has(tech.packageName)) {
        backendUnique.set(tech.packageName, true);
        if (tech.isDevDependency) {
          backendDevPackages.push(tech.packageName);
        } else {
          backendPackages.push(tech.packageName);
        }
      }
    });

    // Generate commands for each package manager
    const generateCommands = (packages: string[], devPackages: string[]) => {
      const npmCmd = packages.length > 0 ? `npm install ${packages.join(' ')}` : '';
      const npmDevCmd = devPackages.length > 0 ? `npm install -D ${devPackages.join(' ')}` : '';
      const npm = [npmCmd, npmDevCmd].filter(Boolean).join('\n') || '# No packages';

      const yarnCmd = packages.length > 0 ? `yarn add ${packages.join(' ')}` : '';
      const yarnDevCmd = devPackages.length > 0 ? `yarn add -D ${devPackages.join(' ')}` : '';
      const yarn = [yarnCmd, yarnDevCmd].filter(Boolean).join('\n') || '# No packages';

      const pnpmCmd = packages.length > 0 ? `pnpm add ${packages.join(' ')}` : '';
      const pnpmDevCmd = devPackages.length > 0 ? `pnpm add -D ${devPackages.join(' ')}` : '';
      const pnpm = [pnpmCmd, pnpmDevCmd].filter(Boolean).join('\n') || '# No packages';

      return { npm, yarn, pnpm, hasPackages: packages.length > 0 || devPackages.length > 0 };
    };

    return {
      frontend: generateCommands(frontendPackages, frontendDevPackages),
      backend: generateCommands(backendPackages, backendDevPackages),
      hasAnyPackages: frontendPackages.length > 0 || frontendDevPackages.length > 0 || backendPackages.length > 0 || backendDevPackages.length > 0,
    };
  };

  const installationCommands = getInstallationCommands();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(type);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const getPackageCount = (zone: 'frontend' | 'backend') => {
    return selectedStack[zone].filter(t => t.packageName).length;
  };

  const StackZone = ({ zone, title, icon }: { zone: string; title: string; icon: IconType }) => {
    const ZoneIcon = icon;
    const techs = selectedStack[zone as keyof typeof selectedStack] as TechWithCategory[];

    return (
      <div
        className={`bg-black/40 border border-dashed rounded-lg p-4 transition-all min-h-[400px] ${
          hoveredZone === zone 
            ? 'border-purple-500/50 bg-purple-500/10' 
            : 'border-white/10 hover:border-white/20'
        }`}
        onDragOver={(e) => handleDragOver(e, zone)}
        onDrop={(e) => handleDrop(e, zone)}
      >
        <div className="flex items-center gap-2 mb-2">
          <ZoneIcon className="w-3 h-3 text-white/60" />
          <h4 className="text-xs font-medium text-white/80">{title}</h4>
          {techs.length > 0 && (
            <span className="ml-auto text-[10px] text-white/40">{techs.length}</span>
          )}
        </div>
        <div className="space-y-1">
          {techs.map((tech) => {
            const TechIcon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group flex items-center gap-2 px-2 py-1.5 rounded bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <TechIcon className="w-3 h-3 text-white/70 flex-shrink-0" />
                <span className="text-[11px] text-white/80 font-medium flex-1 truncate">{tech.name}</span>
                <button
                  onClick={() => removeTech(zone, tech.name)}
                  className="opacity-0 group-hover:opacity-100 w-4 h-4 flex items-center justify-center rounded bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-all"
                  title="Remove"
                >
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            );
          })}
          {techs.length === 0 && (
            <p className="text-[10px] text-white/30 text-center py-2">Drop here</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Installation Commands - Redesigned, At Top */}
      {installationCommands.hasAnyPackages && (
        <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <FaLayerGroup className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  Installation Commands
                </h3>
                <p className="text-sm text-white/60">Separate commands for frontend and backend</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {getPackageCount('frontend') > 0 && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{getPackageCount('frontend')}</div>
                  <div className="text-xs text-white/60">Frontend</div>
                </div>
              )}
              {getPackageCount('backend') > 0 && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">{getPackageCount('backend')}</div>
                  <div className="text-xs text-white/60">Backend</div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Frontend Commands */}
            {installationCommands.frontend.hasPackages && (
              <div className="bg-black/40 border border-purple-500/20 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <FaCode className="w-4 h-4 text-purple-400" />
                  <h4 className="text-base font-semibold text-white">Frontend</h4>
                  <div className="ml-auto w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  {['npm', 'yarn', 'pnpm'].map((pm) => {
                    const cmdKey = `${pm}-frontend`;
                    const cmd = installationCommands.frontend[pm as 'npm' | 'yarn' | 'pnpm'];
                    return (
                      <div key={pm} className="bg-black/60 border border-white/10 rounded-lg p-3 group hover:border-purple-500/50 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              pm === 'npm' ? 'bg-red-500' : pm === 'yarn' ? 'bg-blue-500' : 'bg-orange-500'
                            }`}></div>
                            <span className="text-sm font-semibold text-white/90">{pm}</span>
                          </div>
                          <button
                            onClick={() => copyToClipboard(cmd, cmdKey)}
                            className="px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-md text-purple-300 hover:text-white text-xs font-medium transition-all"
                          >
                            {copiedCommand === cmdKey ? '✓ Copied' : 'Copy'}
                          </button>
                        </div>
                        <pre className="text-xs text-white/80 font-mono bg-black/40 p-3 rounded-md overflow-x-auto border border-white/5">
                          <code>{cmd}</code>
                        </pre>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Backend Commands */}
            {installationCommands.backend.hasPackages && (
              <div className="bg-black/40 border border-pink-500/20 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <FaServer className="w-4 h-4 text-pink-400" />
                  <h4 className="text-base font-semibold text-white">Backend</h4>
                  <div className="ml-auto w-2 h-2 rounded-full bg-pink-400 animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  {['npm', 'yarn', 'pnpm'].map((pm) => {
                    const cmdKey = `${pm}-backend`;
                    const cmd = installationCommands.backend[pm as 'npm' | 'yarn' | 'pnpm'];
                    return (
                      <div key={pm} className="bg-black/60 border border-white/10 rounded-lg p-3 group hover:border-pink-500/50 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              pm === 'npm' ? 'bg-red-500' : pm === 'yarn' ? 'bg-blue-500' : 'bg-orange-500'
                            }`}></div>
                            <span className="text-sm font-semibold text-white/90">{pm}</span>
                          </div>
                          <button
                            onClick={() => copyToClipboard(cmd, cmdKey)}
                            className="px-3 py-1 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 rounded-md text-pink-300 hover:text-white text-xs font-medium transition-all"
                          >
                            {copiedCommand === cmdKey ? '✓ Copied' : 'Copy'}
                          </button>
                        </div>
                        <pre className="text-xs text-white/80 font-mono bg-black/40 p-3 rounded-md overflow-x-auto border border-white/5">
                          <code>{cmd}</code>
                        </pre>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {/* Tech Library - Compact */}
        <div className="lg:col-span-2">
          <div className="bg-black/40 border border-white/10 rounded-lg p-3">
            <h3 className="text-xs font-semibold text-white/80 mb-3 uppercase tracking-wider">Tech Library</h3>
            <div className="max-h-[500px] overflow-y-auto custom-scrollbar space-y-3">
              {['frontend', 'backend'].map((category) => (
                <div key={category}>
                  <h4 className="text-[10px] uppercase text-white/40 mb-2 font-medium">{category}</h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    {allTechnologies
                      .filter(t => t.category === category)
                      .map((tech) => {
                        const TechIcon = tech.icon;
                      // Check if tech is selected in the current category zone
                      // For fullstack techs like Next.js, allow selection in both zones
                      const isSelectedInCategory = selectedStack[category as 'frontend' | 'backend']?.some(t => t.name === tech.name) || false;
                      const isSelectedElsewhere = category === 'frontend' 
                        ? selectedStack.backend?.some(t => t.name === tech.name)
                        : selectedStack.frontend?.some(t => t.name === tech.name);
                      
                      // Allow dragging if: not selected in current category, OR it's a fullstack tech not yet in the other zone
                      const canDrag = !isSelectedInCategory || (tech.isFullstack && !isSelectedElsewhere);

                        return (
                          <div
                            key={tech.name}
                            draggable={canDrag}
                            onDragStart={(e) => canDrag && handleDragStart(e, tech)}
                            onClick={() => setSelectedTech(tech)}
                            className={`flex items-center gap-1.5 px-2 py-1.5 rounded border transition-all text-xs ${
                              !canDrag
                                ? 'bg-white/5 border-white/20 opacity-50 cursor-not-allowed'
                                : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 cursor-move'
                            } ${selectedTech?.name === tech.name ? 'ring-1 ring-purple-500' : ''}`}
                          >
                            <TechIcon className="w-3 h-3 text-white/70 flex-shrink-0" />
                            <span className="text-white/80 font-medium truncate text-[11px]">{tech.name}</span>
                            {isSelectedInCategory && (
                              <svg className="w-2.5 h-2.5 text-green-400 flex-shrink-0 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                            {tech.isFullstack && isSelectedInCategory && (
                              <span className="text-[9px] text-purple-400 ml-1" title="Can be used in both zones">∞</span>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stack Zones - Compact */}
        <div className="lg:col-span-3 space-y-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider">Your Stack</h3>
            {avgScore !== null && (
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] text-white/60">Score:</span>
                <span className={`text-xs font-bold ${
                  avgScore >= 90 ? 'text-green-400' :
                  avgScore >= 75 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {avgScore}%
                </span>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StackZone zone="frontend" title="Frontend" icon={FaCode} />
            <StackZone zone="backend" title="Backend" icon={FaServer} />
          </div>
          
          {/* Architecture Notes */}
          {selectedStack.frontend.length > 0 || selectedStack.backend.length > 0 ? (
            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="space-y-2 text-sm">
                {selectedStack.frontend.some(t => t.name === "React 18") && !selectedStack.backend.some(t => t.name === "Next.js 14" || t.name === "Node.js 20") ? (
                  <div className="flex items-start gap-2 text-yellow-400">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span><strong>React</strong> is frontend-only. You need a separate backend (Node.js + Express.js or Next.js API routes).</span>
                  </div>
                ) : null}
                {selectedStack.frontend.some(t => t.name === "Next.js 14") || selectedStack.backend.some(t => t.name === "Next.js 14") ? (
                  <div className="flex items-start gap-2 text-green-400">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Next.js</strong> handles both frontend and backend. You can use API routes for backend functionality - no separate server needed!</span>
                  </div>
                ) : null}
                {selectedStack.backend.some(t => t.name === "Node.js 20") && selectedStack.frontend.some(t => t.name === "React 18") ? (
                  <div className="flex items-start gap-2 text-blue-400">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>React + Node.js</strong> is a common pattern. React handles the UI, Node.js/Express handles the API backend.</span>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Selected Tech Info - Compact */}
      {selectedTech && (
        <div className="bg-black/40 border border-white/10 rounded-lg p-3 animate-in">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              {(() => {
                const TechIcon = selectedTech.icon;
                return <TechIcon className="w-4 h-4 text-white/80" />;
              })()}
              <div>
                <h3 className="text-sm font-semibold text-white">{selectedTech.name}</h3>
                <p className="text-xs text-white/60 mt-0.5">{selectedTech.description}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedTech(null)}
              className="w-5 h-5 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all text-xs"
            >
              ×
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-white/80 mb-2">Use Cases</h4>
              <div className="flex flex-wrap gap-2">
                {selectedTech.useCases.map((useCase, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/80 mb-2">Compatibility with Your Stack</h4>
              {compatibilityData?.filter(a => a.tech1 === selectedTech.name || a.tech2 === selectedTech.name).map((analysis, idx) => (
                <div key={idx} className="mb-3 p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/90 font-medium">
                      {analysis.tech1 === selectedTech.name ? analysis.tech2 : analysis.tech1}
                    </span>
                    <span className={`text-sm font-bold ${
                      analysis.score >= 90 ? 'text-green-400' :
                      analysis.score >= 75 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {analysis.score}%
                    </span>
                  </div>
                  <p className="text-xs text-white/60 mb-2">{analysis.notes}</p>
                  {analysis.benefits && analysis.benefits.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {analysis.benefits.map((benefit, i) => (
                        <span key={i} className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                          ✓ {benefit}
                        </span>
                      ))}
                    </div>
                  )}
                  {analysis.conflicts && analysis.conflicts.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {analysis.conflicts.map((conflict, i) => (
                        <span key={i} className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">
                          ⚠ {conflict}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {compatibilityData?.filter(a => a.tech1 === selectedTech.name || a.tech2 === selectedTech.name).length === 0 && (
                <p className="text-white/40 text-sm">Add more technologies to see compatibility analysis</p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
