import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
const clientTypes = ["DeFi Projects", "Meme Projects", "AI Crypto Projects", "Researchers and Analysts", "KOLs and Influencers"];
const clients = [{
  image: "/lovable-uploads/6af17e6c-28e1-44b0-b98f-6af3cb88b77d.png",
  alt: "Client Logo 1"
}, {
  image: "/lovable-uploads/2f16beb6-f9fe-4f4f-b74c-9ae1d8448510.png",
  alt: "Client Logo 2"
}, {
  image: "/lovable-uploads/a0b3e38b-9159-4423-bbea-f8898c5c09ab.png",
  alt: "Client Logo 3"
}, {
  image: "/lovable-uploads/179c61fc-ebb6-42a0-956e-145a576aa06b.png",
  alt: "Client Logo 4"
}];

// Preload client images for faster rendering
const preloadClientImages = () => {
  clients.forEach(client => {
    const img = new Image();
    img.src = client.image;
  });
};
const ClientsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    // Preload client images
    preloadClientImages();
    setImagesLoaded(true);
    const timer = setInterval(() => {
      setActiveIndex(current => (current + 1) % clientTypes.length);
    }, 3000);

    // Auto slide the carousel
    const slideTimer = setInterval(() => {
      setScrollPosition(prev => {
        // Move by 1% each interval for smooth scrolling
        const newPos = prev + 0.5;
        // Reset to beginning when we've scrolled through all items
        return newPos >= 100 ? 0 : newPos;
      });
    }, 50); // Update every 50ms for smooth animation

    return () => {
      clearInterval(timer);
      clearInterval(slideTimer);
    };
  }, []);
  return <section id="clients" className="py-20 md:py-32 relative overflow-hidden bg-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan text-glow">Who We Work With</h2>
          
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {clientTypes.map((type, index) => <div key={index} className={cn("px-4 py-2 rounded-full transition-all duration-300", activeIndex === index ? "bg-glow-cyan text-glow-darkest" : "bg-glow-darkest/50 text-white/70 hover:bg-glow-darkest hover:text-white")}>
                  {type}
                </div>)}
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-green-900">Trusted By</h3>
          </div>
        </div>
        
        {/* Client logo carousel showing all logos at once */}
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
          <div className="flex transition-transform duration-500" style={{
          transform: `translateX(-${scrollPosition}%)`
        }}>
            {/* Double the clients array to create a loop effect */}
            {[...clients, ...clients].map((client, index) => <div key={index} className="min-w-[25%] px-4 flex-shrink-0 flex justify-center">
                <div className="rounded-xl p-2 h-40 flex items-center justify-center">
                  <img src={client.image} alt={client.alt} loading="eager" width="150" height="150" className="max-h-full max-w-full opacity-90 hover:opacity-100 transition-opacity duration-300" onError={e => {
                console.error(`Failed to load image: ${client.image}`);
                e.currentTarget.src = "/placeholder.svg";
              }} />
                </div>
              </div>)}
          </div>
        </div>

        {!imagesLoaded && <div className="text-center mt-4">
            <div className="inline-block w-12 h-12 border-4 border-glow-cyan rounded-full border-t-transparent animate-spin"></div>
          </div>}
      </div>
    </section>;
};
export default ClientsSection;