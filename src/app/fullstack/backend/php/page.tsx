'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiPhp } from "react-icons/si";

export default function PHPPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'functions', title: 'Functions' },
    { id: 'oop', title: 'OOP' },
    { id: 'database', title: 'Database' },
    { id: 'composer', title: 'Composer' },
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full border border-indigo-500/30 mb-8">
              <SiPhp className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-400 font-semibold">PHP Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">PHP</span>
              <span className="text-white block text-4xl">Server-Side Scripting</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn PHP fundamentals, object-oriented programming, database integration, and building dynamic web applications.
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
                          ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
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
              {activeSection === 'functions' && <FunctionsSection />}
              {activeSection === 'oop' && <OOPSection />}
              {activeSection === 'database' && <DatabaseSection />}
              {activeSection === 'composer' && <ComposerSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">PHP Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          PHP is a server-side scripting language designed for web development. Learn syntax, variables, arrays, and control structures.
        </p>
      </div>

      <CodeExample
        language="php"
        code={`<?php
// Variables
$name = "John";
$age = 30;
$isActive = true;

// Arrays
$fruits = array("Apple", "Banana", "Orange");
$numbers = [1, 2, 3, 4, 5];

// Associative Arrays
$user = [
    "name" => "John",
    "email" => "john@example.com",
    "age" => 30
];

// Control Structures
if ($age >= 18) {
    echo "Adult";
} else {
    echo "Minor";
}

// Switch
switch ($age) {
    case 18:
        echo "Just turned 18";
        break;
    case 21:
        echo "Legal drinking age";
        break;
    default:
        echo "Other age";
}

// Loops
for ($i = 0; $i < 10; $i++) {
    echo $i;
}

foreach ($fruits as $fruit) {
    echo $fruit;
}

foreach ($user as $key => $value) {
    echo "$key: $value";
}

// String Concatenation
$greeting = "Hello, " . $name . "!";
$greeting = "Hello, {$name}!";
?>`}
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
          Functions allow you to encapsulate reusable code. Learn function definition, parameters, return values, and built-in functions.
        </p>
      </div>

      <CodeExample
        language="php"
        code={`<?php
// Basic Function
function greet($name) {
    return "Hello, $name!";
}

echo greet("John");

// Function with Default Parameters
function greetUser($name, $title = "Mr.") {
    return "Hello, $title $name!";
}

echo greetUser("John"); // Hello, Mr. John!
echo greetUser("Jane", "Ms."); // Hello, Ms. Jane!

// Type Hints
function add(int $a, int $b): int {
    return $a + $b;
}

// Return Types
function divide(float $a, float $b): float {
    return $a / $b;
}

// Variable Functions
$func = "greet";
echo $func("John");

// Anonymous Functions (Closures)
$multiply = function($a, $b) {
    return $a * $b;
};

echo $multiply(5, 3); // 15

// Arrow Functions (PHP 7.4+)
$square = fn($x) => $x * $x;
echo $square(5); // 25

// Built-in Functions
$string = "Hello World";
echo strlen($string); // 11
echo strtoupper($string); // HELLO WORLD
echo str_replace("World", "PHP", $string); // Hello PHP

$numbers = [3, 1, 4, 1, 5];
echo count($numbers); // 5
sort($numbers);
echo max($numbers); // 5
echo min($numbers); // 1
?>`}
      />
    </div>
  );
}

function OOPSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Object-Oriented Programming</h2>
        <p className="text-white/60 text-lg mb-8">
          PHP supports object-oriented programming with classes, objects, inheritance, interfaces, and traits.
        </p>
      </div>

      <CodeExample
        language="php"
        code={`<?php
// Classes and Objects
class User {
    // Properties
    private $name;
    private $email;
    
    // Constructor
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }
    
    // Getter
    public function getName() {
        return $this->name;
    }
    
    // Setter
    public function setEmail($email) {
        $this->email = $email;
    }
    
    // Method
    public function getInfo() {
        return "Name: {$this->name}, Email: {$this->email}";
    }
}

// Create Object
$user = new User("John", "john@example.com");
echo $user->getName();

// Inheritance
class Admin extends User {
    private $role = "admin";
    
    public function getRole() {
        return $this->role;
    }
    
    // Override method
    public function getInfo() {
        return parent::getInfo() . ", Role: {$this->role}";
    }
}

// Interfaces
interface Drawable {
    public function draw();
}

class Circle implements Drawable {
    public function draw() {
        echo "Drawing circle";
    }
}

// Abstract Classes
abstract class Shape {
    abstract public function area();
    
    public function getType() {
        return get_class($this);
    }
}

class Rectangle extends Shape {
    private $width;
    private $height;
    
    public function __construct($width, $height) {
        $this->width = $width;
        $this->height = $height;
    }
    
    public function area() {
        return $this->width * $this->height;
    }
}

// Traits
trait Loggable {
    public function log($message) {
        echo "[LOG] $message";
    }
}

class Product {
    use Loggable;
    
    public function create() {
        $this->log("Product created");
    }
}
?>`}
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
          Connect PHP to databases using PDO or mysqli. Learn prepared statements and safe database operations.
        </p>
      </div>

      <CodeExample
        language="php"
        code={`<?php
// PDO Connection
try {
    $pdo = new PDO(
        "mysql:host=localhost;dbname=mydb",
        "username",
        "password",
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Prepared Statements (Select)
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$userId]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

// Named Placeholders
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
$stmt->execute(['email' => $email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

// Insert
$stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->execute([$name, $email]);
$userId = $pdo->lastInsertId();

// Update
$stmt = $pdo->prepare("UPDATE users SET name = ? WHERE id = ?");
$stmt->execute([$newName, $userId]);

// Delete
$stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
$stmt->execute([$userId]);

// Fetch All
$stmt = $pdo->query("SELECT * FROM users");
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Transactions
$pdo->beginTransaction();
try {
    $pdo->exec("INSERT INTO users (name, email) VALUES ('John', 'john@example.com')");
    $pdo->exec("INSERT INTO posts (title, user_id) VALUES ('Post', 1)");
    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
    throw $e;
}
?>`}
      />
    </div>
  );
}

function ComposerSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Composer</h2>
        <p className="text-white/60 text-lg mb-8">
          Composer is PHP's dependency manager. Manage packages and autoloading in your PHP projects.
        </p>
      </div>

      <CodeExample
        language="json"
        code={`// composer.json
{
    "name": "vendor/project",
    "description": "My PHP project",
    "require": {
        "php": ">=7.4",
        "monolog/monolog": "^2.0",
        "guzzlehttp/guzzle": "^7.0"
    },
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    }
}`}
      />

      <CodeExample
        language="bash"
        code={`# Install Composer
# Download from https://getcomposer.org

# Install Dependencies
composer install

# Add Package
composer require monolog/monolog

# Update Packages
composer update

# Autoload
require 'vendor/autoload.php';

use Monolog\\Logger;
use Monolog\\Handler\\StreamHandler;

$log = new Logger('name');
$log->pushHandler(new StreamHandler('app.log', Logger::WARNING));
$log->warning('Foo');`}
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
          Follow these patterns for secure and maintainable PHP applications.
        </p>
      </div>

      <CodeExample
        language="php"
        code={`<?php
// Always Use Prepared Statements
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$email]); // Prevents SQL injection

// Error Handling
try {
    // Code that might throw exception
} catch (Exception $e) {
    error_log($e->getMessage());
    // Handle error gracefully
}

// Use Type Hints
function calculateTotal(array $items): float {
    // Type safety
}

// Namespaces
namespace App\\Models;

class User {
    // ...
}

// Use Composer Autoloading
// Instead of require/include

// Security: Sanitize Input
$input = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');

// Constants
define('API_URL', 'https://api.example.com');
// or
const API_URL = 'https://api.example.com';

// Use === instead of ==
if ($value === 5) { // Strict comparison
}
?>`}
      />
    </div>
  );
}

function CodeExample({ code, language = 'php' }: { code: string; language?: string }) {
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

