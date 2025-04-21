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
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4", isScrolled ? "bg-glow-dark/80 backdrop-blur-md shadow-md" : "bg-transparent")}>
      <div className="container flex items-center justify-between mx-0 px-[39px] py-[33px] bg-green-100">
        <a href="#hero" className="flex items-center">
          <img 
            src="/lovable-uploads/dcdbb9e3-92d3-451a-b81d-4a5ca421d8fd.png" 
            alt="Noa Media Logo" 
            className={cn(
              "transition-all duration-300", 
              isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
            )} 
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('services')} className="text-white hover:text-glow-cyan transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-glow-cyan transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-glow-cyan transition-colors relative group">
            Why Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-glow-cyan transition-all duration-300 group-hover:w-full"></span>
          </button>
          <a href="https://form.typeform.com/to/QCpSL7J0" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-glow-cyan to-glow-secondary text-white font-medium px-6 py-2 rounded-full button-glow shadow-glow-sm hover:shadow-glow-md transition-all hover:scale-105">
            Book a call now
          </a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>}
        </button>
      </div>

      {mobileMenuOpen && <div className="md:hidden bg-glow-darkest/95 backdrop-blur-lg pt-4 pb-6 px-4 absolute w-full">
          <nav className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-glow-cyan transition-colors py-2 text-center">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-glow-cyan transition-colors py-2 text-center">
              Why Us
            </button>
            <a href="https://form.typeform.com/to/QCpSL7J0" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-glow-cyan to-glow-secondary text-white font-medium px-6 py-3 rounded-full button-glow shadow-glow-sm hover:shadow-glow-md transition-shadow mt-2 text-center">
              Book a call now
            </a>
          </nav>
        </div>}
    </header>;
};
export default Navbar;
