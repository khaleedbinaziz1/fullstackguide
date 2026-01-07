'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiPrisma } from "react-icons/si";

export default function PrismaPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'schema', title: 'Schema' },
    { id: 'queries', title: 'Queries' },
    { id: 'relations', title: 'Relations' },
    { id: 'migrations', title: 'Migrations' },
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full border border-cyan-500/30 mb-8">
              <SiPrisma className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Prisma ORM Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Prisma ORM</span>
              <span className="text-white block text-4xl">Next-Generation ORM</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Type-safe database access for Node.js and TypeScript. Learn schemas, queries, relations, and migrations.
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
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
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
              {activeSection === 'schema' && <SchemaSection />}
              {activeSection === 'queries' && <QueriesSection />}
              {activeSection === 'relations' && <RelationsSection />}
              {activeSection === 'migrations' && <MigrationsSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Prisma Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Prisma is a next-generation ORM that makes database access easy with type safety and auto-completion.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Installation
npm install prisma @prisma/client
npx prisma init

# This creates:
# - prisma/schema.prisma (schema file)
# - .env (database connection)`}
      />

      <CodeExample
        language="typescript"
        code={`// Basic Setup
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int    @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  authorId  Int
  author    User   @relation(fields: [authorId], references: [id])
}

// Generate Prisma Client
npx prisma generate

// Usage in your application
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      name: 'Alice',
    },
  });
  console.log(user);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });`}
      />
    </div>
  );
}

function SchemaSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Schema Definition</h2>
        <p className="text-white/60 text-lg mb-8">
          Define your database schema using Prisma Schema Language (PSL). Prisma generates types based on your schema.
        </p>
      </div>

      <CodeExample
        language="prisma"
        code={`// prisma/schema.prisma

// Field Types
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  age       Int?
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Optional field (nullable)
  bio       String?
  
  // Array of strings
  tags      String[]
  
  // JSON field
  metadata  Json?
}

// Field Attributes
model Post {
  id          Int      @id @default(autoincrement())
  title       String   @db.VarChar(255)
  slug        String   @unique @default(uuid())
  content     String?  @db.Text
  published   Boolean  @default(false)
  views       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // Indexes
  @@index([title])
  @@index([createdAt])
  @@unique([slug])
}

// Enums
enum Role {
  USER
  ADMIN
  MODERATOR
}

model User {
  id    Int    @id @default(autoincrement())
  email String
  role  Role   @default(USER)
}

// Composite Unique Constraints
model User {
  id        Int    @id @default(autoincrement())
  email     String
  tenantId  Int
  
  @@unique([email, tenantId])
}

// Composite Indexes
model Post {
  id        Int    @id @default(autoincrement())
  title     String
  authorId  Int
  published Boolean
  
  @@index([authorId, published])
}`}
      />
    </div>
  );
}

function QueriesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Queries</h2>
        <p className="text-white/60 text-lg mb-8">
          Prisma Client provides type-safe database queries. Learn CRUD operations, filtering, sorting, and pagination.
        </p>
      </div>

      <CodeExample
        language="typescript"
        code={`import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create (Single)
const user = await prisma.user.create({
  data: {
    email: 'alice@example.com',
    name: 'Alice',
  },
});

// Create (Many)
const users = await prisma.user.createMany({
  data: [
    { email: 'bob@example.com', name: 'Bob' },
    { email: 'charlie@example.com', name: 'Charlie' },
  ],
  skipDuplicates: true,
});

// Read (Find Unique)
const user = await prisma.user.findUnique({
  where: {
    id: 1,
  },
});

// Read (Find Many with filtering)
const users = await prisma.user.findMany({
  where: {
    email: {
      contains: '@example.com',
    },
    age: {
      gte: 18,
    },
  },
  orderBy: {
    createdAt: 'desc',
  },
  take: 10,
  skip: 0,
});

// Update (Single)
const updatedUser = await prisma.user.update({
  where: {
    id: 1,
  },
  data: {
    name: 'Alice Updated',
  },
});

// Update (Many)
const result = await prisma.user.updateMany({
  where: {
    active: false,
  },
  data: {
    active: true,
  },
});

// Upsert (Update or Create)
const user = await prisma.user.upsert({
  where: {
    email: 'alice@example.com',
  },
  update: {
    name: 'Alice Updated',
  },
  create: {
    email: 'alice@example.com',
    name: 'Alice',
  },
});

// Delete
const deletedUser = await prisma.user.delete({
  where: {
    id: 1,
  },
});

// Delete Many
const result = await prisma.user.deleteMany({
  where: {
    active: false,
  },
});`}
      />
    </div>
  );
}

function RelationsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Relations</h2>
        <p className="text-white/60 text-lg mb-8">
          Define and query relationships between models. Learn one-to-one, one-to-many, and many-to-many relations.
        </p>
      </div>

      <CodeExample
        language="typescript"
        code={`// Schema with Relations
model User {
  id      Int    @id @default(autoincrement())
  email   String @unique
  profile Profile?
  posts   Post[]
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String?
  userId Int    @unique
  user   User   @relation(fields: [userId], references: [id])
}

model Post {
  id        Int    @id @default(autoincrement())
  title     String
  authorId  Int
  author    User   @relation(fields: [authorId], references: [id])
  categories Category[]
}

model Category {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[]
}

// Include Relations in Queries
const userWithPosts = await prisma.user.findUnique({
  where: {
    id: 1,
  },
  include: {
    posts: true,
    profile: true,
  },
});

// Nested Include
const userWithNestedData = await prisma.user.findUnique({
  where: {
    id: 1,
  },
  include: {
    posts: {
      include: {
        categories: true,
      },
    },
  },
});

// Select Specific Fields
const user = await prisma.user.findUnique({
  where: {
    id: 1,
  },
  select: {
    id: true,
    email: true,
    posts: {
      select: {
        id: true,
        title: true,
      },
    },
  },
});

// Create with Relations
const user = await prisma.user.create({
  data: {
    email: 'alice@example.com',
    posts: {
      create: [
        { title: 'Post 1' },
        { title: 'Post 2' },
      ],
    },
  },
});

// Connect Existing Records
const post = await prisma.post.create({
  data: {
    title: 'New Post',
    author: {
      connect: {
        id: 1,
      },
    },
  },
});

// Many-to-Many Relations
model Post {
  id         Int        @id @default(autoincrement())
  title      String
  tags       Tag[]
}

model Tag {
  id    Int    @id @default(autoincrement())
  name  String @unique
  posts Post[]
}

// Connect Many-to-Many
const post = await prisma.post.create({
  data: {
    title: 'New Post',
    tags: {
      connectOrCreate: [
        {
          where: { name: 'javascript' },
          create: { name: 'javascript' },
        },
      ],
    },
  },
});`}
      />
    </div>
  );
}

function MigrationsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Migrations</h2>
        <p className="text-white/60 text-lg mb-8">
          Migrate your database schema changes using Prisma Migrate. Track schema evolution and apply changes safely.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Create a Migration
npx prisma migrate dev --name add_user_table

# Apply Migrations
npx prisma migrate deploy

# Reset Database (Development only)
npx prisma migrate reset

# View Migration Status
npx prisma migrate status

# Create Migration without Applying
npx prisma migrate dev --create-only`}
      />

      <CodeExample
        language="typescript"
        code={`// Migration Workflow

// 1. Update schema.prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String  // Added new field
}

// 2. Create migration
// npx prisma migrate dev --name add_name_field

// 3. Prisma generates SQL migration
// prisma/migrations/20240101000000_add_name_field/migration.sql
ALTER TABLE "User" ADD COLUMN "name" TEXT;

// 4. Apply migration
// npx prisma migrate deploy

// Format Schema
npx prisma format

// Validate Schema
npx prisma validate

// View Database in Browser
npx prisma studio

// Generate Prisma Client
npx prisma generate`}
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
          Follow these patterns for production-ready Prisma applications.
        </p>
      </div>

      <CodeExample
        language="typescript"
        code={`// Single PrismaClient Instance
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Transactions
const result = await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({
    data: { email: 'alice@example.com' },
  });
  
  const post = await tx.post.create({
    data: {
      title: 'Post',
      authorId: user.id,
    },
  });
  
  return { user, post };
});

// Batch Operations
const createUsers = async (users: Array<{ email: string; name: string }>) => {
  return await prisma.$transaction(
    users.map(user =>
      prisma.user.create({ data: user })
    )
  );
};

// Error Handling
try {
  const user = await prisma.user.create({
    data: { email: 'alice@example.com' },
  });
} catch (error) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      console.log('Unique constraint violation');
    }
  }
  throw error;
}

// Type Safety
import { Prisma } from '@prisma/client';

type UserWithPosts = Prisma.UserGetPayload<{
  include: { posts: true };
}>;

const getUser = async (id: number): Promise<UserWithPosts | null> => {
  return await prisma.user.findUnique({
    where: { id },
    include: { posts: true },
  });
};`}
      />
    </div>
  );
}

function CodeExample({ code, language = 'typescript' }: { code: string; language?: string }) {
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

