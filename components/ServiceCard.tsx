import React from 'react';
import { ServiceItem } from '../types';
import BrandLogo from './BrandLogo';

interface ServiceCardProps {
  item: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <div className="group relative flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10">
      <div className="flex-shrink-0">
        <BrandLogo item={item} />
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-bold text-slate-100 leading-tight group-hover:text-blue-300 transition-colors">
          {item.name}
        </h4>
        {item.description && (
          <p className="text-sm text-slate-400 mt-1 font-medium">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;