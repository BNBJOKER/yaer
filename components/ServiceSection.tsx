import React from 'react';
import { ServiceSectionData } from '../types';

interface Props {
  data: ServiceSectionData;
  index: number;
}

const ServiceSection: React.FC<Props> = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className={`py-20 md:py-28 px-4 ${isEven ? 'bg-dark-950' : 'bg-dark-900'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-brand-400 tracking-widest uppercase mb-3">
            业务板块 {index + 1}
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {data.items.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-brand-500/50 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/20"
            >
              {/* Icon / Image Container */}
              <div className="mb-6 relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-slate-900 rounded-2xl shadow-inner overflow-hidden border border-slate-700 group-hover:border-brand-500/30 transition-colors">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.label} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  item.icon && <item.icon className="w-10 h-10 md:w-12 md:h-12 text-brand-400 group-hover:text-white transition-colors" />
                )}
              </div>

              {/* Label */}
              <h4 className="text-lg md:text-xl font-semibold text-slate-100 group-hover:text-white leading-tight">
                {item.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;