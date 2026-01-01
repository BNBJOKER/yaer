import React from 'react';
import { ADVANTAGES } from '../constants';

const Advantages: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-dark-950 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
          <span className="border-b-4 border-brand-500 pb-2">服务优势</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((adv, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 flex flex-col items-center text-center hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center mb-6 text-brand-400">
                <adv.icon size={32} />
              </div>
              <p className="text-xl font-medium text-slate-100">
                {adv.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;