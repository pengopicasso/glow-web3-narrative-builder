
const StatCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-glow-darkest/70 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-glow-cyan/20 transition-all group">
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-glow-cyan group-hover:text-glow-sm transition-all">
        {title}
      </h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-glow-darkest relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan text-glow">
            Why Glow Media?
          </h2>
          <div className="w-24 h-1 bg-glow-cyan mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatCard
            title="Since 2023: Proven Web3 Expertise"
            description="Born in the bear market, we understand the unique challenges and opportunities of building in web3 during any market condition."
          />
          
          <StatCard
            title="DeFi Focus: We Speak Your Language"
            description="From AMMs to yield optimizers, our team deeply understands DeFi's technical complexities and can communicate them clearly."
          />
          
          <StatCard
            title="Results-Driven: Content That Converts"
            description="Our strategic approach focuses on measurable outcomes - more users, deeper engagement, and stronger community retention."
          />
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <img 
          src="public/lovable-uploads/16dea4e1-401a-41c0-914c-42b3735ca52d.png" 
          alt="Background Pattern" 
          className="absolute w-full h-full object-cover" 
        />
      </div>
    </section>
  );
};

export default AboutSection;
