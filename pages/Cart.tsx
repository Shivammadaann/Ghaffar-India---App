
import React from 'react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, CreditCard } from 'lucide-react';
import { CartItem } from '../types';
import { Link } from 'react-router-dom';

interface CartProps {
  cart: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ cart, onUpdateQty, onRemove }) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 1500 ? 0 : 99;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full mb-6">
          <ShoppingBag className="text-slate-400" size={40} />
        </div>
        <h1 className="text-3xl font-bold mb-4 dark:text-white">Your cart is empty</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Explore our premium collection and find something you love.</p>
        <Link 
          to="/categories" 
          className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold hover:opacity-80 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-700">
      <h1 className="text-4xl font-black mb-12 dark:text-white tracking-tight">Shopping Bag</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 md:gap-6 bg-white dark:bg-slate-800 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-2xl overflow-hidden border border-slate-50 dark:border-slate-700">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-black text-sm md:text-lg mb-1 dark:text-white leading-tight">{item.name}</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="p-2 text-slate-300 hover:text-red-500 transition-all bg-slate-50 dark:bg-slate-900 rounded-xl"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex items-center bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden p-1">
                    <button 
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-10 text-center text-sm font-black dark:text-white">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="block font-black text-lg dark:text-white">₹{item.price * item.quantity}</span>
                    {item.quantity > 1 && (
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">₹{item.price} each</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="liquid-glass dark:bg-slate-800/80 p-8 rounded-[3rem] border-white/60 dark:border-slate-700 shadow-xl sticky top-24">
            <h2 className="text-2xl font-black mb-8 dark:text-white">Summary</h2>
            <div className="space-y-4 mb-10">
              <div className="flex justify-between text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                <span>Subtotal</span>
                <span className="text-sm">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                <span>Shipping</span>
                <span className="text-sm">{shipping === 0 ? <span className="text-green-500">FREE</span> : `₹${shipping}`}</span>
              </div>
              <div className="border-t border-white dark:border-slate-700 pt-6 flex justify-between items-center">
                <span className="text-lg font-black dark:text-white">Total</span>
                <span className="text-2xl font-black text-slate-900 dark:text-white">₹{subtotal + shipping}</span>
              </div>
            </div>

            <Link 
              to="/checkout"
              className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all shadow-xl mb-6"
            >
              Checkout <ArrowRight size={20} strokeWidth={3} />
            </Link>
            
            <div className="flex items-center justify-center space-x-4 text-slate-400">
              <CreditCard size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Secure Checkout</span>
            </div>

            <div className="mt-8 p-6 bg-white/40 dark:bg-slate-900/40 rounded-[2rem] border border-white/50 dark:border-slate-800">
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 text-center leading-relaxed">
                Free shipping on orders above ₹1500. <br/>100% genuine Ghaffar products guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 md:hidden" />
    </div>
  );
};

export default Cart;
