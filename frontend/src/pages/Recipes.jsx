import React from 'react';
import RecipeList from '../components/RecipeList';


function Recipes() {
  return (
    <div className="min-h-screen flex flex-col"style={{backgroundImage: "url(https://img.freepik.com/premium-photo/blank-old-aged-paper-with-copy-space-recipe-with-ingredients-wooden-spoon-table_290431-5679.jpg?w=740)"}}>
      < RecipeList />
    </div>
  );
}

export default Recipes;