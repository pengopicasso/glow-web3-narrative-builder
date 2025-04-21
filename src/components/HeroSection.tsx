import GlowButton from './GlowButton';
import NetworkAnimation from './NetworkAnimation';
import { useRef, useEffect } from 'react';

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

  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className="relative flex items-center justify-center pt-20 overflow-hidden transition-all duration-1000 opacity-0 translate-y-10 pb-0"
    >
      <NetworkAnimation />
      
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-32 bg-white">
        <div className="flex flex-col items-center">
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-3 gradient-text animate-fade-in font-extrabold lg:text-6xl">
              From Anon to Icon.
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 animate-slide-up text-lime-950">Where Web3 Brands Build Their Ark that leaves a Legacy</h2>
            
            <p style={{
            animationDelay: '0.2s'
          }} className="text-xl md:text-2xl mb-10 animate-slide-up text-lime-950">
              We create content that commands attention, sets authority and builds loyalty that lasts.
            </p>
            
            <div className="relative inline-block animate-slide-up" style={{
            animationDelay: '0.4s'
          }}>
              <GlowButton onClick={scrollToContact} size="lg" className="font-bold relative z-10 bg-gradient-to-r from-glow-cyan to-glow-secondary hover:from-glow-secondary hover:to-glow-cyan animate-gradient-shift">
                Get a Free Proposal
              </GlowButton>
              <div className="absolute -inset-2 bg-glow-cyan/20 blur-xl rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
