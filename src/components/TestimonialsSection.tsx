import { useState } from 'react';
interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}
const TestimonialCard = ({
  quote,
  author,
  role
}: TestimonialProps) => {
  return <div className="bg-glow-darkest/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/5 relative group hover:border-glow-cyan/20 transition-all duration-300">
      <div className="italic text-xl text-white leading-relaxed text-center mb-6">{quote}</div>
      
      <div className="text-center">
        <h4 className="font-bold text-white group-hover:text-glow-cyan transition-colors">{author}</h4>
        <p className="text-sm text-white/60">{role}</p>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-glow-cyan/0 group-hover:bg-glow-cyan/10 blur-xl rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
    </div>;
};
const TestimonialsSection = () => {
  const testimonials = [{
    quote: "NoaMedia designed an exceptional pitch deck that not only captured our vision but also secured our funding. Their attention to detail and creative expertise were pivotal in our success. We couldn't be happier with the way they communicate their working process.",
    author: "Orrin Campbell",
    role: "Founder of QSTN"
  }, {
    quote: "Before working with Noa, our LinkedIn and X were an afterthought. Noa's team fully captured our vision and rebranded our image — gave a professional yet bold tone — and consistently grew our audience with content that actually sparked conversations. Best decision we made this year.",
    author: "Cameron D.",
    role: "Founder of Banyan"
  }, {
    quote: "As a creator, it's hard to trust agencies. Most don't get the ai space. Noa does. They didn't just post for me, they built a real strategy around my channel, writing scripts and repurposing videos into killer threads and posts that doubled my engagement in under 2 months.",
    author: "Sarah",
    role: "Founder of La digitale Aventure"
  }];
  return <section className="py-20 md:py-32 bg-gradient-to-b from-glow-darkest to-glow-dark relative bg-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan text-glow">
            Testimonials
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} role={testimonial.role} />)}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;