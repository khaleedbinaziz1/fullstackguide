'use client';

import { useState } from 'react';

interface CodeExampleProps {
  code: string;
  language?: string;
  title?: string;
  explanation?: string;
  liveExample?: React.ReactNode;
}

export default function CodeExample({ 
  code, 
  language = 'typescript', 
  title,
  explanation,
  liveExample 
}: CodeExampleProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Escape HTML entities (works in both client and server)
  const escapeHtml = (text: string) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  // Simple syntax highlighting
  const highlightCode = (code: string, lang: string) => {
    // First escape HTML to prevent XSS and ensure proper rendering
    let highlighted = escapeHtml(code);
    
    if (lang === 'typescript' || lang === 'tsx' || lang === 'jsx') {
      // Split by lines to process comments separately
      const lines = highlighted.split('\n');
      const processedLines = lines.map(line => {
        // Check if line has a comment
        const commentIndex = line.indexOf('//');
        let codePart = line;
        let commentPart = '';
        
        if (commentIndex !== -1) {
          codePart = line.substring(0, commentIndex);
          commentPart = line.substring(commentIndex);
        }
        
        // Highlight code part (avoiding strings for simplicity)
        codePart = codePart
          .replace(/\b(const|let|var|function|async|await|import|export|default|return|if|else|for|while|class|interface|type|extends|implements|typeof|instanceof|new|this|super)\b/g, '<span class="text-blue-400">$&</span>')
          .replace(/\b(string|number|boolean|void|any|unknown|undefined|null|true|false)\b/g, '<span class="text-purple-400">$&</span>')
          .replace(/(\{|\})/g, '<span class="text-pink-400">$&</span>')
          .replace(/(['"`])([^'"`]*?)(['"`])/g, '<span class="text-yellow-300">$&</span>');
        
        // Highlight comment
        if (commentPart) {
          commentPart = `<span class="text-green-500 opacity-70">${commentPart}</span>`;
        }
        
        return codePart + commentPart;
      });
      
      highlighted = processedLines.join('\n');
    } else if (lang === 'html') {
      // Basic HTML highlighting
      highlighted = highlighted.replace(/(&lt;\/?[a-zA-Z][^&]*&gt;)/g, '<span class="text-blue-400">$1</span>');
    }
    
    return highlighted;
  };

  return (
    <div className="space-y-4">
      {title && (
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
          {explanation && (
            <p className="text-white/60 text-sm mb-4">{explanation}</p>
          )}
        </div>
      )}
      
      <div className="bg-[#1e1e1e] rounded-lg border border-white/10 overflow-hidden">
        <div className="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/60 uppercase font-medium">{language}</span>
            {liveExample && (
              <span className="text-xs text-green-400">● Live Example</span>
            )}
          </div>
          <button
            onClick={copyToClipboard}
            className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code 
            className="text-sm text-white/90 font-mono leading-relaxed"
            dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }}
          />
        </pre>
      </div>

      {liveExample && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-xs text-white/60 uppercase font-medium mb-3">Live Preview</div>
          {liveExample}
        </div>
      )}
    </div>
  );
}

