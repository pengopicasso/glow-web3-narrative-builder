
import { useState } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialCard = ({ quote, author, role, image }: TestimonialProps) => {
  return (
    <div className="bg-glow-darkest/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/5 relative group hover:border-glow-cyan/20 transition-all duration-300">
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
        <div className="italic text-xl text-white leading-relaxed text-center">{quote}</div>
      </div>
      
      <div className="text-center">
        <h4 className="font-bold text-white group-hover:text-glow-cyan transition-colors">{author}</h4>
        <p className="text-sm text-white/60">{role}</p>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-glow-cyan/0 group-hover:bg-glow-cyan/10 blur-xl rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "As a YouTuber, I know how crucial a good script is for keeping viewers hooked. SunMedia's expertise in copywriting made a world of difference for my channel. Their scripts were engaging and tailored perfectly to my audience, which helped me see a noticeable increase in retention rates.",
      author: "Sarah",
      role: "Founder of La digitale aventure",
      image: "public/lovable-uploads/ea73d935-b670-4084-ab2b-e82068c6cde2.png"
    },
    {
      quote: "Vida's copywriting service was phenomenal. The YouTube videos's script was captivating. The video generated over 50k views, far exceeding our expectations. Her expertise and attention to detail made all the difference.",
      author: "Isidore Dekiss",
      role: "Founder of TikTopia",
      image: "public/lovable-uploads/bd7d57c9-b5c1-4752-976e-b55165e93335.png"
    },
    {
      quote: "SunMedia crafted an exceptional pitch deck that not only captured our vision but also secured our funding. Their attention to detail and creative expertise were pivotal in our success. We couldn't be happier with the results.",
      author: "Orrin Campbell",
      role: "Founder of QSTN",
      image: "public/lovable-uploads/0baec438-ea1b-4f5a-b42b-53aa4cbff797.png"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-glow-darkest to-glow-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan text-glow">
            What DeFi Founders Say
          </h2>
          <div className="w-24 h-1 bg-glow-cyan mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
