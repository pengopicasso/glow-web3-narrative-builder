
import GlowButton from './GlowButton';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-glow-darkest relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow-cyan text-glow">
            Who We Are
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-xl text-white/80 leading-relaxed mb-6">
            In crypto, attention is currency — and social media is your front line.
          </p>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            NoaMedia helps Web3 companies build, refine, and execute effective social media strategies. 
            We create visual, insightful content and fully manage your X, LinkedIN and Youtube account — 
            using battle-tested tactics and industry best practices to drive real growth and engagement.
          </p>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            Our mission is simple: Turn your project into reputable brand.<br />
            You focus on building the future.<br />
            We make sure the world cares.
          </p>
          
          <div className="max-w-4xl mx-auto mt-10 bg-glow-dark/50 p-6 rounded-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-glow-cyan mb-4">Our Process</h3>
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <span className="text-glow-cyan mr-2">✔️</span>
                <span><strong>Consult</strong> – Fill the form. Free call to clarify your vision and goals.</span>
              </li>
              <li className="flex items-start">
                <span className="text-glow-cyan mr-2">✔️</span>
                <span><strong>Strategize</strong> – Deep research + custom growth plan you approve.</span>
              </li>
              <li className="flex items-start">
                <span className="text-glow-cyan mr-2">✔️</span>
                <span><strong>Create</strong> – We create and post high-impact content that builds authority.</span>
              </li>
              <li className="flex items-start">
                <span className="text-glow-cyan mr-2">✔️</span>
                <span><strong>Optimize</strong> – We track, tweak, and scale what works.</span>
              </li>
            </ul>
            
            <div className="mt-8 flex justify-center">
              <a 
                href="https://form.typeform.com/to/QCpSL7J0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GlowButton 
                  size="lg"
                  className="font-bold"
                >
                  Get a Quote
                </GlowButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <img 
          src="/lovable-uploads/16dea4e1-401a-41c0-914c-42b3735ca52d.png" 
          alt="Background Pattern" 
          className="absolute w-full h-full object-cover" 
        />
      </div>
    </section>
  );
};

export default AboutSection;
