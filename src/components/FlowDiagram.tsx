'use client';

import React from 'react';

interface FlowStep {
  label: string;
  description?: string;
  color?: string;
  icon?: React.ReactNode;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  title?: string;
  direction?: 'horizontal' | 'vertical';
}

export default function FlowDiagram({ 
  steps, 
  title, 
  direction = 'horizontal' 
}: FlowDiagramProps) {
  const colors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-yellow-500',
    'from-pink-500 to-red-500',
    'from-indigo-500 to-purple-500',
  ];

  if (direction === 'vertical') {
    return (
      <div className="space-y-4">
        {title && <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>}
        <div className="flex flex-col items-center gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 w-full">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                step.color || colors[index % colors.length]
              } flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}>
                {step.icon || index + 1}
              </div>
              <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-white font-semibold mb-1">{step.label}</div>
                {step.description && (
                  <div className="text-white/60 text-sm">{step.description}</div>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-8 mt-20 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full">
      {title && <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>}
      <div className="w-full overflow-x-auto pb-4 -mx-2 px-2">
        <style jsx>{`
          div::-webkit-scrollbar {
            height: 6px;
          }
          div::-webkit-scrollbar-track {
            background: transparent;
          }
          div::-webkit-scrollbar-thumb {
            background: rgba(168, 85, 247, 0.5);
            border-radius: 3px;
          }
          div::-webkit-scrollbar-thumb:hover {
            background: rgba(168, 85, 247, 0.7);
          }
        `}</style>
        <div className="flex items-start justify-start gap-3 sm:gap-4 md:gap-6 min-w-max">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center flex-shrink-0" style={{ minWidth: '140px', maxWidth: '160px' }}>
                <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${
                  step.color || colors[index % colors.length]
                } flex items-center justify-center text-white font-bold shadow-lg mb-2 sm:mb-3 text-base sm:text-lg md:text-xl`}>
                  {step.icon || index + 1}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 sm:p-3 md:p-4 w-full text-center">
                  <div className="text-white font-semibold mb-1 text-xs sm:text-sm leading-tight break-words">{step.label}</div>
                  {step.description && (
                    <div className="text-white/60 text-[10px] sm:text-xs mt-1.5 sm:mt-2 leading-relaxed break-words">{step.description}</div>
                  )}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="mx-1 sm:mx-2 md:mx-4 flex-shrink-0 flex items-center justify-center self-center mt-8 sm:mt-10 md:mt-12">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

