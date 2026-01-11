'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiTypescript } from "react-icons/si";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CodeExample from "@/components/CodeExample";
import FlowDiagram from "@/components/FlowDiagram";
import ConceptCard from "@/components/ConceptCard";

export default function TypeScriptPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basic Types' },
    { id: 'functions', title: 'Functions' },
    { id: 'interfaces', title: 'Interfaces & Types' },
    { id: 'classes', title: 'Classes' },
    { id: 'generics', title: 'Generics' },
    { id: 'advanced', title: 'Advanced Types' },
    { id: 'challenges', title: 'Coding Challenges' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <Navigation showBackButton backHref="/fullstack/frontend" backLabel="Back to Frontend" />

      {/* Main Content */}
      <main id="main-content" className="pt-24 pb-20" role="main">
        <div className="container mx-auto max-w-7xl px-6">
          <Breadcrumbs />
          
          {/* Header */}
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-full border border-blue-500/30 mb-8">
              <SiTypescript className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">TypeScript Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">TypeScript</span>
              <span className="text-white block text-4xl">JavaScript with Syntax for Types</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              TypeScript adds static type definitions to JavaScript. Learn how to write type-safe, scalable code.
            </p>
          </div>

          {/* Sidebar Navigation */}
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

            {/* Content Area */}
            <div className="col-span-9">
              {activeSection === 'basics' && <BasicTypesSection />}
              {activeSection === 'functions' && <FunctionsSection />}
              {activeSection === 'interfaces' && <InterfacesSection />}
              {activeSection === 'classes' && <ClassesSection />}
              {activeSection === 'generics' && <GenericsSection />}
              {activeSection === 'advanced' && <AdvancedTypesSection />}
              {activeSection === 'challenges' && <ChallengesSection />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Section Components
function BasicTypesSection() {
  return (
    <div className="space-y-12">
      {/* Fundamental Concept */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-4 sm:p-6 mb-8 overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-3">🎯 Core Concept: Type Safety</h3>
        <p className="text-white/70 leading-relaxed mb-4">
          TypeScript adds <strong className="text-white">static type checking</strong> to JavaScript. Types help catch errors at compile-time 
          instead of runtime, provide better IDE support, and serve as documentation. TypeScript types are erased at runtime - they exist only during development.
        </p>
        <div className="w-full overflow-x-auto -mx-2 px-2">
          <FlowDiagram
            steps={[
              { label: "TypeScript Code", description: "Write with types", color: "from-blue-500 to-cyan-500" },
              { label: "Type Checking", description: "Compiler validates", color: "from-purple-500 to-pink-500" },
              { label: "JavaScript Output", description: "Types removed", color: "from-green-500 to-emerald-500" },
              { label: "Runtime", description: "Runs as JavaScript", color: "from-orange-500 to-yellow-500" },
            ]}
          />
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Basic Types</h2>
        <p className="text-white/60 text-lg mb-8">
          Learn the fundamental types TypeScript provides for annotating your code and catching errors early.
        </p>
      </div>

      <div className="space-y-8">
        <TypeCard
          title="String"
          description="Text data type"
          example="let name: string = 'TypeScript';"
          visualization={
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <div className="font-mono text-sm">
                <span className="text-blue-300">let</span>{' '}
                <span className="text-green-300">name</span>{' '}
                <span className="text-purple-300">: string</span>{' '}
                <span className="text-blue-300">=</span>{' '}
                <span className="text-yellow-300">'TypeScript'</span>;
              </div>
            </div>
          }
        />

        <TypeCard
          title="Number"
          description="Numeric data type (integers and floats)"
          example="let age: number = 30;"
          visualization={
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="font-mono text-sm">
                <span className="text-blue-300">let</span>{' '}
                <span className="text-green-300">age</span>{' '}
                <span className="text-purple-300">: number</span>{' '}
                <span className="text-blue-300">=</span>{' '}
                <span className="text-yellow-300">30</span>;
              </div>
            </div>
          }
        />

        <TypeCard
          title="Boolean"
          description="True or false values"
          example="let isActive: boolean = true;"
          visualization={
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <div className="font-mono text-sm">
                <span className="text-blue-300">let</span>{' '}
                <span className="text-green-300">isActive</span>{' '}
                <span className="text-purple-300">: boolean</span>{' '}
                <span className="text-blue-300">=</span>{' '}
                <span className="text-yellow-300">true</span>;
              </div>
            </div>
          }
        />

        <TypeCard
          title="Array"
          description="Collection of elements"
          example="let numbers: number[] = [1, 2, 3];"
          visualization={
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
              <div className="font-mono text-sm mb-2">
                <span className="text-blue-300">let</span>{' '}
                <span className="text-green-300">numbers</span>{' '}
                <span className="text-purple-300">: number[]</span>{' '}
                <span className="text-blue-300">=</span>{' '}
                <span className="text-yellow-300">[1, 2, 3]</span>;
              </div>
              <div className="flex gap-2 mt-3">
                <div className="bg-pink-500/20 px-3 py-1 rounded">1</div>
                <div className="bg-pink-500/20 px-3 py-1 rounded">2</div>
                <div className="bg-pink-500/20 px-3 py-1 rounded">3</div>
              </div>
            </div>
          }
        />
      </div>

      {/* Type Relationship Visualization */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Type Hierarchy</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30">
            <div className="text-blue-300 font-semibold mb-2">Primitives</div>
            <div className="text-white/70 text-sm space-y-1">
              <div>string</div>
              <div>number</div>
              <div>boolean</div>
            </div>
          </div>
          <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-500/30">
            <div className="text-purple-300 font-semibold mb-2">Collections</div>
            <div className="text-white/70 text-sm space-y-1">
              <div>Array&lt;T&gt;</div>
              <div>Object</div>
              <div>Tuple</div>
            </div>
          </div>
          <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
            <div className="text-green-300 font-semibold mb-2">Special</div>
            <div className="text-white/70 text-sm space-y-1">
              <div>any</div>
              <div>void</div>
              <div>null</div>
            </div>
          </div>
          <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-500/30">
            <div className="text-orange-300 font-semibold mb-2">Composite</div>
            <div className="text-white/70 text-sm space-y-1">
              <div>Union (|)</div>
              <div>Intersection (&)</div>
              <div>Generic</div>
            </div>
          </div>
        </div>
      </div>

      <CodeExample
        language="typescript"
        title="Type System Fundamentals"
        explanation="TypeScript provides a rich type system. Start with basic types and build up to complex types."
        code={`// Primitive Types
let name: string = "TypeScript";
let age: number = 30;
let isActive: boolean = true;

// Array Types
let items: string[] = ["apple", "banana"];
let numbers: number[] = [1, 2, 3, 4, 5];
// Or: Array<number> = [1, 2, 3]

// Object Types
let user: { name: string; age: number } = { 
  name: "John", 
  age: 30 
};

// Type Inference - TypeScript guesses the type
let inferredString = "Hello"; // Type: string (inferred)
let inferredNumber = 42; // Type: number (inferred)
let inferredArray = [1, 2, 3]; // Type: number[] (inferred)

// Explicit typing is optional when TypeScript can infer
let explicit: string = "Hello"; // ✅ Explicit
let inferred = "Hello"; // ✅ Also string, but inferred

// Special Types
let anything: any = "can be anything"; // ⚠️ Avoid - loses type safety
let nothing: void = undefined; // For functions that return nothing
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Union Types - Value can be one of several types
let id: string | number;
id = "123"; // ✅ OK
id = 123; // ✅ OK
id = true; // ❌ Error: boolean not allowed

// Practical Union Type Example
function formatId(id: string | number): string {
  if (typeof id === 'string') {
    return id.toUpperCase();
  }
  return id.toString();
}`}
      />
    </div>
  );
}

function FunctionsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Functions</h2>
        <p className="text-white/60 text-lg mb-8">
          TypeScript functions can have typed parameters and return types, providing better documentation and error checking.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
          <h3 className="text-blue-400 font-semibold mb-4">Function Declaration</h3>
          <div className="space-y-4">
            <div className="font-mono text-sm">
              <div className="text-blue-300">function</div>
              <div className="ml-4 text-green-300">greet(name: string)</div>
              <div className="ml-4 text-purple-300">: string</div>
              <div className="ml-4 text-blue-300">{'{'}</div>
              <div className="ml-8 text-white">return `Hello, ${'{'}name{'}'}`;</div>
              <div className="ml-4 text-blue-300">{'}'}</div>
            </div>
          </div>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
          <h3 className="text-green-400 font-semibold mb-4">Arrow Functions</h3>
          <div className="space-y-4">
            <div className="font-mono text-sm">
              <div className="text-blue-300">const</div>
              <div className="ml-4 text-green-300">add = (a: number, b: number)</div>
              <div className="ml-4 text-purple-300">: number</div>
              <div className="ml-4 text-blue-300">=&gt;</div>
              <div className="ml-4 text-white">a + b;</div>
            </div>
          </div>
        </div>
      </div>

      <CodeExample
        language="typescript"
        code={`// Function with typed parameters and return type
function greet(name: string): string {
  return \`Hello, \${name}\`;
}

// Optional parameters
function createUser(name: string, email?: string): void {
  console.log(name, email || 'no email');
}

// Default parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// Function types
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

// Overloads
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  return String(value);
}`}
      />
    </div>
  );
}

function InterfacesSection() {
  return (
    <div className="space-y-12">
      {/* Fundamental Concept */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-3">🎯 Core Concept: Type Definitions</h3>
        <p className="text-white/70 leading-relaxed mb-4">
          <strong className="text-white">Interfaces</strong> and <strong className="text-white">Types</strong> define the shape of objects and values. 
          They serve as contracts that your code must follow. Interfaces are better for object shapes, types are more flexible for unions and computed types.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <ConceptCard
            title="Interface"
            description="Best for object shapes. Can be extended and merged."
            code="interface User { name: string; }"
            color="from-purple-500 to-pink-500"
          />
          <ConceptCard
            title="Type Alias"
            description="More flexible. Can represent unions, intersections, primitives."
            code="type Status = 'pending' | 'approved';"
            color="from-blue-500 to-cyan-500"
          />
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Interfaces & Types</h2>
        <p className="text-white/60 text-lg mb-8">
          Learn how to define and extend type definitions to create reusable type contracts for your code.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-purple-400 font-semibold mb-4">Interface</h3>
          <div className="font-mono text-sm space-y-2">
            <div className="text-blue-300">interface</div>
            <div className="ml-4 text-green-300">User</div>
            <div className="ml-4 text-blue-300">{'{'}</div>
            <div className="ml-8 text-cyan-300">id: number;</div>
            <div className="ml-8 text-cyan-300">name: string;</div>
            <div className="ml-8 text-cyan-300">email?: string;</div>
            <div className="ml-4 text-blue-300">{'}'}</div>
          </div>
        </div>

        <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-6">
          <h3 className="text-pink-400 font-semibold mb-4">Type Alias</h3>
          <div className="font-mono text-sm space-y-2">
            <div className="text-blue-300">type</div>
            <div className="ml-4 text-green-300">Status</div>
            <div className="ml-4 text-blue-300">=</div>
            <div className="ml-4 text-yellow-300">"pending" | "approved"</div>
            <div className="ml-4 text-blue-300">|</div>
            <div className="ml-4 text-yellow-300">"rejected"</div>
          </div>
        </div>
      </div>

      <CodeExample
        language="typescript"
        code={`// Interface Definition
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
  readonly createdAt: Date; // Readonly property
}

// Using Interface
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date()
};

// Extending Interfaces
interface Admin extends User {
  permissions: string[];
}

// Type Alias
type Status = "pending" | "approved" | "rejected";
type UserId = number | string;

// Type with Properties
type Point = {
  x: number;
  y: number;
};

// Intersection Types
type Employee = User & {
  department: string;
  salary: number;
};

// Union Types
type ID = string | number;

function processId(id: ID) {
  if (typeof id === 'string') {
    return id.toUpperCase();
  }
  return id.toString();
}`}
      />
    </div>
  );
}

function ClassesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Classes</h2>
        <p className="text-white/60 text-lg mb-8">
          TypeScript classes support type annotations for properties, methods, and access modifiers.
        </p>
      </div>

      <CodeExample
        language="typescript"
        code={`// Class with TypeScript
class User {
  // Public properties
  public name: string;
  public email: string;
  
  // Private property
  private id: number;
  
  // Protected property (accessible in subclasses)
  protected createdAt: Date;
  
  // Constructor
  constructor(name: string, email: string, id: number) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.createdAt = new Date();
  }
  
  // Public method
  public greet(): string {
    return \`Hello, I'm \${this.name}\`;
  }
  
  // Private method
  private generateId(): number {
    return Math.floor(Math.random() * 1000);
  }
  
  // Getter
  get userId(): number {
    return this.id;
  }
  
  // Setter
  set userId(value: number) {
    if (value > 0) {
      this.id = value;
    }
  }
}

// Inheritance
class Admin extends User {
  private permissions: string[];
  
  constructor(name: string, email: string, id: number, permissions: string[]) {
    super(name, email, id);
    this.permissions = permissions;
  }
  
  public hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }
}

// Abstract Classes
abstract class Animal {
  abstract makeSound(): void;
  
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}`}
      />
    </div>
  );
}

function GenericsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Generics</h2>
        <p className="text-white/60 text-lg mb-8">
          Generics allow you to create reusable components that work with multiple types while maintaining type safety.
        </p>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
        <h3 className="text-blue-400 font-semibold mb-4">Generic Function Visualization</h3>
        <div className="space-y-4">
          <div className="font-mono text-sm">
            <div className="text-blue-300">function</div>
            <div className="ml-4 text-green-300">getFirst</div>
            <div className="ml-4 text-purple-300">&lt;T&gt;</div>
            <div className="ml-4 text-blue-300">(items: T[])</div>
            <div className="ml-4 text-purple-300">: T | undefined</div>
            <div className="ml-4 text-blue-300">{'{'}</div>
            <div className="ml-8 text-white">return items[0];</div>
            <div className="ml-4 text-blue-300">{'}'}</div>
          </div>
          <div className="text-white/60 text-sm">
            <span className="text-purple-300">&lt;T&gt;</span> is a type parameter that represents any type
          </div>
        </div>
      </div>

      <CodeExample
        language="typescript"
        code={`// Generic Function
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const firstNumber = getFirst<number>([1, 2, 3]); // Type: number | undefined
const firstString = getFirst<string>(["a", "b", "c"]); // Type: string | undefined

// Generic Interface
interface Repository<T> {
  findById(id: number): T | undefined;
  findAll(): T[];
  save(entity: T): T;
}

class UserRepository implements Repository<User> {
  private users: User[] = [];
  
  findById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }
  
  findAll(): User[] {
    return this.users;
  }
  
  save(user: User): User {
    this.users.push(user);
    return user;
  }
}

// Generic Class
class Box<T> {
  private value: T;
  
  constructor(value: T) {
    this.value = value;
  }
  
  getValue(): T {
    return this.value;
  }
  
  setValue(value: T): void {
    this.value = value;
  }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("Hello");

// Constrained Generics
interface HasId {
  id: number;
}

function updateById<T extends HasId>(items: T[], id: number, updates: Partial<T>): T | undefined {
  const item = items.find(item => item.id === id);
  if (item) {
    Object.assign(item, updates);
  }
  return item;
}`}
      />
    </div>
  );
}

function AdvancedTypesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Advanced Types</h2>
        <p className="text-white/60 text-lg mb-8">
          TypeScript provides advanced type features for complex type manipulations and transformations.
        </p>
      </div>

      <CodeExample
        language="typescript"
        code={`// Utility Types

// Partial - makes all properties optional
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
// Result: { id?: number; name?: string; email?: string; }

// Required - makes all properties required
type RequiredUser = Required<PartialUser>;

// Readonly - makes all properties readonly
type ReadonlyUser = Readonly<User>;

// Pick - select specific properties
type UserName = Pick<User, 'name' | 'email'>;
// Result: { name: string; email: string; }

// Omit - exclude specific properties
type UserWithoutId = Omit<User, 'id'>;
// Result: { name: string; email: string; }

// Record - create object type
type UserRoles = Record<string, boolean>;
// Result: { [key: string]: boolean; }

// Conditional Types
type NonNullable<T> = T extends null | undefined ? never : T;

type IsString<T> = T extends string ? true : false;

// Mapped Types
type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<'click'>; // "onClick"

// Type Guards
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function process(value: string | number) {
  if (isString(value)) {
    // TypeScript knows value is string here
    return value.toUpperCase();
  }
  // TypeScript knows value is number here
  return value * 2;
}`}
      />
    </div>
  );
}

