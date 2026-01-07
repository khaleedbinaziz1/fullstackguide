'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiNodedotjs } from "react-icons/si";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CodeExample from "@/components/CodeExample";
import FlowDiagram from "@/components/FlowDiagram";
import ConceptCard from "@/components/ConceptCard";

export default function NodeJSPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'event-loop', title: 'Event Loop' },
    { id: 'modules', title: 'Modules' },
    { id: 'streams', title: 'Streams' },
    { id: 'async', title: 'Async Patterns' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <Navigation showBackButton backHref="/fullstack/backend" backLabel="Back to Backend" />

      <main id="main-content" className="pt-24 pb-20" role="main">
        <div className="container mx-auto max-w-7xl px-6">
          <Breadcrumbs />
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600/20 to-emerald-400/20 rounded-full border border-green-500/30 mb-8">
              <SiNodedotjs className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Node.js 20 Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Node.js</span>
              <span className="text-white block text-4xl">JavaScript Runtime</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn Node.js fundamentals, event loop, streams, async patterns, and building scalable server applications.
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
              {activeSection === 'event-loop' && <EventLoopSection />}
              {activeSection === 'modules' && <ModulesSection />}
              {activeSection === 'streams' && <StreamsSection />}
              {activeSection === 'async' && <AsyncSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Node.js Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Creating a Simple Server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// File System Operations
const fs = require('fs');

// Read file asynchronously
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Read file synchronously (blocking)
const data = fs.readFileSync('file.txt', 'utf8');

// Write file
fs.writeFile('output.txt', 'Hello Node.js!', (err) => {
  if (err) console.error(err);
  else console.log('File written successfully');
});

// Process Object
console.log(process.argv); // Command line arguments
console.log(process.env); // Environment variables
process.exit(0); // Exit process`}
      />
    </div>
  );
}

function EventLoopSection() {
  return (
    <div className="space-y-12">
      {/* Fundamental Concept */}
      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-4 sm:p-6 mb-8 overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-3">🎯 Core Concept: Event Loop</h3>
        <p className="text-white/70 leading-relaxed mb-4">
          The <strong className="text-white">Event Loop</strong> is what makes Node.js non-blocking and asynchronous. 
          It continuously checks for pending callbacks and executes them when their operations complete. 
          This allows Node.js to handle thousands of concurrent connections with a single thread.
        </p>
        <div className="w-full overflow-x-auto -mx-2 px-2">
          <FlowDiagram
            steps={[
              { label: "Execute Code", description: "Run synchronous code", color: "from-blue-500 to-cyan-500" },
              { label: "Process Callbacks", description: "Handle async callbacks", color: "from-purple-500 to-pink-500" },
              { label: "Check for I/O", description: "Wait for operations", color: "from-green-500 to-emerald-500" },
              { label: "Repeat", description: "Loop continues", color: "from-orange-500 to-yellow-500" },
            ]}
          />
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Event Loop</h2>
        <p className="text-white/60 text-lg mb-8">
          Understand how Node.js handles asynchronous operations through its event loop architecture.
        </p>
      </div>

      {/* Visual Event Loop Diagram */}
      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-8 mb-8">
        <h3 className="text-green-400 font-semibold mb-6 text-xl">Event Loop Cycle</h3>
        <FlowDiagram
          direction="vertical"
          steps={[
            { 
              label: "Timers Phase", 
              description: "setTimeout(), setInterval() callbacks",
              color: "from-blue-500 to-cyan-500"
            },
            { 
              label: "Pending Callbacks", 
              description: "Deferred I/O callbacks",
              color: "from-purple-500 to-pink-500"
            },
            { 
              label: "Idle, Prepare", 
              description: "Internal operations",
              color: "from-gray-500 to-gray-700"
            },
            { 
              label: "Poll Phase", 
              description: "Fetch I/O events, execute callbacks",
              color: "from-green-500 to-emerald-500"
            },
            { 
              label: "Check Phase", 
              description: "setImmediate() callbacks",
              color: "from-orange-500 to-yellow-500"
            },
            { 
              label: "Close Callbacks", 
              description: "socket.on('close') callbacks",
              color: "from-red-500 to-pink-500"
            },
          ]}
        />
      </div>

      <CodeExample
        language="javascript"
        code={`// Event Loop Demonstration
console.log('1. Start');

setTimeout(() => {
  console.log('2. setTimeout');
}, 0);

setImmediate(() => {
  console.log('3. setImmediate');
});

Promise.resolve().then(() => {
  console.log('4. Promise');
});

process.nextTick(() => {
  console.log('5. nextTick');
});

console.log('6. End');

// Output order:
// 1. Start
// 6. End
// 5. nextTick (microtask queue - highest priority)
// 4. Promise (microtask queue)
// 2. setTimeout (macrotask queue)
// 3. setImmediate (macrotask queue)

// Callback Queue Priority:
// 1. process.nextTick() - Highest priority
// 2. Promise callbacks (microtasks)
// 3. setImmediate()
// 4. setTimeout/setInterval`}
      />
    </div>
  );
}

function ModulesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Modules</h2>
        <p className="text-white/60 text-lg mb-8">
          Node.js uses CommonJS modules by default, and supports ES modules. Learn how to organize and share code.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// CommonJS (require/module.exports)
// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};

// Or
exports.add = add;
exports.subtract = subtract;

// app.js
const math = require('./math');
console.log(math.add(2, 3)); // 5

// ES Modules (import/export)
// math.mjs
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Or default export
export default {
  add,
  subtract
};

// app.mjs
import { add, subtract } from './math.mjs';
// or
import math from './math.mjs';

// package.json for ES Modules
{
  "type": "module"
}

// Built-in Modules
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const url = require('url');
const crypto = require('crypto');
const events = require('events');
const stream = require('stream');
const util = require('util');`}
      />
    </div>
  );
}

function StreamsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Streams</h2>
        <p className="text-white/60 text-lg mb-8">
          Streams are objects that let you read data from a source or write data to a destination in a continuous fashion.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`const fs = require('fs');
const { Readable, Writable, Transform, Duplex } = require('stream');

// Readable Stream
const readableStream = fs.createReadStream('input.txt');

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.toString());
});

readableStream.on('end', () => {
  console.log('Finished reading');
});

readableStream.on('error', (err) => {
  console.error('Error:', err);
});

// Writable Stream
const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello ');
writableStream.write('World!');
writableStream.end();

// Piping Streams
fs.createReadStream('input.txt')
  .pipe(fs.createWriteStream('output.txt'));

// Transform Stream
const { Transform } = require('stream');

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

fs.createReadStream('input.txt')
  .pipe(uppercase)
  .pipe(fs.createWriteStream('output.txt'));

// Custom Readable Stream
const { Readable } = require('stream');

const myReadable = new Readable({
  read(size) {
    this.push('Some data');
    this.push(null); // End stream
  }
});

myReadable.pipe(process.stdout);`}
      />
    </div>
  );
}

function AsyncSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Async Patterns</h2>
        <p className="text-white/60 text-lg mb-8">
          Node.js excels at asynchronous programming. Learn callbacks, promises, async/await, and error handling.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Callbacks (Callback Hell)
fs.readFile('file1.txt', (err, data1) => {
  if (err) return console.error(err);
  fs.readFile('file2.txt', (err, data2) => {
    if (err) return console.error(err);
    fs.writeFile('output.txt', data1 + data2, (err) => {
      if (err) return console.error(err);
      console.log('Done');
    });
  });
});

// Promises
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile('file1.txt')
  .then(data1 => readFile('file2.txt').then(data2 => [data1, data2]))
  .then(([data1, data2]) => writeFile('output.txt', data1 + data2))
  .then(() => console.log('Done'))
  .catch(err => console.error(err));

// Async/Await
async function processFiles() {
  try {
    const data1 = await readFile('file1.txt');
    const data2 = await readFile('file2.txt');
    await writeFile('output.txt', data1 + data2);
    console.log('Done');
  } catch (err) {
    console.error(err);
  }
}

// Promise.all (Parallel execution)
async function processFilesParallel() {
  try {
    const [data1, data2] = await Promise.all([
      readFile('file1.txt'),
      readFile('file2.txt')
    ]);
    await writeFile('output.txt', data1 + data2);
  } catch (err) {
    console.error(err);
  }
}

// Promise.race
const fastest = await Promise.race([
  fetch('api1.com'),
  fetch('api2.com')
]);

// Error Handling
async function fetchData() {
  try {
    const data = await fetch('https://api.example.com/data');
    return data.json();
  } catch (error) {
    if (error.code === 'ENOTFOUND') {
      console.error('Network error');
    } else {
      console.error('Unknown error:', error);
    }
    throw error;
  }
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
          Follow these patterns and practices for production-ready Node.js applications.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
          <h3 className="text-green-400 font-semibold mb-4">Do's</h3>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>✓ Use async/await over callbacks</li>
            <li>✓ Handle errors properly</li>
            <li>✓ Use environment variables</li>
            <li>✓ Implement logging</li>
            <li>✓ Use process managers (PM2)</li>
            <li>✓ Monitor memory usage</li>
          </ul>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
          <h3 className="text-red-400 font-semibold mb-4">Don'ts</h3>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>✗ Don't block the event loop</li>
            <li>✗ Don't ignore errors</li>
            <li>✗ Don't use synchronous fs operations</li>
            <li>✗ Don't commit secrets</li>
            <li>✗ Don't ignore warnings</li>
          </ul>
        </div>
      </div>

      <CodeExample
        language="javascript"
        code={`// Environment Variables
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;

// Error Handling Middleware
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
}

// Graceful Shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

// Logging
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Performance Monitoring
const performance = require('perf_hooks');

const start = performance.now();
// ... code to measure
const end = performance.now();
console.log(\`Execution time: \${end - start} ms\`);`}
      />
    </div>
  );
}


