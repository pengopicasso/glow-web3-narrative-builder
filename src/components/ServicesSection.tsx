
import { Palette, MessageSquare, Users } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  emoji: string;
}

const ServiceCard = ({ title, description, icon, emoji }: ServiceCardProps) => {
  return (
    <div className="bg-glow-darkest/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/5 hover:border-glow-cyan/30 transition-all duration-300 hover:shadow-glow-sm h-full">
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 bg-glow-darkest rounded-lg flex items-center justify-center mr-4 text-glow-cyan shadow-glow-sm">
          <div className="text-4xl">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-glow-cyan text-glow-sm">{emoji} {title}</h3>
      </div>
      <div className="text-white/70">{description}</div>
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
            emoji="🔹"
            title="Branding"
            description="From anon to icon. We craft distinctive stories through strategic visual identity that makes Web3 audiences stop scrolling."
            icon={<Palette className="animate-pulse-glow" size={40} />}
          />
          
          <ServiceCard
            emoji="+"
            title="Social Media"
            description="Content that captures. Converts. Compounds. We create scroll-stopping threads, articles, and visuals that transform followers into advocates across Twitter, LinkedIn and YouTube."
            icon={<MessageSquare className="animate-pulse-glow" size={40} />}
          />
          
          <ServiceCard
            emoji="+"
            title="Community"
            description="Turn your audience into a movement. We build culturally-attuned Discord and Telegram spaces where members don't just participate—they belong."
            icon={<Users className="animate-pulse-glow" size={40} />}
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
