import React from 'react';

function FeaturedRecipes() {
  const dishes = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      image: "https://shorturl.at/YlFbp",
      description: "A classic Italian pasta dish with eggs, cheese, and pancetta.",
      difficulty: "Medium"
    },
    {
      id: 2,
      name: "Grilled Salmon",
      image: "https://shorturl.at/Slptu",
      description: "Perfectly grilled salmon fillet with lemon and herbs.",
      difficulty: "Easy"
    },
    {
      id: 3,
      name: "Beef Wellington",
      image: "https://shorturl.at/22dRs",
      description: "Tender beef wrapped in puff pastry with mushroom duxelles.",
      difficulty: "Hard"
    },
    {
      id: 4,
      name: "Vegetable Stir-Fry",
      image: "https://shorturl.at/iqVoO",
      description: "A quick and healthy mix of colorful vegetables in a savory sauce.",
      difficulty: "Easy"
    }
  ];

function DishCard({ dish }) {
  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:bg-slate-500 hover:scale-110 duration-300 hover:shadow-2xl">
      <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{dish.name}</h3>
        <p className="text-gray-600 mb-4">{dish.description}</p>
        <span className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${difficultyColor[dish.difficulty]}`}>
          {dish.difficulty}
        </span>
      </div>
    </div>
  );
}
return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
  {dishes.map(dish => (
    <DishCard key={dish.id} dish={dish} />
  ))}
</div>
);
}

export default FeaturedRecipes;