import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

const UserCreate = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: '',
    imgUrl: '',
    difficultyLevel: '',
    cookingTime: '',
    ingredients: '',
    instructions: '',
    nutrition: '',
    // creatorId: parseInt(localStorage.getItem('userId'))
  });
  const navigate = useNavigate();
   const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId'); // Ensure userId is retrieved correctly
    if (!userId) {
      setMessage('User ID is missing. Please log in.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/createcollection?creatorId=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Form Data', formData);
      if (response.ok) {
        setMessage('Recipe created successfully!');
        navigate('/recCollection', { state: { formData } });
        setFormData({
          name: '',
          description: '',
          type: '',
          imgUrl: '',
          difficultyLevel: '',
          cookingTime: '',
          ingredients: '',
          instructions: '',
          nutrition: '',
          // creatorId: localStorage.getItem('userId')
        });
      } else {
        const errorData = await response.json();
        console.error('Error Response:', errorData); // Log the error response from the server
        setMessage('Failed to save recipe.');
      }
    } catch (error) {
      console.error('Error creating recipe:', error);
      setMessage('An error occurred while creating the recipe.');
    }
  };

  return (
    <div>
    <BackButton />
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Create a Recipe</h2>
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Recipe Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description (Optional)
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="difficultyLevel">
            Difficulty Level (Optional)
          </label>
          <input
            type="text"
            id="difficultyLevel"
            name="difficultyLevel"
            value={formData.difficultyLevel}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Cooking Time
          </label>
          <input
            type="text"
            id="cookingTime"
            name="cookingTime"
            value={formData.cookingTime}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nutrition">
            Nutrition (Optional)
          </label>
          <input
            type="text"
            id="nutrition"
            name="nutrition"
            value={formData.nutrition}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
            Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imgUrl">
            Image URL (Optional)
          </label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            value={formData.imgUrl}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </form>
      {/* <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Or Search Online</h3>
        <form onSubmit={handleSearch}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="searchQuery">
              Search Query
            </label>
            <input
              type="text"
              id="searchQuery"
              name="searchQuery"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Search
            </button>
          </div>
        </form> */}
      {/* </div> */}
    </div>
    </div>
    </div>
  );
};

export default UserCreate;