
import { CircleFadingPlus, MessageSquareText, Network } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-glow-darkest/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/5 hover:border-glow-cyan/30 transition-all duration-300 hover:shadow-glow-sm h-full max-w-[300px] mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 bg-glow-darkest rounded-lg flex items-center justify-center mb-4 text-glow-cyan shadow-glow-sm">
          <div className="text-5xl">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-glow-cyan text-glow-sm">{title}</h3>
      </div>
      <div className="text-white/70 text-center">{description}</div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-glow-dark to-glow-darkest relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan">Our Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ServiceCard
            title="Branding"
            description="We design strategic visual identities that make Web3 audiences notice your project and enhance your authority."
            icon={<CircleFadingPlus className="animate-pulse-glow" size={48} />}
          />
          
          <ServiceCard
            title="Social Media"
            description="We create content that commands attention, sets authority, and builds loyalty that lasts across Twitter, LinkedIn, and YouTube."
            icon={<MessageSquareText className="animate-pulse-glow" size={48} color="#95f9e1" />}
          />
          
          <ServiceCard
            title="Community"
            description="We build culturally-attuned Discord and Telegram spaces where members connect and belong."
            icon={<Network className="animate-pulse-glow" size={48} color="#95f9e1" />}
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
