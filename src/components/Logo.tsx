import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src="https://res.cloudinary.com/dzg3lv6fh/image/upload/v1740409318/XcapeVelocityCropped_nydcg2.png" 
        alt="Xscape Velocity Logo" 
        className="h-8 sm:h-12 w-auto"
        style={{ filter: 'brightness(0) invert(1)' }}
        onError={(e) => {
          console.error('Logo failed to load:', e);
        }}
      />
    </div>
  );
}