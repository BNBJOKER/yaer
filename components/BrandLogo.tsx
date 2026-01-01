import React from 'react';
import { 
  ShieldCheck, 
  Megaphone, 
  Users, 
  Code, 
  Palette, 
  Globe, 
  Box,
  Zap
} from 'lucide-react';
import { ServiceItem } from '../types';

interface BrandLogoProps {
  item: ServiceItem;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ item, className = "" }) => {
  const sizeClass = "w-12 h-12 sm:w-14 sm:h-14";
  
  // Render Lucide Icons
  if (item.type === 'icon') {
    const iconMap: Record<string, React.ReactNode> = {
      ShieldCheck: <ShieldCheck className="w-8 h-8" />,
      Megaphone: <Megaphone className="w-8 h-8" />,
      Users: <Users className="w-8 h-8" />,
      Code: <Code className="w-8 h-8" />,
      Palette: <Palette className="w-8 h-8" />,
      Globe: <Globe className="w-8 h-8" />,
    };

    return (
      <div className={`${sizeClass} rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-blue-400 border border-slate-600 shadow-lg ${className}`}>
        {iconMap[item.iconName || ''] || <Box className="w-8 h-8" />}
      </div>
    );
  }

  // Render Brand "Logos" (Stylized Text/Initials)
  // This ensures visual recognition without needing external image assets that might break.
  return (
    <div 
      className={`${sizeClass} rounded-2xl flex items-center justify-center shadow-lg font-bold text-lg sm:text-xl select-none transform transition-transform group-hover:scale-105 border border-white/10 ${className}`}
      style={{ 
        backgroundColor: item.brandColor || '#334155', 
        color: item.textColor || '#fff' 
      }}
    >
        {/* Special handling for longer names to fit */}
        {item.id === 'binance' && <span className="text-2xl">B</span>}
        {item.id === 'okx' && <span className="tracking-tighter text-sm">OKX</span>}
        {item.id === 'ave' && <span>Ave</span>}
        {item.id === 'tp' && <span className="text-xl">TP</span>}
        {item.id === 'cmc' && <span className="text-sm">CMC</span>}
        {item.id === 'cg' && <span className="text-xl">CG</span>}
        {item.id === 'pancake' && <span className="text-2xl">🐰</span>}
        {item.id === 'certik' && <span className="text-xs">CK</span>}
        {item.id === 'tg_top' && <Zap className="w-8 h-8" />}
        {item.id === 'tg_growth' && <Users className="w-8 h-8" />}
        {/* Default fallback to first 2 letters if no special case */}
        {!['binance', 'okx', 'ave', 'tp', 'cmc', 'cg', 'pancake', 'certik', 'tg_top', 'tg_growth'].includes(item.id) && (
          <span>{item.name.substring(0, 1)}</span>
        )}
    </div>
  );
};

export default BrandLogo;