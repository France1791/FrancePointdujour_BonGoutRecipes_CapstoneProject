
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function SingleRecipeCard() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = React.useState(null);

  React.useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch(`http://localhost:8080/recipes/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error('An error occurred while fetching the recipe:', error);
      }

    }
    fetchRecipe();
  }, [id]);
  
  const handleSave = () => {
    navigate('/recCollection');
  };

  if (!recipe) {
    console.error('No recipe data provided');
    return <div>No recipe data available</div>;
  }

  return (
    <div className="single-recipe-card">
      <h2>{recipe.name}</h2>
      <img src={recipe.imgUrl} alt={recipe.name} className="recipe-image" />
      <p><strong>Category:</strong> {recipe.type}</p>
      <p>{recipe.description}</p>
       <div className="recipe-details">
        <p><strong>Cook Time:</strong> {recipe.cookingTime}</p>
        <h6>Level: {recipe.difficultyLevel}</h6>
      </div>
      <div className="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h3>Instructions:</h3>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))} 
         </ol>
       </div> 
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


export default SingleRecipeCard;
