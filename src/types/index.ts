export type MenuCategory = 'all' | 'signatures' | 'cocktails' | 'beer-cafe';

export interface MenuItem {
  id: string;
  name: string;
  category: 'signatures' | 'cocktails' | 'beer-cafe';
  description: string;
  ingredients?: string[];
  price: string;
  volume?: string;
  badge?: string;
  image: string;
  flavorNotes: string[];
}

export interface OpeningHour {
  day: string;
  hours: string;
  isOpenToday?: boolean;
}

export interface BarHighlight {
  icon: string;
  title: string;
  description: string;
  tag: string;
}
