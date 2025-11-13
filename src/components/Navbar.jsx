import React, { useState } from 'react';

const SearchIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> );
const HeartIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> );
const BagIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> );
const MenuIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> );

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" 
              alt="Nike Logo" 
              className="h-12 w-12" 
            />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-black px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 transition-colors duration-200">New & Featured</a>
            <a href="#" className="text-black px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 transition-colors duration-200">Men</a>
            <a href="#" className="text-black px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 transition-colors duration-200">Women</a>
            <a href="#" className="text-black px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 transition-colors duration-200">Kids</a>
            <a href="#" className="text-black px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 transition-colors duration-200">SNKRS</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full p-1 group focus-within:ring-2 focus-within:ring-orange-400 transition-all duration-200">
              <button className="p-2 rounded-full text-gray-600 group-focus-within:text-orange-500 transition-colors duration-200">
                <SearchIcon />
              </button>
              <input type="text" placeholder="Search" className="bg-transparent text-black placeholder-gray-500 outline-none px-2 text-sm w-36" />
            </div>
            <a href="#" className="p-2 rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-500 transition-colors duration-200 hidden md:block">
              <HeartIcon />
            </a>
            <a href="#" className="p-2 rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-500 transition-colors duration-200">
              <BagIcon />
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-500 transition-colors duration-200 md:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          <a href="#" className="text-black hover:bg-orange-100 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">New & Featured</a>
          <a href="#" className="text-black hover:bg-orange-100 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Men</a>
          <a href="#" className="text-black hover:bg-orange-100 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Women</a>
          <a href="#" className="text-black hover:bg-orange-100 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Kids</a>
          <a href="#" className="text-black hover:bg-orange-100 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">SNKRS</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;