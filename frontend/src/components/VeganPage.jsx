import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function VeganPage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://localhost:8080/recipes/type/vegan');
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const data = await response.json();
            setRecipes(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setError('Failed to load recipes. Please try again later.');
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-600">{error}</div>;
    }

    return (
        <div className="container bg-green-100 mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Vegan Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recipes.map((recipe) => (
                    <motion.div
                        key={recipe.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <img src={recipe.imgUrl} alt={recipe.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                            <p className="text-gray-600 mb-4">{recipe.description}</p>
                            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                                View Recipe
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default VeganPage;
