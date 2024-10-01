import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


function FeaturedRecipes() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/recipes');
        const data = await response.json();
        setRecipes(getRandomRecipes(data, 4));
      } catch (error) {
        setError('An error occurred while fetching the recipes.');
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const getRandomRecipes = (recipes, count) => {
    const shuffled = recipes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleViewRecipe = (id) => {
    // to view the recipe details
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <div className="p-4" data-aos="fade-down">
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
            {recipes.map((recipe, index) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-slate-500 hover:scale-110 duration-300 hover:shadow-2xl flex flex-col" data-aos="fade-up" data-aos-delay={`${index * 200}`}>
                <img src={recipe.imgUrl} alt={recipe.name} className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-bold text-xl mb-2">{recipe.name}</h3>
                    <p className="text-gray-600 mb-4">{recipe.description}</p>
                  </div>
                  <button
                    className="bg-green-500 text-black px-4 py-2 rounded hover:bg-orange-300 transition duration-300 w-2/4 mx-auto"
                    onClick={() => handleViewRecipe(recipe.id)}
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturedRecipes;