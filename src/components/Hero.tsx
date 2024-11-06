import React from 'react';
import { Calendar, Star, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Your Perfect Look Awaits
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Book professional makeup artists for your special occasions. From weddings to photoshoots, 
            we connect you with top talent in your area.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition flex items-center space-x-2">
              <Calendar size={20} />
              <span>Book Appointment</span>
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/20 transition">
              View Artists
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Star className="text-rose-500 mb-3" size={24} />
              <h3 className="text-white text-lg font-semibold mb-2">Top-Rated Artists</h3>
              <p className="text-gray-300">Work with the best makeup artists in your area.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Calendar className="text-rose-500 mb-3" size={24} />
              <h3 className="text-white text-lg font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-300">Book appointments with just a few clicks.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="text-rose-500 mb-3" size={24} />
              <h3 className="text-white text-lg font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-300">Find times that work best for you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;