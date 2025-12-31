import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 font-cartoon tracking-wide mb-3 drop-shadow-sm">
        {title}
      </h2>
      {subtitle && (
        <div className="inline-block bg-yellow-200 border-2 border-black rounded-full px-6 py-2 shadow-cartoon transform -rotate-1">
          <p className="text-lg md:text-xl font-bold text-slate-900">{subtitle}</p>
        </div>
      )}
    </div>
  );
};