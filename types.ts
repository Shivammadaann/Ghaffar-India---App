
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'Apple' | 'Samsung' | 'Lighters' | '3D Printed' | 'Bestsellers';
  image: string;
  isNewArrival?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
