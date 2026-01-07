'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiAmazon } from "react-icons/si";

export default function AWSPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'ec2', title: 'EC2' },
    { id: 's3', title: 'S3' },
    { id: 'lambda', title: 'Lambda' },
    { id: 'rds', title: 'RDS' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/devops" className="text-2xl font-bold gradient-text">
              FullstackGuide
            </Link>
            <Link href="/fullstack/devops" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to DevOps
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30 mb-8">
              <SiAmazon className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-semibold">AWS Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">AWS</span>
              <span className="text-white block text-4xl">Cloud Platform</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn AWS services: EC2, S3, Lambda, RDS, and building scalable cloud infrastructure.
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
              {activeSection === 'ec2' && <EC2Section />}
              {activeSection === 's3' && <S3Section />}
              {activeSection === 'lambda' && <LambdaSection />}
              {activeSection === 'rds' && <RDSSection />}
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
        <h2 className="text-4xl font-bold text-white mb-4">AWS Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          Amazon Web Services (AWS) provides cloud computing services. Build scalable applications with compute, storage, and database services.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# AWS CLI Installation
aws --version

# Configure AWS CLI
aws configure
# AWS Access Key ID
# AWS Secret Access Key
# Default region
# Default output format`}
      />
    </div>
  );
}

function EC2Section() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">EC2 (Elastic Compute Cloud)</h2>
        <p className="text-white/60 text-lg mb-8">
          EC2 provides resizable compute capacity in the cloud. Launch virtual servers, configure security, and scale.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Launch EC2 Instance
aws ec2 run-instances \\
  --image-id ami-0c55b159cbfafe1f0 \\
  --instance-type t2.micro \\
  --key-name my-key-pair

# List Instances
aws ec2 describe-instances

# Terminate Instance
aws ec2 terminate-instances --instance-ids i-1234567890abcdef0`}
      />
    </div>
  );
}

function S3Section() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">S3 (Simple Storage Service)</h2>
        <p className="text-white/60 text-lg mb-8">
          S3 is object storage for storing and retrieving data. Use for backups, static websites, and data archiving.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Create Bucket
aws s3 mb s3://my-bucket

# Upload File
aws s3 cp file.txt s3://my-bucket/

# Download File
aws s3 cp s3://my-bucket/file.txt ./

# List Objects
aws s3 ls s3://my-bucket/

# Sync Directory
aws s3 sync ./local-folder s3://my-bucket/folder/`}
      />
    </div>
  );
}

function LambdaSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Lambda (Serverless Functions)</h2>
        <p className="text-white/60 text-lg mb-8">
          Lambda runs code without managing servers. Pay only for compute time. Perfect for API backends and event-driven applications.
        </p>
      </div>

      <CodeExample
        language="javascript"
        code={`// Lambda Function (Node.js)
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!',
            input: event,
        }),
    };
    return response;
};

// Deploy
aws lambda create-function \\
  --function-name myFunction \\
  --runtime nodejs18.x \\
  --handler index.handler \\
  --zip-file fileb://function.zip`}
      />
    </div>
  );
}

function RDSSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">RDS (Relational Database Service)</h2>
        <p className="text-white/60 text-lg mb-8">
          RDS manages relational databases. Supports PostgreSQL, MySQL, MariaDB, Oracle, and SQL Server.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Create RDS Instance
aws rds create-db-instance \\
  --db-instance-identifier mydb \\
  --db-instance-class db.t2.micro \\
  --engine postgres \\
  --master-username admin \\
  --master-user-password password \\
  --allocated-storage 20

# List DB Instances
aws rds describe-db-instances`}
      />
    </div>
  );
}

function CodeExample({ code, language = 'bash' }: { code: string; language?: string }) {
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

