import React from 'react';
import { Send, MessageCircle } from 'lucide-react';
import GlassCard from './GlassCard';

const StickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-4 flex justify-center">
      <GlassCard className="flex items-center gap-6 px-6 py-3 rounded-full border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.3)] bg-slate-900/60">
        <a 
          href="https://t.me/yaerapp" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
        >
          <div className="bg-blue-500 p-2 rounded-full">
            <Send size={18} fill="white" />
          </div>
          <span className="font-medium hidden sm:block">@yaerapp</span>
        </a>
        
        <div className="w-[1px] h-6 bg-white/20"></div>
        
        <div className="flex items-center gap-2 text-white">
            <div className="bg-white p-2 rounded-full">
                {/* QQ Icon placeholder using generic message icon since lucide doesn't have QQ */}
                <MessageCircle size={18} className="text-black" />
            </div>
            <span className="font-medium hidden sm:block">2812260666</span>
        </div>
      </GlassCard>
    </div>
  );
};

export default StickyFooter;
