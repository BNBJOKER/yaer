import React, { useState, useRef, useEffect } from 'react';
import { VolumeX, Globe } from 'lucide-react';
import { Language } from '../App'; // 确保路径正确
import { UI_TEXT } from '../constants'; // 确保路径正确

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRef = useRef<HTMLVideoElement>(null);
  
  // 这里的 URL 和本地资源路径
  const MUSIC_URL = "/2.mp4";
  const t = UI_TEXT[language];

  // 自动播放逻辑
  useEffect(() => {
    if (mediaRef.current) {
      mediaRef.current.volume = 0.4;
      const playPromise = mediaRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause();
      } else {
        mediaRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 border-b border-white/5 bg-slate-900/70 backdrop-blur-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* 左侧：Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-indigo-500/30 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <video 
              className="w-full h-full object-cover scale-150" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/3.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>
          </div>
          <span className="text-xl font-bold text-slate-100 tracking-tight group-hover:text-white transition-colors">
            Yaer.app
          </span>
        </div>

        {/* 右侧：控制区 */}
        <div className="flex items-center gap-3">
            {/* 隐藏的音频载体 */}
            <video 
                ref={mediaRef} 
                className="hidden" 
                loop 
                src={MUSIC_URL}
                playsInline
            />
            
            {/* 音乐播放控制 */}
            <button 
                onClick={togglePlay}
                className={`
                    flex items-center gap-3 px-4 py-2 rounded-full 
                    border transition-all duration-300
                    ${isPlaying 
                        ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
                        : 'bg-slate-800/50 border-white/10 text-slate-400 hover:bg-slate-700/50'
                    }
                `}
            >
                {isPlaying ? (
                    <div className="flex items-center gap-3">
                        <div className="flex items-end gap-[2px] h-4">
                            <div className="w-1 bg-indigo-400 animate-[pulse_0.6s_ease-in-out_infinite] h-2 rounded-t-sm"></div>
                            <div className="w-1 bg-indigo-400 animate-[pulse_1.1s_ease-in-out_infinite] h-4 rounded-t-sm"></div>
                            <div className="w-1 bg-indigo-400 animate-[pulse_0.8s_ease-in-out_infinite] h-3 rounded-t-sm"></div>
                            <div className="w-1 bg-indigo-400 animate-[pulse_1.3s_ease-in-out_infinite] h-1.5 rounded-t-sm"></div>
                        </div>
                        <span className="text-xs font-semibold tracking-wide uppercase animate-pulse">
                            {t.musicPlaying || 'Playing'}
                        </span>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <VolumeX size={16} />
                        <span className="text-xs font-medium">{t.musicPaused}</span>
                    </div>
                )}
            </button>

            {/* 语言切换按钮 */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-300"
              title="Switch Language"
            >
              <Globe size={16} />
              <span className="text-xs font-bold w-5 text-center">
                {language === 'zh' ? 'EN' : 'CN'}
              </span>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
