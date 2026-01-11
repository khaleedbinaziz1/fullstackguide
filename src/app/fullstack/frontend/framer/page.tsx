'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiFramer } from "react-icons/si";

export default function FramerPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'gestures', title: 'Gestures' },
    { id: 'scroll', title: 'Scroll Animations' },
    { id: 'layout', title: 'Layout Animations' },
    { id: 'variants', title: 'Variants' },
    { id: 'advanced', title: 'Advanced' },
    { id: 'challenges', title: 'Coding Challenges' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/frontend" className="text-2xl font-bold gradient-text">
              Open Stack JS
            </Link>
            <Link href="/fullstack/frontend" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Frontend
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full border border-pink-500/30 mb-8">
              <SiFramer className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 font-semibold">Framer Motion Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Framer Motion</span>
              <span className="text-white block text-4xl">Production-Ready Motion Library</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Create smooth animations and gestures in React with a simple, declarative API.
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
              {activeSection === 'gestures' && <GesturesSection />}
              {activeSection === 'scroll' && <ScrollSection />}
              {activeSection === 'layout' && <LayoutSection />}
              {activeSection === 'variants' && <VariantsSection />}
              {activeSection === 'advanced' && <AdvancedSection />}
              {activeSection === 'challenges' && <FramerChallengesSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Getting Started</h2>
        <p className="text-white/60 text-lg mb-8">
          Framer Motion provides motion components and hooks to create animations in React.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Installation
npm install framer-motion`}
      />

      <CodeExample
        language="jsx"
        code={`import { motion } from 'framer-motion';

// Basic Animation
function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    />
  );
}

// Hover Animation
function HoverButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="px-6 py-3 bg-blue-500 text-white rounded-lg"
    >
      Hover Me
    </motion.button>
  );
}

// Animation Properties
<motion.div
  animate={{
    x: 100,
    y: 100,
    rotate: 45,
    scale: 1.5,
    opacity: 0.5,
  }}
  transition={{
    duration: 0.5,
    ease: "easeInOut",
  }}
/>

// Keyframe Animations
<motion.div
  animate={{
    scale: [1, 1.5, 1],
    rotate: [0, 90, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
/>`}
      />
    </div>
  );
}

function GesturesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Gestures</h2>
        <p className="text-white/60 text-lg mb-8">
          Create interactive animations that respond to user gestures like hover, tap, drag, and focus.
        </p>
      </div>

      <CodeExample
        language="jsx"
        code={`import { motion } from 'framer-motion';

// Drag
function DraggableBox() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileDrag={{ scale: 1.1 }}
      className="w-32 h-32 bg-purple-500 rounded-lg cursor-move"
    />
  );
}

// Drag with Snap
<motion.div
  drag="x"
  dragConstraints={{ left: -100, right: 100 }}
  dragElastic={0.2}
  dragSnapToOrigin
/>

// Hover
<motion.div
  whileHover={{
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  }}
  whileTap={{ scale: 0.95 }}
/>

// Focus (for inputs)
<motion.input
  whileFocus={{
    scale: 1.05,
    borderColor: "#3b82f6",
  }}
/>

// Pan Gesture
function PanExample() {
  return (
    <motion.div
      onPan={(event, info) => {
        console.log(info.point.x, info.point.y);
      }}
      onPanEnd={(event, info) => {
        console.log("Pan ended");
      }}
    >
      Pan me
    </motion.div>
  );
}`}
      />
    </div>
  );
}

function ScrollSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Scroll Animations</h2>
        <p className="text-white/60 text-lg mb-8">
          Animate elements based on scroll position using scroll-triggered animations.
        </p>
      </div>

      <CodeExample
        language="jsx"
        code={`import { motion, useScroll, useTransform } from 'framer-motion';

// Scroll Reveal
function ScrollReveal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-8"
    >
      Scroll to reveal
    </motion.div>
  );
}

// Scroll Progress
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <motion.div
      style={{ scale }}
      className="fixed top-0 left-0 w-full h-1 bg-blue-500"
    />
  );
}

// Parallax Effect
function Parallax() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <motion.div
      style={{ y }}
      className="h-screen bg-gradient-to-b from-blue-500 to-purple-500"
    >
      Parallax content
    </motion.div>
  );
}

// Stagger Children on Scroll
function StaggeredList() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {items.map(item => (
        <motion.li key={item.id} variants={item}>
          {item.name}
        </motion.li>
      ))}
    </motion.ul>
  );
}`}
      />
    </div>
  );
}

function LayoutSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Layout Animations</h2>
        <p className="text-white/60 text-lg mb-8">
          Automatically animate layout changes when elements are added, removed, or reordered.
        </p>
      </div>

      <CodeExample
        language="jsx"
        code={`import { motion, AnimatePresence } from 'framer-motion';

