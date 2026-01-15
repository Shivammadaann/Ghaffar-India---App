
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Our Bestsellers',
    description: 'The crowd favorites. Premium quality tested by thousands.',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cat-2',
    name: 'Pocket Lighters',
    description: 'Iconic, refillable, and built for a lifetime.',
    image: 'https://images.unsplash.com/photo-1594913785162-e678567232f2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cat-3',
    name: 'Samsung Cases & Covers',
    description: 'Military-grade protection for your Galaxy device.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cat-4',
    name: 'Apple iPhone Cases & Covers',
    description: 'Precision fit for the ultimate iPhone experience.',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cat-5',
    name: '3D Printed Products',
    description: 'Cutting-edge innovation in every layer.',
    image: 'https://images.unsplash.com/photo-1633533400589-93b58619106a?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-1',
    name: 'Dual Color Magnetic Liquid Silicone Case for S24 Ultra',
    description: 'Premium dual-tone silicone case with MagSafe compatibility.',
    price: 999,
    originalPrice: 1999,
    category: 'Samsung',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=500',
    isNewArrival: true
  },
  {
    id: 'p-2',
    name: 'Articulated 3D Printed Dragon',
    description: 'Fully posable 3D printed dragon, a masterpiece of modern manufacturing.',
    price: 1499,
    originalPrice: 2499,
    category: '3D Printed',
    image: 'https://images.unsplash.com/photo-1633533400589-93b58619106a?auto=format&fit=crop&q=80&w=500',
    isNewArrival: true
  },
  {
    id: 'p-3',
    name: 'Premium Leather Case for iPhone 15 Pro',
    description: 'Exquisite genuine leather with soft inner lining.',
    price: 1299,
    originalPrice: 2199,
    category: 'Apple',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'p-4',
    name: 'Vintage Engraved Pocket Lighter',
    description: 'Classic refillable lighter with intricate gold engravings.',
    price: 799,
    originalPrice: 1599,
    category: 'Lighters',
    image: 'https://images.unsplash.com/photo-1594913785162-e678567232f2?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'p-5',
    name: 'Crystal Clear MagSafe Case for iPhone 16',
    description: 'Anti-yellowing technology with strong magnetic hold.',
    price: 599,
    originalPrice: 1299,
    category: 'Apple',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'p-6',
    name: 'Heavy Duty Armor Case for Z Fold 6',
    description: 'Ultimate protection for your foldable Samsung device.',
    price: 1899,
    originalPrice: 2999,
    category: 'Samsung',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=500'
  }
];
