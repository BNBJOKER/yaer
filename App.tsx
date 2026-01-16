import React, { useState } from 'react';
import { SERVICE_CATEGORIES_ZH, SERVICE_CATEGORIES_EN, UI_TEXT, CONTACT_INFO } from './constants';
import ServiceCard from './components/ServiceCard';
import GlassCard from './components/GlassCard';
import Background from './components/Background';
import StickyFooter from './components/StickyFooter';
import Header from './components/Header';
import { Rocket, Target, ExternalLink } from 'lucide-react'; // 移除了未使用的图标

export type Language = 'zh' | 'en';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('zh');
  
  // 核心逻辑：根据语言切换数据源
  const categories = language === 'zh' ? SERVICE_CATEGORIES_ZH : SERVICE_CATEGORIES_EN;
  const t = UI_TEXT[language];

  return (
    <div className="min-h-screen text-slate-200 selection:bg-indigo-500/30">
      <Background />
      {/* 这里的 Header 接收语言状态和切换函数 */}
      <Header language={language} setLanguage={setLanguage} />
      
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-32">
        
        {/* Hero Section: 响应式栅格布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* 左侧文字：在移动端排在第一位 (order-1) */}
          <div className="text-center lg:text-left relative z-10 order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight">
              {t.heroTitle}<br className="hidden lg:block" />{t.heroTitleSuffix}
            </h1>
            
            <p className="max-w-xl mx-auto lg:mx-0 text-lg text-slate-300 leading-relaxed mb-8">
              {t.heroSubtitle}
              <span className="block text-sm text-slate-400 mt-4 pt-4 border-t border-white/10">
                 {t.heroDesc}
              </span>
            </p>
          </div>

          {/* 右侧视频展示 */}
          <div className="relative flex justify-center lg:justify-end order-2">
             <div className="relative max-w-[550px] w-full group transition-all duration-500 hover:scale-[1.01]">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
              
              <GlassCard className="p-2 rounded-2xl overflow-hidden bg-slate-800/40 border-white/10 shadow-2xl">
                <div className="relative overflow-hidden rounded-xl aspect-[960/912]">
                   <video 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    // poster="/video-fallback.jpg" // 建议增加一个封面图
                  >
                    <source src="/1.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* 服务分类列表 */}
        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category.id} className="relative">
              <div className="mb-8 pl-4 border-l-4 border-indigo-500">
                <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                <p className="text-slate-400 max-w-2xl">{category.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((item) => (
                  <ServiceCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* 底部联系板块 */}
        <footer className="mt-24">
          <GlassCard className="p-8 md:p-12 text-center bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border-indigo-500/20">
            <h2 className="text-3xl font-bold text-white mb-6">{t.contactTitle}</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              {t.contactDesc}
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm md:text-base">
              <a 
                href={`https://t.me/${CONTACT_INFO.telegram.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-indigo-300 hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Rocket size={16} />
                </span>
                TG: {CONTACT_INFO.telegram}
              </a>
              
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-8 h-8 rounded-full bg-slate-500/20 flex items-center justify-center border border-slate-500/30">
                  <Target size={16} />
                </span>
                QQ: {CONTACT_INFO.qq}
              </div>

              <a 
                href={`https://${CONTACT_INFO.channel}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-300 hover:text-white transition-colors"
              >
                 <span className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center border border-pink-500/30">
                  <ExternalLink size={16} />
                </span>
                {t.channelLabel}: {CONTACT_INFO.channel}
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5 text-slate-500 text-xs">
              © {new Date().getFullYear()} {t.footerRights}
            </div>
          </GlassCard>
        </footer>

      </div>
      
      {/* 固定的悬浮反馈按钮等 */}
      <StickyFooter />
    </div>
  );
};

export default App;
