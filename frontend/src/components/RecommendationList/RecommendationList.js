import React from 'react';
import { Sparkles, HeartCrack } from 'lucide-react';
import { RecommendationItem } from './RecommendationItem';

function RecommendationList({ recommendations = [] }) {
  return (
    <div className="h-full">
      <div className="flex gap-2 items-center mb-4">
        <Sparkles size={20} className="text-zinc-400" />
        <h2 className="text-lg text-zinc-950 font-bold">
          Recomendados para você:
        </h2>
      </div>

      {recommendations.length === 0 ? (
        <div className="w-full h-full flex flex-col justify-center items-center gap-3">
          <HeartCrack size={60} className="text-zinc-400" />
          <p className="text-zinc-950">Nenhuma recomendação encontrada.</p>
        </div>
      ) : null}

      <ul className="flex flex-col gap-4">
        {recommendations.map((recommendation, index) => (
          <RecommendationItem
            key={recommendation.id}
            recommendation={recommendation}
            highlighted={index === 0}
          />
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