// Challenges Section
function ChallengesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">TypeScript Coding Challenges</h2>
        <p className="text-white/60 text-lg mb-8">
          Practice TypeScript with these progressive challenges. Start with basics and work your way up to advanced concepts.
        </p>
      </div>

      <ChallengeCard
        level="Beginner"
        title="Challenge 1: Type Annotations"
        description="Create a function that calculates the area of a rectangle. Add proper type annotations for parameters and return type."
        requirements={[
          "Function should accept width (number) and height (number)",
          "Return type should be explicitly typed as number",
          "Handle edge cases (negative numbers, zero)"
        ]}
        starterCode={`// Your code here
function calculateArea(width, height) {
  // TODO: Add type annotations and implementation
}

// Test cases
console.log(calculateArea(5, 10)); // Should return 50
console.log(calculateArea(3, 7)); // Should return 21`}
        solution={`function calculateArea(width: number, height: number): number {
  if (width <= 0 || height <= 0) {
    throw new Error('Width and height must be positive numbers');
  }
  return width * height;
}

// Test cases
console.log(calculateArea(5, 10)); // 50
console.log(calculateArea(3, 7)); // 21`}
      />

      <ChallengeCard
        level="Beginner"
        title="Challenge 2: Interface Definition"
        description="Create an interface for a User object and a function that validates user data."
        requirements={[
          "Define User interface with id (number), name (string), email (string), and age (optional number)",
          "Create a function that accepts a User object and returns boolean",
          "Validate that name and email are not empty"
        ]}
        starterCode={`// Define User interface here

// Create validation function here
function validateUser(user) {
  // TODO: Implement validation
}

// Test cases
const validUser = { id: 1, name: "John", email: "john@example.com" };
const invalidUser = { id: 2, name: "", email: "invalid" };
console.log(validateUser(validUser)); // Should return true
console.log(validateUser(invalidUser)); // Should return false`}
        solution={`interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

function validateUser(user: User): boolean {
  return user.name.trim().length > 0 && 
         user.email.trim().length > 0 &&
         user.email.includes('@');
}

// Test cases
const validUser: User = { id: 1, name: "John", email: "john@example.com" };
const invalidUser: User = { id: 2, name: "", email: "invalid" };
console.log(validateUser(validUser)); // true
console.log(validateUser(invalidUser)); // false`}
      />

      <ChallengeCard
        level="Intermediate"
        title="Challenge 3: Generic Functions"
        description="Create a generic function that can work with arrays of any type, implementing common array operations."
        requirements={[
          "Create a generic function getFirst that returns the first element of an array",
          "Create a generic function filterBy that filters array based on a predicate function",
          "Use proper generic constraints where needed"
        ]}
        starterCode={`// Generic getFirst function
function getFirst(items) {
  // TODO: Implement
}

// Generic filterBy function
function filterBy(items, predicate) {
  // TODO: Implement
}

// Test cases
const numbers = [1, 2, 3, 4, 5];
const strings = ["apple", "banana", "cherry"];

console.log(getFirst(numbers)); // Should return 1
console.log(getFirst(strings)); // Should return "apple"
console.log(filterBy(numbers, (n) => n > 2)); // Should return [3, 4, 5]`}
        solution={`function getFirst<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}

function filterBy<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}

// Test cases
const numbers = [1, 2, 3, 4, 5];
const strings = ["apple", "banana", "cherry"];

console.log(getFirst(numbers)); // 1
console.log(getFirst(strings)); // "apple"
console.log(filterBy(numbers, (n) => n > 2)); // [3, 4, 5]`}
      />

      <ChallengeCard
        level="Intermediate"
        title="Challenge 4: Union Types & Type Guards"
        description="Create a function that handles different types of input using union types and type guards."
        requirements={[
          "Create a function that accepts string | number | boolean",
          "Return different formatted strings based on input type",
          "Use type guards to narrow the type"
        ]}
        starterCode={`function formatValue(value) {
  // TODO: Implement with type guards
}

// Test cases
console.log(formatValue("hello")); // Should return "String: hello"
console.log(formatValue(42)); // Should return "Number: 42"
console.log(formatValue(true)); // Should return "Boolean: true"`}
        solution={`function formatValue(value: string | number | boolean): string {
  if (typeof value === 'string') {
    return \`String: \${value}\`;
  } else if (typeof value === 'number') {
    return \`Number: \${value}\`;
  } else {
    return \`Boolean: \${value}\`;
  }
}

// Test cases
console.log(formatValue("hello")); // "String: hello"
console.log(formatValue(42)); // "Number: 42"
console.log(formatValue(true)); // "Boolean: true"`}
      />

      <ChallengeCard
        level="Advanced"
        title="Challenge 5: Utility Types"
        description="Create a function that updates user data using TypeScript utility types."
        requirements={[
          "Use Partial<T> to allow partial updates",
          "Use Pick<T> to select specific fields",
          "Create a function that merges user data safely"
        ]}
        starterCode={`interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  role: 'admin' | 'user';
}

// TODO: Create updateUser function using utility types
function updateUser(user, updates) {
  // Implement safe update
}

// Test case
const user = { id: 1, name: "John", email: "john@example.com", age: 30, role: 'user' as const };
const updates = { name: "Jane", age: 31 };
console.log(updateUser(user, updates));`}
        solution={`interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  role: 'admin' | 'user';
}

type UserUpdate = Partial<Pick<User, 'name' | 'email' | 'age'>>;

function updateUser(user: User, updates: UserUpdate): User {
  return {
    ...user,
    ...updates,
  };
}

// Test case
const user: User = { id: 1, name: "John", email: "john@example.com", age: 30, role: 'user' };
const updates: UserUpdate = { name: "Jane", age: 31 };
console.log(updateUser(user, updates));
// { id: 1, name: "Jane", email: "john@example.com", age: 31, role: 'user' }`}
      />

      <ChallengeCard
        level="Advanced"
        title="Challenge 6: Conditional Types"
        description="Create a type system that extracts return types from functions conditionally."
        requirements={[
          "Create a conditional type that extracts return type from functions",
          "Handle non-function types gracefully",
          "Use it in a practical example"
        ]}
        starterCode={`// TODO: Create ExtractReturnType conditional type

// Test cases
type Func1 = () => string;
type Func2 = (x: number) => boolean;
type Func3 = string;

type Return1 = ExtractReturnType<Func1>; // Should be string
type Return2 = ExtractReturnType<Func2>; // Should be boolean
type Return3 = ExtractReturnType<Func3>; // Should be never`}
        solution={`type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Test cases
type Func1 = () => string;
type Func2 = (x: number) => boolean;
type Func3 = string;

type Return1 = ExtractReturnType<Func1>; // string
type Return2 = ExtractReturnType<Func2>; // boolean
type Return3 = ExtractReturnType<Func3>; // never

// Practical example
function getString(): string {
  return "hello";
}

function getNumber(): number {
  return 42;
}

type GetStringReturn = ExtractReturnType<typeof getString>; // string
type GetNumberReturn = ExtractReturnType<typeof getNumber>; // number`}
      />
    </div>
  );
}

