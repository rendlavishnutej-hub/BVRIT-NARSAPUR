'use client';

import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-ivory overflow-hidden opacity-80 pointer-events-none">
      {/* Animated Subtle Floating Orbs & Grid Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-peach/30 via-soft-peach/40 to-sky-blue/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-sky-blue/20 to-peach/20 rounded-full blur-2xl" />

      {/* Modern Grid Line Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#2D2D2D 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
