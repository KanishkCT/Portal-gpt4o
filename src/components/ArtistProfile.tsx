import React from 'react';
import { Instagram, Calendar, Star, Clock, MapPin } from 'lucide-react';
import type { Artist } from '../types/artist';
import SimpleCalendar from './SimpleCalendar';

interface ArtistProfileProps {
  artist: Artist;
}

const ArtistProfile: React.FC<ArtistProfileProps> = ({ artist }) => {
  // Mock Instagram grid data
  const instagramPosts = [
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2',
    'https://images.unsplash.com/photo-1526045478516-99145907023c',
    'https://images.unsplash.com/photo-1457972729786-0411a3b2b626',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796',
    'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937'
  ].map(url => `${url}?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80`);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start space-x-6">
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{artist.name}</h1>
                <div className="flex items-center mt-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-gray-600">
                    {artist.rating} ({artist.reviewCount} reviews)
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {artist.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">About</h2>
              <p className="text-gray-600">{artist.bio}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Services</h2>
              <div className="space-y-4">
                {artist.services.map((service) => (
                  <div
                    key={service.id}
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-700">
                        <Clock size={16} className="mr-1" />
                        <span className="text-sm">{service.duration} min</span>
                      </div>
                      <div className="text-lg font-semibold text-rose-600">
                        ${service.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Calendar & Booking */}
        <div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
            <SimpleCalendar availability={artist.availability} onDateSelect={(date) => console.log('Date selected:', date)} />
            <button className="w-full mt-4 bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition flex items-center justify-center">
              <Calendar size={18} className="mr-2" />
              Check Availability
            </button>
          </div>
        </div>
      </div>

      {/* Instagram Grid */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Recent Work</h2>
          <a
            href={`https://instagram.com/${artist.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-rose-600 hover:text-rose-700"
          >
            <Instagram size={20} className="mr-2" />
            @{artist.instagram}
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post, index) => (
            <div key={index} className="aspect-square">
              <img
                src={post}
                alt={`Work sample ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;