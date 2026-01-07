'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiFirebase } from "react-icons/si";

export default function FirestorePage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'queries', title: 'Queries' },
    { id: 'security', title: 'Security Rules' },
    { id: 'realtime', title: 'Real-time Updates' },
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30 mb-8">
              <SiFirebase className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-semibold">Firestore Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Firestore</span>
              <span className="text-white block text-4xl">NoSQL Cloud Database</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn Firestore documents, collections, queries, real-time sync, security rules, and building scalable apps.
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
                          ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
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
              {activeSection === 'security' && <SecuritySection />}
              {activeSection === 'realtime' && <RealtimeSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Firestore Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Firestore is Google's NoSQL cloud database. Data is organized in collections and documents.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Initialize Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add Document
import { collection, addDoc } from 'firebase/firestore';

await addDoc(collection(db, 'users'), {
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});

// Read Document
import { doc, getDoc } from 'firebase/firestore';

const docRef = doc(db, 'users', 'userId');
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log(docSnap.data());
}

// Update Document
import { updateDoc } from 'firebase/firestore';

await updateDoc(doc(db, 'users', 'userId'), {
  age: 31
});

// Delete Document
import { deleteDoc } from 'firebase/firestore';

await deleteDoc(doc(db, 'users', 'userId'));`}
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
          Query documents with filters, ordering, and limits. Firestore supports compound queries and pagination.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

// Simple Query
const q = query(collection(db, 'users'), where('age', '>', 25));
const snapshot = await getDocs(q);

snapshot.forEach((doc) => {
  console.log(doc.id, doc.data());
});

// Compound Queries
const q = query(
  collection(db, 'users'),
  where('age', '>=', 18),
  where('age', '<=', 65),
  orderBy('age'),
  limit(10)
);

// Order By
const q = query(
  collection(db, 'posts'),
  orderBy('createdAt', 'desc')
);

// Pagination
const first = query(collection(db, 'posts'), orderBy('createdAt'), limit(10));
const snapshot = await getDocs(first);
const lastVisible = snapshot.docs[snapshot.docs.length - 1];

const next = query(
  collection(db, 'posts'),
  orderBy('createdAt'),
  startAfter(lastVisible),
  limit(10)
);`}
      />
    </div>
  );
}

function SecuritySection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Security Rules</h2>
        <p className="text-white/60 text-lg mb-8">
          Control access to your Firestore data using security rules. Authenticate users and validate data.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Security Rules (firestore.rules)
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Authenticated users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Public read, authenticated write
    match /posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
        request.resource.data.authorId == request.auth.uid;
    }
    
    // Validate data
    match /users/{userId} {
      allow write: if request.auth.uid == userId &&
        request.resource.data.keys().hasAll(['name', 'email']) &&
        request.resource.data.name is string &&
        request.resource.data.email is string;
    }
  }
}`}
      />
    </div>
  );
}

function RealtimeSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Real-time Updates</h2>
        <p className="text-white/60 text-lg mb-8">
          Listen to document and query changes in real-time. Automatically sync data across clients.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`import { onSnapshot, doc, collection, query } from 'firebase/firestore';

// Listen to Document
const unsubscribe = onSnapshot(doc(db, 'users', 'userId'), (doc) => {
  console.log('Current data:', doc.data());
});

// Listen to Query
const q = query(collection(db, 'posts'), where('published', '==', true));

const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      console.log('New post:', change.doc.data());
    }
    if (change.type === 'modified') {
      console.log('Modified post:', change.doc.data());
    }
    if (change.type === 'removed') {
      console.log('Removed post:', change.doc.id);
    }
  });
});

// Stop listening
unsubscribe();`}
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
          Follow these patterns for scalable and cost-effective Firestore applications.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Structure Data Efficiently
// Flatten data when possible
// Avoid deep nesting (max 20 levels)

// Use Indexes
// Create composite indexes for compound queries
// Firestore creates single-field indexes automatically

// Batch Operations
import { writeBatch } from 'firebase/firestore';

const batch = writeBatch(db);
batch.update(doc(db, 'users', 'user1'), { status: 'active' });
batch.update(doc(db, 'users', 'user2'), { status: 'active' });
await batch.commit();

// Offline Support
import { enableIndexedDbPersistence } from 'firebase/firestore';

enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      // Multiple tabs open
    }
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

