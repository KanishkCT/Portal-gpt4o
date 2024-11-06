import React from 'react';
import { Star, Instagram } from 'lucide-react';
import type { Artist } from '../types/artist';

interface ArtistGridProps {
  artists: Artist[];
  onSelectArtist: (artist: Artist) => void;
}

const ArtistGrid: React.FC<ArtistGridProps> = ({ artists, onSelectArtist }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Artists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => onSelectArtist(artist)}
          >
            <div className="aspect-w-3 aspect-h-2">
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">{artist.name}</h2>
              <div className="flex items-center mt-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">
                  {artist.rating} ({artist.reviewCount} reviews)
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {artist.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-2 py-1 text-xs bg-rose-50 text-rose-600 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-gray-600 text-sm line-clamp-2">{artist.bio}</p>
              <div className="mt-4 flex items-center justify-between">
                <a
                  href={`https://instagram.com/${artist.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center text-gray-600 hover:text-rose-600 text-sm"
                >
                  <Instagram size={16} className="mr-1" />
                  @{artist.instagram}
                </a>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectArtist(artist);
                  }}
                  className="text-rose-600 hover:text-rose-700 text-sm font-medium"
                >
                  View Profile →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistGrid;