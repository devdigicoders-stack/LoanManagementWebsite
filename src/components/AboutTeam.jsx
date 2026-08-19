import React from 'react';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const AboutTeam = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Chief Executive Officer",
      description: "Leading with vision and driving innovation.",
      image: "/team/member1.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Chief Operations Officer",
      description: "Focused on operational excellence and growth.",
      image: "/team/member2.jpg"
    },
    {
      name: "Amit Verma",
      role: "Chief Technology Officer",
      description: "Building secure and scalable technology.",
      image: "/team/member3.jpg"
    },
    {
      name: "Neha Singh",
      role: "Head of Customer Success",
      description: "Committed to customer satisfaction and trust.",
      image: "/team/member4.jpg"
    }
  ];

  return (
    <section className="w-full bg-[#fcfcfc] py-24 px-6 md:px-10 relative overflow-x-clip">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-block bg-[#eaf7e3] text-[#5bc116] font-bold text-[10px] md:text-[11px] uppercase tracking-widest py-1.5 px-4 rounded-full mb-4">
            OUR TEAM
          </div>
          <h2 className="text-[32px] md:text-4xl lg:text-[40px] font-bold text-gray-900 leading-tight">
            Meet the People Behind <span className="text-[#5bc116]">NGM</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex items-center">
          
          {/* Left Arrow (Desktop only) */}
          <button className="hidden xl:flex absolute -left-12 w-10 h-10 items-center justify-center text-[#5bc116] hover:scale-110 transition-transform">
            <ArrowLeft size={28} strokeWidth={2.5} />
          </button>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f8fcf5] rounded-[1.5rem] p-4 flex gap-4 border border-[#eaf7e3] hover:shadow-lg transition-shadow duration-300 group"
              >
                
                {/* Photo */}
                <div className="w-[100px] h-[100px] flex-shrink-0 overflow-hidden rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Info */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="text-black font-bold text-[15px]">{member.name}</h4>
                    <p className="text-[#5bc116] text-[11px] font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-500 text-[11px] leading-snug mb-3">
                      {member.description}
                    </p>
                  </div>
                  
                  {/* Social Icons */}
                  <div className="flex gap-2">
                    <button className="w-6 h-6 bg-[#edf7e8] rounded-md flex items-center justify-center text-black hover:bg-[#5bc116] hover:text-white transition-colors">
                      <Linkedin size={12} />
                    </button>
                    <button className="w-6 h-6 bg-[#edf7e8] rounded-md flex items-center justify-center text-black hover:bg-[#5bc116] hover:text-white transition-colors">
                      <Twitter size={12} />
                    </button>
                    <button className="w-6 h-6 bg-[#edf7e8] rounded-md flex items-center justify-center text-black hover:bg-[#5bc116] hover:text-white transition-colors">
                      <Mail size={12} />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Right Arrow (Desktop only) */}
          <button className="hidden xl:flex absolute -right-12 w-10 h-10 items-center justify-center text-[#5bc116] hover:scale-110 transition-transform">
            <ArrowRight size={28} strokeWidth={2.5} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutTeam;
