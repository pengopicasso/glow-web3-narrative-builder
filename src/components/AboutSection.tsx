import GlowButton from './GlowButton';
import { useRef, useEffect } from 'react';
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0');
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);
  return <section id="about" className="py-20 md:py-32 relative bg-green-100">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-12 opacity-0 transition-opacity duration-1000">
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-glow-cyan/20 to-glow-secondary/20 text-glow-cyan text-sm font-medium mb-4">WHO WE ARE</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Who We Are
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-10 opacity-0 transition-all duration-1000" ref={sectionRef}>
          <p className="text-xl leading-relaxed mb-6 font-medium text-lime-950">
            In crypto, attention is currency — and social media is your front line.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-green-950 bg-green-950">
            NoaMedia helps Web3 companies build, refine, and execute effective social media strategies. 
            We create visual, insightful content and fully manage your X, LinkedIN and Youtube account — 
            using battle-tested tactics and industry best practices to drive real growth and engagement.
          </p>
          <p className="leading-relaxed mb-6 text-lg text-green-950">
            Our mission is simple: Turn your project into reputable brand.<br />
            You focus on building the future.<br className="replace" />
            We make sure the world cares.
          </p>
          
          <div ref={processRef} className="max-w-4xl mx-auto mt-16 glass-card p-1 opacity-0 transition-all duration-1000 delay-300">
            <div className="bg-gradient-to-br from-glow-dark to-glow-darkest p-8 rounded-lg bg-lime-900">
              <h3 className="text-3xl font-bold gradient-text mb-8">Our Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-5 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <div className="flex items-start">
                    <span className="text-glow-cyan mr-3 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Consult</h4>
                      <p className="text-white/70">Fill the form. Free call to clarify your vision and goals.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 p-5 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <div className="flex items-start">
                    <span className="text-glow-cyan mr-3 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Strategize</h4>
                      <p className="text-white/70">Deep research + custom growth plan you approve.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 p-5 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <div className="flex items-start text-emerald-950 text-center">
                    <span className="mr-3 flex-shrink-0 mt-1 text-green-950">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Create</h4>
                      <p className="text-white/70">We create and post high-impact content that builds authority.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 p-5 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <div className="flex items-start">
                    <span className="text-glow-cyan mr-3 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18"></path>
                        <path d="m19 9-5 5-4-4-3 3"></path>
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Optimize</h4>
                      <p className="text-white/70">We track, tweak, and scale what works.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex justify-center">
                <a href="https://form.typeform.com/to/QCpSL7J0" target="_blank" rel="noopener noreferrer">
                  <GlowButton size="lg" className="font-bold bg-gradient-to-r from-glow-cyan to-glow-secondary hover:from-glow-secondary hover:to-glow-cyan">
                    Get a Quote
                  </GlowButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <img src="/lovable-uploads/16dea4e1-401a-41c0-914c-42b3735ca52d.png" alt="Background Pattern" className="absolute w-full h-full object-cover" />
      </div>
    </section>;
};
export default AboutSection;