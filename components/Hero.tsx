import React from 'react';
import { motion } from 'framer-motion';
import { APP_TITLE, APP_SUBTITLE, APP_DESCRIPTION } from '../constants';
import { Rocket, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 px-4 overflow-hidden bg-white border-b-4 border-black">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 text-yellow-400 opacity-20">
        <Star size={64} fill="currentColor" />
      </div>
      <div className="absolute bottom-10 right-10 text-purple-400 opacity-20">
        <Star size={96} fill="currentColor" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full font-bold text-sm mb-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(200,200,200,1)]">
            <Rocket size={18} className="text-yellow-400" />
            <span>助推 Web3 项目腾飞</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-cartoon font-black text-slate-900 mb-4 leading-tight">
            {APP_TITLE}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-8 font-sans">
            {APP_SUBTITLE}
          </h2>

          <div className="max-w-3xl mx-auto bg-yellow-50 p-6 md:p-8 rounded-3xl border-4 border-black shadow-cartoon transform rotate-1 transition-transform hover:rotate-0">
            <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed">
              {APP_DESCRIPTION}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <a href="#contact" className="bg-indigo-600 text-white font-bold text-xl px-8 py-4 rounded-xl border-4 border-black shadow-cartoon hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none">
               立即合作
             </a>
             <a href="#services" className="bg-white text-slate-900 font-bold text-xl px-8 py-4 rounded-xl border-4 border-black shadow-cartoon hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none">
               查看服务
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};