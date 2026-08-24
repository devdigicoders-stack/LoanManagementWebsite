import React, { useEffect, useRef } from 'react';
import { Users, FileText, Smartphone, Briefcase } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 2.5, decimals = 0, suffix = "" }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "0px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = value.toFixed(decimals) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, decimals, suffix, inView]);

  return <span ref={nodeRef}>{from.toFixed(decimals)}{suffix}</span>;
};

const AboutBottomStats = () => {
  const stats = [
    {
      icon: <Users size={28} strokeWidth={2} />,
      end: 10,
      suffix: "K+",
      label: "Happy Customers"
    },
    {
      icon: <FileText size={28} strokeWidth={2} />,
      end: 50,
      suffix: "K+",
      label: "Loan Enquiries"
    },
    {
      icon: <Smartphone size={28} strokeWidth={2} />,
      end: 24,
      suffix: "/7",
      label: "Digital Access"
    },
    {
      icon: <Briefcase size={28} strokeWidth={2} />,
      end: 5,
      suffix: "+",
      label: "Loan Solutions"
    }
 ];

  return (
    <section className="w-full bg-[#FDFBF7] py-16 px-6 md:px-10 border-t border-[#E0F2FE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 lg:gap-y-0 relative z-10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center justify-center text-center px-4"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-[#0284C7]/30 bg-[#7DD3FC]/40 flex items-center justify-center text-[#e5a030] shadow-[0_0_15px_rgba(229,160,48,0.1)] relative overflow-hidden">
                  <div className="drop-shadow-[0_0_8px_rgba(229,160,48,0.5)]">
                    {stat.icon}
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-slate-900 font-bold text-3xl mb-1">
                    <AnimatedCounter 
                      from={0} 
                      to={stat.end} 
                      decimals={0} 
                      duration={2.5} 
                      suffix={stat.suffix} 
                    />
                  </h3>
                  <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBottomStats;
