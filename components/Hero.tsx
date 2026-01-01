import React from 'react';
import { HERO_CONTENT } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="space-y-8 text-center lg:text-left z-10 order-2 lg:order-1">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">
              雅儿
            </span>
            币圈营销服务
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 font-medium">
            {HERO_CONTENT.subtitle}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {HERO_CONTENT.description}
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-brand-900/50"
            >
              立即咨询
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full font-bold text-lg transition-all border border-slate-700"
            >
              浏览服务
            </a>
          </div>
        </div>

        {/* Right: Video Container */}
        <div className="relative w-full max-w-[600px] mx-auto order-1 lg:order-2 aspect-[960/912]">
          {/* Decorative frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-purple-500 rounded-3xl opacity-20 blur-xl"></div>
          
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-900">
             <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
              poster="https://picsum.photos/960/912" // Fallback image
            >
              <source src={HERO_CONTENT.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay for replacement instruction - visible only in dev/edit mode usually, keeping subtle here */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
