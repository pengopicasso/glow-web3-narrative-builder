
import React from 'react';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "" }) => {
  return (
    <div className={`flex justify-center space-x-4 ${className}`}>
      <a 
        href="https://twitter.com/noamediaxyz" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-glow-cyan transition-colors"
        aria-label="X (Twitter)"
      >
        <img 
          src="/lovable-uploads/848cf121-11e3-4d8c-ac2b-27a4cf933369.png" 
          alt="X (Twitter)" 
          className="w-8 h-8 hover:opacity-80 transition-opacity"
        />
      </a>
      <a 
        href="https://t.me/noamediaxyz" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-glow-cyan transition-colors"
        aria-label="Telegram"
      >
        <img 
          src="/lovable-uploads/9a9a0a34-7bbd-476e-87d3-53d7b5e8fb6b.png" 
          alt="Telegram" 
          className="w-8 h-8 hover:opacity-80 transition-opacity"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
