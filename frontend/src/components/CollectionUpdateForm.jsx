
import React, { useState, useEffect } from 'react';

const CollectionUpdateForm = ({ collection, onUpdate, onClose }) => {
  const [updatedCollection, setUpdatedCollection] = useState(collection);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCollection(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/updatecollection/${collection.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCollection)
      });

      if (!response.ok) {
        throw new Error('Failed to update collection');
      }

      const data = await response.json();
      onUpdate(data);
      onClose();
      alert('Collection updated successfully');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update collection');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Update Collection</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={updatedCollection.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image Url</label>
        <input
          type=""
          name="image"
          value={updatedCollection.imgUrl}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Prep Time</label>
        <input
          type="text"
          name="PrepTime"
          value={updatedCollection.cookingTime}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Type</label>
        <input
          type="text"
          name="type"
          value={updatedCollection.type}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Ingredients</label>
        <input
          type="text"
          name="ingredients"
          value={updatedCollection.ingredients}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Instructions</label>
        <input
          type="text"
          name="instructions"
          value={updatedCollection.instructions}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={updatedCollection.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      {/* Add other fields similarly */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Update Collection
      </button>
      <button
        type="button"
        onClick={onClose}
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 ml-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default CollectionUpdateForm;