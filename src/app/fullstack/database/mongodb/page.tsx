'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiMongodb } from "react-icons/si";

export default function MongoPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'queries', title: 'Queries' },
    { id: 'aggregation', title: 'Aggregation' },
    { id: 'indexes', title: 'Indexes' },
    { id: 'mongoose', title: 'Mongoose' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/database" className="text-2xl font-bold gradient-text">
              Open Stack JS
            </Link>
            <Link href="/fullstack/database" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Database
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30 mb-8">
              <SiMongodb className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">MongoDB Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">MongoDB</span>
              <span className="text-white block text-4xl">NoSQL Document Database</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn MongoDB documents, collections, queries, aggregation pipeline, and building scalable NoSQL applications.
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
              {activeSection === 'queries' && <QueriesSection />}
              {activeSection === 'aggregation' && <AggregationSection />}
              {activeSection === 'indexes' && <IndexesSection />}
              {activeSection === 'mongoose' && <MongooseSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">MongoDB Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          MongoDB is a NoSQL document database. Data is stored as documents (JSON-like BSON) in collections.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Connect to MongoDB
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
  await client.connect();
  const db = client.db("mydb");
  const collection = db.collection("users");
  
  // Insert Document
  const result = await collection.insertOne({
    name: "John Doe",
    email: "john@example.com",
    age: 30
  });
  
  await client.close();
}

// Documents (BSON)
{
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  tags: ["developer", "nodejs"],
  address: {
    street: "123 Main St",
    city: "New York"
  }
}

// Collections and Databases
// Database -> Collections -> Documents`}
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
          Query documents using filters, operators, and projections. Find, update, and delete documents.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Find Documents
await collection.find({}).toArray();

// Find One
await collection.findOne({ name: "John Doe" });

// Find with Filter
await collection.find({ age: { $gt: 25 } }).toArray();

// Comparison Operators
// $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
await collection.find({ age: { $gte: 18, $lte: 65 } });

// Logical Operators
await collection.find({
  $or: [
    { age: { $lt: 18 } },
    { age: { $gt: 65 } }
  ]
});

// Update
await collection.updateOne(
  { name: "John Doe" },
  { $set: { age: 31 } }
);

await collection.updateMany(
  { age: { $lt: 18 } },
  { $set: { status: "minor" } }
);

// Delete
await collection.deleteOne({ name: "John Doe" });
await collection.deleteMany({ age: { $lt: 18 } });

// Projection
await collection.find({}, { projection: { name: 1, email: 1 } });`}
      />
    </div>
  );
}

function AggregationSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Aggregation Pipeline</h2>
        <p className="text-white/60 text-lg mb-8">
          Transform and analyze data using aggregation pipeline stages like $match, $group, $sort, and $project.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Aggregation Pipeline
await collection.aggregate([
  // Stage 1: Match
  { $match: { age: { $gte: 18 } } },
  
  // Stage 2: Group
  { $group: {
    _id: "$department",
    avgAge: { $avg: "$age" },
    count: { $sum: 1 }
  }},
  
  // Stage 3: Sort
  { $sort: { avgAge: -1 } }
]).toArray();

// Common Stages
// $match - Filter documents
// $group - Group by field
// $sort - Sort results
// $project - Select fields
// $limit - Limit results
// $skip - Skip documents
// $unwind - Unwind arrays
// $lookup - Join collections`}
      />
    </div>
  );
}

function IndexesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Indexes</h2>
        <p className="text-white/60 text-lg mb-8">
          Create indexes to improve query performance. Support single field, compound, text, and geospatial indexes.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Create Index
await collection.createIndex({ email: 1 });
await collection.createIndex({ name: 1, age: -1 });

// Unique Index
await collection.createIndex({ email: 1 }, { unique: true });

// Text Index
await collection.createIndex({ title: "text", content: "text" });

// List Indexes
await collection.indexes();

// Drop Index
await collection.dropIndex("email_1");`}
      />
    </div>
  );
}

function MongooseSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Mongoose ODM</h2>
        <p className="text-white/60 text-lg mb-8">
          Mongoose provides schema-based solution for modeling MongoDB data. Validation, middleware, and type casting.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`const mongoose = require('mongoose');

// Connect
mongoose.connect('mongodb://localhost:27017/mydb');

// Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0, max: 150 }
});

// Model
const User = mongoose.model('User', userSchema);

// Create
const user = new User({ name: "John", email: "john@example.com" });
await user.save();

// Find
const users = await User.find({ age: { $gte: 18 } });

// Update
await User.updateOne({ name: "John" }, { age: 31 });

// Delete
await User.deleteOne({ name: "John" });`}
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
          Follow these patterns for scalable and maintainable MongoDB applications.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Use Connection Pooling
const client = new MongoClient(uri, {
  maxPoolSize: 10,
  minPoolSize: 5
});

// Index Frequently Queried Fields
await collection.createIndex({ email: 1 });

// Use Projections to Limit Data
await collection.find({}, { projection: { name: 1 } });

// Use Transactions for Multi-Document Operations
const session = client.startSession();
try {
  await session.withTransaction(async () => {
    await collection1.insertOne({}, { session });
    await collection2.insertOne({}, { session });
  });
} finally {
  await session.endSession();
}

// Embed vs Reference
// Embed: One-to-few, small documents, no access pattern
// Reference: Many-to-many, large documents, frequent updates`}
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

