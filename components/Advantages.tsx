import React from 'react';
import { ADVANTAGES } from '../constants';
import { Gem, Layers, Settings, TrendingUp } from 'lucide-react';

const Advantages: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Gem: <Gem className="w-8 h-8 text-purple-400" />,
    Layers: <Layers className="w-8 h-8 text-blue-400" />,
    Settings: <Settings className="w-8 h-8 text-cyan-400" />,
    TrendingUp: <TrendingUp className="w-8 h-8 text-emerald-400" />,
  };

  return (
    <div className="py-16 sm:py-24 bg-slate-900/50 mt-12 rounded-3xl border border-white/5">
      <div className="px-6 sm:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">服务优势</h2>
            <p className="text-slate-400 text-lg">多年深耕，专业资源，只为项目成功</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((adv, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-slate-700 group-hover:border-blue-500/30">
                {iconMap[adv.iconName]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{adv.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;