// Layout Animation
function AnimatedList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ layout: { duration: 0.3 } }}
          className="p-4 bg-white rounded-lg mb-2"
        >
          {item.name}
        </motion.div>
      ))}
    </div>
  );
}

// AnimatePresence for Exit Animations
function TodoList({ todos }) {
  return (
    <AnimatePresence>
      {todos.map((todo) => (
        <motion.div
          key={todo.id}
          layout
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          {todo.text}
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

// Shared Layout Animation
function SharedLayout() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      {items.map(item => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
        >
          {item.title}
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            onClick={() => setSelectedId(null)}
          >
            Expanded content
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Layout Group
import { LayoutGroup } from 'framer-motion';

function LayoutGroupExample() {
  return (
    <LayoutGroup>
      <motion.div layout className="group-1">Item 1</motion.div>
      <motion.div layout className="group-2">Item 2</motion.div>
    </LayoutGroup>
  );
}`}
      />
    </div>
  );
}

function VariantsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Variants</h2>
        <p className="text-white/60 text-lg mb-8">
          Define animation states as variants for cleaner, more maintainable code.
        </p>
      </div>

      <CodeExample
        language="jsx"
        code={`import { motion } from 'framer-motion';

// Simple Variants
const boxVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Box() {
  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      className="w-32 h-32 bg-blue-500"
    />
  );
}

// Variant Propagation (Parent → Child)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function List() {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
    >
      {items.map(item => (
        <motion.li key={item.id} variants={item}>
          {item.name}
        </motion.li>
      ))}
    </motion.ul>
  );
}

// Dynamic Variants
const variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { staggerChildren: 0.1 },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function Accordion({ isOpen }) {
  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      Content
    </motion.div>
  );
}`}
      />
    </div>
  );
}

function AdvancedSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Advanced Features</h2>
        <p className="text-white/60 text-lg mb-8">
          Advanced animation techniques for complex interactions and performance optimization.
        </p>
      </div>

      <CodeExample
        language="jsx"
        code={`import { motion, useMotionValue, useSpring, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// Motion Values (for fine-grained control)
function MotionValueExample() {
  const x = useMotionValue(0);
  const scale = useSpring(1);

  useEffect(() => {
    const unsubscribeX = x.on("change", (latest) => {
      console.log("x changed to", latest);
    });

    return () => unsubscribeX();
  }, [x]);

  return (
    <motion.div
      drag="x"
      style={{ x, scale }}
      onDragEnd={() => {
        x.set(0);
      }}
    >
      Draggable
    </motion.div>
  );
}

// useAnimation Hook
function AnimationControl() {
  const controls = useAnimation();

  const handleClick = async () => {
    await controls.start({ x: 100 });
    await controls.start({ y: 100 });
    await controls.start({ x: 0, y: 0 });
  };

  return (
    <motion.div animate={controls}>
      <button onClick={handleClick}>Animate</button>
    </motion.div>
  );
}

// Path Drawing Animation
function PathAnimation() {
  const pathLength = useMotionValue(0);
  const opacity = useMotionValue(1);

  useEffect(() => {
    pathLength.set(1);
  }, []);

  return (
    <svg>
      <motion.path
        d="M 10 50 L 90 50"
        stroke="white"
        strokeWidth="2"
        style={{
          pathLength,
          opacity,
        }}
      />
    </svg>
  );
}

// Reduced Motion (Accessibility)
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AccessibleAnimation() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        type: "tween",
        duration: 0.5,
      }}
    >
      Content
    </motion.div>
  );
}

// Performance: useIsPresent
import { useIsPresent } from 'framer-motion';

function OptimizedComponent() {
  const isPresent = useIsPresent();

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: isPresent ? 1 : 0 }}
    >
      Content
    </motion.div>
  );
}`}
      />
    </div>
  );
}

// Challenges Section
function FramerChallengesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Framer Motion Coding Challenges</h2>
        <p className="text-white/60 text-lg mb-8">
          Practice creating smooth animations and interactions with Framer Motion.
        </p>
      </div>

      <ChallengeCard
        level="Beginner"
        title="Challenge 1: Animated Card with Hover"
        description="Create a card component that animates on hover with scale and shadow effects."
        requirements={[
          "Card should scale up on hover",
          "Add shadow animation",
          "Smooth color transition",
          "Use whileHover and whileTap props"
        ]}
        starterCode={`import { motion } from 'framer-motion';

