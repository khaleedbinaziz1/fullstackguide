'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiDocker } from "react-icons/si";

export default function DockerPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'dockerfile', title: 'Dockerfile' },
    { id: 'commands', title: 'Commands' },
    { id: 'docker-compose', title: 'Docker Compose' },
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full border border-blue-500/30 mb-8">
              <SiDocker className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Docker Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Docker</span>
              <span className="text-white block text-4xl">Containerization Platform</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn Docker containers, images, Dockerfiles, Docker Compose, and building containerized applications.
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
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
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
              {activeSection === 'dockerfile' && <DockerfileSection />}
              {activeSection === 'commands' && <CommandsSection />}
              {activeSection === 'docker-compose' && <DockerComposeSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Docker Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Docker packages applications and dependencies into containers. Containers run consistently across environments.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Check Docker version
docker --version

# Run a container
docker run hello-world

# Run interactive container
docker run -it ubuntu /bin/bash

# Run in background
docker run -d nginx

# List running containers
docker ps

# List all containers
docker ps -a

# Stop container
docker stop <container-id>

# Remove container
docker rm <container-id>`}
      />
    </div>
  );
}

function DockerfileSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Dockerfile</h2>
        <p className="text-white/60 text-lg mb-8">
          Dockerfile defines how to build a Docker image. Learn multi-stage builds, layers, and optimization.
        </p>
      </div>

      <CodeExample
        language="dockerfile"
        code={`# Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Run application
CMD ["npm", "start"]

# Build image
# docker build -t my-app .

# Multi-stage Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production
EXPOSE 3000
CMD ["node", "dist/index.js"]`}
      />
    </div>
  );
}

function CommandsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Docker Commands</h2>
        <p className="text-white/60 text-lg mb-8">
          Essential Docker commands for managing images, containers, volumes, and networks.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Images
docker images                    # List images
docker build -t myapp .          # Build image
docker pull nginx                # Pull image
docker rmi <image-id>            # Remove image

# Containers
docker run -d -p 3000:3000 myapp # Run with port mapping
docker exec -it <id> /bin/bash   # Execute command in container
docker logs <container-id>       # View logs
docker inspect <container-id>    # Inspect container

# Volumes
docker volume create myvolume    # Create volume
docker run -v myvolume:/data myapp # Mount volume

# Networks
docker network create mynetwork  # Create network
docker run --network mynetwork myapp`}
      />
    </div>
  );
}

function DockerComposeSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Docker Compose</h2>
        <p className="text-white/60 text-lg mb-8">
          Docker Compose defines multi-container applications. Manage services, networks, and volumes.
        </p>
      </div>

      <CodeExample
        language="yaml"
        code={`# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
    volumes:
      - ./:/app

  db:
    image: postgres:14
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:

# Commands
docker-compose up -d           # Start services
docker-compose down            # Stop services
docker-compose ps              # List services
docker-compose logs            # View logs`}
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
          Follow these patterns for efficient and secure Docker images and containers.
        </p>
      </div>

      <CodeExample
        language="dockerfile"
        code={`# Use specific base image tags
FROM node:18-alpine  # Not node:latest

# Use multi-stage builds
# Reduce final image size

# Order Dockerfile instructions
# Copy package files before code
# Leverage Docker layer caching

# Use .dockerignore
# node_modules
# .git
# .env

# Run as non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Use health checks
HEALTHCHECK --interval=30s CMD curl -f http://localhost:3000 || exit 1

# Don't store secrets in images
# Use environment variables or secrets management`}
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

