'use client';

interface ConceptCardProps {
  title: string;
  description: string;
  code?: string;
  visual?: React.ReactNode;
  color?: string;
  examples?: string[];
  whenToUse?: string[];
}

export default function ConceptCard({
  title,
  description,
  code,
  visual,
  color = 'from-blue-500 to-cyan-500',
  examples,
  whenToUse,
}: ConceptCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
          {title[0]}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {visual && (
        <div className="mb-4 p-4 bg-black/20 rounded-lg">
          {visual}
        </div>
      )}

      {code && (
        <div className="mb-4">
          <div className="bg-[#1e1e1e] rounded-lg p-3 border border-white/5">
            <code className="text-xs text-green-300 font-mono">{code}</code>
          </div>
        </div>
      )}

      {examples && examples.length > 0 && (
        <div className="mb-4">
          <div className="text-xs text-white/60 uppercase font-medium mb-2">Examples</div>
          <ul className="space-y-1">
            {examples.map((example, index) => (
              <li key={index} className="text-white/70 text-sm flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {whenToUse && whenToUse.length > 0 && (
        <div>
          <div className="text-xs text-white/60 uppercase font-medium mb-2">When to Use</div>
          <ul className="space-y-1">
            {whenToUse.map((use, index) => (
              <li key={index} className="text-white/70 text-sm flex items-start gap-2">
                <span className="text-blue-400 mt-1">✓</span>
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

