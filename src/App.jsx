import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedGrid from './components/FeaturedGrid';
import ProductCarousel from './components/ProductCarousel';
import ShopBySport from './components/ShopBySport';
import Footer from './components/Footer';

const burgundyProducts = [
  { id: 1, name: 'Nike ReactX Rejuven8', type: "Men's Shoes", price: '₹ 5 695.00', imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDEyfHxyZWRfbmVrZV9zaG9lfGVufDB8fHx8MTczMTU0NDkwNnww&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 2, name: 'Nike Total90 SE', type: "Women's Shoes", price: '₹ 10 795.00', imageUrl: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDIyfHxyZWRfbmVrZV9zaG9lfGVufDB8fHx8MTczMTU0NDkwN3ww&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 3, name: 'Nike Ava Rover', type: 'Shoes', price: '₹ 11 895.00', imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDE2fHxuaWtlJTIwc2hvZXxlbnwwfHx8fDE3MzE1NDI4NDl8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 4, name: 'Nike Killshot 2', type: "Men's Shoes", price: '₹ 9 195.00', imageUrl: 'https://i.pinimg.com/1200x/fd/7b/39/fd7b3984c6640573115f7e523fe55f32.jpg' }
];

const iconProducts = [
  { id: 1, name: 'Killshot', imageUrl: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDN8fGJyb3duJTIwc2hvZXxlbnwwfHx8fDE3MzE1NDUwMTF8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 2, name: 'Cortez', imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Air Jordan 1', imageUrl: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDZ8fG5pa2UlMjBzaG9lfGVufDB8fHx8MTczMTU0MjgwMXww&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 4, name: 'Air Force 1', imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDEyfHxuaWtlJTIwc2hvZXxlbnwwfHx8fDE3MzE1NDUwOTV8MA&lib=rb-4.0.3&q=80&w=1080' }
];

function App() {
  return (
    <div className="antialiased text-black">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedGrid />
        <ProductCarousel 
          title="Colour of the Season: Burgundy Brown" 
          products={burgundyProducts} 
        />
        <ShopBySport />
        <ProductCarousel 
          title="Shop by Icons" 
          products={iconProducts} 
          showPrice={false}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;