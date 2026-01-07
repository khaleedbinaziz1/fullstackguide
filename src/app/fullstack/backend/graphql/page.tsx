'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiGraphql } from "react-icons/si";

export default function GraphQLPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'schema', title: 'Schema' },
    { id: 'queries', title: 'Queries' },
    { id: 'mutations', title: 'Mutations' },
    { id: 'subscriptions', title: 'Subscriptions' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/backend" className="text-2xl font-bold gradient-text">
              FullstackGuide
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600/20 to-red-600/20 rounded-full border border-pink-500/30 mb-8">
              <SiGraphql className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 font-semibold">GraphQL Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">GraphQL</span>
              <span className="text-white block text-4xl">Query Language for APIs</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn GraphQL schemas, queries, mutations, subscriptions, and building type-safe APIs.
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
                          ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
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
              {activeSection === 'mutations' && <MutationsSection />}
              {activeSection === 'subscriptions' && <SubscriptionsSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">GraphQL Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          GraphQL is a query language for APIs and a runtime for executing those queries. It provides a complete description of the data in your API.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Installation (Apollo Server)
npm install apollo-server graphql
# or
npm install @apollo/server graphql

# Installation (Node.js with Express)
npm install express graphql express-graphql`}
      />

      <CodeExample
        language="graphql"
        code={`# Basic GraphQL Query
query {
  user(id: "1") {
    id
    name
    email
    posts {
      title
      content
    }
  }
}

# Response
{
  "data": {
    "user": {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com",
      "posts": [
        {
          "title": "Post 1",
          "content": "Content 1"
        }
      ]
    }
  }
}`}
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
          The schema defines the structure of your API. It specifies what queries, mutations, and subscriptions are available.
        </p>
      </div>

      <CodeExample
        language="graphql"
        code={`# Schema Definition
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
  createdAt: DateTime!
}

type Post {
  id: ID!
  title: String!
  content: String
  author: User!
  published: Boolean!
  createdAt: DateTime!
}

type Query {
  user(id: ID!): User
  users: [User!]!
  post(id: ID!): Post
  posts: [Post!]!
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): Boolean!
}

input CreateUserInput {
  name: String!
  email: String!
}

input UpdateUserInput {
  name: String
  email: String
}

# Scalar Types
# String, Int, Float, Boolean, ID
# Custom scalars
scalar DateTime
scalar JSON`}
      />

      <CodeExample
        language="javascript"
        code={`// Apollo Server Schema
const { gql } = require('apollo-server');

const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    author: User!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
\`;

module.exports = typeDefs;`}
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
          Queries are used to read data. They are read-only operations that fetch data without modifying it.
        </p>
      </div>

      <CodeExample
        language="graphql"
        code={`# Simple Query
query {
  users {
    id
    name
    email
  }
}

# Query with Arguments
query {
  user(id: "1") {
    name
    email
  }
}

# Query with Aliases
query {
  firstUser: user(id: "1") {
    name
  }
  secondUser: user(id: "2") {
    name
  }
}

# Query with Fragments
query {
  user(id: "1") {
    ...userFields
    posts {
      ...postFields
    }
  }
}

fragment userFields on User {
  id
  name
  email
}

fragment postFields on Post {
  id
  title
  content
}

# Query with Variables
query GetUser($userId: ID!) {
  user(id: $userId) {
    name
    email
  }
}

# Variables JSON
{
  "userId": "1"
}

# Query with Directives
query {
  user(id: "1") {
    name
    email @include(if: $includeEmail)
    posts @skip(if: $skipPosts) {
      title
    }
  }
}`}
      />

      <CodeExample
        language="javascript"
        code={`// Resolvers
const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
    user: async (parent, args) => {
      return await prisma.user.findUnique({
        where: { id: args.id },
        include: { posts: true },
      });
    },
  },
  User: {
    posts: async (parent) => {
      return await prisma.post.findMany({
        where: { authorId: parent.id },
      });
    },
  },
};`}
      />
    </div>
  );
}

function MutationsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Mutations</h2>
        <p className="text-white/60 text-lg mb-8">
          Mutations are used to modify data. They can create, update, or delete data.
        </p>
      </div>

      <CodeExample
        language="graphql"
        code={`# Create Mutation
mutation {
  createUser(input: {
    name: "John Doe"
    email: "john@example.com"
  }) {
    id
    name
    email
  }
}

# Update Mutation
mutation {
  updateUser(
    id: "1"
    input: {
      name: "Jane Doe"
    }
  ) {
    id
    name
    email
  }
}

# Delete Mutation
mutation {
  deleteUser(id: "1")
}

# Mutation with Variables
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
  }
}

# Variables
{
  "input": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}`}
      />

      <CodeExample
        language="javascript"
        code={`// Mutation Resolvers
const resolvers = {
  Mutation: {
    createUser: async (parent, { input }) => {
      return await prisma.user.create({
        data: input,
      });
    },
    updateUser: async (parent, { id, input }) => {
      return await prisma.user.update({
        where: { id },
        data: input,
      });
    },
    deleteUser: async (parent, { id }) => {
      await prisma.user.delete({
        where: { id },
      });
      return true;
    },
  },
};`}
      />
    </div>
  );
}

function SubscriptionsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Subscriptions</h2>
        <p className="text-white/60 text-lg mb-8">
          Subscriptions allow real-time updates. They use WebSockets to push data to clients when events occur.
        </p>
      </div>

      <CodeExample
        language="graphql"
        code={`# Subscription
subscription {
  postCreated {
    id
    title
    author {
      name
    }
  }
}

# Subscription Schema
type Subscription {
  postCreated: Post!
  userUpdated(userId: ID!): User!
  commentAdded(postId: ID!): Comment!
}`}
      />

      <CodeExample
        language="javascript"
        code={`// Subscription Resolvers
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

const resolvers = {
  Mutation: {
    createPost: async (parent, { input }, context) => {
      const post = await prisma.post.create({
        data: {
          ...input,
          authorId: context.userId,
        },
      });

      // Publish event
      pubsub.publish('POST_CREATED', {
        postCreated: post,
      });

      return post;
    },
  },
  Subscription: {
    postCreated: {
      subscribe: () => pubsub.asyncIterator('POST_CREATED'),
    },
  },
};`}
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
          Follow these patterns for maintainable and performant GraphQL APIs.
        </p>
      </div>

      <CodeExample
        language="graphql"
        code={`# Use Input Types for Mutations
input CreateUserInput {
  name: String!
  email: String!
}

type Mutation {
  createUser(input: CreateUserInput!): User!
}

# Pagination
type Query {
  posts(first: Int, after: String): PostConnection!
}

type PostConnection {
  edges: [PostEdge!]!
  pageInfo: PageInfo!
}

type PostEdge {
  node: Post!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

# Error Handling
type Mutation {
  createUser(input: CreateUserInput!): CreateUserPayload!
}

type CreateUserPayload {
  user: User
  errors: [Error!]!
}

type Error {
  field: String!
  message: String!
}`}
      />
    </div>
  );
}

function CodeExample({ code, language = 'graphql' }: { code: string; language?: string }) {
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

