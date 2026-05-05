import React from 'react';
import { BrushCleaning } from 'lucide-react';

function ClearFilterButton({ text, onClick }) {
  return (
    <button
      type="button"
      className="flex gap-2 items-center font-medium hover:bg-zinc-100 transition-colors text-zinc-950 py-2 px-4 rounded-lg"
      onClick={onClick}
    >
      <BrushCleaning size={16} />
      Limpar filtros
    </button>
  );
}

export default ClearFilterButton;
