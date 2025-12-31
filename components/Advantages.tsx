import React from 'react';
import { ADVANTAGES } from '../constants';
import { SectionTitle } from './ui/SectionTitle';

export const Advantages: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-yellow-400 border-t-4 border-b-4 border-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="服务优势" subtitle="为什么选择我们？" className="mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv) => (
            <div 
              key={adv.id} 
              className="bg-white p-6 rounded-2xl border-4 border-black shadow-cartoon text-center group hover:bg-black hover:text-white transition-colors duration-300"
            >
              <div className="mx-auto w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4 border-2 border-black group-hover:bg-indigo-600 group-hover:border-white transition-colors">
                <adv.icon size={28} className="text-indigo-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-black mb-2">{adv.title}</h3>
              <p className="font-semibold text-sm opacity-80">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};