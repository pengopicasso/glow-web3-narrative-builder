import React, { useRef, useEffect } from 'react';

interface ServiceCardProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard = ({
  title,
  description,
  icon,
  delay
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    }, {
      threshold: 0.1
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  return <div ref={cardRef} style={{
    transitionDelay: `${delay}ms`
  }} className="glass-card card-hover opacity-0 translate-y-10 transition-all duration-700 h-full max-w-[330px] mx-auto rounded bg-green-50">
      <div className="p-2">
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg h-full flex flex-col">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-glow-cyan to-glow-secondary rounded-2xl flex items-center justify-center mb-4 transform transition-transform hover:scale-105 shadow-glow-md">
              <div className="text-5xl">
                {icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold gradient-text">{title}</h3>
          </div>
          <div className="text-green-800 text-center flex-grow">{description}</div>
        </div>
      </div>
    </div>;
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-white relative opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-4 bg-transparent">
        <div className="text-center mb-16 relative">
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-glow-cyan/20 to-glow-secondary/20 text-glow-cyan text-sm font-medium mb-4">OUR EXPERTISE</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Our Services</h2>
          <p className="text-green-700 max-w-2xl mx-auto">
            We help Web3 projects build authority, engage their audience, and establish lasting brand presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <ServiceCard title="Branding" icon={<img src="/lovable-uploads/2033b627-4674-477f-bb67-792bd265c862.png" alt="Marketing Strategy" className="w-full h-full object-contain" />} description="We design strategic visual identities that make Web3 audiences notice your project and enhance your authority." delay={100} />
          
          <ServiceCard title="Social Media" icon={<img src="/lovable-uploads/7a9b8517-aad2-4edc-9b13-a7d4e81393c7.png" alt="People Around Table" className="w-full h-full object-contain" />} description="We create content that commands attention, sets authority, and builds loyalty that lasts across Twitter, LinkedIn and YouTube." delay={200} />
          
          <ServiceCard title="Community" icon={<img src="/lovable-uploads/96553bc9-9c29-4f26-a173-b989f89792ce.png" alt="Social Media Hand" className="w-full h-full object-contain" />} description="We build culturally-attuned Discord and Telegram spaces where members connect and belong." delay={300} />
        </div>
      </div>
      
      <div className="absolute inset-0 subtle-pattern opacity-10 pointer-events-none"></div>
    </section>;
};

export default ServicesSection;
