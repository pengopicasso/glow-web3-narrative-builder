
const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-glow-darkest relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow-cyan text-glow">
            Why Glow Media?
          </h2>
          <div className="w-24 h-1 bg-glow-cyan mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-xl text-white/80 leading-relaxed">
            We help Web3 companies build, refine, and execute their social media strategies.
            Social media is everything in the crypto industry, especially Twitter. We create visual and insightful content and take full management of your account and make sure it is using industry best practices for growth.
          </p>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <img 
          src="public/lovable-uploads/16dea4e1-401a-41c0-914c-42b3735ca52d.png" 
          alt="Background Pattern" 
          className="absolute w-full h-full object-cover" 
        />
      </div>
    </section>
  );
};

export default AboutSection;
