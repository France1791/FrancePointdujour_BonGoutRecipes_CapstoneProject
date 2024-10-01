import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';

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
      {categories.map((category, index) => (
        <motion.div
        key={category}
        className="bg-gray-800 text-white p-8 rounded-lg text-center cursor-pointer hover:bg-slate-500 hover:scale-110 duration-300 hover:shadow-2xl"
        onClick={() => handleCategoryClick(category)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeInOut' }}
        >
          {category}
        </motion.div>
      ))}
    </div>
  );
}

export default CategoryTiles;
