import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div
      className={`
        relative overflow-hidden
        bg-white/5 
        backdrop-blur-xl 
        border border-white/10 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] 
        rounded-2xl
        transition-all duration-300
        ${hoverEffect ? 'hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(100,100,255,0.15)] hover:border-white/20' : ''}
        ${className}
      `}
    >
      {/* Glossy reflection effect at top */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      
      {children}
    </div>
  );
};

export default GlassCard;