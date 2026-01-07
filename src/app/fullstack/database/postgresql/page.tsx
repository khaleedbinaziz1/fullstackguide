'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiPostgresql } from "react-icons/si";

export default function PostgreSQLPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'queries', title: 'Queries' },
    { id: 'joins', title: 'Joins' },
    { id: 'indexes', title: 'Indexes' },
    { id: 'transactions', title: 'Transactions' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/database" className="text-2xl font-bold gradient-text">
              FullstackGuide
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full border border-blue-500/30 mb-8">
              <SiPostgresql className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">PostgreSQL Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">PostgreSQL</span>
              <span className="text-white block text-4xl">Advanced Relational Database</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn SQL, queries, joins, indexes, transactions, and advanced PostgreSQL features for production applications.
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
              {activeSection === 'queries' && <QueriesSection />}
              {activeSection === 'joins' && <JoinsSection />}
              {activeSection === 'indexes' && <IndexesSection />}
              {activeSection === 'transactions' && <TransactionsSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">PostgreSQL Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          PostgreSQL is an advanced open-source relational database management system. Learn table creation, data types, and basic operations.
        </p>
      </div>

      <CodeExample
        language="sql"
        code={`-- Create Database
CREATE DATABASE mydb;

-- Create Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Data Types
-- INTEGER, BIGINT, SERIAL, BIGSERIAL
-- VARCHAR(n), TEXT, CHAR(n)
-- BOOLEAN
-- DATE, TIME, TIMESTAMP
-- NUMERIC(precision, scale), DECIMAL, FLOAT, DOUBLE PRECISION
-- JSON, JSONB
-- UUID
-- ARRAY

-- Insert Data
INSERT INTO users (name, email, age) 
VALUES ('John Doe', 'john@example.com', 30);

INSERT INTO users (name, email, age) 
VALUES 
    ('Jane Doe', 'jane@example.com', 25),
    ('Bob Smith', 'bob@example.com', 35);

-- Select Data
SELECT * FROM users;
SELECT name, email FROM users;
SELECT * FROM users WHERE age > 25;
SELECT * FROM users ORDER BY created_at DESC;
SELECT * FROM users LIMIT 10;

-- Update Data
UPDATE users SET age = 31 WHERE id = 1;
UPDATE users SET age = age + 1 WHERE age < 30;

-- Delete Data
DELETE FROM users WHERE id = 1;
DELETE FROM users WHERE age < 18;`}
      />
    </div>
  );
}

function QueriesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Advanced Queries</h2>
        <p className="text-white/60 text-lg mb-8">
          Master complex queries with WHERE clauses, aggregations, grouping, subqueries, and window functions.
        </p>
      </div>

      <CodeExample
        language="sql"
        code={`-- WHERE Conditions
SELECT * FROM users 
WHERE age BETWEEN 25 AND 35;

SELECT * FROM users 
WHERE email LIKE '%@example.com';

SELECT * FROM users 
WHERE name IN ('John Doe', 'Jane Doe');

SELECT * FROM users 
WHERE email IS NOT NULL 
  AND age > 25;

-- Aggregation Functions
SELECT COUNT(*) FROM users;
SELECT AVG(age) FROM users;
SELECT MAX(age), MIN(age) FROM users;
SELECT SUM(age) FROM users;

-- GROUP BY
SELECT 
    EXTRACT(YEAR FROM created_at) as year,
    COUNT(*) as user_count
FROM users
GROUP BY year
ORDER BY year;

-- HAVING
SELECT 
    age,
    COUNT(*) as count
FROM users
GROUP BY age
HAVING COUNT(*) > 5;

-- Subqueries
SELECT * FROM users
WHERE age > (
    SELECT AVG(age) FROM users
);

-- EXISTS
SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o 
    WHERE o.user_id = u.id
);

-- Window Functions
SELECT 
    name,
    age,
    ROW_NUMBER() OVER (ORDER BY age DESC) as rank,
    AVG(age) OVER () as avg_age
FROM users;`}
      />
    </div>
  );
}

function JoinsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Joins</h2>
        <p className="text-white/60 text-lg mb-8">
          Combine data from multiple tables using INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.
        </p>
      </div>

      <CodeExample
        language="sql"
        code={`-- Create Related Tables
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    total DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INNER JOIN
SELECT 
    u.name,
    u.email,
    o.id as order_id,
    o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN
SELECT 
    u.name,
    COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- RIGHT JOIN
SELECT 
    u.name,
    o.total
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;

-- FULL OUTER JOIN
SELECT 
    u.name,
    o.total
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;

-- Multiple Joins
SELECT 
    u.name,
    o.id as order_id,
    oi.product_name,
    oi.quantity
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN order_items oi ON o.id = oi.order_id;

-- Self Join
SELECT 
    e.name as employee,
    m.name as manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;`}
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
          Indexes improve query performance by allowing faster data retrieval. Learn when and how to create indexes.
        </p>
      </div>

      <CodeExample
        language="sql"
        code={`-- Create Index
CREATE INDEX idx_users_email ON users(email);

-- Unique Index
CREATE UNIQUE INDEX idx_users_email_unique ON users(email);

-- Composite Index
CREATE INDEX idx_users_name_email ON users(name, email);

-- Partial Index
CREATE INDEX idx_active_users ON users(email) 
WHERE age >= 18;

-- Explain Query Plan
EXPLAIN ANALYZE 
SELECT * FROM users WHERE email = 'john@example.com';

-- Drop Index
DROP INDEX idx_users_email;

-- List Indexes
SELECT 
    tablename,
    indexname,
    indexdef
FROM pg_indexes
WHERE schemaname = 'public';

-- GIN Index (for JSONB)
CREATE INDEX idx_users_metadata ON users 
USING GIN (metadata);

-- B-Tree Index (default)
CREATE INDEX idx_users_age ON users 
USING BTREE (age);`}
      />
    </div>
  );
}

function TransactionsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Transactions</h2>
        <p className="text-white/60 text-lg mb-8">
          Transactions ensure data integrity by grouping multiple operations into atomic units. All succeed or all fail.
        </p>
      </div>

      <CodeExample
        language="sql"
        code={`-- Basic Transaction
BEGIN;
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');
INSERT INTO orders (user_id, total) VALUES (1, 99.99);
COMMIT;

-- Rollback
BEGIN;
UPDATE users SET age = 25 WHERE id = 1;
DELETE FROM orders WHERE id = 1;
ROLLBACK;

-- Savepoints
BEGIN;
INSERT INTO users (name, email) VALUES ('Jane', 'jane@example.com');
SAVEPOINT sp1;
INSERT INTO orders (user_id, total) VALUES (2, 199.99);
ROLLBACK TO sp1;
INSERT INTO orders (user_id, total) VALUES (2, 149.99);
COMMIT;

-- Transaction Isolation Levels
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

BEGIN;
SELECT * FROM users WHERE id = 1;
-- Other transactions can modify data
COMMIT;

-- Lock Rows
BEGIN;
SELECT * FROM users WHERE id = 1 FOR UPDATE;
-- Row is locked until transaction ends
COMMIT;`}
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
          Follow these patterns for efficient and maintainable PostgreSQL databases.
        </p>
      </div>

      <CodeExample
        language="sql"
        code={`-- Use Parameterized Queries (Prevent SQL Injection)
-- Good
SELECT * FROM users WHERE email = $1;

-- Bad
-- SELECT * FROM users WHERE email = 'user@example.com';

-- Use Appropriate Data Types
-- Use INTEGER instead of VARCHAR for numbers
-- Use TIMESTAMP instead of VARCHAR for dates
-- Use BOOLEAN instead of INTEGER for flags

-- Normalize Data
-- Avoid storing duplicate data
-- Use foreign keys for relationships

-- Use Constraints
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER CHECK (age >= 0 AND age <= 150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Regular Maintenance
VACUUM ANALYZE users;
REINDEX TABLE users;

-- Monitor Performance
SELECT 
    schemaname,
    tablename,
    n_live_tup,
    n_dead_tup
FROM pg_stat_user_tables;

-- Use Connection Pooling
-- PgBouncer or built-in pooling

-- Backup Regularly
-- pg_dump for logical backups
-- pg_basebackup for physical backups`}
      />
    </div>
  );
}

function CodeExample({ code, language = 'sql' }: { code: string; language?: string }) {
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

