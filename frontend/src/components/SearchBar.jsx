import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allRecipes, setAllRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
         setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/recipes');
        if(!response.ok) {
          throw new Error('An error occurred while fetching the recipes.');
        }
        const data = await response.json();
        setAllRecipes(data);
        //setFilteredRecipes(data);
      } catch (error) {
        setError('An error occurred while fetching the recipes.');
      } 
       finally {
      setLoading(false);
     }
     };
    fetchRecipes();
  }, []);
  useEffect(() => {
  const filtered = allRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  );
  setFilteredRecipes(filtered);
}, [searchQuery, allRecipes]);

  const handleRecipeClick = (id) => { 
    const currentPath = location.pathname;
    const newPath = `/SingleRecipeCard/${id}`;
    if(currentPath === newPath) {
      navigate(newPath, { replace: true });
    }else {
      navigate(newPath);
    }
    setSearchQuery('');
    window.location.reload();
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : searchQuery && filteredRecipes.length > 0 ? (
        <ul className="absolute bg-white shadow-md rounded-lg mt-2 w-full md:w-64 z-10">
          {filteredRecipes.map(recipe => (
            <li
              key={recipe.id}
              className="p-2 border-b hover:bg-gray-100 cursor-pointer"
              onClick={() => handleRecipeClick(recipe.id)}
              
              
            >
              {recipe.name}
            </li>
          ))}
        </ul>
      ) : searchQuery ? (
        <p className="p-2">No items found</p>
      ) : null}
    </div>
  );
};

export default SearchBar;