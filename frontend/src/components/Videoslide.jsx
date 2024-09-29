import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const videos = [
  { id: 1, url: 'src/videos/854082-hd_1920_1080_25fps.mp4' },
  { id: 2, url: 'src/videos/2620043-uhd_3840_2160_25fps.mp4' },
  { id: 3, url: 'src/videos/3015488-hd_1920_1080_24fps.mp4' },
  { id: 4, url: 'src/videos/3195650-uhd_3840_2160_25fps.mp4' },
  { id: 5, url: 'src/videos/3255109-uhd_3840_2160_25fps.mp4' },
  { id: 6, url: 'src/videos/3196344-uhd_3840_2160_25fps.mp4' },
];

function Videoslide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 50}%)`;
    }

    videoRefs.current.forEach(video => {
        if (video) {
          video.play().catch(error => {
            console.error('Error attempting to play video:', error);
          });
        }
      });
    }, [currentIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 ">
        <div className="overflow-hidden">
      <div 
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ width: `${videos.length * 50}%` }}
      >
        {videos.map((video, index) => (
          <div key={video.id} className="w-1/2 px-2">
            <video
              ref={el => videoRefs.current[index] = el}
              className="w-full aspect-video object-cover rounded-lg"
              src={video.url}
              muted
              loop
              playsInline
            />
          </div>
        ))}
      </div>
      </div>
      {currentIndex > 0 && (
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded-full -ml-6"
        onClick={prevSlide}
      >
        <FaChevronLeft className="text-gray-800" />
      </button>
      )}
      {currentIndex < videos.length - 5 && (
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded-full -mr-6"
        onClick={nextSlide}
      >
        <FaChevronRight className="text-gray-800" />
      </button>
      )}
    </div>
  );
}

export default Videoslide;
