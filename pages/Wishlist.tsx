
import React from 'react';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface WishlistProps {
  wishlist: Product[];
  onRemove: (id: string) => void;
  onAddToCart: (p: Product) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ wishlist, onRemove, onAddToCart }) => {
  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full mb-8">
          <Heart className="text-slate-400" size={48} />
        </div>
        <h1 className="text-4xl font-black mb-4">Your wishlist is empty</h1>
        <p className="text-slate-500 font-medium mb-12 max-w-md mx-auto">Save items you love and they'll appear here for easy access later.</p>
        <Link 
          to="/products" 
          className="bg-black dark:bg-white text-white dark:text-black px-12 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:opacity-80 transition-all shadow-xl"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 animate-in fade-in duration-700">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">My Wishlist</h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">{wishlist.length} Items Saved</p>
        </div>
        <Link to="/products" className="text-xs font-black text-slate-500 bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center hover:bg-black hover:text-white transition-all">
          Continue Shopping <ArrowRight size={14} className="ml-2" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlist.map((item) => (
          <div key={item.id} className="liquid-glass dark:bg-slate-800/50 rounded-[2.5rem] overflow-hidden p-4 border border-white dark:border-slate-800 shadow-xl group hover:shadow-2xl transition-all">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <button 
                onClick={() => onRemove(item.id)}
                className="absolute top-4 right-4 p-3 bg-white/20 hover:bg-red-500 backdrop-blur-md rounded-2xl text-white transition-all shadow-lg"
              >
                <Trash2 size={20} />
              </button>
            </div>
            
            <div className="px-2 pb-2 flex flex-col h-full">
              <div className="mb-6">
                <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 block">{item.category}</span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-2">{item.name}</h3>
                <span className="text-2xl font-black text-black dark:text-white">₹{item.price}</span>
              </div>
              
              <button 
                onClick={() => { onAddToCart(item); onRemove(item.id); }}
                className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:opacity-80 active:scale-95 transition-all flex items-center justify-center space-x-3"
              >
                <ShoppingBag size={18} />
                <span>Move to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
