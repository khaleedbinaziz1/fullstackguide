'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiNginx } from "react-icons/si";

export default function NginxPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'config', title: 'Configuration' },
    { id: 'proxy', title: 'Reverse Proxy' },
    { id: 'ssl', title: 'SSL/TLS' },
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-full border border-green-500/30 mb-8">
              <SiNginx className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Nginx Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Nginx</span>
              <span className="text-white block text-4xl">Web Server & Reverse Proxy</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn Nginx configuration, reverse proxy, load balancing, SSL termination, and serving static files.
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
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
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
              {activeSection === 'config' && <ConfigSection />}
              {activeSection === 'proxy' && <ProxySection />}
              {activeSection === 'ssl' && <SSLSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Nginx Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Nginx is a high-performance web server and reverse proxy. Used for serving static files, load balancing, and SSL termination.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Installation (Ubuntu/Debian)
sudo apt update
sudo apt install nginx

# Start Nginx
sudo systemctl start nginx

# Enable on boot
sudo systemctl enable nginx

# Check Status
sudo systemctl status nginx

# Reload Configuration
sudo nginx -s reload

# Test Configuration
sudo nginx -t`}
      />
    </div>
  );
}

function ConfigSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Configuration</h2>
        <p className="text-white/60 text-lg mb-8">
          Nginx configuration is in /etc/nginx/nginx.conf. Configure server blocks, locations, and directives.
        </p>
      </div>

      <CodeExample
        language="nginx"
        code={`# Basic Server Block
server {
    listen 80;
    server_name example.com;
    
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}

# Serve Static Files
server {
    listen 80;
    server_name example.com;
    
    location /static/ {
        alias /var/www/static/;
    }
}

# Location Blocks
location / {
    # Process requests
}

location ~ \.php$ {
    # Handle PHP files
}

location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}`}
      />
    </div>
  );
}

function ProxySection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Reverse Proxy</h2>
        <p className="text-white/60 text-lg mb-8">
          Configure Nginx as a reverse proxy to forward requests to backend servers. Enable load balancing and failover.
        </p>
      </div>

      <CodeExample
        language="nginx"
        code={`# Reverse Proxy
server {
    listen 80;
    server_name api.example.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

# Load Balancing
upstream backend {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    location / {
        proxy_pass http://backend;
    }
}`}
      />
    </div>
  );
}

function SSLSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">SSL/TLS</h2>
        <p className="text-white/60 text-lg mb-8">
          Configure SSL certificates for HTTPS. Use Let's Encrypt for free certificates or configure custom certificates.
        </p>
      </div>

      <CodeExample
        language="nginx"
        code={`# SSL Configuration
server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/ssl/certs/example.com.crt;
    ssl_certificate_key /etc/ssl/private/example.com.key;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    
    location / {
        root /var/www/html;
    }
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name example.com;
    return 301 https://$server_name$request_uri;
}`}
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
          Follow these patterns for secure and performant Nginx configurations.
        </p>
      </div>

      <CodeExample
        language="nginx"
        code={`# Security Headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;

# Rate Limiting
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

location /api/ {
    limit_req zone=api burst=20;
}

# Gzip Compression
gzip on;
gzip_types text/plain text/css application/json application/javascript;

# Hide Nginx Version
server_tokens off;`}
      />
    </div>
  );
}

function CodeExample({ code, language = 'nginx' }: { code: string; language?: string }) {
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

