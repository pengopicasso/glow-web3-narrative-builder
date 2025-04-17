
import ContactForm from './contact/ContactForm';
import SocialLinks from './common/SocialLinks';
import BackgroundEffect from './contact/BackgroundEffect';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-glow-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan text-glow">
            Your Brand, Our Ark. Let's Work Together!
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours to discuss how we can help your project shine.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-glow-darkest/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/5">
          <ContactForm />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6">Follow us</p>
          <SocialLinks />
        </div>
      </div>
      
      <BackgroundEffect />
    </section>
  );
};

export default ContactSection;
