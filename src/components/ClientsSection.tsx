
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
    image: "public/lovable-uploads/7f74e31e-d9e5-4f4a-a8c2-58a77306922b.png",
    alt: "Client Logo 1"
  },
  {
    image: "public/lovable-uploads/276b05ea-845a-4d63-9b9f-681b0e91b2ec.png",
    alt: "Client Logo 2"
  },
  {
    image: "public/lovable-uploads/5fc3053c-3483-46e5-8def-447fa69effe4.png",
    alt: "Client Logo 3"
  },
  {
    image: "public/lovable-uploads/5608fa24-3b52-4d24-b8cb-7b43d1200e59.png",
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
            duration: 30,
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-4">
                  <div className="bg-glow-darkest/50 rounded-xl p-6 h-40 flex items-center justify-center border border-white/5 hover:border-glow-cyan/30 transition-all duration-300">
                    <img 
                      src={client.image} 
                      alt={client.alt}
                      className="max-h-full max-w-full opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-96 h-96 rounded-full bg-glow-cyan/10 blur-3xl top-1/4 -right-48"></div>
        <div className="absolute w-96 h-96 rounded-full bg-glow-cyan/10 blur-3xl bottom-1/4 -left-48"></div>
      </div>
    </section>
  );
};

export default ClientsSection;
