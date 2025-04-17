
import { useState } from 'react';
import GlowButton from '../GlowButton';
import { toast } from 'sonner';

const ContactForm = () => {
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
  );
};

export default ContactForm;
