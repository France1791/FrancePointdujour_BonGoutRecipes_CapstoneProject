import React from 'react'

function RecipeList({ category, recipes }) {
  return (
    <div className="container mx-auto p-4 " style={{backgroundImage: "url(https://img.freepik.com/premium-photo/blank-old-aged-paper-with-copy-space-recipe-with-ingredients-wooden-spoon-table_290431-5679.jpg?w=740)"}}>
    {/* Header */}
    <div className="text-center py-4">
      <h1 className="text-4xl font-bold">Check these Out</h1>
    </div>

    {/* Category Title */}
    <div className="text-2xl font-bold mb-4">
      {category} Recipes
    </div>

    {/* Recipe Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* {recipes.map((recipe) => (
        <div key={recipe.id} className="border rounded-lg p-4 shadow-lg">
          <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span>Time: {recipe.cookingTime}</span>
              <span>Difficulty: {recipe.difficulty}</span>
              </div>
              <button className="mt-4 text-red-500">
                <i className="fas fa-heart"></i> Add to Favorites
              </button>
            </div>
          </div>
        ))} */}
      </div>
      
      {/* Pagination or Infinite Scrolling */}
      {/* Placeholder for pagination or infinite scrolling */}
    </div>
  );
};

export default RecipeList;

