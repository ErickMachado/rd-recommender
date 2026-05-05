import React from 'react';
import { tv } from 'tailwind-variants';

const li = tv({
  base: 'flex flex-col gap-4 bg-white rounded-lg p-4 border border-zinc-100 shadow-sm',
  variants: {
    color: {
      default: 'border-l-4 border-l-primary',
      highlighted: 'border-cyan-500 shadow-md shadow-primary',
    },
  },
});

export function RecommendationItem({ recommendation, variant = 'default' }) {
  return (
    <li className={li({ color: variant })}>
      <header className="flex items-center justify-between">
        <h2 className="text-md font-bold text-zinc-950">
          {recommendation.name}
        </h2>
      </header>
      <footer className="flex flex-wrap gap-2">
        {variant === 'highlighted' ? (
          <span className="py-1 px-3 text-xs text-zinc-950 bg-green-300 rounded-full">
            Melhor opção
          </span>
        ) : null}
        <span className="py-1 px-3 text-xs text-zinc-950 bg-primary rounded-full">
          {recommendation.category}
        </span>
      </footer>
    </li>
  );
}
