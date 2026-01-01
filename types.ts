import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  label: string;
  image?: string; // URL for the specific platform logo (1:1 aspect ratio)
  icon?: LucideIcon; // Fallback generic icon
  description?: string;
}

export interface ServiceSectionData {
  id: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface AdvantageItem {
  icon: LucideIcon;
  text: string;
}