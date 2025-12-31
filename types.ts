import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  color: string;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  label: string;
  value: string;
  link?: string;
  type: 'telegram' | 'qq' | 'channel';
}