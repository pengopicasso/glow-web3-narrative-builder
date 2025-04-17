
import GlowButton from './GlowButton';
import NetworkAnimation from './NetworkAnimation';
import { useRef, useEffect } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
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
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden transition-all duration-1000 opacity-0 translate-y-10"
    >
      <NetworkAnimation />
      <div className="absolute inset-0 bg-gradient-to-b from-glow-dark/40 to-glow-darkest z-0"></div>
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
        <div className="flex flex-col items-center">
          <img 
            src="/lovable-uploads/dcdbb9e3-92d3-451a-b81d-4a5ca421d8fd.png" 
            alt="NOA Media Logo" 
            className="h-32 md:h-48 w-auto mb-10 animate-float"
          />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 gradient-text animate-fade-in">
              From Anon to Icon.
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white animate-slide-up">
              Where Web3 Brands Build Their Ark — and Leave a Legacy
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              We create content that commands attention, sets authority and builds loyalty that lasts.
            </p>
            
            <div className="relative inline-block animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <GlowButton 
                onClick={scrollToContact} 
                size="lg"
                className="font-bold relative z-10 bg-gradient-to-r from-glow-cyan to-glow-secondary hover:from-glow-secondary hover:to-glow-cyan animate-gradient-shift"
              >
                Get a Free Proposal
              </GlowButton>
              <div className="absolute -inset-2 bg-glow-cyan/20 blur-xl rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="rgba(10, 17, 32, 0.8)" 
            fillOpacity="1" 
            d="M0,64L60,64C120,64,240,64,360,74.7C480,85,600,107,720,101.3C840,96,960,64,1080,48C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
