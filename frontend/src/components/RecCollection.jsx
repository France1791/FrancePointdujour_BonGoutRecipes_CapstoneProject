import React, { useEffect, useState, useContext } from 'react';
import BackButton from './BackButton';
import { useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from './AuthContext'; // Adjust the import path as necessary
import CollectionUpdateForm from './CollectionUpdateForm';

function RecCollection() {
  const location = useLocation();
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);
   const [selectedCollection, setSelectedCollection] = useState(null); //state to manage the selected collection for update
  const { formData } = location.state || {};

  // Retrieve user from AuthContext
  const userId = localStorage.getItem('userId');
  console.log('User ID:', userId);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch(`http://localhost:8080/collections?userId=${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch collections');
        }

        const data = await response.json();
        console.log('Fetched collections:', data); // Log the fetched collections
        
        // Remove duplicates based on the id
        const uniqueCollections = Array.from(new Set(data.map(collection => collection.id)))
          .map(id => data.find(collection => collection.id === id));

        setCollections(uniqueCollections);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    if (userId) {
      fetchCollections();
    }
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/deletecollection/${id}?creatorId=${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete collection');
      }

      // Remove the deleted collection from the state
      setCollections(collections.filter(collection => collection.id !== id));
      console.log('Deleted collection with ID:', id);
    } catch (error) {
      console.error('Error deleting collection:', error);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleUpdate = (updatedCollection) => {
    setCollections(collections.map(collection => 
      collection.id === updatedCollection.id ? updatedCollection : collection
    ));
  };
  
  const handleView = (id) => {
    navigate(`/recipe/${id}`);
  };


  return (
    <div className="single-recipe-card container mx-auto p-4 bg-green-100 shadow-md rounded">
      <BackButton />
      <div className="flex justify-center items-center mb-8" data-aos="fade-down">
        <h1 className="text-4xl font-bold">My Collection</h1>
      </div>
      <div className="flex flex-wrap">
        {collections.map((collection, index) => (
          <div key={collection.id} className="w-full md:w-1/2 lg:w-1/3 p-4"  data-aos="fade-down"
          data-aos-delay={`${index * 200}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden  h-full flex flex-col">
              <img src={collection.imgUrl} alt={collection.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex-grow">
                <h3 className="font-bold text-xl mb-2">{collection.name}</h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
              </div>
                <div className="flex justify-around mt-auto p-4">
                <button
                  onClick={() => handleView(collection.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 w-24 mx-2"
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(collection.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300 w-24 mx-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => setSelectedCollection(collection)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 w-24 mx-2"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedCollection && (
        <CollectionUpdateForm
          collection={selectedCollection}
          onUpdate={handleUpdate}
          onClose={() => setSelectedCollection(null)}
        />
      )}
      <div className="mt-8 flex justify-between" data-aos="fade-up">
      </div>
    </div>
  );
}

export default RecCollection;