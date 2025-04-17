
import React from 'react';

const BackgroundEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <div className="absolute w-full h-full">
        <img 
          src="public/lovable-uploads/117e59eb-d4e2-4ede-a75f-6a7cbbd23c5c.png" 
          alt="Ripple Background" 
          className="w-full h-full object-cover opacity-30" 
        />
      </div>
    </div>
  );
};

export default BackgroundEffect;
