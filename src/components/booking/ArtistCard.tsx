import React from 'react';
import { Star, Instagram } from 'lucide-react';
import type { Artist } from '../../types/artist';

interface ArtistCardProps {
  artist: Artist;
  onSelect: (artist: Artist) => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
      <div className="flex items-start space-x-4">
        <img
          src={artist.avatar}
          alt={artist.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{artist.name}</h3>
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {artist.rating} ({artist.reviewCount} reviews)
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {artist.specialties.map((specialty) => (
              <span
                key={specialty}
                className="px-2 py-1 text-xs bg-rose-50 text-rose-600 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <p className="mt-4 text-gray-600 text-sm line-clamp-2">{artist.bio}</p>
      
      <div className="mt-4 flex items-center justify-between">
        <a
          href={`https://instagram.com/${artist.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-rose-600 text-sm"
        >
          <Instagram size={16} className="mr-1" />
          @{artist.instagram}
        </a>
        <button
          onClick={() => onSelect(artist)}
          className="btn-primary px-4 py-2 rounded-full text-sm"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ArtistCard;