function AnimatedCard() {
  // TODO: Create animated card
  return <div>Card</div>;
}`}
        solution={`import { motion } from 'framer-motion';

function AnimatedCard() {
  return (
    <motion.div
      className="w-64 p-6 bg-white rounded-lg shadow-md"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        backgroundColor: "#f0f0f0"
      }}
      whileTap={{
        scale: 0.95
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <h3 className="text-xl font-bold mb-2">Animated Card</h3>
      <p className="text-gray-600">
        Hover over this card to see smooth animations!
      </p>
    </motion.div>
  );
}`}
      />

      <ChallengeCard
        level="Beginner"
        title="Challenge 2: Fade In List"
        description="Create a list that fades in items one by one with a stagger effect."
        requirements={[
          "Items should fade in sequentially",
          "Use variants for animation states",
          "Implement staggerChildren",
          "Items should slide up while fading"
        ]}
        starterCode={`import { motion } from 'framer-motion';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

function AnimatedList() {
  // TODO: Create staggered list animation
  return <ul>{/* List items */}</ul>;
}`}
        solution={`import { motion } from 'framer-motion';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function AnimatedList() {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={item}
          className="p-4 bg-blue-500 text-white rounded-lg"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}`}
      />

      <ChallengeCard
        level="Intermediate"
        title="Challenge 3: Drag and Drop List"
        description="Create a draggable list where items can be reordered by dragging."
        requirements={[
          "Items should be draggable",
          "Visual feedback while dragging",
          "Smooth reordering animation",
          "Snap back if dropped outside valid area"
        ]}
        starterCode={`import { motion } from 'framer-motion';

function DraggableList() {
  // TODO: Create draggable list
  return <div>{/* Draggable items */}</div>;
}`}
        solution={`import { motion, Reorder } from 'framer-motion';
import { useState } from 'react';

const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

function DraggableList() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      className="space-y-4"
    >
      {items.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          whileDrag={{
            scale: 1.1,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
          }}
          className="p-4 bg-purple-500 text-white rounded-lg cursor-grab active:cursor-grabbing"
        >
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}`}
      />

      <ChallengeCard
        level="Intermediate"
        title="Challenge 4: Scroll Progress Indicator"
        description="Create a progress bar that shows scroll progress and animates based on scroll position."
        requirements={[
          "Use useScroll hook to track scroll progress",
          "Transform scroll progress to width/scale",
          "Smooth animation as user scrolls",
          "Fixed position at top of page"
        ]}
        starterCode={`import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollProgress() {
  // TODO: Create scroll progress indicator
  return <div>{/* Progress bar */}</div>;
}`}
        solution={`import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
        style={{ width }}
      />
    </motion.div>
  );
}`}
      />

      <ChallengeCard
        level="Advanced"
        title="Challenge 5: Modal with Shared Layout"
        description="Create a modal that uses shared layout animations to smoothly transition from a list item."
        requirements={[
          "List items that can open as modal",
          "Shared layoutId for smooth transition",
          "Backdrop with blur effect",
          "Close animation"
        ]}
        starterCode={`import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function ModalList() {
  // TODO: Create modal with shared layout
  return <div>{/* List and modal */}</div>;
}`}
        solution={`import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const items = [
  { id: 1, title: 'Item 1', content: 'Content 1' },
  { id: 2, title: 'Item 2', content: 'Content 2' },
  { id: 3, title: 'Item 3', content: 'Content 3' },
];

function ModalList() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id.toString()}
            onClick={() => setSelectedId(item.id)}
            className="p-6 bg-white rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={selectedId.toString()}
              className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">
                {items.find(i => i.id === selectedId)?.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {items.find(i => i.id === selectedId)?.content}
              </p>
              <button
                onClick={() => setSelectedId(null)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}`}
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
              <span className="text-pink-400 mt-1">•</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-3">Starter Code:</h4>
        <CodeExample language="jsx" code={starterCode} />
      </div>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="mb-4 px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 rounded-lg transition-colors"
      >
        {showSolution ? 'Hide Solution' : 'Show Solution'}
      </button>

      {showSolution && (
        <div>
          <h4 className="text-white font-semibold mb-3">Solution:</h4>
          <CodeExample language="jsx" code={solution} />
        </div>
      )}
    </div>
  );
}

function CodeExample({ code, language = 'jsx' }: { code: string; language?: string }) {
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

