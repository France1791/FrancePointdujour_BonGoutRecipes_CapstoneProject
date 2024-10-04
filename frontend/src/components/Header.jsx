import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { AuthContext } from './AuthContext';

function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <nav>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/blog" className="mx-2">Blog</Link>
        <Link to="/recipes" className="mx-2">Recipes</Link>
        {isAuthenticated ? (
          <>
          <button
            onClick={logout}
            className="mx-2 text-white bg-red-500 hover:bg-red-700 px-3 py-2 rounded"
          >
            Logout
          </button>
          <Link to="/profile" className="mx-2">Profile</Link>
          
          </>
        ) : (
          <Link to="/signIn" className="mx-2">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;