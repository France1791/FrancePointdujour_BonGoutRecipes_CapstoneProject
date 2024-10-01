import React from 'react'
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

function RecipeList() {
  const[recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch('http://localhost:8080/recipes');
        const data = await response.json();
        setRecipes(data);
      }catch (error) {
        console.error("An error occurred while fetching the recipes:", error);
      }
    } fetchRecipes();
  } , []);
  const handleViewRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };
  return (
    <div className="container bg-green-100 mx-auto p-4 focus:ring-green-500">
      <BackButton />
      <div className="p-4">
        <h1 className="text-4xl font-bold text-center">Check these Out</h1>
        <div>
          < SearchBar />
        </div>
        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 flex-col'>
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-slate-500 hover:scale-110 duration-300 hover:shadow-2xl">
              <img src={recipe.imgUrl} alt={recipe.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{recipe.name}</h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <button
                  className="bg-green-500 text-black px-4 py-2 rounded hover:bg-orange-300 transition duration-300"
                  onClick={() => handleViewRecipe(recipe.id)}
                >
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
   }
   export default RecipeList;
  
