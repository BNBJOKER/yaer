export interface ServiceItem {
  id: string;
  name: string;
  type: 'logo' | 'icon';
  brandColor?: string; // Hex code for the brand
  textColor?: string;
  description?: string;
  iconName?: string; // For Lucide icons
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string; // Placeholder for the illustration URL
  items: ServiceItem[];
}

export interface Advantage {
  title: string;
  description: string;
  iconName: string;
}