import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 transition duration-300 flex items-center absolute top-18 left-0"
    style={{width: 'auto'}}>
      <FontAwesomeIcon icon={faArrowLeft}  className="mr-2" />
      <span className="hidden sm:inline">Back</span>
    </button>
  );
}

export default BackButton;