import React from 'react';
import { ServiceItem } from '../types';
import GlassCard from './GlassCard';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  item: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <GlassCard className="flex items-center p-4 gap-4 group" hoverEffect={true}>
      <div className="flex-shrink-0 relative">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-[55px] h-[55px] rounded-xl object-cover border border-white/20 shadow-md group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute -bottom-1 -right-1 bg-indigo-500 rounded-full p-0.5 border-2 border-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <ArrowUpRight size={10} color="white" />
        </div>
      </div>
      
      <div className="flex-grow min-w-0">
        <h3 className="text-white font-semibold text-base truncate group-hover:text-indigo-300 transition-colors">
          {item.name}
        </h3>
        {item.note && (
          <p className="text-slate-400 text-xs mt-0.5 truncate">
            {item.note}
          </p>
        )}
      </div>

      <div className="flex-shrink-0 text-right">
        <div className="text-emerald-400 font-bold text-sm bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
          {item.price}
        </div>
      </div>
    </GlassCard>
  );
};

export default ServiceCard;