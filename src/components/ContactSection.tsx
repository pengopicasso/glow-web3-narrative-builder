
import { useState } from 'react';
import GlowButton from './GlowButton';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectName: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send this data to your backend
    
    // Show success message
    toast.success("Message sent successfully! We'll be in touch soon.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      projectName: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-glow-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan text-glow">
            Ready to Glow? Let's Talk!
          </h2>
          <div className="w-24 h-1 bg-glow-cyan mx-auto mb-8"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours to discuss how we can help your DeFi project shine.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-glow-darkest/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/5">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="projectName" className="block text-white/80 mb-2">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-white/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all resize-none"
              ></textarea>
            </div>
            
            <div className="text-center relative">
              <GlowButton type="submit" size="lg">
                Send Message
              </GlowButton>
              <div className="absolute -inset-2 bg-glow-cyan/10 blur-xl rounded-full -z-10"></div>
            </div>
          </form>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6">Follow us on social media</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white/60 hover:text-glow-cyan transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-white/60 hover:text-glow-cyan transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16.8 14c-.4 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm-4.8 0c-.4 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8z"></path>
                <path d="M18.7 3H5.3C3.5 3 2 4.5 2 6.3v11.4c0 1.8 1.5 3.3 3.3 3.3h11.4c1.8 0 3.3-1.5 3.3-3.3V6.3c0-1.8-1.5-3.3-3.3-3.3zm-3.6 14.3c0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3v-1.5h-2.7v1.5c0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3v-4.9c0-.7.6-1.3 1.3-1.3s1.3.6 1.3 1.3v1.5h2.7v-1.5c0-.7.6-1.3 1.3-1.3s1.3.6 1.3 1.3v4.9z"></path>
              </svg>
            </a>
            <a href="#" className="text-white/60 hover:text-glow-cyan transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Background ripple effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute w-full h-full">
          <img 
            src="public/lovable-uploads/117e59eb-d4e2-4ede-a75f-6a7cbbd23c5c.png" 
            alt="Ripple Background" 
            className="w-full h-full object-cover opacity-30" 
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
