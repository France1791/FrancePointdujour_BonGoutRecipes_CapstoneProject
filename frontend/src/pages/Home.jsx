import React from 'react'
import SearchBar from '../components/SearchBar';
import CategoryTiles from '../components/CategoryTiles';
import FeaturedRecipes from '../components/FeaturedRecipes';
import Videoslide from '../components/Videoslide';


function Home() {
  
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url('https://shorturl.at/XMJC0')"}}>
      <div className="flex-grow container mx-auto px-4 py-8">
        <header className="flex items-center justify-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Bon Gout Recipes</h1>
        </header>
        
         <section className="mb-12">
          <SearchBar className="max-w-2xl mx-auto" />
        </section> 
        
    
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center">Dishes of the Week</h2>
          <FeaturedRecipes />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center">Recipe Categories</h2>
          <CategoryTiles />
        </section>

        <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Videos</h2>
        <Videoslide />
      </section>
      </div>
    </div>
  );
}

export default Home;