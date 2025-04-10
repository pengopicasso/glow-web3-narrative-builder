
interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialProps) => {
  return (
    <div className="bg-glow-darkest/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/5 relative group hover:border-glow-cyan/20 transition-all duration-300">
      {/* Quote mark */}
      <div className="absolute top-4 left-4 text-4xl text-glow-cyan/20 font-serif">"</div>
      
      <p className="text-white/80 mb-6 relative z-10">{quote}</p>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-glow-cyan/20 flex items-center justify-center text-glow-cyan mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-white group-hover:text-glow-cyan transition-colors">{author}</h4>
          <p className="text-sm text-white/60">{role}</p>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-glow-cyan/0 group-hover:bg-glow-cyan/10 blur-xl rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-glow-darkest to-glow-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan text-glow">
            What DeFi Founders Say
          </h2>
          <div className="w-24 h-1 bg-glow-cyan mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard
            quote="Glow Media transformed our messaging and helped us stand out in a crowded DeFi space. Their content strategy directly contributed to our 300% growth in users."
            author="Alex T."
            role="Founder, YieldMax Protocol"
          />
          
          <TestimonialCard
            quote="Working with Glow Media gave our DeFi project the narrative clarity we desperately needed. Their team understands the technical aspects but explains them in ways that resonate."
            author="Sarah K."
            role="CMO, QuantumSwap"
          />
          
          <TestimonialCard
            quote="Glow Media turned our DeFi project into a community giant! Their content strategy helped us nurture an engaged audience that's been crucial for our growth."
            author="Michael R."
            role="Co-founder, NexusFinance"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
