
import GlowButton from './GlowButton';
import NetworkAnimation from './NetworkAnimation';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      <NetworkAnimation />
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative animate-float">
            <img 
              src="public/lovable-uploads/46918a17-0e28-4e24-b27e-cf465187b990.png" 
              alt="Glow Media Logo" 
              className="h-24 md:h-32 mx-auto mb-4" 
            />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow-cyan text-glow">
            A Top Crypto Social Media Agency. We design Web3 companies to go from anon to icon.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10">
            Social media is everything in the crypto industry, especially Twitter. We take full management of your account and make sure your account constantly has amazing content and is using industry best practices for growth.
          </p>
          
          <div className="relative">
            <GlowButton 
              onClick={scrollToContact} 
              size="lg"
              className="font-bold relative z-10"
            >
              Get a Free Proposal
            </GlowButton>
            <div className="absolute -inset-2 bg-glow-cyan/20 blur-xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="rgba(10, 25, 47, 0.8)" 
            fillOpacity="1" 
            d="M0,64L60,64C120,64,240,64,360,74.7C480,85,600,107,720,101.3C840,96,960,64,1080,48C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
