
import { Suspense, lazy, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

// Lazy load components that are below the fold
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ClientsSection = lazy(() => import('@/components/ClientsSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading placeholder
const LoadingFallback = () => <div className="h-64 flex items-center justify-center bg-glow-darkest">
  <div className="w-12 h-12 border-4 border-glow-cyan rounded-full border-t-transparent animate-spin"></div>
</div>;

const Index = () => {
  // Preload components after initial render
  useEffect(() => {
    const preloadComponents = async () => {
      // Preload critical images
      const imagesToPreload = [
        "/lovable-uploads/dcdbb9e3-92d3-451a-b81d-4a5ca421d8fd.png", // Logo
        "/lovable-uploads/16dea4e1-401a-41c0-914c-42b3735ca52d.png", // Background pattern
        "/lovable-uploads/0a38932d-f83b-4b1e-9944-02d4ccdb8685.png"  // OG image
      ];
      
      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
      
      // Start preloading components shortly after page load
      setTimeout(() => {
        // This will trigger the dynamic imports in the background
        import('@/components/ServicesSection');
        import('@/components/AboutSection');
      }, 500);
      
      // Delay loading of less critical components
      setTimeout(() => {
        import('@/components/ClientsSection');
        import('@/components/TestimonialsSection');
        import('@/components/ContactSection');
        import('@/components/Footer');
      }, 1500);
    };
    
    preloadComponents();
  }, []);

  return (
    <div className="min-h-screen bg-glow-dark text-white">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<LoadingFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ClientsSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