// Challenge Card Component
function ChallengeCard({ 
  level, 
  title, 
  description, 
  requirements, 
  starterCode, 
  solution 
}: {
  level: string;
  title: string;
  description: string;
  requirements: string[];
  starterCode: string;
  solution: string;
}) {
  const [showSolution, setShowSolution] = useState(false);
  const levelColors = {
    Beginner: 'from-green-500 to-emerald-500',
    Intermediate: 'from-yellow-500 to-orange-500',
    Advanced: 'from-red-500 to-pink-500',
  };

  return (
    <div className="glass rounded-2xl p-6 border border-white/10">
      <div className="flex items-center gap-4 mb-4">
        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${levelColors[level as keyof typeof levelColors]} text-white text-sm font-semibold`}>
          {level}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-white/70 mb-6">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
        <ul className="space-y-2">
          {requirements.map((req, idx) => (
            <li key={idx} className="text-white/60 flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-3">Starter Code:</h4>
        <CodeExample language="typescript" code={starterCode} />
      </div>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="mb-4 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors"
      >
        {showSolution ? 'Hide Solution' : 'Show Solution'}
      </button>

      {showSolution && (
        <div>
          <h4 className="text-white font-semibold mb-3">Solution:</h4>
          <CodeExample language="typescript" code={solution} />
        </div>
      )}
    </div>
  );
}

// Reusable Components
function TypeCard({ title, description, example, visualization }: any) {
  return (
    <div className="glass rounded-2xl p-6 border border-white/10">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60 mb-4">{description}</p>
      <div className="bg-white/5 rounded-lg p-4 mb-4">
        <code className="text-sm text-blue-300 font-mono">{example}</code>
      </div>
      {visualization}
    </div>
  );
}


