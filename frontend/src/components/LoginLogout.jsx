import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const LoginLogout = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  const handleLogin = () => {
    console.log('Login button clicked');
    const token = 'dummyToken'; // Replace with actual token
    const userData = { name: 'John Doe' }; // Replace with actual user data
    console.log('Logging in with token:', token, 'and userData:', userData);
    login(token, userData);
  };

  const handleLogout = () => {
    console.log('Logout button clicked');
    logout();
  };

  console.log('isAuthenticated:', isAuthenticated);

  return (
    <div className="flex items-center justify-center h-screen">
      {isAuthenticated ? (
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