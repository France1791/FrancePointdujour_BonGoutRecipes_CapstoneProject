import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

function UserCreate() {
  const [option, setOption] = useState('manual');
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    ingredients: '',
    instructions: '',
    image: null,
  });
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    setRecipe({ ...recipe, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Recipe submitted:', recipe);
  };

  const handleSave = () => {
    // Handle saving the recipe to the collection
    console.log('Recipe saved to collection:', recipe);
  };

  const handleReportIssue = (e) => {
    e.preventDefault();
    // Handle reporting an issue
    console.log('Report issue');
  };

  return (
    <div className="container mx-auto p-4">
      <BackButton />
      <h1 className="text-4xl font-bold text-center mb-8">Create a Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Recipe Name
          </label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter recipe name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter recipe description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter ingredients"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
            Instructions
          </label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter instructions"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image (Optional)
          </label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              value="manual"
              checked={option === 'manual'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Write Manually
          </label>
          <label>
            <input
              type="radio"
              value="google"
              checked={option === 'google'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Search through Google
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go Back
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save to Collection
          </button>
        </div>
      </form>

      <h2 className="text-2xl font-bold text-center mb-8">Report an Issue</h2>
      <form onSubmit={handleReportIssue} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="issue">
            Issue Description
          </label>
          <textarea
            name="issue"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Describe the issue"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Report Issue
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserCreate;