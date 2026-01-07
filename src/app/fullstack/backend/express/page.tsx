'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiExpress } from "react-icons/si";

export default function ExpressPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'routing', title: 'Routing' },
    { id: 'middleware', title: 'Middleware' },
    { id: 'error-handling', title: 'Error Handling' },
    { id: 'database', title: 'Database Integration' },
    { id: 'security', title: 'Security' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/backend" className="text-2xl font-bold gradient-text">
              Open Stack JS
            </Link>
            <Link href="/fullstack/backend" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Backend
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-600/20 to-gray-800/20 rounded-full border border-gray-600/30 mb-8">
              <SiExpress className="w-5 h-5 text-gray-300" />
              <span className="text-gray-300 font-semibold">Express.js Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Express.js</span>
              <span className="text-white block text-4xl">Fast Web Framework</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn Express.js routing, middleware, error handling, database integration, and building RESTful APIs.
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
                          ? 'bg-gray-600/20 text-gray-300 border border-gray-500/30'
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
              {activeSection === 'routing' && <RoutingSection />}
              {activeSection === 'middleware' && <MiddlewareSection />}
              {activeSection === 'error-handling' && <ErrorHandlingSection />}
              {activeSection === 'database' && <DatabaseSection />}
              {activeSection === 'security' && <SecuritySection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Express.js Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Express is a minimal and flexible Node.js web application framework that provides features for web and mobile applications.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Installation
npm install express

// Basic Server
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});

// Request and Response Objects
app.get('/user/:id', (req, res) => {
  // Request properties
  console.log(req.params); // Route parameters
  console.log(req.query);  // Query string
  console.log(req.body);   // Request body (needs middleware)
  console.log(req.headers); // Request headers
  
  // Response methods
  res.send('Hello');
  res.json({ message: 'Hello' });
  res.status(404).send('Not Found');
  res.redirect('/');
  res.render('view', { data });
});

// Different HTTP Methods
app.get('/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/users', (req, res) => {
  res.status(201).json({ message: 'User created' });
});

app.put('/users/:id', (req, res) => {
  res.json({ message: 'User updated' });
});

app.delete('/users/:id', (req, res) => {
  res.json({ message: 'User deleted' });
});

app.patch('/users/:id', (req, res) => {
  res.json({ message: 'User partially updated' });
};`}
      />
    </div>
  );
}

function RoutingSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Routing</h2>
        <p className="text-white/60 text-lg mb-8">
          Define endpoints and handle different HTTP methods. Organize routes with Express Router.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Route Parameters
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId });
});

// Multiple Parameters
app.get('/posts/:postId/comments/:commentId', (req, res) => {
  const { postId, commentId } = req.params;
  res.json({ postId, commentId });
});

// Query Strings
app.get('/search', (req, res) => {
  const { q, page, limit } = req.query;
  res.json({ query: q, page, limit });
});

// Route Handlers (Multiple callbacks)
app.get('/example',
  (req, res, next) => {
    console.log('First handler');
    next();
  },
  (req, res) => {
    res.send('Second handler');
  }
);

// Express Router
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Users list' });
});

router.get('/:id', (req, res) => {
  res.json({ userId: req.params.id });
});

router.post('/', (req, res) => {
  res.json({ message: 'User created' });
});

// Use router in main app
app.use('/users', router);

// Route Path Patterns
app.get('/ab?cd', (req, res) => {
  // Matches: acd, abcd
  res.send('ab?cd');
});

app.get('/ab+cd', (req, res) => {
  // Matches: abcd, abbcd, abbbcd, etc.
  res.send('ab+cd');
});

app.get('/ab*cd', (req, res) => {
  // Matches: abcd, abxcd, abRANDOMcd, etc.
  res.send('ab*cd');
});

app.get('/a(bc)?d', (req, res) => {
  // Matches: ad, abcd
  res.send('a(bc)?d');
});

// All HTTP Methods
app.all('/api/*', (req, res) => {
  res.send('Matches all HTTP methods');
});`}
      />
    </div>
  );
}

function MiddlewareSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Middleware</h2>
        <p className="text-white/60 text-lg mb-8">
          Middleware functions have access to request, response, and next middleware function. They execute in order.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Basic Middleware
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.path);
  next(); // Pass control to next middleware
});

// Application-level Middleware
app.use('/api', (req, res, next) => {
  console.log('API route accessed');
  next();
});

// Router-level Middleware
const router = express.Router();
router.use((req, res, next) => {
  console.log('Router middleware');
  next();
});

// Built-in Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static('public')); // Serve static files

// Third-party Middleware
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));

// Error-handling Middleware (4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Custom Middleware Example
function logger(req, res, next) {
  console.log(\`\${req.method} \${req.path} - \${new Date().toISOString()}\`);
  next();
}

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // Verify token...
  req.user = { id: 1, name: 'John' };
  next();
}

// Using Middleware
app.use(logger);
app.use('/api/protected', authenticate);

app.get('/api/protected/data', (req, res) => {
  res.json({ user: req.user, data: 'Protected data' });
});

// Middleware Order Matters
app.use(middleware1);
app.use('/api', middleware2);
app.get('/api/data', handler); // Executes: middleware1 → middleware2 → handler`}
      />
    </div>
  );
}

function ErrorHandlingSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Error Handling</h2>
        <p className="text-white/60 text-lg mb-8">
          Handle errors properly in Express applications. Use error-handling middleware and async error wrappers.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Error-handling Middleware (Must have 4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Throwing Errors
app.get('/error', (req, res, next) => {
  const err = new Error('Custom error');
  err.status = 400;
  next(err); // Pass to error handler
});

// Async Error Handling
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.get('/async', asyncHandler(async (req, res) => {
  const data = await fetchData();
  if (!data) {
    throw new Error('Data not found');
  }
  res.json(data);
}));

// Or use express-async-errors package
require('express-async-errors');

app.get('/async', async (req, res) => {
  const data = await fetchData();
  res.json(data);
});

// Custom Error Class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

app.get('/users/:id', async (req, res, next) => {
  const user = await getUserById(req.params.id);
  if (!user) {
    return next(new AppError('User not found', 404));
  }
  res.json(user);
});

// Global Error Handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  }
});`}
      />
    </div>
  );
}

function DatabaseSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Database Integration</h2>
        <p className="text-white/60 text-lg mb-8">
          Connect Express applications to databases. Examples with MongoDB and PostgreSQL.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// MongoDB with Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PostgreSQL with pg
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'password',
  port: 5432,
});

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Prisma ORM
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: req.body
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});`}
      />
    </div>
  );
}

function SecuritySection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Security Best Practices</h2>
        <p className="text-white/60 text-lg mb-8">
          Secure your Express applications with proper middleware, authentication, and security headers.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Helmet - Security Headers
const helmet = require('helmet');
app.use(helmet());

// CORS
const cors = require('cors');
app.use(cors({
  origin: 'https://yourdomain.com',
  credentials: true
}));

// Rate Limiting
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);

// Input Validation (express-validator)
const { body, validationResult } = require('express-validator');

app.post('/users',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Process request
  }
);

// Authentication with JWT
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});

// Environment Variables
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3000;

// SQL Injection Prevention (Use parameterized queries)
// Good
pool.query('SELECT * FROM users WHERE id = $1', [userId]);

// Bad - Vulnerable to SQL injection
pool.query(\`SELECT * FROM users WHERE id = \${userId}\`);

// XSS Prevention (Sanitize input)
const xss = require('xss');
const sanitizedInput = xss(userInput);`}
      />
    </div>
  );
}

function CodeExample({ code, language = 'javascript' }: { code: string; language?: string }) {
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

