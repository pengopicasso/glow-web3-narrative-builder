
import { Lightbulb, Play, Network } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-glow-darkest/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/5 hover:border-glow-cyan/30 transition-all duration-300 hover:shadow-glow-sm">
      <div className="w-16 h-16 bg-glow-darkest rounded-lg flex items-center justify-center mb-6 text-glow-cyan shadow-glow-sm">
        <div className="text-3xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-glow-cyan text-glow-sm">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-glow-dark to-glow-darkest relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan text-glow">How We Help DeFi Projects Glow</h2>
          <div className="w-24 h-1 bg-glow-cyan mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ServiceCard
            title="Strategic Branding"
            description="We craft unique narratives and visual identities that make your DeFi project instantly recognizable and trusted in the web3 space."
            icon={<Lightbulb className="animate-pulse-glow" />}
          />
          
          <ServiceCard
            title="Scroll-Stopping Content"
            description="From educational articles to viral social posts, we create attention-grabbing content that engages your audience and drives conversions."
            icon={<Play className="animate-pulse-glow" />}
          />
          
          <ServiceCard
            title="Community Growth"
            description="We build and nurture vibrant DeFi communities that drive adoption, retention, and organic growth for your protocol or product."
            icon={<Network className="animate-pulse-glow" />}
          />
        </div>
      </div>
      
      {/* Background ripple effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-96 h-96 rounded-full bg-glow-cyan/10 blur-3xl top-1/4 -left-48"></div>
        <div className="absolute w-96 h-96 rounded-full bg-glow-cyan/10 blur-3xl bottom-1/4 -right-48"></div>
      </div>
    </section>
  );
};

export default ServicesSection;
