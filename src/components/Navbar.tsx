
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-glow-darkest/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img 
            src="public/lovable-uploads/c4bbdc84-7b30-491e-9d87-31e0ad593796.png" 
            alt="Glow Media Logo" 
            className="h-10"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-white hover:text-glow-cyan transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-white hover:text-glow-cyan transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-glow-cyan transition-colors"
          >
            Why Us
          </button>
          <button 
            onClick={() => scrollToSection('clients')} 
            className="text-white hover:text-glow-cyan transition-colors"
          >
            Clients
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-glow-cyan text-glow-dark font-medium px-6 py-2 rounded-full button-glow shadow-glow-sm hover:shadow-glow-md transition-shadow"
          >
            Let's Glow
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-glow-darkest/95 backdrop-blur-lg pt-4 pb-6 px-4 absolute w-full">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-white hover:text-glow-cyan transition-colors py-2 text-center"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white hover:text-glow-cyan transition-colors py-2 text-center"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-glow-cyan transition-colors py-2 text-center"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('clients')} 
              className="text-white hover:text-glow-cyan transition-colors py-2 text-center"
            >
              Clients
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-glow-cyan text-glow-dark font-medium px-6 py-3 rounded-full button-glow shadow-glow-sm hover:shadow-glow-md transition-shadow mt-2 text-center"
            >
              Let's Glow
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
