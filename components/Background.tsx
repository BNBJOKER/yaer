import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0f172a]">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px]" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" 
      />
    </div>
  );
};

export default Background;