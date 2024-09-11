import React from 'react'
import SearchBar from '../components/SearchBar';
import CategoryTiles from '../components/CategoryTiles';
import FeaturedRecipes from '../components/FeaturedRecipes';
// import RecipeList from '../components/RecipeList';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url(https://shorturl.at/XMJC0)"}}>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Bon Gout Recipes</h1>
        
        <section className="mb-12">
          <SearchBar className="max-w-2xl mx-auto" />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700"> <FeaturedRecipes /></h2>
         
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Recipe Categories</h2>
          <CategoryTiles />
        </section>

        {/* Uncomment if you want to include RecipeList */}
        {/* <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">All Recipes</h2>
          <RecipeList />
        </section> */}
      </main>
    </div>
  );
}

export default Home;