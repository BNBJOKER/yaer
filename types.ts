export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  note?: string;
  tags?: string[];
  imageUrl: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}