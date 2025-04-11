
import { Lightbulb, MessageCircle, Users } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: React.ReactNode;
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
      <div className="text-white/70">{description}</div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-glow-dark to-glow-darkest relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan text-glow">Our Services</h2>
          <div className="w-24 h-1 bg-glow-cyan mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ServiceCard
            title="Branding"
            description={
              <ul className="list-disc list-inside text-left">
                <li>Brand Strategy</li>
                <li>Visual Identity</li>
                <li>StoryTelling</li>
                <li>Content Templates</li>
              </ul>
            }
            icon={<Lightbulb className="animate-pulse-glow" />}
          />
          
          <ServiceCard
            title="Social Media"
            description={
              <div className="text-left">
                <p className="font-semibold mb-1">X (Twitter):</p>
                <ul className="list-disc list-inside mb-2">
                  <li>Ghostwriting</li>
                  <li>Memes</li>
                  <li>Viral threads</li>
                </ul>
                
                <p className="font-semibold mb-1">YouTube:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>Scriptwriting</li>
                  <li>Thumbnails</li>
                  <li>Shorts strategy</li>
                  <li>Titles, intros/outros</li>
                </ul>
                
                <p className="font-semibold mb-1">LinkedIn:</p>
                <ul className="list-disc list-inside">
                  <li>Ghostwriting</li>
                  <li>Carousels</li>
                  <li>Founder POVs</li>
                  <li>Quote graphics</li>
                </ul>
              </div>
            }
            icon={<MessageCircle className="animate-pulse-glow" />}
          />
          
          <ServiceCard
            title="Community Management"
            description={
              <p className="text-left">
                We increase engagement and community size by making sure your server is set up correctly with the right channels, roles, and bots and managing your community in a way proven to engage and excite your members.
              </p>
            }
            icon={<Users className="animate-pulse-glow" />}
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
