
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const clientTypes = [
  "DeFi Projects", 
  "Founders", 
  "Meme Projects", 
  "AI Crypto Projects", 
  "Researchers and Analysts", 
  "KOLs and Influencers"
];

const clients = [
  {
    image: "public/lovable-uploads/6af17e6c-28e1-44b0-b98f-6af3cb88b77d.png",
    alt: "Client Logo 1"
  },
  {
    image: "public/lovable-uploads/2f16beb6-f9fe-4f4f-b74c-9ae1d8448510.png",
    alt: "Client Logo 2"
  },
  {
    image: "public/lovable-uploads/a0b3e38b-9159-4423-bbea-f8898c5c09ab.png",
    alt: "Client Logo 3"
  },
  {
    image: "public/lovable-uploads/179c61fc-ebb6-42a0-956e-145a576aa06b.png",
    alt: "Client Logo 4"
  }
];

const ClientsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % clientTypes.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="clients" className="py-20 md:py-32 bg-glow-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan text-glow">Who We Work With</h2>
          
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {clientTypes.map((type, index) => (
                <div 
                  key={index}
                  className={cn(
                    "px-4 py-2 rounded-full transition-all duration-300",
                    activeIndex === index 
                      ? "bg-glow-cyan text-glow-darkest" 
                      : "bg-glow-darkest/50 text-white/70 hover:bg-glow-darkest hover:text-white"
                  )}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">Trusted By</h3>
          </div>
        </div>
        
        <Carousel 
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-4">
                  <div className="rounded-xl p-6 h-56 flex items-center justify-center transition-all duration-300">
                    <img 
                      src={client.image} 
                      alt={client.alt}
                      className="max-h-full max-w-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsSection;
