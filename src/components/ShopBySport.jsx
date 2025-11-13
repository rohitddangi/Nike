import React from 'react';

const sportsData = [
  { id: 1, name: 'Tennis', imageUrl: 'https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, name: 'Golf', imageUrl: 'https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, name: 'Skateboarding', imageUrl: 'https://images.pexels.com/photos/2005994/pexels-photo-2005994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
];

function ShopBySport() {
  return (
    <section className="w-[95%] max-w-7xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-semibold mb-6">Shop by Sport</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sportsData.map((sport) => (
          <div key={sport.id} className="relative overflow-hidden rounded-lg group aspect-[4/5]">
            <img 
              src={sport.imageUrl} 
              alt={sport.name} 
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                {sport.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopBySport;