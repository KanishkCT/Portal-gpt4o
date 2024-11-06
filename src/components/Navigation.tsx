import React from 'react';
import { Menu, X, Search, User, Calendar } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-serif font-bold text-rose-600">Aditi Dhabhai</span>
            <span className="text-sm text-gray-600 ml-2">Makeup Studio & Academy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/artists" className="text-gray-700 hover:text-rose-600 transition">Artists</a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition">Services</a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition">Academy</a>
            <button className="flex items-center space-x-1 bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition">
              <Calendar size={18} />
              <span>Book Now</span>
            </button>
            <button className="text-gray-700 hover:text-rose-600 transition">
              <User size={20} />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/artists" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Artists</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Services</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Academy</a>
            <button className="w-full mt-2 flex items-center justify-center space-x-1 bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700">
              <Calendar size={18} />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;