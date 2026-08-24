import React from 'react';
import { Star, Quote } from 'lucide-react';

const HappyClients = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
      content: "NuoG Housing Payments made our business expansion a breeze. Their SME loan process was transparent, fast, and the interest rates were incredibly competitive. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      content: "I always dreamt of building my own home. NuoG's self-construction loan team guided me through every step. Their digital process saved me so many trips to the branch.",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Desai",
      role: "Fleet Operator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content: "Getting a commercial vehicle loan used to be a nightmare of paperwork. NuoG completely changed that. Within days, my new truck was financed and ready to hit the road.",
      rating: 5
    }
 ];

  return (
    <section className="w-full bg-[#F0F9FF] py-24 px-6 md:px-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-[#0284C7]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-[#0EA5E9]/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] border border-[#BAE6FD] text-[#0284C7] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Our <span className="text-[#0EA5E9]">Happy Clients</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Discover how our financial solutions have helped individuals and businesses achieve their goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-[#FDFBF7] border border-[#E0F2FE] rounded-2xl p-8 hover:border-[#0284C7]/50 transition-all duration-300 group flex flex-col h-full relative"
            >
              <Quote className="absolute top-6 right-6 text-[#E0F2FE] group-hover:text-[#0284C7]/20 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#0284C7] text-[#0284C7]" />
                ))}
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-8 flex-grow relative z-10 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#0284C7]"
                />
                <div>
                  <h4 className="text-slate-900 font-bold">{testimonial.name}</h4>
                  <p className="text-[#0EA5E9] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HappyClients;
