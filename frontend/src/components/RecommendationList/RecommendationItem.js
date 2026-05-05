import React from 'react';

export function RecommendationItem({ recommendation, highlighted = false }) {
  return (
    <li
      className={`flex flex-col gap-4 bg-white rounded-lg p-4 border ${highlighted ? '' : 'border-l-4'} border-zinc-100 ${highlighted ? 'border-cyan-500' : 'border-l-primary'} ${highlighted ? 'shadow-md' : 'shadow-sm'} ${highlighted ? 'shadow-primary' : ''}`}
    >
      <header className="flex items-center justify-between">
        <h2 className="text-md font-bold text-zinc-950">
          {recommendation.name}
        </h2>
      </header>
      <footer className="flex flex-wrap gap-2">
        <span className="py-1 px-3 text-xs text-zinc-950 bg-primary rounded-full">
          {recommendation.category}
        </span>
        {highlighted ? (
          <span className="py-1 px-3 text-xs text-zinc-950 bg-orange-300 rounded-full">
            Melhor opção
          </span>
        ) : null}
      </footer>
    </li>
  );
}
