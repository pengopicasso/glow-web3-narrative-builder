import GlowButton from './GlowButton';
import { useRef, useEffect } from 'react';
import { Square } from 'lucide-react';

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

  return <section id="about" className="py-16 md:py-24 relative bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
            Who We Are
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-10" ref={sectionRef}>
          <p className="text-xl leading-relaxed mb-6 font-medium text-lime-950">
            In crypto, attention is currency — and social media is your front line.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-green-950 px-[25px] bg-slate-50">
            NoaMedia helps Web3 companies build, refine, and execute effective social media strategies. 
            We create visual, insightful content and fully manage your X, LinkedIN and Youtube account — 
            using battle-tested tactics and industry best practices to drive real growth and engagement.
          </p>
          <p className="leading-relaxed mb-6 text-lg text-green-950">
            Our mission is simple: Turn your project into reputable brand.<br />
            You focus on building the future.<br className="replace" />
            We make sure the world cares.
          </p>
          
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-3xl font-bold text-green-800 mb-8">Why Us</h3>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-green-800 mb-8">Our Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <span className="text-glow-cyan mr-3 flex-shrink-0 mt-1">
                      <Square className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-green-800">Consult</h4>
                      <p className="text-green-700">Fill the form. Free call to clarify your vision and goals.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <span className="text-glow-cyan mr-3 flex-shrink-0 mt-1">
                      <Square className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-green-800">Strategize</h4>
                      <p className="text-green-700">Deep research + custom growth plan you approve.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <span className="text-glow-cyan mr-3 flex-shrink-0 mt-1">
                      <Square className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-green-800">Create</h4>
                      <p className="text-green-700">We create and post high-impact content that builds authority.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <span className="text-glow-cyan mr-3 flex-shrink-0 mt-1">
                      <Square className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-green-800">Optimize</h4>
                      <p className="text-green-700">We track, tweak, and scale what works.</p>
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
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <img src="/lovable-uploads/19d1a32f-e9a4-433f-8e52-2965d8c24a0e.png" alt="Background Pattern" className="absolute w-full h-full object-cover" />
      </div>
    </section>;
};

export default AboutSection;
