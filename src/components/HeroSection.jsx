import React from 'react';

function HeroSection() {
  const videoUrl = "nike.mp4";

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
      
      <video 
        src={videoUrl} 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://images.unsplash.com/photo-1542291026-7eec264c27ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDEwfHxuaWtlJTIwc2hvZXxlbnwwfHx8fDE3MzE1NDI4NDl8MA&q=80&w=1080"
      />
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      
      <div className="relative z-20 w-full px-4">
        <div className="max-w-2xl mx-auto p-6 md:p-8 rounded-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            The Eliud Kipchoge Collection
          </h1>
          <p className="text-lg md:text-xl text-white my-5 max-w-lg mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Inspired by Kenya and those who power his relentless devotion to running — his family.
          </p>
          <button className="bg-white text-black font-medium py-3 px-8 rounded-full text-base hover:bg-gray-200 transition-colors">
            Shop
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;