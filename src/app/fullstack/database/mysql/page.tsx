'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiMysql } from "react-icons/si";

export default function MySQLPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'queries', title: 'Queries' },
    { id: 'joins', title: 'Joins' },
    { id: 'indexes', title: 'Indexes' },
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30 mb-8">
              <SiMysql className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">MySQL Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">MySQL</span>
              <span className="text-white block text-4xl">Popular Relational Database</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn MySQL fundamentals, SQL queries, joins, indexes, transactions, and building reliable database applications.
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
        <h2 className="text-4xl font-bold text-white mb-4">MySQL Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          MySQL is the world's most popular open-source relational database. Learn table creation, CRUD operations, and data types.
        </p>
      </div>

      <CodeExample
        language="sql"
        code={`-- Create Database
CREATE DATABASE mydb;
USE mydb;

-- Create Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Insert Data
INSERT INTO users (name, email, age) 
VALUES ('John Doe', 'john@example.com', 30);

-- Select Data
SELECT * FROM users;
SELECT name, email FROM users WHERE age > 25;

-- Update Data
UPDATE users SET age = 31 WHERE id = 1;

-- Delete Data
DELETE FROM users WHERE id = 1;`}
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
          Master SQL queries with WHERE clauses, aggregations, grouping, subqueries, and window functions.
        </p>
      </div>

      <CodeExample
        language="sql"
        code={`-- Aggregations
SELECT COUNT(*) FROM users;
SELECT AVG(age) FROM users;
SELECT MAX(age), MIN(age) FROM users;

-- GROUP BY
SELECT age, COUNT(*) as count 
FROM users 
GROUP BY age;

-- HAVING
SELECT age, COUNT(*) as count 
FROM users 
GROUP BY age 
HAVING count > 5;

-- Subqueries
SELECT * FROM users 
WHERE age > (SELECT AVG(age) FROM users);

-- Window Functions (MySQL 8.0+)
SELECT 
    name,
    age,
    ROW_NUMBER() OVER (ORDER BY age DESC) as rank
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
          Combine data from multiple tables using INNER JOIN, LEFT JOIN, RIGHT JOIN, and CROSS JOIN.
        </p>
      </div>

      <CodeExample
        language="sql"
        code={`-- INNER JOIN
SELECT u.name, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id;

-- Multiple Joins
SELECT u.name, o.id, oi.product_name
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN order_items oi ON o.id = oi.order_id;`}
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
          Create indexes to improve query performance. Support single column, composite, and unique indexes.
        </p>
      </div>

      <CodeExample
        language="sql"
        code={`-- Create Index
CREATE INDEX idx_email ON users(email);

-- Unique Index
CREATE UNIQUE INDEX idx_email_unique ON users(email);

-- Composite Index
CREATE INDEX idx_name_email ON users(name, email);

-- Show Indexes
SHOW INDEXES FROM users;

-- Drop Index
DROP INDEX idx_email ON users;`}
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
          Follow these patterns for efficient and secure MySQL databases.
        </p>
      </div>

      <CodeExample
        language="sql"
        code={`-- Use Prepared Statements (Prevent SQL Injection)
PREPARE stmt FROM 'SELECT * FROM users WHERE id = ?';
SET @id = 1;
EXECUTE stmt USING @id;

-- Use Transactions
START TRANSACTION;
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');
INSERT INTO orders (user_id, total) VALUES (1, 99.99);
COMMIT;

-- Normalize Data
-- Avoid duplicate data
-- Use foreign keys

-- Optimize Queries
EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';

-- Regular Maintenance
OPTIMIZE TABLE users;
ANALYZE TABLE users;`}
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

