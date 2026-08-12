export interface BusinessConfig {
  brandName: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  city: string;
  state: string;
  openingHours: string;
  sundayHours: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}

export interface Program {
  id: string;
  number: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Strength' | 'Conditioning' | 'Personal Training' | 'Group';
  duration: string;
  intensity: string;
  image: string;
  features: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
  quote: string;
}

export interface Transformation {
  id: string;
  memberName: string;
  beforeImage: string;
  afterImage: string;
  period: string;
  goal: string;
  result: string;
  story: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  program: string;
  duration: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectRatio: 'square' | 'portrait' | 'wide';
}
