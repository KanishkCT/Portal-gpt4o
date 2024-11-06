export interface Artist {
  id: string;
  name: string;
  avatar: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  bio: string;
  instagram: string;
  services: Service[];
  availability: TimeSlot[];
}

export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
}

export interface TimeSlot {
  date: string;
  slots: string[];
}