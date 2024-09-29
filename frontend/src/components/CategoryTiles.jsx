import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['Vegan', 'Nuts-Free', 'Regular'];

function CategoryTiles() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category === 'Vegan') {
      navigate('/veganpage');
    }
    if (category === 'Nuts-Free') {
      navigate('/nutsfree');
    }
    if (category === 'Regular') {
      navigate('/regular');
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-col">
      {categories.map((category) => (
        <div
          key={category}
          className="bg-gray-800 text-white p-8 rounded-lg text-center cursor-pointer hover:bg-slate-500 hover:scale-110 duration-300 hover:shadow-2xl"
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default CategoryTiles;
