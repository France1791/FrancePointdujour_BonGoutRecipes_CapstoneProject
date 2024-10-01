

import React, { useState } from 'react';

const LoginLogout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement login functionality here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    setIsLoggedIn(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default LoginLogout;