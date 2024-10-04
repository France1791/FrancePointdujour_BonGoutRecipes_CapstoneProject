import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoBackground from './VideoBackground';
import BackButton from './BackButton';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/checkuser?username=${username}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add any required headers here, such as authorization tokens
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <VideoBackground videoSrc="src/videos/3015488-hd_1920_1080_24fps.mp4">
      <BackButton />
      <div className="items-center justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="mb-4 p-2 border rounded w-full"
        />
        <h1 className="text-2xl text-center text-white font-bold mb-4">Welcome, {username}!</h1>
        <div className="mb-6 flex justify-around w-full">
          <button
            onClick={() => navigate('/recipelist')}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/4"
          >
            Recipes
          </button>
          <button
            onClick={() => navigate('/usercreate')}
            className="bg-orange-300 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-1/4"
          >
            Create
          </button>
          <button
            onClick={() => navigate('/recCollection')}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/4"
          >
            My Collection
          </button>
        </div>
      </div>
    </VideoBackground>
  );
}

export default UserProfile;