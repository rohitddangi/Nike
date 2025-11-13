import React from 'react';

function ProductCarousel({ title, products, showPrice = true }) {
  return (
    <section className="w-[95%] max-w-7xl mx-auto my-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <div className="flex space-x-2">
          <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
      
      <div className="flex overflow-x-auto gap-5 pb-5 -mx-4 px-4" style={{ scrollSnapType: 'x mandatory' }}>
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-[31%]" style={{ scrollSnapAlign: 'start' }}>
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square group">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
              />
            </div>
            <div className="mt-3">
              <h4 className="text-lg font-medium text-black">{product.name}</h4>
              {showPrice && (
                <>
                  <p className="text-gray-600">{product.type}</p>
                  <p className="text-black font-medium mt-1">{product.price}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCarousel;