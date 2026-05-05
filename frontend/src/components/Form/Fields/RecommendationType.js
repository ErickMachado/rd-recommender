import React from 'react';
import { List } from 'lucide-react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ selected, onRecommendationTypeChange }) {
  return (
    <div className="mb-4">
      <div className="flex gap-2 items-center mb-2">
        <List size={20} className="text-zinc-400" />
        <h2 className="text-lg text-zinc-950 font-bold">
          Tipo de Recomendação:
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="SingleProduct"
            checked={selected === 'SingleProduct'}
            onChange={() => onRecommendationTypeChange('SingleProduct')}
            className="mr-1"
          />
          <label htmlFor="SingleProduct" className="mr-4">
            Produto Único
          </label>
        </div>
        <div className="flex">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="MultipleProducts"
            checked={selected === 'MultipleProducts'}
            onChange={() => onRecommendationTypeChange('MultipleProducts')}
            className="mr-1"
          />
          <label htmlFor="MultipleProducts">Múltiplos Produtos</label>
        </div>
      </div>
    </div>
  );
}

export default RecommendationType;
