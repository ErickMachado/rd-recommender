import React from 'react';

function Checkbox({ children, ...props }) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        {...props}
        className="accent-primary form-checkbox h-4 w-4 text-blue-500"
      />
      <span className="ml-2">{children}</span>
    </label>
  );
}

export default Checkbox;
