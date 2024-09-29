import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        < Logo />
      </div>
      <nav>
      <Link to="/" className="mx-2">Home</Link>
      <Link to="/blog" className="mx-2">Blog</Link>
        <Link to="/recipes" className="mx-2">My Recipes</Link>
         <Link to="/signIn" className="mx-2">Login</Link> 
      </nav>
    </header>
  );
}

export default Header;