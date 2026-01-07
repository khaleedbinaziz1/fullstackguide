'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiFirebase } from "react-icons/si";

export default function FirebaseAuthPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'email', title: 'Email/Password' },
    { id: 'social', title: 'Social Providers' },
    { id: 'security', title: 'Security Rules' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/auth" className="text-2xl font-bold gradient-text">
              FullstackGuide
            </Link>
            <Link href="/fullstack/auth" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Auth
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30 mb-8">
              <SiFirebase className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-semibold">Firebase Auth Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Firebase Auth</span>
              <span className="text-white block text-4xl">Google Authentication</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn Firebase authentication with email/password, social providers, phone auth, and security rules.
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
              {activeSection === 'email' && <EmailSection />}
              {activeSection === 'social' && <SocialSection />}
              {activeSection === 'security' && <SecuritySection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Firebase Auth Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Firebase Authentication provides backend services for authenticating users. Supports multiple auth methods.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Installation
npm install firebase`}
      />

      <CodeExample
        language="javascript"
        code={`// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  // ... other config
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);`}
      />
    </div>
  );
}

function EmailSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Email/Password Authentication</h2>
        <p className="text-white/60 text-lg mb-8">
          Authenticate users with email and password. Handle sign-up, sign-in, and password reset.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth';
import { auth } from './firebase';

// Sign Up
const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error(error);
  }
};

// Sign In
const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error(error);
  }
};

// Password Reset
await sendPasswordResetEmail(auth, email);

// Sign Out
await signOut(auth);`}
      />
    </div>
  );
}

function SocialSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Social Providers</h2>
        <p className="text-white/60 text-lg mb-8">
          Enable authentication with Google, Facebook, GitHub, and other social providers.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`import { 
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider
} from 'firebase/auth';

// Google Sign In
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error(error);
  }
};

// Facebook Sign In
const facebookProvider = new FacebookAuthProvider();

const signInWithFacebook = async () => {
  const result = await signInWithPopup(auth, facebookProvider);
  return result.user;
};`}
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
          Configure security rules to protect user data. Control access based on authentication state.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Public read, authenticated write
    match /posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
        resource.data.authorId == request.auth.uid;
    }
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
          Follow these patterns for secure Firebase authentication.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Listen to Auth State
import { onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
  } else {
    // User is signed out
  }
});

// Get Current User
const user = auth.currentUser;

// Email Verification
import { sendEmailVerification } from 'firebase/auth';

await sendEmailVerification(user);

// Handle Errors
try {
  await signInWithEmailAndPassword(auth, email, password);
} catch (error) {
  switch (error.code) {
    case 'auth/user-not-found':
      // Handle error
      break;
    case 'auth/wrong-password':
      // Handle error
      break;
  }
}`}
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

