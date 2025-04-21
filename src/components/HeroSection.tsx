import { useRef, useEffect } from 'react';
import GlowButton from './GlowButton';
const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    }, {
      threshold: 0.1
    });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" ref={heroRef} className="min-h-screen flex flex-col relative overflow-hidden transition-all duration-1000 opacity-0 translate-y-10" style={{
    backgroundColor: '#0A1612' // Dark green-black background
  }}>
      {/* Background waves pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <img src="/lovable-uploads/e2026ebe-6097-4e46-a098-90af4da97dc1.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      {/* Header/Navigation area */}
      

      {/* Main hero content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-6 md:px-10 my-0 py-[40px]">
        <div className="max-w-5xl mx-auto text-center">
          
          
          
          
          
          
          <GlowButton onClick={scrollToContact} size="lg" className="font-semibold bg-green-600 hover:bg-green-700 text-white rounded-full px-10 py-4">
            Get Free Proposal
          </GlowButton>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="rgba(10, 17, 32, 0.8)" fillOpacity="1" d="M0,64L60,64C120,64,240,64,360,74.7C480,85,600,107,720,101.3C840,96,960,64,1080,48C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>;
};
export default HeroSection;