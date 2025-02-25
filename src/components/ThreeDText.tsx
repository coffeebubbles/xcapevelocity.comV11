import React from 'react';

interface ThreeDTextProps {
  text: string;
  className?: string;
}

export function ThreeDText({ text, className = '' }: ThreeDTextProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Shadow layers for enhanced depth */}
      <div 
        className="absolute inset-0 text-[300px] font-black tracking-tighter text-black/5"
        style={{
          transform: 'translate(20px, 20px) perspective(1000px) rotateX(20deg) rotateY(-15deg)',
          filter: 'blur(8px)',
        }}
      >
        {text}
      </div>
      <div 
        className="absolute inset-0 text-[300px] font-black tracking-tighter text-black/10"
        style={{
          transform: 'translate(15px, 15px) perspective(1000px) rotateX(20deg) rotateY(-15deg)',
          filter: 'blur(4px)',
        }}
      >
        {text}
      </div>

      {/* Main text with gradient */}
      <div 
        className="relative text-[300px] font-black tracking-tighter"
        style={{
          transform: 'perspective(1000px) rotateX(20deg) rotateY(-15deg)',
          background: 'linear-gradient(to bottom, #FFA500, #FF8C00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: `
            0px 1px 0px #e69500,
            0px 2px 0px #cc8500,
            0px 3px 0px #b37300,
            0px 4px 0px #995f00,
            0px 5px 0px #804d00,
            0px 6px 0px #663c00,
            2px 8px 15px rgba(0, 0, 0, 0.2)
          `
        }}
      >
        {text}
      </div>

      {/* Highlight overlay */}
      <div 
        className="absolute inset-0 text-[300px] font-black tracking-tighter text-white/10"
        style={{
          transform: 'translate(-2px, -2px) perspective(1000px) rotateX(20deg) rotateY(-15deg)',
          filter: 'blur(1px)',
        }}
      >
        {text}
      </div>
    </div>
  );
}