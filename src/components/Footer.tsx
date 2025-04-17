
import React from 'react';
import SocialLinks from './common/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-glow-darkest text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/dcdbb9e3-92d3-451a-b81d-4a5ca421d8fd.png" 
              alt="Noa Media Logo" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400 max-w-md">
              Building strong Web3 communities through innovative marketing strategies.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks className="mb-4" />
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Noa Media. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
