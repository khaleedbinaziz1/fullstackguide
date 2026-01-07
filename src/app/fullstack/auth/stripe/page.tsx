'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiStripe } from "react-icons/si";

export default function StripePage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'payments', title: 'Payments' },
    { id: 'subscriptions', title: 'Subscriptions' },
    { id: 'webhooks', title: 'Webhooks' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/auth" className="text-2xl font-bold gradient-text">
              Open Stack JS
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full border border-indigo-500/30 mb-8">
              <SiStripe className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-400 font-semibold">Stripe Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">Stripe</span>
              <span className="text-white block text-4xl">Payment Processing</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn Stripe payments, subscriptions, invoicing, and payment methods. Accept payments securely.
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
              {activeSection === 'payments' && <PaymentsSection />}
              {activeSection === 'subscriptions' && <SubscriptionsSection />}
              {activeSection === 'webhooks' && <WebhooksSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">Stripe Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Stripe is a payment processing platform. Accept payments, handle subscriptions, and manage billing.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Installation (Node.js)
npm install stripe

# Install React Stripe.js (Frontend)
npm install @stripe/stripe-js @stripe/react-stripe-js`}
      />

      <CodeExample
        language="javascript"
        code={`// Initialize Stripe (Server)
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Initialize Stripe (Client)
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);`}
      />
    </div>
  );
}

function PaymentsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Payment Processing</h2>
        <p className="text-white/60 text-lg mb-8">
          Accept one-time payments using Payment Intents. Handle card payments securely.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Create Payment Intent (Server)
const paymentIntent = await stripe.paymentIntents.create({
  amount: 2000, // $20.00
  currency: 'usd',
  metadata: { orderId: '123' },
});

// Client-side Payment
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      // Confirm payment
      const { error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: paymentMethod.id,
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
}`}
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
          Create recurring subscriptions with pricing plans. Manage billing cycles and customer subscriptions.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Create Customer
const customer = await stripe.customers.create({
  email: 'customer@example.com',
});

// Create Subscription
const subscription = await stripe.subscriptions.create({
  customer: customer.id,
  items: [{ price: 'price_1234567890' }],
});

// Cancel Subscription
await stripe.subscriptions.update(subscription.id, {
  cancel_at_period_end: true,
});

// Update Subscription
await stripe.subscriptions.update(subscription.id, {
  items: [{
    id: subscription.items.data[0].id,
    price: 'price_new',
  }],
});`}
      />
    </div>
  );
}

function WebhooksSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Webhooks</h2>
        <p className="text-white/60 text-lg mb-8">
          Handle Stripe events using webhooks. Process payment confirmations, subscription updates, and more.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Webhook Handler (Express)
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    return res.status(400).send(\`Webhook Error: \${err.message}\`);
  }

  // Handle event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Handle successful payment
      break;
    case 'customer.subscription.created':
      const subscription = event.data.object;
      // Handle new subscription
      break;
    default:
      console.log(\`Unhandled event type \${event.type}\`);
  }

  res.json({ received: true });
});`}
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
          Follow these patterns for secure and reliable Stripe integrations.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Always verify webhook signatures
// Use HTTPS for webhook endpoints
// Store secrets securely

// Handle idempotency
const idempotencyKey = 'unique-key';
await stripe.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
}, {
  idempotencyKey: idempotencyKey,
});

// Use test mode for development
// Switch to live mode for production

// Handle errors gracefully
try {
  await stripe.paymentIntents.create({...});
} catch (error) {
  if (error.type === 'StripeCardError') {
    // Card declined
  } else if (error.type === 'StripeRateLimitError') {
    // Too many requests
  }
}

// Log events for debugging
// Monitor webhook deliveries
// Set up alerts for failed payments`}
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

