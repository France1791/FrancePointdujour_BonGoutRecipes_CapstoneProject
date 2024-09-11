import React from 'react';

function SearchBar() {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search recipes by name or ingredients..."
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
}

export default SearchBar;