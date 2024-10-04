import React from 'react'
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';
import SingleRecipeCard from './SingleRecipeCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

function RecipeList() {
  const[recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

   // for the aos animation
   useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []); 
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch('http://localhost:8080/recipes')
    
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
        <div className='flex flex-wrap data-aos="fade-down"'>
          {recipes.map((recipe, index) => (

            <div key={recipe.id} className="w-full md:w-1/2 lg:w-1/3 p-4" 
            data-aos="fade-down"
            data-aos-delay={`${index * 200}`}>
               <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
              <img src={recipe.imgUrl} alt={recipe.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{recipe.name}</h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <div className="flex justify-center mt-auto">
                <button
                  className="bg-green-500 text-black px-4 py-2 rounded hover:bg-orange-300 transition duration-300 w-32 h-12"
                  onClick={() => handleViewRecipe(recipe.id)}
                >
                  View Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
   }
   export default RecipeList;
 