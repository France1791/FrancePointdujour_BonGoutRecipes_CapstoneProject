import React from 'react'
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function UserCreate() {
  const [option, setOption] = useState('manual');
  const [recipe, setRecipe] = useState({
    image: '',
    name: '',
    description: '',
    ingredients: '',
    instructions: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  const handleSave = () => {
    // Save the recipe to the user's collection
    console.log('Recipe saved:', recipe);
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleReportIssue = () => {
    // Handle reporting an issue
    console.log('Report issue');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Create a Recipe</h1>
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            value="manual"
            checked={option === 'manual'}
            onChange={handleOptionChange}
          />
          Write Manually
        </label>
        <label>
          <input
            type="radio"
            value="google"
            checked={option === 'google'}
            onChange={handleOptionChange}
          />
          Search through Google
        </label>
      </div>

      {option === 'manual' ? (
        <div>
          <div className="mb-4">
            <label className="block mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={recipe.image}
              onChange={handleInputChange}
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={recipe.name}
              onChange={handleInputChange}
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description (optional)</label>
            <textarea
              name="description"
              value={recipe.description}
              onChange={handleInputChange}
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Ingredients</label>
            <textarea
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleInputChange}
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Instructions</label>
            <textarea
              name="instructions"
              value={recipe.instructions}
              onChange={handleInputChange}
              className="p-2 border rounded w-full"
            />
          </div>
        </div>
      ) : (
        <div>
          <p>Search for recipes on Google and add them to your collection.</p>
          <a
            href="https://www.google.com/search?q=recipe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Search Recipes on Google
          </a>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <button
          onClick={handleSave}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Save
        </button>
        <button
          onClick={handleGoBack}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
        >
          Go Back
        </button>
        <button
          onClick={handleReportIssue}
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        >
          Report Issue
        </button>
      </div>
    </div>
  );
}

export default UserCreate;