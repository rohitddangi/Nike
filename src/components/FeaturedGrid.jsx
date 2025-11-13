import React from 'react';

const FeatureCard = ({ title, buttonText, imageUrl }) => (
  <div className="relative overflow-hidden rounded-lg group">
    <img 
      src={imageUrl} 
      alt={title} 

      style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      className="transition-transform duration-500 ease-in-out group-hover:scale-105" 
    />
    <div className="absolute bottom-8 left-8 text-white">
      <h3 className="text-xl md:text-2xl font-bold max-w-[80%] mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
        {title}
      </h3>
      <button className="bg-white text-black font-medium py-2 px-6 rounded-full text-base hover:bg-gray-200 transition-colors">
        {buttonText}
      </button>
    </div>
  </div>
);

// ... baaki ka code same rahega ...

function FeaturedGrid() {
  return (
    <section className="w-[95%] max-w-7xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-semibold mb-6">Featured</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard 
          title="Courtside Attitude with a Modern Touch" 
          buttonText="Shop"
          imageUrl="https://i.pinimg.com/736x/27/aa/b1/27aab1eda6cb5c699e502215ad349403.jpg"
        />
        <FeatureCard 
          title="Nike United: Wicked Game" 
          buttonText="Shop"
          imageUrl="https://i.pinimg.com/736x/af/89/88/af8988f60161559ee2b919376dd42077.jpg"
        />
        <FeatureCard 
          title="Nike 24.7: All-day comfort" 
          buttonText="Shop"
          imageUrl="https://images.unsplash.com/photo-1549298916-b41d501d3772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDIyfHxuaWtlJTIwc2hvZXxlbnwwfHx8fDE3MzE1NDU3MDZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
        />
        <FeatureCard 
          title="Jordan: Coldest in the Game" 
          buttonText="Shop"
          imageUrl="https://i.pinimg.com/736x/f4/8b/08/f48b089a371e8977d77f339db3af9e56.jpg"
        />
      </div>
    </section>
  );
}

export default FeaturedGrid;