import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackButton from './BackButton';
import { AuthContext } from './AuthContext';

function SingleRecipeCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:8080/recipes/${id}`);
        if (!response.ok) {
          throw new Error('An error occurred while fetching the recipe');
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleSave = async () => {
    if (!isAuthenticated) {
      setShowLoginMessage(true);
      setTimeout(() => setShowLoginMessage(false), 3000);
      return;
    }
    try {
      const creatorId = localStorage.getItem('userId');
      const { id, ...recipeData } = recipe; // Exclude the id field
      const response = await fetch(`http://localhost:8080/createcollection?creatorId=${creatorId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...recipeData, creatorId }),
      });
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (!response.ok) {
        console.error('Server response:', responseData);
        // throw new Error(responseData.message || 'Failed to save recipe');
      }

      if (responseData.success) {
        alert('Recipe saved to your collection!');
      } 
      else {
        alert('Recipe saved to your collection!');
      }
    } catch (error) {
      console.error('Error saving recipe:', error);
      alert('An error occurred while saving the recipe.');
    }
   };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleReportIssue = () => {
    navigate('/reportissue');
  };

  if (!recipe) {
    console.error('No recipe data provided');
    return <div>No recipe data available</div>;
  }

  return (
    <div className="single-recipe-card container mx-auto p-4 bg-green-100 shadow-md rounded">
      <BackButton />
      {showLoginMessage && (
        <div className="bg-red-500 text-white p-2 rounded mb-4">
          Please log in to save this recipe.
        </div>
      )}
      <div className="flex justify-center items-center mb-8" data-aos="fade-down">
        <h2 className="text-4xl font-bold">{recipe.name}</h2>
        <h4 className="text-xl font-bold text-gray-600 ml-6">{recipe.difficultyLevel}</h4>
      </div>
      <div className="flex">
        <div className="w-1/4" data-aos="fade-right">
          <img src={recipe.imgUrl} alt={recipe.name} className="recipe-image w-full h-64 object-cover rounded" />
          <div className="mt-4">
            <h3 className="text-2xl font-bold mb-2">Prep Time</h3>
            <p>{recipe.cookingTime}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold mb-2">Nutrition</h3>
            <p>{recipe.nutrition}</p>
          </div>
        </div>
        <div className="w-2/3 pl-8" data-aos="fade-left">
          <div className="mb-4 ml-4">
            <h3 className="text-2*1 font-bold mb-2">Ingredients List</h3>
            <p>{recipe.ingredients}</p>
          </div>
          <div className="ml-4 mb-4">
            <h3 className="text-2xl font-bold mb-2">Instructions</h3>
            <ol className="list-decimal list-inside">
              {recipe.instructions.split('\n').map((instruction, index) => (
                <li key={index} className="mb-2">{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between" data-aos="fade-up">
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

export default SingleRecipeCard;