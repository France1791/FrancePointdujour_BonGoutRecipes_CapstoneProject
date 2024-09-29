import React from 'react';

function VideoBackground({ videoSrc, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60">
        {children}
      </div>
    </div>
  );
}

export default VideoBackground;
