import React, { useState } from 'react';
import type { Artist } from '../../types/artist';
import ArtistCard from './ArtistCard';
import BookingModal from './BookingModal';

interface ArtistListProps {
  artists: Artist[];
}

const ArtistList: React.FC<ArtistListProps> = ({ artists }) => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const handleBook = (booking: any) => {
    // Simple booking confirmation
    alert(`Booking confirmed!\n\nArtist: ${booking.artist.name}\nService: ${booking.service.name}\nDate: ${booking.date}\nTime: ${booking.time}`);
    setSelectedArtist(null);
  };

  return (
    <div className="space-y-6">
      {artists.map((artist) => (
        <ArtistCard
          key={artist.id}
          artist={artist}
          onSelect={() => setSelectedArtist(artist)}
        />
      ))}

      {selectedArtist && (
        <BookingModal
          artist={selectedArtist}
          onClose={() => setSelectedArtist(null)}
          onBook={handleBook}
        />
      )}
    </div>
  );
};

export default ArtistList;