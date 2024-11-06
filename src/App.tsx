import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ArtistGrid from './components/ArtistGrid';
import ArtistProfile from './components/ArtistProfile';
import type { Artist } from './types/artist';

// Mock data for demonstration
const mockArtists = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    specialties: ['Bridal', 'Editorial', 'Special Effects'],
    rating: 4.9,
    reviewCount: 128,
    bio: 'Professional makeup artist with 8+ years of experience in bridal and editorial makeup.',
    instagram: 'sarahmua',
    services: [
      {
        id: 's1',
        name: 'Bridal Makeup',
        duration: 120,
        price: 250,
        description: 'Complete bridal makeup including trial session'
      },
      {
        id: 's2',
        name: 'Natural Glam',
        duration: 60,
        price: 120,
        description: 'Perfect for photoshoots and special events'
      }
    ],
    availability: [
      {
        date: '2024-03-20',
        slots: ['09:00', '11:00', '14:00', '16:00']
      },
      {
        date: '2024-03-21',
        slots: ['10:00', '13:00', '15:00']
      }
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    specialties: ['Celebrity', 'Fashion', 'Commercial'],
    rating: 4.8,
    reviewCount: 96,
    bio: 'Celebrity makeup artist specializing in fashion shows and commercial shoots.',
    instagram: 'michaelchenmua',
    services: [
      {
        id: 's3',
        name: 'Fashion Makeup',
        duration: 90,
        price: 200,
        description: 'High-fashion looks for photoshoots and runway'
      },
      {
        id: 's4',
        name: 'Commercial Makeup',
        duration: 60,
        price: 150,
        description: 'Professional makeup for commercial shoots'
      }
    ],
    availability: [
      {
        date: '2024-03-20',
        slots: ['10:00', '12:00', '15:00']
      },
      {
        date: '2024-03-21',
        slots: ['09:00', '11:00', '14:00', '16:00']
      }
    ]
  }
];

function App() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {selectedArtist ? (
        <div className="pt-16">
          <ArtistProfile artist={selectedArtist} />
        </div>
      ) : (
        <>
          <Hero />
          <ArtistGrid artists={mockArtists} onSelectArtist={setSelectedArtist} />
        </>
      )}
    </div>
  );
}

export default App;