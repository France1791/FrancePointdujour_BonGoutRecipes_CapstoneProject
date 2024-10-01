import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackButton from './BackButton';

function SingleRecipeCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = React.useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  React.useEffect(() => {
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

  const handleSave = () => {
    console.log('Recipe saved to collection:', recipe);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleReportIssue = () => {
    console.log('Report issue');
  };

  if (!recipe) {
    console.error('No recipe data provided');
    return <div>No recipe data available</div>;
  }

  return (
    <div className="single-recipe-card container mx-auto p-4 bg-green-100 shadow-md rounded">
      < BackButton />
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
        <div className='w-2/3 pl-8' data-aos="fade-left">
        <div className='mb-4 ml-4'>
        <h3 className="text-2*1 font-bold mb-2">Ingredients List</h3>
        <p>{recipe.ingredients}</p>
        </div>
      <div className='ml-4 mb-4'>
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