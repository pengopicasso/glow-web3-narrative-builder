
import React from 'react';

const BackgroundEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gray overlay for enhanced visibility */}
      <div className="absolute inset-0 bg-gray-800/90 z-10" />
      <img 
        src="/lovable-uploads/052884b6-f50d-4cf0-bb98-44fdaca8e544.png" 
        alt="Background Gray Effect" 
        className="w-full h-full object-cover grayscale z-0"
        style={{ minHeight: '120%', minWidth: '120%', filter: 'grayscale(1)' }}
        aria-hidden="true"
      />
    </div>
  );
};

export default BackgroundEffect;
