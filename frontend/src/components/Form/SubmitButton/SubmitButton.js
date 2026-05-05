import React from 'react';
import { Search } from 'lucide-react';

function SubmitButton({ disabled, text }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="flex gap-2 items-center bg-primary font-medium transition-all hover:brightness-90 text-zinc-950 py-2 px-4 rounded-lg disabled:brightness-200 disabled:text-zinc-700 disabled:cursor-not-allowed"
    >
      <Search size={16} />
      {text}
    </button>
  );
}

export default SubmitButton;
