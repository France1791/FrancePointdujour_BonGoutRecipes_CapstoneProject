import React from 'react';

function SingleRecipeCard({ recipe }) {
  return (
    <div className="single-recipe-card">
      <h2>{recipe.name}</h2>
      <img src={recipe.imgUrl} alt={recipe.name} className="recipe-image" />
      <p>{recipe.description}</p>
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
      {/* <div className="recipe-details">
        <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
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
          ))} */}
        {/* </ol> */}
      {/* </div> */}
    </div>
  );
}

export default SingleRecipeCard;
