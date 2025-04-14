
import { useState } from 'react';
import GlowButton from './GlowButton';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telegram: '',
    website: '',
    budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success("Form submitted successfully! We'll be in touch soon.");
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      telegram: '',
      website: '',
      budget: ''
    });
  };

  const budgetOptions = [
    "Please Select",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000+"
  ];

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
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-white/80 mb-2">
                  First name<span className="text-glow-cyan">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-white/80 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">
                  Email<span className="text-glow-cyan">*</span>
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
              
              <div>
                <label htmlFor="telegram" className="block text-white/80 mb-2">
                  Telegram
                </label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  placeholder="t.me/username"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="website" className="block text-white/80 mb-2">
                  Website URL<span className="text-glow-cyan">*</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="budget" className="block text-white/80 mb-2">
                Expected Monthly Budget<span className="text-glow-cyan">*</span>
              </label>
              <p className="text-sm text-white/60 mb-2">Your best guess is fine.</p>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all appearance-none"
              >
                {budgetOptions.map((option, index) => (
                  <option key={index} value={option} className="bg-glow-darkest text-white">
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <p className="text-white/70 text-sm">
                By submitting this form you consent to receive communications from Glow Media and/or its affiliates.
                You can unsubscribe at any time. We don't spam.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <GlowButton 
                type="submit" 
                size="lg"
                variant="primary"
                className="w-40"
              >
                Submit
              </GlowButton>
            </div>
          </form>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6">Follow us on social media</p>
          <div className="flex justify-center">
            <a href="#" className="text-white/60 hover:text-glow-cyan transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
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
