import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending request with:', { username, password }); // Log the request payload
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      if (response.status === 200) {
        localStorage.setItem('username', username);
        navigate('/userprofile');
      } 

   if (response.ok) {
        setIsLoggedIn(true);
        setMessage('Login successful!');
      } else {
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setMessage('An error occurred during login.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMessage('Logged out successfully.');
  };
  

  return (
    <div>
    <BackButton />
    <div className="min-h-screen flex items-center justify-center bg-green-100" >
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      {isLoggedIn ? (
        <div>
        <p className='mb-4 text-green-500'>{message}</p>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Logout</button>
        </div>
      ) : (
        
        <form onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
       {message && <p className='mb-4 text-green-500'>{message}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        // {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
        // {userData && (
        //   <div className="mt-4">
        //     <h2 className="text-xl font-bold">User Data</h2>
        //     <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(userData, null, 2)}</pre>
        //   </div>
         )}
       </div>
     </div>
     </div>
  );
}

export default Login;