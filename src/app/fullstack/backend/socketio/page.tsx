'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiSocketdotio } from "react-icons/si";

export default function SocketIOPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'events', title: 'Events' },
    { id: 'rooms', title: 'Rooms' },
    { id: 'namespaces', title: 'Namespaces' },
    { id: 'authentication', title: 'Authentication' },
    { id: 'best-practices', title: 'Best Practices' },
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-black/20 to-gray-800/20 rounded-full border border-gray-700/30 mb-8">
              <SiSocketdotio className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Socket.io Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Socket.io</span>
              <span className="text-white block text-4xl">Real-Time Communication</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Build real-time bidirectional event-based communication. Perfect for chat apps, live updates, and collaborative features.
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
                          ? 'bg-gray-600/20 text-white border border-gray-500/30'
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
              {activeSection === 'events' && <EventsSection />}
              {activeSection === 'rooms' && <RoomsSection />}
              {activeSection === 'namespaces' && <NamespacesSection />}
              {activeSection === 'authentication' && <AuthenticationSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Socket.io Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Socket.io enables real-time bidirectional event-based communication between client and server.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Installation
npm install socket.io

# Client Installation
npm install socket.io-client`}
      />

      <CodeExample
        language="javascript"
        code={`// Server Setup
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Connection Event
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Client Setup
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server:', socket.id);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});`}
      />
    </div>
  );
}

function EventsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Events</h2>
        <p className="text-white/60 text-lg mb-8">
          Socket.io uses events to send and receive data. You can emit custom events in both directions.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Server: Emit and Listen
io.on('connection', (socket) => {
  // Emit to single client
  socket.emit('message', 'Hello from server');

  // Listen for client events
  socket.on('client-message', (data) => {
    console.log('Received:', data);
    
    // Emit back to sender
    socket.emit('response', 'Message received');
    
    // Broadcast to all other clients
    socket.broadcast.emit('user-message', data);
    
    // Emit to all clients including sender
    io.emit('broadcast', data);
  });

  // Emit with acknowledgment
  socket.on('ping', (data, callback) => {
    console.log('Ping received:', data);
    callback('pong');
  });
});

// Client: Emit and Listen
socket.emit('client-message', { text: 'Hello server' });

socket.on('message', (data) => {
  console.log('Received:', data);
});

socket.on('response', (data) => {
  console.log('Response:', data);
});

// With acknowledgment
socket.emit('ping', 'test', (response) => {
  console.log('Acknowledgment:', response);
});

// Emit with timeout
socket.timeout(5000).emit('ping', 'test', (err, response) => {
  if (err) {
    console.error('Timeout');
  } else {
    console.log('Response:', response);
  }
});`}
      />
    </div>
  );
}

function RoomsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Rooms</h2>
        <p className="text-white/60 text-lg mb-8">
          Rooms allow you to group sockets together and emit events to a subset of clients.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Server: Room Management
io.on('connection', (socket) => {
  // Join a room
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(\`Socket \${socket.id} joined room \${roomId}\`);
    
    // Notify others in the room
    socket.to(roomId).emit('user-joined', socket.id);
  });

  // Leave a room
  socket.on('leave-room', (roomId) => {
    socket.leave(roomId);
    socket.to(roomId).emit('user-left', socket.id);
  });

  // Emit to room (excluding sender)
  socket.on('room-message', ({ roomId, message }) => {
    socket.to(roomId).emit('message', message);
  });

  // Emit to room (including sender)
  io.to('room1').emit('broadcast', 'Message to all in room1');

  // Emit to multiple rooms
  io.to('room1').to('room2').emit('message', 'Hello');
});

// Client
socket.emit('join-room', 'room1');

socket.on('user-joined', (userId) => {
  console.log('User joined:', userId);
});

socket.on('message', (message) => {
  console.log('Room message:', message);
});

// Get rooms for a socket
const rooms = Array.from(socket.rooms);
console.log('Socket is in rooms:', rooms);`}
      />
    </div>
  );
}

function NamespacesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Namespaces</h2>
        <p className="text-white/60 text-lg mb-8">
          Namespaces allow you to create separate communication channels with different authentication and authorization.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Server: Multiple Namespaces
const adminNamespace = io.of('/admin');
const userNamespace = io.of('/user');

// Admin namespace
adminNamespace.on('connection', (socket) => {
  console.log('Admin connected');
  
  socket.on('admin-action', (data) => {
    // Admin-specific logic
    adminNamespace.emit('admin-broadcast', data);
  });
});

// User namespace
userNamespace.on('connection', (socket) => {
  console.log('User connected');
  
  socket.on('user-action', (data) => {
    userNamespace.emit('user-broadcast', data);
  });
});

// Dynamic namespaces
io.of(/^\/dynamic-\d+$/).on('connection', (socket) => {
  const namespace = socket.nsp;
  console.log('Connected to:', namespace.name);
});

// Client: Connect to namespace
const adminSocket = io('http://localhost:3000/admin');
const userSocket = io('http://localhost:3000/user');

adminSocket.on('connect', () => {
  console.log('Connected to admin namespace');
});

userSocket.on('connect', () => {
  console.log('Connected to user namespace');
});`}
      />
    </div>
  );
}

function AuthenticationSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Authentication</h2>
        <p className="text-white/60 text-lg mb-8">
          Secure Socket.io connections with authentication middleware and JWT tokens.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Server: Authentication Middleware
const jwt = require('jsonwebtoken');

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  
  if (!token) {
    return next(new Error('Authentication error'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = decoded.userId;
    socket.user = decoded;
    next();
  } catch (err) {
    next(new Error('Authentication error'));
  }
});

io.on('connection', (socket) => {
  console.log('Authenticated user:', socket.userId);
  
  socket.on('private-message', ({ userId, message }) => {
    // Send private message
    socket.to(userId).emit('message', {
      from: socket.userId,
      message,
    });
  });
});

// Client: Authentication
const token = localStorage.getItem('token');

const socket = io('http://localhost:3000', {
  auth: {
    token: token
  }
});

socket.on('connect_error', (err) => {
  console.error('Connection error:', err.message);
  // Redirect to login if authentication fails
  if (err.message === 'Authentication error') {
    window.location.href = '/login';
  }
});`}
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
          Follow these patterns for scalable and maintainable Socket.io applications.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Error Handling
io.on('connection', (socket) => {
  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });

  socket.on('disconnect', (reason) => {
    if (reason === 'io server disconnect') {
      // Client was disconnected by server
      socket.connect();
    }
  });
});

// Rate Limiting
const rateLimit = require('socket.io-rate-limit');

io.use(rateLimit({
  windowMs: 1000,
  max: 10 // Limit each client to 10 events per second
}));

// Connection State Management
io.on('connection', (socket) => {
  socket.connected = true;
  
  socket.on('disconnect', () => {
    socket.connected = false;
    // Clean up user data
  });
});

// Event Acknowledgement
socket.on('important-action', (data, callback) => {
  try {
    // Process action
    const result = processAction(data);
    callback({ status: 'success', result });
  } catch (error) {
    callback({ status: 'error', message: error.message });
  }
});

// Reconnection Handling (Client)
socket.on('connect', () => {
  console.log('Connected');
  // Sync state with server
  socket.emit('sync-state', getLocalState());
});

socket.on('disconnect', () => {
  console.log('Disconnected');
  // Handle offline state
});`}
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

