import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackButton from './BackButton';

function VeganPage() {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    // for the aos animation
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);


    //   fetching the recipes with type=vegan
    useEffect(() => {
    const fetchRecipes = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/recipes/type/vegan');
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            setError('Failed to load recipes. Please try again later.');
           
        } finally{
            setLoading(false);
        }
    };
    fetchRecipes();
}, []);
    

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-600">{error}</div>;
    }

    const handleViewRecipe = (id) => {
        // to view the recipe details
        navigate(`/recipe/${id}`);
      };

    return (
        <div className="container bg-green-100 mx-auto px-4 py-8" data-aos="fade-down">
            <BackButton />
            <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Vegan Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recipes.map((recipe, index) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        data-aos="fade-down"
                        data-aos-delay={`${index * 200}`}
                    >
                        <img src={recipe.imgUrl} alt={recipe.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                            <p className="text-gray-600 mb-4">{recipe.description}</p>
                            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                            onClick={() => handleViewRecipe(recipe.id)}>
                                View Recipe
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VeganPage;
