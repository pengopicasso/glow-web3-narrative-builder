
import { Palette, MessageSquare, Users } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  emoji: string;
}

const ServiceCard = ({ title, description, icon, emoji }: ServiceCardProps) => {
  return (
    <div className="bg-glow-darkest/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/5 hover:border-glow-cyan/30 transition-all duration-300 hover:shadow-glow-sm">
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
        
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          <ServiceCard
            emoji="🔹"
            title="Branding"
            description={
              <div className="space-y-4">
                <p className="font-medium">From anon to icon. We craft distinctive stories through strategic visual identity that makes Web3 audiences stop scrolling.</p>
                
                <div>
                  <p className="font-semibold mb-2">Brand Strategy:</p>
                  <p>Define your positioning, purpose, and personality with clarity.</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Visual Identity:</p>
                  <p>Design distinctive logos, color palettes, and brand systems.</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Storytelling:</p>
                  <p>Build a compelling brand narrative that resonates.</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Content Templates:</p>
                  <p>Custom frameworks for on-brand, scalable content.</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Social Media Design:</p>
                  <p>Cohesive, scroll-stopping designs optimized for every platform.</p>
                </div>
              </div>
            }
            icon={<Palette className="animate-pulse-glow" size={40} />}
          />
          
          <ServiceCard
            emoji="+"
            title="Social Media"
            description={
              <div className="space-y-4">
                <p className="font-medium">Content that captures. Converts. Compounds. We create scroll-stopping threads, articles, and visuals that transform followers into advocates across Twitter, LinkedIn and YouTube.</p>
                
                <div>
                  <p className="font-semibold mb-2">Ghostwriting & Viral Threads:</p>
                  <p>Insightful posts and threads crafted to build reach and authority.</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Thumbnails & Carousels:</p>
                  <p>Visually engaging content tailored for LinkedIn, Twitter, and YouTube.</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Spaces Recaps:</p>
                  <p>Transform live talks into digestible, evergreen content.</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Scheduling & Analytics:</p>
                  <p>Plan, post, and optimize with performance insights and audience data.</p>
                </div>
              </div>
            }
            icon={<MessageSquare className="animate-pulse-glow" size={40} />}
          />
          
          <ServiceCard
            emoji="+"
            title="Community"
            description={
              <div className="space-y-4">
                <p className="font-medium">Turn your audience into a movement. We build culturally-attuned Discord and Telegram spaces where members don't just participate—they belong.</p>
                
                <div>
                  <p className="font-semibold mb-2">Server Setup:</p>
                  <p>Channel architecture, roles, and bots configured for scale.</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Community Engagement:</p>
                  <p>Daily interactions, events, and moderation strategies that excite members and foster loyalty.</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Growth Strategy:</p>
                  <p>Tactics proven to grow and retain a vibrant, active community.</p>
                </div>
              </div>
            }
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
