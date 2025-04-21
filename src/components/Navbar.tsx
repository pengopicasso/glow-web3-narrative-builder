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