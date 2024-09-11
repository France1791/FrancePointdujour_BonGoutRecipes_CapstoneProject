import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
      <img src="src/images/bon-gout-recipes-high-resolution-logo.png" alt="Recipe App Logo" className="h-16 mr-4" />
      </div>
      <nav>
      <Link to="/" className="mx-2">Home</Link>
        <Link to="/recipes" className="mx-2">My Recipes</Link>
        { <Link to="/signin" className="mx-2">Sign in</Link> }
      </nav>
    </header>
  );
}

export default Header;