import React from 'react';
import { ServiceCategory } from '../types';
import ServiceCard from './ServiceCard';

interface ServiceSectionProps {
  category: ServiceCategory;
  index: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ category, index }) => {
  return (
    <div className="py-16 border-b border-slate-800/50 last:border-0">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Title & Image */}
        <div className="w-full lg:w-5/12 flex flex-col gap-6">
           <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-3 relative z-10">
                  <span className="text-blue-500/50 text-4xl font-black opacity-30 select-none">
                      {String(index + 1).padStart(2, '0')}
                  </span>
                  {category.title.split('、')[1] || category.title} 
              </h2>
              <p className="text-slate-400 text-lg pl-14">{category.subtitle}</p>
           </div>
           
           <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-lg aspect-[16/9] w-full group">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
           </div>
        </div>
        
        {/* Right Column: Grid of Items */}
        <div className="w-full lg:w-7/12">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.items.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceSection;