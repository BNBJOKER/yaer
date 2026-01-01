import React from 'react';
import { HERO_DATA, CONTACT_INFO } from '../constants';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 sm:pb-24">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Web3 Marketing Solution
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              <span className="block">{HERO_DATA.title}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
                {HERO_DATA.subtitle}
              </span>
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
              {HERO_DATA.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <a 
                href={CONTACT_INFO.telegramUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                {HERO_DATA.ctaPrimary}
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href={CONTACT_INFO.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-300 bg-slate-800 rounded-xl hover:bg-slate-700 hover:text-white border border-slate-700 transition-all"
              >
                {HERO_DATA.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
             <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
               <img 
                 src={HERO_DATA.heroImage} 
                 alt="Marketing Strategy Illustration" 
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
               />
               {/* Optional: Overlay to blend nicely with dark theme if image is bright, 
                   but since it's a placeholder, we keep it raw for visibility */}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;